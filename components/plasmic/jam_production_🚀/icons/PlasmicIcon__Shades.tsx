/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShadesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShadesIcon(props: ShadesIconProps) {
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
          "M4.815 2.278a.792.792 0 00-.462.353l-.093.149-.01 8.87-.011 8.87H1V22h22v-1.48h-3.24v-8.738c0-6.23-.013-8.797-.044-8.944a.732.732 0 00-.527-.552c-.211-.053-14.154-.061-14.374-.008zM18.24 9.14v5.38H5.76V3.76h12.48v5.38zM11 17v1h1.48v-2h5.76v4.52H5.76V16H11v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShadesIcon;
/* prettier-ignore-end */
