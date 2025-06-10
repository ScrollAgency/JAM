/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BurgerMenuSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BurgerMenuSvgrepoComSvgIcon(
  props: BurgerMenuSvgrepoComSvgIconProps
) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"2"}
        d={"M4 18h16M4 12h16M4 6h16"}
      ></path>
    </svg>
  );
}

export default BurgerMenuSvgrepoComSvgIcon;
/* prettier-ignore-end */
