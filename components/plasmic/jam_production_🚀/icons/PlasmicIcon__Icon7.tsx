/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 18 17"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.942 15.242L13.03 11.33a6.883 6.883 0 10-.883.883l3.91 3.912a.626.626 0 00.885-.884zM2.125 6.934a5.625 5.625 0 115.625 5.625 5.631 5.631 0 01-5.625-5.625z"
        }
        fill={"#666"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
