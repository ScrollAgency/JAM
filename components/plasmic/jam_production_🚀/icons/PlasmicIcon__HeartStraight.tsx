/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartStraightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartStraightIcon(props: HeartStraightIconProps) {
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
        d={
          "M18.75 7.656a4.504 4.504 0 01-1.328 3.203l-6.977 7.08a.625.625 0 01-.89 0l-6.977-7.08a4.533 4.533 0 016.406-6.414l1.016.95 1.023-.953a4.531 4.531 0 017.727 3.214z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartStraightIcon;
/* prettier-ignore-end */
