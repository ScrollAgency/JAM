/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconChevronRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconChevronRightIcon(props: IconChevronRightIconProps) {
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
          "M9.707 16.95l5.707-5.707-5.707-5.707L8.293 6.95l4.293 4.293-4.293 4.293 1.414 1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconChevronRightIcon;
/* prettier-ignore-end */
