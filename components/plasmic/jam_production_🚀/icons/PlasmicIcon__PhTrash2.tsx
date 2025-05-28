/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhTrash2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhTrash2Icon(props: PhTrash2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.563 4.125h-3.438v-.688a2.062 2.062 0 00-2.063-2.062H8.939a2.063 2.063 0 00-2.063 2.063v.687H3.437a.688.688 0 100 1.375h.688v12.375A1.375 1.375 0 005.5 19.25h11a1.375 1.375 0 001.375-1.375V5.5h.688a.687.687 0 000-1.375zM8.25 3.437a.688.688 0 01.688-.687h4.124a.687.687 0 01.688.688v.687h-5.5v-.688zm8.25 14.438h-11V5.5h11v12.375zM9.625 8.937v5.5a.687.687 0 01-1.375 0v-5.5a.688.688 0 111.375 0zm4.125 0v5.5a.687.687 0 11-1.375 0v-5.5a.687.687 0 111.375 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhTrash2Icon;
/* prettier-ignore-end */
