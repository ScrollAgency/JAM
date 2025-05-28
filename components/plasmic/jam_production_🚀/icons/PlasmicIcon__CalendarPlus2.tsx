/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarPlus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarPlus2Icon(props: CalendarPlus2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.75 4.375H5.25a.875.875 0 00-.875.875v17.5c0 .483.392.875.875.875h17.5a.875.875 0 00.875-.875V5.25a.875.875 0 00-.875-.875zm-3.5-1.75v3.5m-10.5-3.5v3.5m-4.375 3.5h19.25m-7 7h-5.25M14 14v5.25"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarPlus2Icon;
/* prettier-ignore-end */
