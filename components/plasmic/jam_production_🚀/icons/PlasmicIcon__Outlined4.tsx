/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined4Icon(props: Outlined4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.667 3.333v9.334H3.333V3.333h9.334zm2-2H1.333v13.334h13.334V1.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined4Icon;
/* prettier-ignore-end */
