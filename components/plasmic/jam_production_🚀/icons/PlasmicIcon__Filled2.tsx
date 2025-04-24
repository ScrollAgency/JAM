/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Filled2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Filled2Icon(props: Filled2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.333 2C9.867 2 8.8 2.8 8 3.667 7.2 2.867 6.133 2 4.667 2c-2.334 0-4 1.933-4 4.333 0 1.2.466 2.267 1.333 3L8 15l6-5.667c.8-.8 1.333-1.8 1.333-3 0-2.4-1.666-4.333-4-4.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Filled2Icon;
/* prettier-ignore-end */
