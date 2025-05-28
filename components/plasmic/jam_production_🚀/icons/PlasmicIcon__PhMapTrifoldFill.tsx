/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhMapTrifoldFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhMapTrifoldFillIcon(props: PhMapTrifoldFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.52 2.717a.438.438 0 00-.376-.079L8.8 3.474 5.446 1.796a.437.437 0 00-.302-.033l-3.5.875a.437.437 0 00-.331.425v7.874a.437.437 0 00.543.425l3.343-.836 3.355 1.678a.446.446 0 00.302.033l3.5-.875a.438.438 0 00.332-.425V3.064a.438.438 0 00-.169-.346zM5.25 9.625a.437.437 0 00-.106.013l-2.957.739V3.404L5.2 2.651l.051.025v6.949zm6.563.97L8.8 11.35l-.051-.025v-6.95a.437.437 0 00.106-.013l2.957-.739v6.973z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhMapTrifoldFillIcon;
/* prettier-ignore-end */
