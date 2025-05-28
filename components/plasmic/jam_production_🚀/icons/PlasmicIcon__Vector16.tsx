/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.239 8.804A8.135 8.135 0 117.437.002a.627.627 0 11.103 1.25 6.884 6.884 0 107.449 7.449.628.628 0 011.25.103zm-8.75-5.052v4.375a.625.625 0 00.625.625h4.375a.625.625 0 100-1.25h-3.75v-3.75a.625.625 0 00-1.25 0zm3.125-1.875a.938.938 0 100-1.876.938.938 0 000 1.876zm2.812 1.875a.938.938 0 100-1.876.938.938 0 000 1.876zm1.875 2.813a.938.938 0 100-1.876.938.938 0 000 1.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
