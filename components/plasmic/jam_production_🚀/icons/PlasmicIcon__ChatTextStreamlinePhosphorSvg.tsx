/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatTextStreamlinePhosphorSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ChatTextStreamlinePhosphorSvgIcon(
  props: ChatTextStreamlinePhosphorSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.931 1.257H2.07c-.897 0-1.624.727-1.624 1.623v16.24a1.609 1.609 0 00.937 1.471 1.613 1.613 0 001.726-.231l.01-.007 3.315-2.857H19.93c.897 0 1.624-.727 1.624-1.624V2.88c0-.896-.727-1.623-1.623-1.623zm0 14.615H6.128a.812.812 0 00-.53.198l-3.53 3.05V2.88h17.864v12.992zm-12.99-8.12c0-.448.363-.812.811-.812h6.496a.812.812 0 010 1.624H7.752a.812.812 0 01-.812-.812zm0 3.248c0-.448.363-.812.811-.812h6.496a.812.812 0 010 1.624H7.752A.812.812 0 016.94 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChatTextStreamlinePhosphorSvgIcon;
/* prettier-ignore-end */
