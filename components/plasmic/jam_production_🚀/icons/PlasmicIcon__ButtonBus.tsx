/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ButtonBusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ButtonBusIcon(props: ButtonBusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.394 3H6.806c-.802 0-1.571.316-2.139.879A2.987 2.987 0 003.781 6v13.5c0 .398.16.78.443 1.06.284.282.669.44 1.07.44h2.269c.4 0 .785-.158 1.069-.44.284-.28.443-.662.443-1.06V18h6.05v1.5c0 .398.16.78.443 1.06.284.282.668.44 1.07.44h2.268c.401 0 .786-.158 1.07-.44.283-.28.443-.662.443-1.06V6c0-.796-.319-1.559-.886-2.121A3.038 3.038 0 0017.393 3zm-12.1 13.5v-5.25h13.612v5.25H5.294zm0-9h13.612v2.25H5.294V7.5zm1.512-3h10.588c.4 0 .786.158 1.07.44.283.28.442.662.442 1.06H5.294c0-.398.16-.78.443-1.06.283-.282.668-.44 1.07-.44zm.756 15H5.295V18h2.269v1.5zm9.075 0V18h2.27v1.5h-2.27zm-6.806-5.625a1.118 1.118 0 01-.7 1.04 1.144 1.144 0 01-1.236-.244 1.122 1.122 0 01-.246-1.226 1.141 1.141 0 011.85-.365c.213.21.332.497.332.795zm6.806 0a1.118 1.118 0 01-.7 1.04 1.143 1.143 0 01-1.236-.244 1.123 1.123 0 01-.246-1.226 1.127 1.127 0 011.048-.695 1.134 1.134 0 011.134 1.125zM23.444 7.5v2.25c0 .199-.08.39-.222.53a.76.76 0 01-1.07 0 .746.746 0 01-.22-.53V7.5c0-.199.079-.39.22-.53a.76.76 0 011.292.53zm-21.175 0v2.25c0 .199-.08.39-.222.53a.76.76 0 01-1.29-.53V7.5c0-.199.079-.39.22-.53a.76.76 0 011.07 0c.142.14.222.331.222.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ButtonBusIcon;
/* prettier-ignore-end */
