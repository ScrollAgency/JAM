/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PauseCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PauseCircleIcon(props: PauseCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10 1.875A8.125 8.125 0 1018.125 10 8.135 8.135 0 0010 1.875zM8.75 12.5a.625.625 0 11-1.25 0v-5a.625.625 0 011.25 0v5zm3.75 0a.624.624 0 11-1.25 0v-5a.625.625 0 111.25 0v5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PauseCircleIcon;
/* prettier-ignore-end */
