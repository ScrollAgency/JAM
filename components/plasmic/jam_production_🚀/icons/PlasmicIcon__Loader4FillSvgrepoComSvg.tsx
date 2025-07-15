/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Loader4FillSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Loader4FillSvgrepoComSvgIcon(
  props: Loader4FillSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={"M18.364 5.636 16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364"}
      ></path>
    </svg>
  );
}

export default Loader4FillSvgrepoComSvgIcon;
/* prettier-ignore-end */
