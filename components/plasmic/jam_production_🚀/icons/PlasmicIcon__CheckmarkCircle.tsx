/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckmarkCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckmarkCircleIcon(props: CheckmarkCircleIconProps) {
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
          "M10 1.875C5.52 1.875 1.875 5.52 1.875 10S5.52 18.125 10 18.125 18.125 14.48 18.125 10 14.48 1.875 10 1.875zm4.229 5.402l-5.25 6.25a.625.625 0 01-.47.223H8.5a.626.626 0 01-.464-.207l-2.25-2.5a.625.625 0 11.929-.836l1.769 1.966 4.788-5.7a.625.625 0 01.957.804z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckmarkCircleIcon;
/* prettier-ignore-end */
