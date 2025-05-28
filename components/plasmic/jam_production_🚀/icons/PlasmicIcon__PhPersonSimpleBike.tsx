/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhPersonSimpleBikeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhPersonSimpleBikeIcon(props: PhPersonSimpleBikeIconProps) {
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
        d={
          "M15.375 7.5a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zm0-3.75a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm3.375 9a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-13.5-6a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM18 11.25h-3.75a.75.75 0 01-.53-.22l-2.47-2.47-1.94 1.94 3.22 3.22a.748.748 0 01.22.53v4.5a.75.75 0 11-1.5 0v-4.19l-3.53-3.53a.749.749 0 010-1.06l3-3a.749.749 0 011.06 0l2.78 2.78H18a.75.75 0 110 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhPersonSimpleBikeIcon;
/* prettier-ignore-end */
