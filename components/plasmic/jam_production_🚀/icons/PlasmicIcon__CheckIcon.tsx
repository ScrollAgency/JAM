/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckIconIcon(props: CheckIconIconProps) {
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
          "m17.096 7.39-7.16 6.91-1.9-2.03c-.35-.33-.9-.35-1.3-.07-.39.29-.5.8-.26 1.21l2.25 3.66c.22.34.6.55 1.03.55.41 0 .8-.21 1.02-.55.36-.47 7.23-8.66 7.23-8.66.9-.92-.19-1.73-.91-1.03z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CheckIconIcon;
/* prettier-ignore-end */
