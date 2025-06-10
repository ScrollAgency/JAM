/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserCircleCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserCircleCheckIcon(props: UserCircleCheckIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M21.615 10.376a9.743 9.743 0 1 1-7.991-7.991.75.75 0 0 1-.248 1.48A8.256 8.256 0 0 0 3.75 12a8.2 8.2 0 0 0 2.085 5.476 7.5 7.5 0 0 1 2.04-1.998.375.375 0 0 1 .454.03 5.61 5.61 0 0 0 7.337 0 .375.375 0 0 1 .453-.03 7.5 7.5 0 0 1 2.043 1.998 8.21 8.21 0 0 0 1.974-6.852.751.751 0 1 1 1.479-.248m-13.74.874a4.125 4.125 0 1 0 8.25 0 4.125 4.125 0 0 0-8.25 0m14.406-8.03a.75.75 0 0 0-1.062 0L18.75 5.69l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06z"
        }
      ></path>
    </svg>
  );
}

export default UserCircleCheckIcon;
/* prettier-ignore-end */
