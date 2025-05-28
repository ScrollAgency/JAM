/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeSimpleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeSimpleIcon(props: EnvelopeSimpleIconProps) {
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
          "M17.5 3.75h-15a.625.625 0 00-.625.625V15a1.25 1.25 0 001.25 1.25h13.75a1.25 1.25 0 001.25-1.25V4.375a.625.625 0 00-.625-.625zM15.893 5L10 10.402 4.107 5h11.786zm.982 10H3.125V5.796l6.452 5.915a.625.625 0 00.846 0l6.452-5.915V15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnvelopeSimpleIcon;
/* prettier-ignore-end */
