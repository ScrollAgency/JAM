/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRight2Icon(props: ArrowRight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.67"}
        d={"M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"}
      ></path>
    </svg>
  );
}

export default ArrowRight2Icon;
/* prettier-ignore-end */
