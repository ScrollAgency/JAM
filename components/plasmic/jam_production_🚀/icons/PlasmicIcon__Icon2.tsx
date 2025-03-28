/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 21"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.875 4.559v4.687a.312.312 0 01-.313.313h-5.937V3.62a.313.313 0 01.313-.312h4.687a1.25 1.25 0 011.25 1.25zm-7.813-1.25H4.375a1.25 1.25 0 00-1.25 1.25v4.687a.312.312 0 00.313.313h5.937V3.62a.312.312 0 00-.313-.312zm7.5 7.5h-5.937v5.937a.313.313 0 00.313.313h4.687a1.25 1.25 0 001.25-1.25V11.12a.313.313 0 00-.313-.312zm-13.437.312v4.688a1.25 1.25 0 001.25 1.25h4.688a.312.312 0 00.312-.313V10.81H3.437a.312.312 0 00-.312.312z"
        }
        fill={"#BBFE68"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
