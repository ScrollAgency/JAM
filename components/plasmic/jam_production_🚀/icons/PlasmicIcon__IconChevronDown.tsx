/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconChevronDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconChevronDownIcon(props: IconChevronDownIconProps) {
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
          "M16.293 8.05L12 12.343 7.707 8.05 6.293 9.464 12 15.171l5.707-5.707-1.414-1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconChevronDownIcon;
/* prettier-ignore-end */
