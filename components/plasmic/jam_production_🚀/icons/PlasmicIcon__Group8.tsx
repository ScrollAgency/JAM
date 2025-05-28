/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.802 9.934v11.934c0 5.855-4.746 10.6-10.601 10.6v0c-5.854 0-10.6-4.745-10.6-10.6v0c0-5.854 4.745-10.6 10.6-10.6h6.978v8.29a2.042 2.042 0 01-2.042 2.042v0a2.042 2.042 0 01-2.043-2.042v-5.665"
        }
        stroke={"currentColor"}
        strokeWidth={"2.372"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
