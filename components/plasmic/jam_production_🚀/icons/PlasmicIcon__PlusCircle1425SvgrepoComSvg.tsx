/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusCircle1425SvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PlusCircle1425SvgrepoComSvgIcon(
  props: PlusCircle1425SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 21 21"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.55 9h3.15v2h-3.15v3h-2.1v-3H6.3V9h3.15V6h2.1v3zm-1.05 9c-4.632 0-8.4-3.589-8.4-8s3.768-8 8.4-8c4.632 0 8.4 3.589 8.4 8s-3.768 8-8.4 8zm0-18C4.7 0 0 4.477 0 10s4.7 10 10.5 10S21 15.523 21 10 16.3 0 10.5 0z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PlusCircle1425SvgrepoComSvgIcon;
/* prettier-ignore-end */
