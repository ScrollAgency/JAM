/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.75 8.75a.625.625 0 01-.625.625h-1.302a3.757 3.757 0 01-3.698 3.125H10v1.875h1.875a2.5 2.5 0 012.5 2.5.624.624 0 11-1.25 0 1.25 1.25 0 00-1.25-1.25H10v1.25a.625.625 0 11-1.25 0v-1.25H6.875a1.25 1.25 0 00-1.25 1.25.625.625 0 11-1.25 0 2.5 2.5 0 012.5-2.5H8.75V12.5H5.625a3.756 3.756 0 01-3.698-3.125H.625a.625.625 0 010-1.25H2.5a.625.625 0 01.625.625 2.5 2.5 0 002.5 2.5h7.5a2.5 2.5 0 002.5-2.5.625.625 0 01.625-.625h1.875a.625.625 0 01.625.625zm-14.07.819a1.25 1.25 0 01-.292-.996l1.071-7.5A1.256 1.256 0 016.697 0h5.356a1.256 1.256 0 011.238 1.073l1.072 7.5A1.25 1.25 0 0113.125 10h-7.5a1.25 1.25 0 01-.945-.431zm.945-.819h7.5l-1.072-7.5H6.696l-1.071 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
