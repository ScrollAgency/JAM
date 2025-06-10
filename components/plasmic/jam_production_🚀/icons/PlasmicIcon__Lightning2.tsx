/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Lightning2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Lightning2Icon(props: Lightning2IconProps) {
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
        fill={"currentColor"}
        d={
          "m16.707 9.802-8.75 9.375a.625.625 0 0 1-1.07-.547l1.146-5.73-4.503-1.69a.626.626 0 0 1-.234-1.016L12.046.82a.625.625 0 0 1 1.07.546l-1.149 5.736L16.47 8.79a.626.626 0 0 1 .235 1.012z"
        }
      ></path>
    </svg>
  );
}

export default Lightning2Icon;
/* prettier-ignore-end */
