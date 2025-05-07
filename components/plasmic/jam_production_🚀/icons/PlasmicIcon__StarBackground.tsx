/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarBackgroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarBackgroundIcon(props: StarBackgroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.322 0l1.672 4.02 4.34.348-3.307 2.833 1.01 4.235-3.715-2.27-3.716 2.27 1.01-4.235L.31 4.368l4.34-.348L6.323 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarBackgroundIcon;
/* prettier-ignore-end */
