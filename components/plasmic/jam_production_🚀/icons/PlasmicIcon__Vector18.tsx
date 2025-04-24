/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 3.061a.875.875 0 01.875-.875H4.94a3.062 3.062 0 015.87 0h9.315a.875.875 0 110 1.75h-9.316a3.062 3.062 0 01-5.869 0H.875A.875.875 0 010 3.061zm20.125 9.626h-2.316a3.062 3.062 0 00-5.869 0H.876a.875.875 0 000 1.75h11.066a3.062 3.062 0 005.868 0h2.316a.875.875 0 100-1.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
