/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhClockCountdown2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhClockCountdown2Icon(props: PhClockCountdown2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M10.875 6.406a4.88 4.88 0 1 1-5.28-5.281.376.376 0 1 1 .06.75 4.13 4.13 0 1 0 4.47 4.47.376.376 0 0 1 .75.06zm-5.25-3.031V6A.375.375 0 0 0 6 6.375h2.625a.375.375 0 0 0 0-.75h-2.25v-2.25a.375.375 0 1 0-.75 0M7.5 2.25a.562.562 0 1 0 0-1.125.562.562 0 0 0 0 1.125m1.688 1.125a.562.562 0 1 0 0-1.125.562.562 0 0 0 0 1.125m1.124 1.688a.562.562 0 1 0 0-1.125.562.562 0 0 0 0 1.124z"
        }
      ></path>
    </svg>
  );
}

export default PhClockCountdown2Icon;
/* prettier-ignore-end */
