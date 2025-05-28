/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ImageUserProfileIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ImageUserProfileIcon(props: ImageUserProfileIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 134 134"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"67"}
        cy={"67"}
        r={"66"}
        fill={"currentColor"}
        stroke={"currentColor"}
      ></circle>
    </svg>
  );
}

export default ImageUserProfileIcon;
/* prettier-ignore-end */
