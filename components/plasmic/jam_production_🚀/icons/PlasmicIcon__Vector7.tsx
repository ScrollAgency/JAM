/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M45.54 13.655L34.911 24.284c-.964.965-2.612.523-2.965-.795a1.772 1.772 0 01.459-1.712l7.606-7.604h-8.789A19.486 19.486 0 0012.35 28.788a1.772 1.772 0 01-3.432-.886A23.016 23.016 0 0131.222 10.63h8.794l-7.611-7.604C31.44 2.06 31.88.414 33.199.06a1.772 1.772 0 011.712.46l10.63 10.628a1.771 1.771 0 010 2.507zM37.201 35.43H3.543V8.858c0-1.363-1.476-2.216-2.657-1.534A1.771 1.771 0 000 8.858v28.344c0 .979.793 1.772 1.771 1.772h35.43c1.364 0 2.216-1.477 1.534-2.658a1.772 1.772 0 00-1.534-.885z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
