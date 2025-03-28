/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.567 4.558L9.192.183A.625.625 0 008.75 0h-7.5A1.25 1.25 0 000 1.25V15a1.25 1.25 0 001.25 1.25H12.5A1.25 1.25 0 0013.75 15V5a.624.624 0 00-.183-.442zM9.375 2.134l2.241 2.241H9.375V2.134zM12.5 15H1.25V1.25h6.875V5a.625.625 0 00.625.625h3.75V15zM10 8.75a.625.625 0 01-.625.625h-5a.625.625 0 010-1.25h5A.625.625 0 0110 8.75zm0 2.5a.625.625 0 01-.625.625h-5a.625.625 0 110-1.25h5a.625.625 0 01.625.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
