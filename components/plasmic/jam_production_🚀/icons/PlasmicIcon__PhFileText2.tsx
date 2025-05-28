/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhFileText2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhFileText2Icon(props: PhFileText2IconProps) {
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
        fill={"currentColor"}
        d={
          "M10.015 3.86 7.39 1.235a.38.38 0 0 0-.265-.11h-4.5a.75.75 0 0 0-.75.75v8.25a.75.75 0 0 0 .75.75h6.75a.75.75 0 0 0 .75-.75v-6a.38.38 0 0 0-.11-.265M7.5 2.405 8.845 3.75H7.5zm1.875 7.72h-6.75v-8.25H6.75v2.25a.375.375 0 0 0 .375.375h2.25zm-1.5-3.75a.375.375 0 0 1-.375.375h-3a.375.375 0 1 1 0-.75h3a.375.375 0 0 1 .375.375m0 1.5a.375.375 0 0 1-.375.375h-3a.375.375 0 1 1 0-.75h3a.375.375 0 0 1 .375.375"
        }
      ></path>
    </svg>
  );
}

export default PhFileText2Icon;
/* prettier-ignore-end */
