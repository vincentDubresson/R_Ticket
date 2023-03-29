import { useState } from "react";
import "../SVGIcon.scss";

export default function SVGIconAdd({
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
      onMouseEnter={svgOnMouseOver}
      onMouseLeave={svgOnMouseLeave}
      onClick={onClick}
      disabled={isClickable ? false : true}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#ffa500"
        width={isClickable && isMouseOver ? "35" : "30"}
      >
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" />
      </svg>
    </button>
  );
}
