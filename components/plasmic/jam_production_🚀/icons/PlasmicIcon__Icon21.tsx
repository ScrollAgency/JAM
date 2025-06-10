/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      aria-hidden={"true"}
      focusable={"false"}
      style={{
        verticalAlign: "-.125em",
        msTransform: "rotate(360deg)",
        webkitTransform: 'rotate(360deg)"',

        ...(style || {}),
      }}
      preserveAspectRatio={"xMidYMid meet"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify icon:uil:exchange w-7 h-7"
      )}
      data-icon={"uil:exchange"}
      transform={"rotate(360)"}
      height={"1em"}
      width={"1em"}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 10a1 1 0 00-1-1H5.41l2.3-2.29a1 1 0 00-1.42-1.42l-4 4a1 1 0 00-.21 1.09A1 1 0 003 11h14a1 1 0 001-1zm3.92 3.62A1 1 0 0021 13H7a1 1 0 000 2h11.59l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-1.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
