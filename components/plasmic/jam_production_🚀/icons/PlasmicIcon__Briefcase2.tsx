/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Briefcase2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Briefcase2Icon(props: Briefcase2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.5 3.5H11V3a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 005 3v.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h11a1 1 0 001-1v-8a1 1 0 00-1-1zM6 3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v.5H6V3zm7.5 1.5v2.6a11.504 11.504 0 01-11 0V4.5h11zm0 8h-11V8.227a12.512 12.512 0 0011 0V12.5zM6.5 7a.5.5 0 01.5-.5h2a.5.5 0 110 1H7a.5.5 0 01-.5-.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Briefcase2Icon;
/* prettier-ignore-end */
