/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IronIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IronIcon(props: IronIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.698 6.291c-.011.029-.015.366-.009.75l.011.699 3.8.02 3.8.02.192.089c.262.123.607.459.725.708.081.171.222.789.223.973 0 .039-.413.05-1.931.05-2.033 0-2.447.025-3.335.202a10.68 10.68 0 00-4.446 2.066 10.558 10.558 0 00-3.277 4.472c-.212.548-.223.602-.169.829a.727.727 0 00.564.55c.158.034 1.963.043 6.934.033l6.72-.012.24-.091c.525-.198.966-.643 1.14-1.15.159-.462.155-.512-.235-2.839-.2-1.188-.407-2.439-.461-2.78-.195-1.227-.421-2.463-.481-2.632a2.842 2.842 0 00-.702-1.092c-.521-.526-1.063-.796-1.753-.875-.206-.024-1.813-.04-3.939-.041-2.889 0-3.595.01-3.611.051zm9.39 7.089c.213 1.254.389 2.366.39 2.472.002.152-.018.212-.096.29l-.098.098H6.124l.055-.132a9.045 9.045 0 016.421-4.869c.693-.132 1.052-.149 3.12-.144l1.98.005.388 2.28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IronIcon;
/* prettier-ignore-end */
