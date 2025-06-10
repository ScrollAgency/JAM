/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapPinAreaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapPinAreaIcon(props: MapPinAreaIconProps) {
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
        d={
          "M11.625 16.406a.75.75 0 0 0 .744 0c.23-.132 5.625-3.281 5.625-8.901A6 6 0 0 0 6 7.5c0 5.625 5.398 8.77 5.625 8.906M12 5.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m10.5 12c0 2.923-5.41 4.5-10.5 4.5s-10.5-1.577-10.5-4.5c0-1.368 1.24-2.58 3.49-3.41a.75.75 0 0 1 .52 1.407C3.962 15.819 3 16.587 3 17.25c0 1.253 3.424 3 9 3s9-1.747 9-3c0-.664-.962-1.43-2.51-2.002a.75.75 0 0 1 .52-1.407c2.25.83 3.49 2.041 3.49 3.409"
        }
      ></path>
    </svg>
  );
}

export default MapPinAreaIcon;
/* prettier-ignore-end */
