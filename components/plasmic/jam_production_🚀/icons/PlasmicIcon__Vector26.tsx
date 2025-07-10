/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
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
          "M1.7 17 0 15.3l6.8-6.8L0 1.7 1.7 0l6.8 6.8L15.3 0 17 1.7l-6.8 6.8 6.8 6.8-1.7 1.7-6.8-6.8z"
        }
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
