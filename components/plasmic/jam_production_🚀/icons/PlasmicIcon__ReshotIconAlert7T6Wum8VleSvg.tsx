/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReshotIconAlert7T6Wum8VleSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ReshotIconAlert7T6Wum8VleSvgIcon(
  props: ReshotIconAlert7T6Wum8VleSvgIconProps
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

      <g data-name={"8.Alert"}>
        <path
          d={
            "M12 24a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10A10.011 10.011 0 0012 2z"
          }
        ></path>

        <path d={"M11 6h2v8h-2zm0 10h2v2h-2z"}></path>
      </g>
    </svg>
  );
}

export default ReshotIconAlert7T6Wum8VleSvgIcon;
/* prettier-ignore-end */
