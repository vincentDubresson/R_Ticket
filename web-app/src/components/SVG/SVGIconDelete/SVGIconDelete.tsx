import { useState } from "react";
import "../SVGIcon.scss";

export default function SVGIconDelete({
  onClick,
  isClickable,
}: {
  onClick: () => void;
  isClickable: boolean;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const svgOnMouseOver = () => {
    setIsMouseOver(true);
  };

  const svgOnMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <button
      className="SvgTabButton"
      onMouseOver={svgOnMouseOver}
      onMouseLeave={svgOnMouseLeave}
      onClick={onClick}
      disabled={isClickable ? false : true}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#be0000"
        width={isClickable && isMouseOver ? "30" : "25"}
      >
        <path d="M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z" />
      </svg>
    </button>
  );
}
