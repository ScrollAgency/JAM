/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhImageLightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhImageLightIcon(props: PhImageLightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 69 69"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M58.219 11.32H10.78a3.774 3.774 0 00-3.773 3.774v38.812a3.774 3.774 0 003.773 3.774h47.44a3.774 3.774 0 003.773-3.774V15.094a3.774 3.774 0 00-3.773-3.774zM10.78 14.555h47.44a.539.539 0 01.539.539v28.993l-7.943-7.943a3.773 3.773 0 00-5.337 0l-5.773 5.773-12.24-12.242a3.775 3.775 0 00-5.337 0L10.242 41.562V15.094a.54.54 0 01.54-.54zm-.539 39.351v-7.77l14.172-14.172a.541.541 0 01.766 0L47.66 54.445H10.78a.539.539 0 01-.539-.539zm47.977.54h-5.984L41.993 44.202l5.77-5.773a.537.537 0 01.763 0L58.77 48.672v5.234a.54.54 0 01-.55.54zM39.352 26.952a2.695 2.695 0 115.39 0 2.695 2.695 0 01-5.39 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhImageLightIcon;
/* prettier-ignore-end */
