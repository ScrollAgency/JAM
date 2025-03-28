/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GridFourIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GridFourIcon(props: GridFourIconProps) {
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
          "M16.875 4.375v4.688a.312.312 0 01-.313.312h-5.937V3.437a.312.312 0 01.313-.312h4.687a1.25 1.25 0 011.25 1.25zm-7.813-1.25H4.375a1.25 1.25 0 00-1.25 1.25v4.688a.312.312 0 00.313.312h5.937V3.437a.312.312 0 00-.313-.312zm7.5 7.5h-5.937v5.938a.313.313 0 00.313.312h4.687a1.25 1.25 0 001.25-1.25v-4.688a.313.313 0 00-.313-.312zm-13.437.313v4.687a1.25 1.25 0 001.25 1.25h4.688a.312.312 0 00.312-.313v-5.937H3.437a.312.312 0 00-.312.313z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GridFourIcon;
/* prettier-ignore-end */
