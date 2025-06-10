/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"1.602"}
        d={
          "M0 7.92h15.698m-5.959 6.92.995-1.638a12.8 12.8 0 0 1 4.323-4.314l1.146-.692a.32.32 0 0 0-.002-.55L15.117 7a12.8 12.8 0 0 1-4.405-4.386L9.739 1"
        }
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
