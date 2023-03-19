import { Arg, Args, Authorized, Int, Mutation, Query, Resolver } from "type-graphql";

import Restaurant from "../../models/Restaurant/Restaurant.entity";
import RestaurantRepository from "../../models/Restaurant/Restaurant.repository";
import {
  CreateRestaurantArgs,
  GetPaginateRestaurantsByPole,
  UpdateRestaurantArgs,
  UpdateRestaurantOpeningTime,
} from "./Restaurant.input";

const PAGE_SIZE = 4;

@Resolver(Restaurant)
export default class RestaurantResolver {
  @Query(() => [Restaurant])
  getRestaurants(): Promise<Restaurant[]> {
    return RestaurantRepository.getRestaurants();
  }

  @Query(() => [Restaurant])
  getPaginateRestaurantsByPole(@Args() {pole, pageNumber}: GetPaginateRestaurantsByPole): Promise<Restaurant[]> {
    return RestaurantRepository.getPaginateRestaurantsByPole(pole, PAGE_SIZE, pageNumber);
  }

  @Query(() => Restaurant)
  getRestaurantById(@Arg("id") id: string): Promise<Restaurant | null> {
    return RestaurantRepository.getRestaurantById(id);
  }

  @Authorized("ROLE_ADMIN")
  @Mutation(() => Restaurant)
  createRestaurant(
    @Args() { name, pole }: CreateRestaurantArgs
  ): Promise<Restaurant> {
    return RestaurantRepository.createRestaurant(name, pole);
  }

  @Authorized()
  @Mutation(() => Restaurant)
  updateRestaurant(
    @Args() { id, name }: UpdateRestaurantArgs
  ): Promise<Restaurant> {
    return RestaurantRepository.updateRestaurant(id, name);
  }

  @Authorized("ROLE_RESTAURANT")
  @Mutation(() => Restaurant)
  updateRestaurantOpeningTime(
    @Args()
    {
      id,
      hourOpenAt,
      minutesOpenAt,
      hourCloseAt,
      minutesCloseAt,
    }: UpdateRestaurantOpeningTime
  ): Promise<Restaurant> {
    return RestaurantRepository.updateRestaurantOpeningTime(
      id,
      hourOpenAt,
      minutesOpenAt,
      hourCloseAt,
      minutesCloseAt
    );
  }

  @Authorized("ROLE_ADMIN")
  @Mutation(() => Restaurant)
  deleteRestaurant(@Arg("id") id: string): Promise<Restaurant> {
    return RestaurantRepository.deleteRestaurant(id);
  }
}
