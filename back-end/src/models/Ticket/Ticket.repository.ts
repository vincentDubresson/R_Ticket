import { Between, MoreThan } from "typeorm";
import TicketFixtures, {
  TicketFixturesType,
} from "../../DataFixtures/TicketFixtures";
import DateUpdates from "../../services/DateUpdates";
import EmailService from "../../services/EmailService";
import Restaurant from "../Restaurant/Restaurant.entity";
import RestaurantRepository from "../Restaurant/Restaurant.repository";
import Table from "../Table/Table.entity";
import TableRepository from "../Table/Table.repository";
import TicketDb from "./Ticket.db";
import Ticket from "./Ticket.entity";
import PageOfTickets from "../../resolvers/Ticket/PageOfTickets";

export default class TicketRepository extends TicketDb {
  static async initializeTickets(): Promise<void> {
    const restaurants =
      (await RestaurantRepository.getRestaurants()) as Restaurant[];

    for (const restaurant of restaurants) {
      const ticketsFixtures: TicketFixturesType[] =
        await TicketFixtures.getRandomTickets();
      await Promise.all(
        ticketsFixtures.map(async (ticket) => {
          const table = ticket.table
            ? ((await TableRepository.getTableByNumber(
                ticket.table,
                restaurant
              )) as Table)
            : undefined;

          const newTicket = new Ticket(
            ticket.number,
            ticket.name,
            ticket.seats,
            ticket.createdAt,
            restaurant,
            ticket.email,
            ticket.phoneNumber,
            table,
            ticket.deliveredAt,
            ticket.placedAt,
            ticket.closedAt
          );

          await this.repository.save(newTicket);
        })
      );
    }
  }

  static async getTickets(): Promise<Ticket[]> {
    return this.repository.find();
  }

  static async getTicketByNumber(number: number): Promise<Ticket | null> {
    return this.repository.findOneBy({ number: number });
  }

  static async getTicketsByRestaurant(
    restaurantId: string,
    seats: number | null
  ): Promise<Ticket[] | null> {
    const restaurant = await RestaurantRepository.getRestaurantById(
      restaurantId
    );
    if (!restaurant) throw new Error();
    let query = this.repository
      .createQueryBuilder("ticket")
      .leftJoinAndSelect("ticket.restaurant", "restaurant")
      .leftJoinAndSelect("ticket.table", "userTable")
      .where("ticket.restaurant.id = :restaurantId", {
        restaurantId: restaurantId,
      });
    if (seats as number) {
      query.andWhere("ticket.seats BETWEEN :seatsMin AND :seatsMax", {
        seatsMin: (seats as number) - 1,
        seatsMax: seats,
      });
    }
    query.orderBy("ticket.createdAt", "DESC");
    query.addOrderBy("ticket.number", "DESC");
    return await query.getMany();
  }

  static async getTicketsBySeats(
    restaurantId: string,
    seats: number
  ): Promise<Ticket[] | null> {
    const restaurant = await RestaurantRepository.getRestaurantById(
      restaurantId
    );
    if (!restaurant) throw new Error();
    return await this.repository.findBy({
      restaurant,
      seats: Between(seats - 1, seats),
      createdAt: MoreThan(DateUpdates.newDateAtMidnight()),
    });
  }

  static async getPaginatedAndSortedTicketsByRestaurant(
    restaurantId: string,
    globalFilter: string,
    pageSize: number,
    pageNumber: number,
    sort: string[],
    order: number[]
  ): Promise<PageOfTickets> {
    const restaurant = await RestaurantRepository.getRestaurantById(
      restaurantId
    );
    if (!restaurant) throw new Error();

    const countTotalTickets = await this.repository.count({
      where: { restaurant },
    });

    const query = this.repository
      .createQueryBuilder("ticket")
      .where("ticket.restaurant = :restaurantId", { restaurantId });

    globalFilter &&
      query.andWhere("ticket.name LIKE :filter", {
        filter: `%${globalFilter}%`,
      });

    sort.forEach((sortField, index) => {
      query.addOrderBy(
        `ticket.${sortField}`,
        order[index] === 1 ? "ASC" : "DESC"
      );
    });

    if (!sort.length || !order.length || sort.length !== order.length) {
      query.addOrderBy("ticket.createdAt", "DESC");
      query.addOrderBy("ticket.number", "DESC");
    }

    query.take(pageSize).skip((pageNumber - 1) * pageSize);

    const tickets = await query.getMany();

    return {
      totalCount: countTotalTickets,
      tickets,
    };
  }

  static async getTicketById(id: string): Promise<Ticket | null> {
    return this.repository.findOneBy({ id });
  }

  static async getLastTicket(restaurant: Restaurant): Promise<Ticket | null> {
    return this.repository.findOne({
      where: { restaurant: restaurant },
      order: { createdAt: "DESC" },
    });
  }

  static async createTicket(
    name: string,
    seats: number,
    restaurantId: string,
    email: string | undefined,
    phoneNumber: string | undefined
  ): Promise<Ticket> {
    if (!email && !phoneNumber) {
      throw new Error(
        "Une adresse e-mail ou un numéro de téléphone mobile est obligatoire."
      );
    }

    const restaurant = (await RestaurantRepository.getRestaurantById(
      restaurantId
    )) as Restaurant;

    if (!restaurant)
      throw new Error("Aucun restaurant ne correspond à cet ID.");

    const lastTicket = await this.getLastTicket(restaurant);
    let ticketNumber = 1;

    lastTicket && lastTicket.number < 1000
      ? (ticketNumber = lastTicket.number + 1)
      : ticketNumber;

    const createdAt = new Date();

    const newTicket = new Ticket(
      ticketNumber,
      name,
      seats,
      createdAt,
      restaurant,
      email,
      phoneNumber
    );
    await this.repository.save(newTicket);
    return newTicket;
  }

  static async updateDeliveredAt(
    id: string,
    tableId: string
  ): Promise<
    {
      id: string;
      table: Table;
    } & Ticket
  > {
    const existingTicket = await this.repository.findOneBy({ id });

    if (!existingTicket) {
      throw new Error("Aucun ticket ne correspond à cet ID.");
    }

    const table = (await TableRepository.getTableById(tableId)) as Table;

    if (!table) {
      throw new Error("Aucune table ne correspond à cet ID.");
    }

    const deliveredAt = new Date();
    const closedAt = DateUpdates.addMinutesToDate(deliveredAt, 15);

    const deliveredTicket = await this.repository.save({
      id,
      table,
      deliveredAt,
      closedAt,
    });

    if (deliveredTicket) {
      EmailService.sendDeliveredTicketEmail(existingTicket, table);
    }

    return deliveredTicket;
  }

  static async updatePlacedAt(id: string): Promise<
    {
      id: string;
    } & Ticket
  > {
    const existingTicket = await this.repository.findOneBy({ id });

    if (!existingTicket) {
      throw new Error("Aucun ticket ne correspond à cet ID.");
    }

    const placedAt = new Date();
    const closedAt = DateUpdates.addMinutesToDate(placedAt, 240);

    return this.repository.save({
      id,
      placedAt,
      closedAt,
    });
  }

  static async updateClosedAt(id: string): Promise<
    {
      id: string;
    } & Ticket
  > {
    const existingTicket = await this.repository.findOneBy({ id });

    if (!existingTicket) {
      throw new Error("Aucun ticket ne correspond à cet ID.");
    }

    const closedAt = new Date();

    return await this.repository.save({
      id,
      closedAt,
    });
  }

  static async getExportTicketsByRestaurant(
    restaurantId: string,
    dateMin: Date | null,
    dateMax: Date | null
  ): Promise<Ticket[] | null> {
    const restaurant = await RestaurantRepository.getRestaurantById(
      restaurantId
    );
    if (!restaurant) throw new Error();
    let query = this.repository
      .createQueryBuilder("ticket")
      .leftJoinAndSelect("ticket.restaurant", "restaurant")
      .leftJoinAndSelect("ticket.table", "userTable")
      .where("ticket.restaurant.id = :restaurantId", {
        restaurantId: restaurantId,
      });
    if (dateMin as Date) {
      query.andWhere("ticket.createdAt > :dateMin", {
        dateMin: dateMin,
      });
    }
    if (dateMin as Date) {
      query.andWhere("ticket.createdAt < :dateMax", {
        dateMax: dateMax,
      });
    }
    query.orderBy("ticket.createdAt", "ASC");
    query.addOrderBy("ticket.number", "ASC");
    return await query.getMany();
  }
}
