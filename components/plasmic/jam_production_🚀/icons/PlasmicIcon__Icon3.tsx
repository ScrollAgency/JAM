/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 18 16"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.75 4.84a4.502 4.502 0 01-1.328 3.203l-6.977 7.08a.624.624 0 01-.89 0l-6.977-7.08a4.533 4.533 0 116.406-6.414L9 2.579l1.023-.953A4.531 4.531 0 0117.75 4.84z"
        }
        fill={"#666"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
