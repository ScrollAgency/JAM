/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhBusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhBusIcon(props: PhBusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.25 3H6.75a3 3 0 00-3 3v13.5a1.5 1.5 0 001.5 1.5H7.5A1.5 1.5 0 009 19.5V18h6v1.5a1.5 1.5 0 001.5 1.5h2.25a1.5 1.5 0 001.5-1.5V6a3 3 0 00-3-3zm-12 13.5v-5.25h13.5v5.25H5.25zm0-9h13.5v2.25H5.25V7.5zm1.5-3h10.5a1.5 1.5 0 011.5 1.5H5.25a1.5 1.5 0 011.5-1.5zm.75 15H5.25V18H7.5v1.5zm9 0V18h2.25v1.5H16.5zm-6.75-5.625a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm6.75 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM23.25 7.5v2.25a.75.75 0 11-1.5 0V7.5a.75.75 0 111.5 0zm-21 0v2.25a.75.75 0 11-1.5 0V7.5a.75.75 0 011.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhBusIcon;
/* prettier-ignore-end */
