/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhPencilSimpleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhPencilSimpleIcon(props: PhPencilSimpleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.646 6.019l-3.665-3.666a1.313 1.313 0 00-1.856 0L3.01 12.469a1.302 1.302 0 00-.385.928v3.665a1.313 1.313 0 001.313 1.313h3.665a1.303 1.303 0 00.928-.385L18.646 7.875a1.313 1.313 0 000-1.856zM7.604 17.062H3.938v-3.666l7.218-7.218 3.666 3.666-7.219 7.219zm8.147-8.147L12.084 5.25l1.969-1.969 3.666 3.665-1.969 1.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhPencilSimpleIcon;
/* prettier-ignore-end */
