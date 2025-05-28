/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhClockCountdownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhClockCountdownIcon(props: PhClockCountdownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.186 10.713A8.163 8.163 0 119.355 1.88a.63.63 0 11.104 1.255 6.908 6.908 0 107.473 7.473.63.63 0 011.254.104zm-8.78-5.069v4.39a.627.627 0 00.628.627h4.39a.627.627 0 100-1.254H10.66V5.644a.627.627 0 00-1.254 0zm3.136-1.881a.94.94 0 100-1.882.94.94 0 000 1.882zm2.822 1.881a.94.94 0 100-1.881.94.94 0 000 1.881zm1.882 2.822a.94.94 0 100-1.881.94.94 0 000 1.881z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhClockCountdownIcon;
/* prettier-ignore-end */
