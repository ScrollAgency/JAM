/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnifyingGlassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnifyingGlassIcon(props: MagnifyingGlassIconProps) {
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
          "M17.942 17.058l-3.912-3.911a6.884 6.884 0 10-.883.883l3.91 3.912a.624.624 0 10.885-.884zM3.125 8.75a5.625 5.625 0 115.625 5.625A5.631 5.631 0 013.125 8.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MagnifyingGlassIcon;
/* prettier-ignore-end */
