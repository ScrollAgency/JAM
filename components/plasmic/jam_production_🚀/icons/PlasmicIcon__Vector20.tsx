/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.125 2.25a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zm0 3a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm0-5.25A4.13 4.13 0 000 4.125c0 1.472.68 3.032 1.969 4.512.579.668 1.23 1.27 1.943 1.795a.375.375 0 00.43 0 11.914 11.914 0 001.94-1.795c1.286-1.48 1.968-3.04 1.968-4.512A4.13 4.13 0 004.125 0zm0 9.656C3.35 9.046.75 6.81.75 4.125a3.375 3.375 0 016.75 0c0 2.683-2.6 4.922-3.375 5.531z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
