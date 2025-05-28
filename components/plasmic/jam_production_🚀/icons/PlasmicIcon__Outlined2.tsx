/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined2Icon(props: Outlined2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.067 13.6l-2.934-2.933c.734-1.067 1.2-2.334 1.2-3.734C13.333 3.467 10.467.6 7 .6S.667 3.467.667 6.933c0 3.467 2.866 6.334 6.333 6.334 1.4 0 2.667-.467 3.733-1.2L13.667 15l1.4-1.4zM2.667 7C2.667 4.6 4.6 2.667 7 2.667c2.4 0 4.333 1.933 4.333 4.333 0 2.4-1.933 4.333-4.333 4.333A4.325 4.325 0 012.667 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined2Icon;
/* prettier-ignore-end */
