/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhBus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhBus2Icon(props: PhBus2IconProps) {
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
          "M8.625 1.5h-5.25a1.5 1.5 0 00-1.5 1.5v6.75a.75.75 0 00.75.75H3.75a.75.75 0 00.75-.75V9h3v.75a.75.75 0 00.75.75h1.125a.75.75 0 00.75-.75V3a1.5 1.5 0 00-1.5-1.5zm-6 6.75V5.625h6.75V8.25h-6.75zm0-4.5h6.75v1.125h-6.75V3.75zm.75-1.5h5.25a.75.75 0 01.75.75h-6.75a.75.75 0 01.75-.75zm.375 7.5H2.625V9H3.75v.75zm4.5 0V9h1.125v.75H8.25zM4.875 6.937a.562.562 0 11-1.125 0 .562.562 0 011.125 0zm3.375 0a.562.562 0 11-1.125 0 .562.562 0 011.125 0zm3.375-3.187v1.125a.375.375 0 11-.75 0V3.75a.375.375 0 11.75 0zm-10.5 0v1.125a.375.375 0 11-.75 0V3.75a.375.375 0 11.75 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhBus2Icon;
/* prettier-ignore-end */
