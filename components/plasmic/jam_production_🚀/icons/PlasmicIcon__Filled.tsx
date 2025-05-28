/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilledIcon(props: FilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.917 1.75C8.633 1.75 7.7 2.45 7 3.208c-.7-.7-1.633-1.458-2.917-1.458-2.041 0-3.5 1.692-3.5 3.792 0 1.05.409 1.983 1.167 2.625L7 13.125l5.25-4.958c.7-.7 1.167-1.575 1.167-2.625 0-2.1-1.459-3.792-3.5-3.792z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilledIcon;
/* prettier-ignore-end */
