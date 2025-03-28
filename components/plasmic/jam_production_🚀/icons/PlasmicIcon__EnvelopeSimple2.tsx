/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeSimple2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeSimple2Icon(props: EnvelopeSimple2IconProps) {
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
        d={
          "M21 4.5H3a.75.75 0 00-.75.75V18a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25A.75.75 0 0021 4.5zM19.072 6L12 12.483 4.928 6h14.144zm1.178 12H3.75V6.955l7.743 7.098a.75.75 0 001.014 0l7.743-7.098V18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnvelopeSimple2Icon;
/* prettier-ignore-end */
