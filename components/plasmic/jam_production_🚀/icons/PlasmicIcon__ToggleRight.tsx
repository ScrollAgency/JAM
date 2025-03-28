/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToggleRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToggleRightIcon(props: ToggleRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 7H10a9 9 0 100 18h12a9 9 0 000-18zm0 14a5 5 0 110-10 5 5 0 010 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ToggleRightIcon;
/* prettier-ignore-end */
