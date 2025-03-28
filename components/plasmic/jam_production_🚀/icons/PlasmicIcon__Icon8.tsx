/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 15"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.674 3.488a.448.448 0 00-.634.633L7.518 8.6a.448.448 0 00.634 0l4.478-4.48a.448.448 0 00-.634-.633L7.835 7.65 3.674 3.488zm4.161 8.64l4.161-4.162a.448.448 0 01.634.634l-4.478 4.478a.446.446 0 01-.634 0L3.04 8.6a.448.448 0 11.634-.634l4.161 4.162z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
