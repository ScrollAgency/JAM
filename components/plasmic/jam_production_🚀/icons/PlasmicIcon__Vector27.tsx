/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M14.375 2.5H11.25v-.625A1.875 1.875 0 0 0 9.375 0h-3.75A1.875 1.875 0 0 0 3.75 1.875V2.5H.625a.625.625 0 0 0 0 1.25h.625V15a1.25 1.25 0 0 0 1.25 1.25h10A1.25 1.25 0 0 0 13.75 15V3.75h.625a.625.625 0 1 0 0-1.25M5 1.875a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 .625.625V2.5H5zM12.5 15h-10V3.75h10zM6.25 6.875v5a.625.625 0 1 1-1.25 0v-5a.625.625 0 0 1 1.25 0m3.75 0v5a.625.625 0 1 1-1.25 0v-5a.625.625 0 0 1 1.25 0"
        }
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
