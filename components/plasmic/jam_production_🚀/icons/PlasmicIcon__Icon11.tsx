/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 .5A6.5 6.5 0 1013.5 7 6.507 6.507 0 007 .5zm0 12A5.5 5.5 0 1112.5 7 5.507 5.507 0 017 12.5zM8 10a.5.5 0 01-.5.5 1 1 0 01-1-1V7a.5.5 0 010-1 1 1 0 011 1v2.5a.5.5 0 01.5.5zM6 4.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
