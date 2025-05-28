/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCalendarPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCalendarPlusIcon(props: PhCalendarPlusIconProps) {
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
          "M21.439 1.814h-2.727V.919a.888.888 0 00-.267-.633.916.916 0 00-1.285 0 .888.888 0 00-.267.633v.895h-9.09V.919a.888.888 0 00-.267-.633.916.916 0 00-1.285 0 .888.888 0 00-.267.633v.895H3.257c-.482 0-.945.189-1.286.524a1.776 1.776 0 00-.532 1.266v17.902c0 .475.191.93.532 1.266.341.336.804.525 1.286.525H21.44c.482 0 .945-.19 1.286-.525.34-.335.532-.79.532-1.266V3.604c0-.475-.192-.93-.532-1.266a1.833 1.833 0 00-1.286-.524zM5.984 3.604V4.5c0 .238.096.465.267.633a.916.916 0 001.285 0 .888.888 0 00.267-.633v-.895h9.09V4.5c0 .238.096.465.267.633a.917.917 0 001.285 0 .888.888 0 00.267-.633v-.895h2.727v3.58H3.257v-3.58h2.727zM21.44 21.506H3.257V8.975H21.44v12.531zm-5.455-6.265a.888.888 0 01-.266.633.916.916 0 01-.643.262h-1.818v1.79a.888.888 0 01-.266.633.916.916 0 01-1.286 0 .888.888 0 01-.266-.633v-1.79H9.62a.916.916 0 01-.643-.262.888.888 0 010-1.266.917.917 0 01.643-.263h1.818v-1.79c0-.237.096-.465.266-.633a.917.917 0 011.286 0c.17.168.266.396.266.633v1.79h1.818c.241 0 .473.095.643.263.17.167.266.395.266.633z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCalendarPlusIcon;
/* prettier-ignore-end */
