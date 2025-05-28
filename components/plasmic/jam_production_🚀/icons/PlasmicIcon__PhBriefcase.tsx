/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhBriefcaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhBriefcaseIcon(props: PhBriefcaseIconProps) {
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
          "M10.125 2.625H8.25V2.25a1.125 1.125 0 0 0-1.125-1.125h-2.25A1.125 1.125 0 0 0 3.75 2.25v.375H1.875a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 .75.75h8.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75M4.5 2.25a.375.375 0 0 1 .375-.375h2.25a.375.375 0 0 1 .375.375v.375h-3zm5.625 1.125v1.95a8.63 8.63 0 0 1-8.25 0v-1.95zm0 6h-8.25V6.171a9.38 9.38 0 0 0 8.25 0zM4.875 5.25a.375.375 0 0 1 .375-.375h1.5a.375.375 0 0 1 0 .75h-1.5a.375.375 0 0 1-.375-.375"
        }
      ></path>
    </svg>
  );
}

export default PhBriefcaseIcon;
/* prettier-ignore-end */
