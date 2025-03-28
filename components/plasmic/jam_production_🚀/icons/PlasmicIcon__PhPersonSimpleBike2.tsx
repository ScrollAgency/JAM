/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhPersonSimpleBike2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhPersonSimpleBike2Icon(props: PhPersonSimpleBike2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.688 3.75a1.313 1.313 0 100-2.625 1.313 1.313 0 000 2.625zm0-1.875a.562.562 0 110 1.125.562.562 0 010-1.125zm1.687 4.5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zm0 3a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm-6.75-3a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zm0 3a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM9 5.625H7.125a.375.375 0 01-.265-.11L5.625 4.28l-.97.97 1.61 1.61a.375.375 0 01.11.265v2.25a.375.375 0 01-.75 0V7.28L3.86 5.515a.375.375 0 010-.53l1.5-1.5a.375.375 0 01.53 0l1.39 1.39H9a.375.375 0 010 .75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhPersonSimpleBike2Icon;
/* prettier-ignore-end */
