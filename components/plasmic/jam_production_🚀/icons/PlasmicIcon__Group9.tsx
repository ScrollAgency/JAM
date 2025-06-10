/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2.63"}
        d={
          "M35.266 11.016V24.25c0 6.492-5.263 11.755-11.755 11.755S11.756 30.742 11.756 24.25s5.262-11.755 11.755-11.755h7.738v9.193a2.264 2.264 0 0 1-2.265 2.264 2.265 2.265 0 0 1-2.265-2.264v-6.283"
        }
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
