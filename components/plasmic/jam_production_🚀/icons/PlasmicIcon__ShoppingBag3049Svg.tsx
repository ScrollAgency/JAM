/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingBag3049SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingBag3049SvgIcon(props: ShoppingBag3049SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M203.05 67.578h-29.277v-29.38c0-19.978-15.807-36.234-35.236-36.234h-21.07c-19.43 0-35.238 16.256-35.238 36.234v29.38H52.95c-5.413 0-9.802 4.39-9.802 9.803v131.741c0 24.768 20.146 44.914 44.914 44.914h79.878c24.768 0 44.914-20.146 44.914-44.914V77.382c0-5.415-4.389-9.804-9.803-9.804zm-101.218-29.38c0-9.167 7.013-16.628 15.631-16.628h21.07c8.619 0 15.632 7.46 15.632 16.628v29.38h-52.333v-29.38zm91.415 170.924c0 13.954-11.354 25.308-25.308 25.308H88.061c-13.957 0-25.311-11.354-25.311-25.308V87.184h19.477v16.855c0 5.414 4.388 9.803 9.802 9.803s9.803-4.389 9.803-9.803V87.184h52.336v16.855c0 5.414 4.389 9.803 9.803 9.803s9.802-4.389 9.802-9.803V87.184h19.474v121.938z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default ShoppingBag3049SvgIcon;
/* prettier-ignore-end */
