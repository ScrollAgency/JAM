/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCalendarDots2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCalendarDots2Icon(props: PhCalendarDots2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26 4h-3V3a1 1 0 00-2 0v1H11V3a1 1 0 00-2 0v1H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zM9 6v1a1 1 0 002 0V6h10v1a1 1 0 002 0V6h3v4H6V6h3zm17 20H6V12h20v14zm-8.5-9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCalendarDots2Icon;
/* prettier-ignore-end */
