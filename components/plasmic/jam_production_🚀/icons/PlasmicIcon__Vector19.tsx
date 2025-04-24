/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.067 6.067L9.01 8.125l2.058 2.058a.624.624 0 11-.884.884L8.125 9.01l-2.058 2.058a.624.624 0 11-.884-.884L7.24 8.125 5.183 6.067a.625.625 0 01.884-.884L8.125 7.24l2.058-2.058a.626.626 0 01.884.884zm5.183 2.058A8.125 8.125 0 118.125 0a8.133 8.133 0 018.125 8.125zm-1.25 0A6.875 6.875 0 108.125 15 6.883 6.883 0 0015 8.125z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
