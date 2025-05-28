/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatTextStreamlinePhosphorSvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ChatTextStreamlinePhosphorSvg2Icon(
  props: ChatTextStreamlinePhosphorSvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M43.487 2.742H4.513A3.543 3.543 0 00.97 6.285v35.43a3.51 3.51 0 002.046 3.211 3.519 3.519 0 003.767-.505l.02-.015 7.232-6.234h29.452a3.543 3.543 0 003.543-3.543V6.285a3.543 3.543 0 00-3.543-3.543zm0 31.887H13.37a1.77 1.77 0 00-1.158.432l-7.7 6.654V6.285h38.974v28.344zM15.142 16.914c0-.979.793-1.772 1.772-1.772h14.172c1.364 0 2.216 1.477 1.534 2.658a1.771 1.771 0 01-1.534.885H16.914a1.772 1.772 0 01-1.772-1.771zm0 7.086c0-.978.793-1.771 1.772-1.771h14.172c1.364 0 2.216 1.476 1.534 2.657a1.771 1.771 0 01-1.534.886H16.914A1.771 1.771 0 0115.142 24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChatTextStreamlinePhosphorSvg2Icon;
/* prettier-ignore-end */
