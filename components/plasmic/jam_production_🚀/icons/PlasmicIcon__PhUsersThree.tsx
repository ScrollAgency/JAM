/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhUsersThreeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhUsersThreeIcon(props: PhUsersThreeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.475 7.05a.375.375 0 01-.525-.075A2.418 2.418 0 009 6a.375.375 0 010-.75 1.125 1.125 0 10-1.09-1.406.375.375 0 11-.726-.188 1.875 1.875 0 113.082 1.852c.51.221.953.571 1.285 1.017a.375.375 0 01-.076.525zM8.949 9.938a.375.375 0 11-.648.374 2.672 2.672 0 00-4.602 0 .375.375 0 11-.648-.374 3.378 3.378 0 011.581-1.403 2.25 2.25 0 112.736 0 3.378 3.378 0 011.581 1.402zM6 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3.375 5.625A.375.375 0 003 5.25a1.125 1.125 0 111.09-1.406.375.375 0 00.726-.188 1.875 1.875 0 10-3.082 1.852A3.195 3.195 0 00.45 6.525a.375.375 0 00.6.45A2.419 2.419 0 013 6a.375.375 0 00.375-.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhUsersThreeIcon;
/* prettier-ignore-end */
