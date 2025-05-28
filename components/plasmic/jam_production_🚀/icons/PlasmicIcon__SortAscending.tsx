/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SortAscendingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SortAscendingIcon(props: SortAscendingIconProps) {
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
          "M14 14a.875.875 0 01-.875.875H5.25a.875.875 0 010-1.75h7.875A.875.875 0 0114 14zM5.25 7.875h14.875a.875.875 0 100-1.75H5.25a.875.875 0 000 1.75zm6.125 12.25H5.25a.875.875 0 000 1.75h6.125a.875.875 0 100-1.75zm13.744-2.37a.876.876 0 00-1.238 0L21 20.639V12.25a.875.875 0 10-1.75 0v8.388l-2.88-2.882a.876.876 0 00-1.24 1.238l4.376 4.375a.876.876 0 001.238 0l4.375-4.375a.876.876 0 000-1.238z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SortAscendingIcon;
/* prettier-ignore-end */
