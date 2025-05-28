/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneIcon(props: PhoneIconProps) {
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
          "M17.373 12.38l-3.68-1.65-.011-.004a1.25 1.25 0 00-1.244.153L10.537 12.5c-1.205-.585-2.449-1.82-3.034-3.009l1.624-1.93a1.25 1.25 0 00.148-1.237v-.01L7.62 2.629a1.25 1.25 0 00-1.298-.744A4.395 4.395 0 002.5 6.25c0 6.203 5.047 11.25 11.25 11.25a4.396 4.396 0 004.366-3.822 1.25 1.25 0 00-.743-1.298zm-3.623 3.87a10.011 10.011 0 01-10-10 3.14 3.14 0 012.724-3.125v.01l1.64 3.671L6.5 8.74a1.25 1.25 0 00-.123 1.287c.708 1.447 2.167 2.895 3.63 3.602a1.25 1.25 0 001.288-.133l1.9-1.62 3.671 1.645h.009a3.141 3.141 0 01-3.125 2.73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhoneIcon;
/* prettier-ignore-end */
