/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.667"}
        d={
          "M14.333 16v-1.667A3.333 3.333 0 0 0 11 11H4.333A3.333 3.333 0 0 0 1 14.333V16M11 4.333a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0"
        }
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
