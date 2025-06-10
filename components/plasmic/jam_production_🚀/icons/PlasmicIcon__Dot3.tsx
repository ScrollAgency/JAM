/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Dot3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Dot3Icon(props: Dot3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"3"}
        cy={"3"}
        r={"2.467"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.067"}
      ></circle>
    </svg>
  );
}

export default Dot3Icon;
/* prettier-ignore-end */
