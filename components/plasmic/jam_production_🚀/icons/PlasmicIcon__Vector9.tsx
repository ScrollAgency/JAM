/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 2.5h-3.125v-.625A1.875 1.875 0 0010 0H6.25a1.875 1.875 0 00-1.875 1.875V2.5H1.25A1.25 1.25 0 000 3.75v10A1.25 1.25 0 001.25 15H15a1.25 1.25 0 001.25-1.25v-10A1.25 1.25 0 0015 2.5zm-9.375-.625a.625.625 0 01.625-.625H10a.625.625 0 01.625.625V2.5h-5v-.625zM15 3.75V7A14.383 14.383 0 011.25 7V3.75H15zm0 10H1.25V8.41A15.641 15.641 0 0015 8.408v5.341zM6.25 6.875a.625.625 0 01.625-.625h2.5a.625.625 0 010 1.25h-2.5a.625.625 0 01-.625-.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
