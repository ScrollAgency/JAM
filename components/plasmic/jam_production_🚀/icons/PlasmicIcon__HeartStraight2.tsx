/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartStraight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartStraight2Icon(props: HeartStraight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.5 9.188a5.402 5.402 0 01-1.594 3.843l-8.372 8.496a.751.751 0 01-1.068 0L3.094 13.03a5.439 5.439 0 117.687-7.697L12 6.474l1.227-1.143A5.438 5.438 0 0122.5 9.187z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartStraight2Icon;
/* prettier-ignore-end */
