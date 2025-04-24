/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 12.144v6a1.5 1.5 0 01-1.5 1.5h-18a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h3.75a.75.75 0 110 1.5H1.5v6h18v-6h-3.75a.75.75 0 010-1.5h3.75a1.5 1.5 0 011.5 1.5zm-11.03-.22a.75.75 0 001.06 0l4.5-4.5a.75.75 0 10-1.06-1.061l-3.22 3.22v-7.94a.75.75 0 10-1.5 0v7.94l-3.22-3.22a.75.75 0 00-1.06 1.061l4.5 4.5zm7.28 3.22a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
