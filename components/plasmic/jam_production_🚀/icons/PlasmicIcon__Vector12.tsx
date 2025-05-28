/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 55"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.16 52.535L8.188 36.563c-7.836-7.836-7.836-20.54 0-28.375v0c7.835-7.836 20.54-7.836 28.375 0v0c7.836 7.835 7.836 20.54 0 28.375l-9.339 9.339L16.13 34.806a3.865 3.865 0 010-5.466v0a3.865 3.865 0 015.466 0l2.425 2.425 5.157 5.157"
        }
        stroke={"currentColor"}
        strokeWidth={"4.49"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
