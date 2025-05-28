/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhPersonSimpleWalkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhPersonSimpleWalkIcon(props: PhPersonSimpleWalkIconProps) {
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
          "M14.25 7.5a3 3 0 100-6 3 3 0 000 6zm0-4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 10.5a.75.75 0 01-.75.75c-3.31 0-4.964-1.67-6.293-3.011-.256-.26-.502-.507-.75-.735l-1.259 2.895 3.488 2.49A.75.75 0 0115 16.5v5.25a.75.75 0 11-1.5 0v-4.864l-2.913-2.081-3.149 7.244a.75.75 0 01-1.376-.598l5.07-11.66c-.873-.154-1.961.113-3.253.805a15.372 15.372 0 00-2.866 2.04.75.75 0 01-1.027-1.093c.235-.22 5.784-5.365 9.255-2.35.36.31.702.655 1.032.99 1.307 1.32 2.542 2.567 5.227 2.567a.75.75 0 01.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhPersonSimpleWalkIcon;
/* prettier-ignore-end */
