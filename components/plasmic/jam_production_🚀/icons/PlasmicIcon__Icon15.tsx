/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.366 8.234l-7 7.5a.5.5 0 01-.856-.437l.916-4.583L.824 9.36a.5.5 0 01-.187-.812l7-7.5a.5.5 0 01.855.437l-.918 4.588 3.602 1.351a.5.5 0 01.187.81h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
