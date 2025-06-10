/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _2561381SearchIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _2561381SearchIconSvgIcon(
  props: _2561381SearchIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"10.5"} cy={"10.5"} r={"7.5"}></circle>

      <path d={"M21 21l-5.2-5.2"}></path>
    </svg>
  );
}

export default _2561381SearchIconSvgIcon;
/* prettier-ignore-end */
