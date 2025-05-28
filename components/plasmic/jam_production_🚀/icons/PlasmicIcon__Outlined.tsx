/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OutlinedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OutlinedIcon(props: OutlinedIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.333 2.917c1.459 0 2.334 1.108 2.334 2.45 0 .7-.35 1.341-.759 1.808C10.208 7.875 7 10.5 7 10.5S3.792 7.875 3.092 7.175a2.56 2.56 0 01-.759-1.808c0-1.342.875-2.45 2.334-2.45.991 0 1.925.933 2.333 1.75.408-.817 1.342-1.75 2.333-1.75zm0-1.75c-.875 0-1.691.35-2.333.816a3.664 3.664 0 00-2.333-.816c-2.334 0-4.084 1.808-4.084 4.2 0 1.108.467 2.158 1.284 3.033C2.683 9.275 7 12.775 7 12.775s4.317-3.5 5.133-4.375c.817-.875 1.284-1.925 1.284-3.033 0-2.392-1.75-4.2-4.084-4.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OutlinedIcon;
/* prettier-ignore-end */
