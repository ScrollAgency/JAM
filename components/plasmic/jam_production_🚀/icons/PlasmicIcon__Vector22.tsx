/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M4.875 0a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75m0 9a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25m3-4.125a.375.375 0 0 1-.375.375H4.875a.375.375 0 0 1-.375-.375V2.25a.375.375 0 1 1 .75 0V4.5H7.5a.375.375 0 0 1 .375.375"
        }
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
