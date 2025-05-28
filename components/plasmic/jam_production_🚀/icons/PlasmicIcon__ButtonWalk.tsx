/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ButtonWalkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ButtonWalkIcon(props: ButtonWalkIconProps) {
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
          "M14.369 7.5c.598 0 1.183-.176 1.68-.506.498-.33.886-.798 1.114-1.346a2.978 2.978 0 00-.655-3.27 3.049 3.049 0 00-3.297-.65 3.02 3.02 0 00-1.357 1.105 2.982 2.982 0 00.376 3.788 3.038 3.038 0 002.139.879zm0-4.5a1.52 1.52 0 011.397.926 1.489 1.489 0 01-.328 1.635 1.516 1.516 0 01-1.648.325 1.51 1.51 0 01-.679-.553A1.491 1.491 0 0113.3 3.44a1.522 1.522 0 011.07-.439zm6.05 10.5c0 .199-.08.39-.222.53a.76.76 0 01-.534.22c-3.338 0-5.006-1.67-6.345-3.011-.26-.26-.507-.507-.757-.735l-1.27 2.895 3.517 2.49a.752.752 0 01.317.611v5.25c0 .199-.08.39-.222.53a.76.76 0 01-1.29-.53v-4.864l-2.938-2.081L7.5 22.049a.752.752 0 01-.694.451.753.753 0 01-.704-.475.744.744 0 01.01-.574l5.113-11.66c-.88-.154-1.978.113-3.28.805a15.5 15.5 0 00-2.89 2.04.76.76 0 01-1.056-.045.746.746 0 01.02-1.048c.237-.22 5.832-5.365 9.333-2.35.362.31.707.655 1.04.99 1.318 1.32 2.563 2.567 5.27 2.567a.758.758 0 01.757.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ButtonWalkIcon;
/* prettier-ignore-end */
