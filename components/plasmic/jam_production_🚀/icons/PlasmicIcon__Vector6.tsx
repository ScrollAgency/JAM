/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.763 6.306l-4.846 4.91a.804.804 0 01-1.352-.368.826.826 0 01.21-.79l3.467-3.512h-4.007c-4.052-.001-7.592 2.775-8.605 6.75a.804.804 0 01-1.348.38.826.826 0 01-.216-.79c1.195-4.698 5.38-7.98 10.17-7.977h4.008l-3.47-3.512a.823.823 0 01.363-1.37.801.801 0 01.78.213l4.846 4.909a.826.826 0 010 1.157zm-3.802 10.058H1.615V4.09c0-.63-.673-1.023-1.211-.708A.82.82 0 000 4.09v13.09c0 .453.362.819.808.819H16.96c.622 0 1.01-.682.7-1.227a.806.806 0 00-.7-.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
