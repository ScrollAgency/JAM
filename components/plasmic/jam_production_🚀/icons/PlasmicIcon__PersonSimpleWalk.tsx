/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PersonSimpleWalkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PersonSimpleWalkIcon(props: PersonSimpleWalkIconProps) {
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
          "M11.25 4.5a3 3 0 116 0 3 3 0 01-6 0zm8.25 8.25c-2.685 0-3.92-1.247-5.227-2.566a19.32 19.32 0 00-1.03-.992c-3.47-3.013-9.021 2.131-9.256 2.351a.75.75 0 001.027 1.094 15.362 15.362 0 012.861-2.043c1.292-.692 2.38-.96 3.253-.805L6.062 21.451a.75.75 0 001.376.598l3.15-7.244 2.912 2.081v4.864a.75.75 0 101.5 0V16.5a.75.75 0 00-.314-.61l-3.488-2.491 1.26-2.899c.247.229.493.475.75.735 1.328 1.345 2.982 3.015 6.292 3.015a.75.75 0 100-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PersonSimpleWalkIcon;
/* prettier-ignore-end */
