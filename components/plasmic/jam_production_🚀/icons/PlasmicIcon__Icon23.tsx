/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
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
        "iconify icon:uil:water w-7 h-7"
      )}
      data-icon={"uil:water"}
      transform={"rotate(360)"}
      height={"1em"}
      width={"1em"}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.72 7.65a2.56 2.56 0 01.56.24 4 4 0 004.1 0 2.6 2.6 0 012.56 0 4.15 4.15 0 004.12 0 2.6 2.6 0 012.56 0 4.25 4.25 0 002.08.56 3.88 3.88 0 002-.56 2.56 2.56 0 01.56-.24 1 1 0 00-.56-1.92 4.45 4.45 0 00-1 .45 2.08 2.08 0 01-2.1 0 4.64 4.64 0 00-4.54 0 2.11 2.11 0 01-2.12 0 4.64 4.64 0 00-4.54 0 2.08 2.08 0 01-2.1 0 4.45 4.45 0 00-1-.45 1 1 0 10-.56 1.92zm18 8.08a4.45 4.45 0 00-1 .45 2.08 2.08 0 01-2.1 0 4.64 4.64 0 00-4.54 0 2.11 2.11 0 01-2.12 0 4.64 4.64 0 00-4.54 0 2.08 2.08 0 01-2.1 0 4.45 4.45 0 00-1-.45 1 1 0 10-.56 1.92 2.56 2.56 0 01.56.24 4 4 0 004.1 0 2.6 2.6 0 012.56 0 4.15 4.15 0 004.12 0 2.6 2.6 0 012.56 0 4.25 4.25 0 002.08.56 3.88 3.88 0 002-.56 2.56 2.56 0 01.56-.24 1 1 0 00-.56-1.92zm0-5a4.45 4.45 0 00-1 .45 2.08 2.08 0 01-2.1 0 4.64 4.64 0 00-4.54 0 2.11 2.11 0 01-2.12 0 4.64 4.64 0 00-4.54 0 2.08 2.08 0 01-2.1 0 4.45 4.45 0 00-1-.45 1 1 0 00-1.32.68 1 1 0 00.68 1.24 2.56 2.56 0 01.56.24 4 4 0 004.1 0 2.6 2.6 0 012.56 0 4.15 4.15 0 004.12 0 2.6 2.6 0 012.56 0 4.25 4.25 0 002.08.56 3.88 3.88 0 002-.56 2.56 2.56 0 01.56-.24 1 1 0 00-.56-1.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
