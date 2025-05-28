/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CribIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CribIcon(props: CribIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.25 11.87l.01 6.87.87.011.87.011V20h1.48v-1.24H18V20h1.48v-1.239l1.13-.01 1.13-.011.01-6.87.01-6.87h-1.52v2.52H3.76V5H2.24l.01 6.87zm3.51 1.25v4.12h-2V9h2v4.12zm3.48 0v4.12h-2V9h2v4.12zm3.52 0v4.12h-2V9h2v4.12zm3.48 0v4.12h-2V9h2v4.12zm4 0v4.12h-2.48V9h2.48v4.12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CribIcon;
/* prettier-ignore-end */
