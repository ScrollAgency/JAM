/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusIcon(props: PlusIconProps) {
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
          "M16.25 2.5H3.75A1.25 1.25 0 002.5 3.75v12.5a1.25 1.25 0 001.25 1.25h12.5a1.25 1.25 0 001.25-1.25V3.75a1.25 1.25 0 00-1.25-1.25zm-1.875 8.125h-3.75v3.75a.624.624 0 11-1.25 0v-3.75h-3.75a.625.625 0 110-1.25h3.75v-3.75a.625.625 0 011.25 0v3.75h3.75a.625.625 0 110 1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlusIcon;
/* prettier-ignore-end */
