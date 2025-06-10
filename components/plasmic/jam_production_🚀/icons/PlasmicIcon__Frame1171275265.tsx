/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1171275265IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1171275265Icon(props: Frame1171275265IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 940 602"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"39.707"}
        d={
          "m485.787 559.843-141.259-141.26c-69.299-69.298-69.299-181.652 0-250.95 69.298-69.298 181.652-69.298 250.95 0 69.299 69.298 69.299 181.652 0 250.951l-82.591 82.591-98.127-98.127c-13.35-13.35-13.35-34.994 0-48.344s34.994-13.35 48.344 0l21.442 21.442 45.614 45.614"
        }
      ></path>
    </svg>
  );
}

export default Frame1171275265Icon;
/* prettier-ignore-end */
