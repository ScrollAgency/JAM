/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIcon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIcon8Icon(props: SocialIcon8IconProps) {
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
        fillRule={"evenodd"}
        d={
          "m15.945 23-5.549-7.91L3.449 23H.509l8.583-9.769L.51 1h7.546l5.23 7.455L19.839 1h2.94l-8.185 9.316L23.491 23zm3.273-2.23H17.24L4.718 3.23h1.98l5.014 7.023.867 1.219 6.64 9.298z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default SocialIcon8Icon;
/* prettier-ignore-end */
