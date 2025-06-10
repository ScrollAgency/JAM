/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftSvgrepoCom1SvgIcon(
  props: ArrowLeftSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"24x24/On Light/Arrow-Left"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
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
        d={
          "M14.53 7.53a.75.75 0 00-1.06-1.06l-5 5a.75.75 0 000 1.061l5 5a.75.75 0 001.06-1.061L10.06 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowLeftSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
