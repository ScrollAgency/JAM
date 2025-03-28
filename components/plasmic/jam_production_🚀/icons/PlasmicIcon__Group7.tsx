/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
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
        d={
          "M0 7.92h15.698m-5.959 6.92l.995-1.638a12.815 12.815 0 014.323-4.314l1.146-.692a.32.32 0 00-.002-.55L15.117 7a12.815 12.815 0 01-4.405-4.386L9.739 1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.602"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
