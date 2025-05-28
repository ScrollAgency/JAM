/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCoinsLight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCoinsLight2Icon(props: PhCoinsLight2IconProps) {
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
          "M10.526 4.866c-.521-.284-1.223-.488-1.995-.584v-.345c0-.568-.449-1.082-1.265-1.45C6.523 2.154 5.54 1.97 4.5 1.97s-2.023.184-2.766.519C.918 2.855.47 3.369.47 3.938v1.874c0 .569.449 1.083 1.265 1.45.492.222 1.088.375 1.735.456v.345c0 .568.449 1.082 1.265 1.45.743.334 1.725.518 2.766.518s2.023-.184 2.766-.519c.815-.367 1.265-.881 1.265-1.45V6.188c0-.5-.357-.969-1.005-1.322zm-.269.494c.46.25.712.546.712.827 0 .666-1.425 1.407-3.469 1.407a8 8 0 0 1-.994-.063q.39-.105.76-.269c.815-.367 1.265-.881 1.265-1.45v-.964c.675.09 1.28.269 1.726.512M5.07 7.2a8 8 0 0 1-1.304-.013 8 8 0 0 1-.485-.06v-1.31q.607.09 1.219.088a8.4 8.4 0 0 0 1.219-.088v1.307a8 8 0 0 1-.642.073zm2.899-2.236v.848c0 .448-.645.929-1.688 1.196V5.712a5.4 5.4 0 0 0 .985-.325q.38-.166.703-.423M4.5 2.53c2.044 0 3.469.741 3.469 1.406 0 .666-1.425 1.407-3.469 1.407s-3.469-.741-3.469-1.407c0-.665 1.425-1.406 3.469-1.406M1.031 5.812v-.848q.324.257.703.421.477.21.985.325v1.296C1.676 6.741 1.03 6.26 1.03 5.812zm3 2.25v-.294a9 9 0 0 0 1.016-.004q.33.12.672.197v1.297C4.676 8.991 4.03 8.51 4.03 8.063zm2.25 1.313V8.067a8.4 8.4 0 0 0 2.438.001v1.307a8 8 0 0 1-2.438 0m3-.117V7.962a5.4 5.4 0 0 0 .985-.325q.38-.164.703-.422v.848c0 .447-.645.928-1.688 1.195"
        }
      ></path>
    </svg>
  );
}

export default PhCoinsLight2Icon;
/* prettier-ignore-end */
