/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.5 8a.624.624 0 01-.875-.126 4.03 4.03 0 00-3.25-1.625.625.625 0 010-1.25 1.875 1.875 0 10-1.815-2.343.625.625 0 11-1.211-.313 3.125 3.125 0 115.136 3.087c.85.368 1.588.952 2.143 1.694a.625.625 0 01-.128.875zm-4.21 4.812a.626.626 0 11-1.08.625 4.453 4.453 0 00-7.67 0 .625.625 0 11-1.08-.625 5.63 5.63 0 012.636-2.338 3.75 3.75 0 114.559 0 5.63 5.63 0 012.636 2.338zM9.376 9.999a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 5.624A.625.625 0 004.375 5a1.875 1.875 0 111.816-2.343.625.625 0 101.21-.313A3.125 3.125 0 102.267 5.43a5.308 5.308 0 00-2.14 1.694.625.625 0 001 .75 4.031 4.031 0 013.25-1.625A.625.625 0 005 5.624z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
