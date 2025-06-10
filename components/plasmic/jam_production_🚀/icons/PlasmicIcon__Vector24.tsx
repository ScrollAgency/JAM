/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
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
        fill={"currentColor"}
        d={
          "M14.412 5.646a.941.941 0 1 1 1.883 0 .941.941 0 0 1-1.883 0m-.94-1.881a.94.94 0 1 0 0-1.882.94.94 0 0 0 0 1.882m2.247 4.39a.627.627 0 0 0-.677.573 6.908 6.908 0 1 1-7.476-7.472.63.63 0 0 0-.104-1.254 8.162 8.162 0 1 0 8.832 8.832.625.625 0 0 0-.575-.68zM8.14 2.51a5.644 5.644 0 1 1-5.644 5.644A5.65 5.65 0 0 1 8.141 2.51zm-.627 5.644a.627.627 0 0 0 .627.627h3.763a.627.627 0 1 0 0-1.254H8.768V4.392a.627.627 0 0 0-1.254 0v3.763zm3.136-6.272a.94.94 0 1 0 0-1.88.94.94 0 0 0 0 1.88"
        }
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
