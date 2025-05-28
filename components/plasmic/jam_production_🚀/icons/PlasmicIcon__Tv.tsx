/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TvIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TvIcon(props: TvIconProps) {
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
          "M3.621 3.285a1.578 1.578 0 00-.877.459c-.265.253-.43.592-.465.956-.029.215-.039 2.095-.03 5.74.013 6.101-.013 5.608.324 6.066.095.129.271.302.393.386.441.304.167.286 4.444.299l3.83.012v2.036l-1.79.011-1.79.01v1.48h8.68v-1.48l-1.79-.01-1.79-.011v-2.036l3.83-.012c4.312-.014 4.027.007 4.476-.324.263-.194.504-.516.606-.81.062-.181.069-.639.08-5.617.008-3.644-.002-5.525-.031-5.74a1.526 1.526 0 00-.465-.956 1.567 1.567 0 00-.916-.462c-.35-.05-16.374-.048-16.719.003zM20.22 10.22v5.44H3.78l-.01-5.4c-.006-2.97-.002-5.423.008-5.45.016-.04 1.683-.048 8.231-.04l8.211.01v5.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TvIcon;
/* prettier-ignore-end */
