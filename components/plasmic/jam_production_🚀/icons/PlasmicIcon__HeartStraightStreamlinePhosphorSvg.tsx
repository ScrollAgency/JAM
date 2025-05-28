/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartStraightStreamlinePhosphorSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HeartStraightStreamlinePhosphorSvgIcon(
  props: HeartStraightStreamlinePhosphorSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.956 3.556a5.472 5.472 0 00-7.72-.009l-1.233 1.145L9.77 3.543C6.79.573 1.712 1.941.629 6.006a5.466 5.466 0 001.422 5.278l8.42 8.543c.295.3.779.3 1.074 0l8.41-8.543a5.466 5.466 0 000-7.728zm-1.07 6.669l-7.883 7.995-7.887-8.003C.96 8.063 1.947 4.384 4.89 3.595a3.958 3.958 0 013.823 1.024l.02.02 1.757 1.634c.29.27.737.27 1.027 0l1.757-1.635.02-.019c2.155-2.153 5.834-1.164 6.62 1.78a3.958 3.958 0 01-1.027 3.822v.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartStraightStreamlinePhosphorSvgIcon;
/* prettier-ignore-end */
