/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockCountdownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockCountdownIcon(props: ClockCountdownIconProps) {
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
        d={
          "M19.5 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm-1.125-2.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM21.062 12a.75.75 0 00-.81.685 8.261 8.261 0 11-8.94-8.935.753.753 0 10-.124-1.5A9.761 9.761 0 1021.75 12.812a.749.749 0 00-.688-.812zM12 5.25A6.75 6.75 0 115.25 12 6.758 6.758 0 0112 5.25zM11.25 12a.75.75 0 00.75.75h4.5a.75.75 0 100-1.5h-3.75V7.5a.75.75 0 10-1.5 0V12zM15 4.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockCountdownIcon;
/* prettier-ignore-end */
