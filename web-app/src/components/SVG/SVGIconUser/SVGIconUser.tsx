import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DASHBOARD_USER } from "../../../pages/paths";
import {
  MAX_ICON_PARAMS_TYPE,
  MIN_ICON_PARAMS_TYPE,
} from "../../../constants/Constants";
import "../SVGIcon.scss";

export default function SVGIconUser({
  iconMaxParams,
  iconMinParams,
}: {
  iconMaxParams: MAX_ICON_PARAMS_TYPE;
  iconMinParams: MIN_ICON_PARAMS_TYPE;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const svgOnMouseOver = () => {
    setIsMouseOver(true);
  };

  const svgOnMouseLeave = () => {
    setIsMouseOver(false);
  };

  const goTo = () => {
    navigate(DASHBOARD_USER);
  };

  return (
    <button
      className="SvgButton"
      onMouseOver={svgOnMouseOver}
      onMouseLeave={svgOnMouseLeave}
      onClick={goTo}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={
          isMouseOver || location === DASHBOARD_USER
            ? iconMaxParams.width
            : iconMinParams.width
        }
        viewBox="0 0 512 512"
        className="SvgIcon"
        fill={
          isMouseOver || location === DASHBOARD_USER
            ? iconMaxParams.fill
            : iconMinParams.fill
        }
      >
        <path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z" />{" "}
      </svg>
    </button>
  );
}
