/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
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
          "M8.125 0a8.125 8.125 0 108.125 8.125A8.133 8.133 0 008.125 0zm0 15A6.875 6.875 0 1115 8.125 6.883 6.883 0 018.125 15zm5-6.875a.625.625 0 01-.625.625H8.125a.625.625 0 01-.625-.625V3.75a.625.625 0 011.25 0V7.5h3.75a.625.625 0 01.625.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
