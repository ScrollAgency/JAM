/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 18 14"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.5.934h-15a.625.625 0 00-.625.625v10.625a1.25 1.25 0 001.25 1.25h13.75a1.25 1.25 0 001.25-1.25V1.559A.625.625 0 0016.5.934zm-1.607 1.25L9 7.586 3.107 2.184h11.786zm.982 10H2.125V2.98l6.452 5.915a.625.625 0 00.846 0l6.452-5.915v9.204z"
        }
        fill={"#666"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
