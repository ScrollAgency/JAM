/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrashIcon(props: TrashIconProps) {
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
          "M16.875 3.75H13.75v-.625a1.875 1.875 0 0 0-1.875-1.875h-3.75A1.875 1.875 0 0 0 6.25 3.125v.625H3.125a.625.625 0 0 0 0 1.25h.625v11.25A1.25 1.25 0 0 0 5 17.5h10a1.25 1.25 0 0 0 1.25-1.25V5h.625a.625.625 0 1 0 0-1.25M7.5 3.125a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 .625.625v.625h-5zM15 16.25H5V5h10zM8.75 8.125v5a.625.625 0 1 1-1.25 0v-5a.625.625 0 0 1 1.25 0m3.75 0v5a.625.625 0 0 1-1.25 0v-5a.625.625 0 1 1 1.25 0"
        }
      ></path>
    </svg>
  );
}

export default TrashIcon;
/* prettier-ignore-end */
