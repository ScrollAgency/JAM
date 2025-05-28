/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhTrashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhTrashIcon(props: PhTrashIconProps) {
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
          "M16.875 3.75H13.75v-.625a1.875 1.875 0 00-1.875-1.875h-3.75A1.875 1.875 0 006.25 3.125v.625H3.125a.625.625 0 000 1.25h.625v11.25A1.25 1.25 0 005 17.5h10a1.25 1.25 0 001.25-1.25V5h.625a.625.625 0 100-1.25zM7.5 3.125a.625.625 0 01.625-.625h3.75a.625.625 0 01.625.625v.625h-5v-.625zM15 16.25H5V5h10v11.25zM8.75 8.125v5a.625.625 0 11-1.25 0v-5a.625.625 0 011.25 0zm3.75 0v5a.624.624 0 11-1.25 0v-5a.625.625 0 111.25 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhTrashIcon;
/* prettier-ignore-end */
