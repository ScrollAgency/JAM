/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCheckBoldIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCheckBoldIcon(props: PhCheckBoldIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.014 4.506 5.849 11.67a.67.67 0 0 1-.952 0L1.763 8.536a.673.673 0 0 1 .951-.952l2.66 2.66 6.69-6.689a.673.673 0 1 1 .951.952z"
        }
      ></path>
    </svg>
  );
}

export default PhCheckBoldIcon;
/* prettier-ignore-end */
