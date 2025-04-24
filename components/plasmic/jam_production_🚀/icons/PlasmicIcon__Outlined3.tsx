/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined3Icon(props: Outlined3IconProps) {
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
          "M10.667 3.333c1.666 0 2.666 1.267 2.666 2.8 0 .8-.4 1.534-.866 2.067C11.667 9 8 12 8 12S4.333 9 3.533 8.2a2.925 2.925 0 01-.866-2.067c0-1.533 1-2.8 2.666-2.8 1.134 0 2.2 1.067 2.667 2 .467-.933 1.533-2 2.667-2zm0-2c-1 0-1.934.4-2.667.934a4.188 4.188 0 00-2.667-.934C2.667 1.333.667 3.4.667 6.133.667 7.4 1.2 8.6 2.133 9.6c.934 1 5.867 5 5.867 5s4.933-4 5.867-5c.933-1 1.466-2.2 1.466-3.467 0-2.733-2-4.8-4.666-4.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined3Icon;
/* prettier-ignore-end */
