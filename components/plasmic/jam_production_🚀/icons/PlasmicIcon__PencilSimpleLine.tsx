/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilSimpleLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PencilSimpleLineIcon(props: PencilSimpleLineIconProps) {
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
          "M17.76 5.732l-3.492-3.49a1.25 1.25 0 00-1.768 0l-9.634 9.633a1.24 1.24 0 00-.366.884v3.491a1.25 1.25 0 001.25 1.25h13.125a.625.625 0 000-1.25H9.009l8.75-8.75a1.25 1.25 0 000-1.768zM7.24 16.25H3.75v-3.491l6.875-6.875 3.491 3.491-6.875 6.875zM15 8.491L11.51 5l1.874-1.875 3.491 3.491L15 8.491z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PencilSimpleLineIcon;
/* prettier-ignore-end */
