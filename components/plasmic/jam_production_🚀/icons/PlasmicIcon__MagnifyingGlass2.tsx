/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnifyingGlass2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnifyingGlass2Icon(props: MagnifyingGlass2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.12 23.88l-5.477-5.474a9.637 9.637 0 10-1.237 1.237l5.475 5.476a.875.875 0 001.238-1.238zM4.374 12.25a7.875 7.875 0 117.875 7.875 7.883 7.883 0 01-7.875-7.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MagnifyingGlass2Icon;
/* prettier-ignore-end */
