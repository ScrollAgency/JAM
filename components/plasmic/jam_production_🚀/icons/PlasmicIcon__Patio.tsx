/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PatioIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PatioIcon(props: PatioIconProps) {
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
          "M3.268 4.266c-.016.015-.028.465-.028.999v.973l-.49.011-.49.011v1.48l.49.011.49.011v8.476l-.49.011-.49.011v1.48l.489.011.49.011.01.989.011.989h1.48l.011-.99.01-.99h3.478l.01.99.011.99h1.48l.011-.99.01-.99h4.478l.01.99.011.99h1.48l.011-.99.01-.99h3.478l.01.99.011.99h1.48l.011-.989.01-.989.49-.011.489-.011v-1.48l-.49-.011-.49-.011V7.762l.49-.011.49-.011V6.26l-.489-.011-.49-.011-.01-.989-.011-.989h-1.48l-.011.99-.01.99h-3.478l-.01-.99-.011-.99h-1.48l-.011.99-.01.99H9.761l-.01-.99-.011-.99H8.26l-.011.99-.01.99H4.761l-.01-.99-.011-.99-.722-.011c-.398-.006-.735.002-.75.017zM8.24 12v4.24H4.76V7.76h3.48V12zm6 0v4.24H9.76V7.76h4.48V12zm5 0v4.24h-3.48V7.76h3.48V12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PatioIcon;
/* prettier-ignore-end */
