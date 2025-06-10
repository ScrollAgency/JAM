/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AngleRightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AngleRightSvgIcon(props: AngleRightSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 80.593 122.88"}
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

      <path
        d={"M0 0h30.82l49.773 61.44-49.773 61.44H0l49.772-61.44L0 0z"}
      ></path>
    </svg>
  );
}

export default AngleRightSvgIcon;
/* prettier-ignore-end */
