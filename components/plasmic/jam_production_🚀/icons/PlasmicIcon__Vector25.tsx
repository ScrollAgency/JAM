/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m13.583 9.18-8.75 9.375a.625.625 0 0 1-1.07-.547l1.145-5.73-4.502-1.69a.626.626 0 0 1-.234-1.015L8.922.198a.625.625 0 0 1 1.07.547L8.841 6.48l4.503 1.688a.625.625 0 0 1 .234 1.012h.004z"
        }
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
