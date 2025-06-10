/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24Icon(props: Icon24IconProps) {
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
        "iconify icon:uil:thumbs-up w-7 h-7"
      )}
      data-icon={"uil:thumbs-up"}
      transform={"rotate(360)"}
      height={"1em"}
      width={"1em"}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.3 10.08A3 3 0 0019 9h-4.56L15 7.57A4.13 4.13 0 0011.11 2a1 1 0 00-.91.59L7.35 9H5a3 3 0 00-3 3v7a3 3 0 003 3h12.73a3 3 0 002.95-2.46l1.27-7a3 3 0 00-.65-2.46zM7 20H5a1 1 0 01-1-1v-7a1 1 0 011-1h2zm13-7.82l-1.27 7a1 1 0 01-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 011.38 2.78l-.53 1.43a2 2 0 001.87 2.7H19a1 1 0 01.77.36 1 1 0 01.23.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
