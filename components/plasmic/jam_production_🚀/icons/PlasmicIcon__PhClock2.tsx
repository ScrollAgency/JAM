/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhClock2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhClock2Icon(props: PhClock2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6 1.125a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75m0 9a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25M9 6a.375.375 0 0 1-.375.375H6A.375.375 0 0 1 5.625 6V3.375a.375.375 0 1 1 .75 0v2.25h2.25A.375.375 0 0 1 9 6"
        }
      ></path>
    </svg>
  );
}

export default PhClock2Icon;
/* prettier-ignore-end */
