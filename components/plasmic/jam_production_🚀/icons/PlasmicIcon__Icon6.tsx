/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 14 15"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.875 1.559v4.687a.312.312 0 01-.313.313H7.625V.62a.312.312 0 01.313-.31h4.687a1.25 1.25 0 011.25 1.25zM6.062.309H1.375a1.25 1.25 0 00-1.25 1.25v4.687a.312.312 0 00.313.313h5.937V.62a.312.312 0 00-.313-.31zm7.5 7.5H7.625v5.937a.313.313 0 00.313.313h4.687a1.25 1.25 0 001.25-1.25V8.12a.313.313 0 00-.313-.312zM.126 8.12v4.688a1.25 1.25 0 001.25 1.25h4.688a.312.312 0 00.312-.313V7.81H.437a.313.313 0 00-.312.312z"
        }
        fill={"#BBFE68"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
