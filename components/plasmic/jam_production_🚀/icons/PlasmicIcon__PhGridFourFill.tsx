/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhGridFourFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhGridFourFillIcon(props: PhGridFourFillIconProps) {
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
          "M20.25 5.25v5.625a.375.375 0 01-.375.375H12.75V4.125a.375.375 0 01.375-.375h5.625a1.5 1.5 0 011.5 1.5zm-9.375-1.5H5.25a1.5 1.5 0 00-1.5 1.5v5.625a.375.375 0 00.375.375h7.125V4.125a.375.375 0 00-.375-.375zm9 9H12.75v7.125a.375.375 0 00.375.375h5.625a1.5 1.5 0 001.5-1.5v-5.625a.375.375 0 00-.375-.375zm-16.125.375v5.625a1.5 1.5 0 001.5 1.5h5.625a.375.375 0 00.375-.375V12.75H4.125a.375.375 0 00-.375.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhGridFourFillIcon;
/* prettier-ignore-end */
