/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhClockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhClockIcon(props: PhClockIconProps) {
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
          "M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zM18 12a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V6.75a.75.75 0 111.5 0v4.5h4.5A.75.75 0 0118 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhClockIcon;
/* prettier-ignore-end */
