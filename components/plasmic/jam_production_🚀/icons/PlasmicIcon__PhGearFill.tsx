/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhGearFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhGearFillIcon(props: PhGearFillIconProps) {
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
          "M20.25 12.203c.004-.135.004-.27 0-.405l1.399-1.748a.75.75 0 00.139-.662c-.23-.862-.573-1.69-1.02-2.46a.75.75 0 00-.563-.37l-2.224-.247a7.46 7.46 0 00-.281-.281l-.262-2.23a.75.75 0 00-.37-.562 10.023 10.023 0 00-2.46-1.018.75.75 0 00-.663.139L12.203 3.75h-.405L10.05 2.354a.75.75 0 00-.662-.139c-.862.23-1.69.573-2.46 1.02a.75.75 0 00-.37.563l-.247 2.227a8.533 8.533 0 00-.281.282l-2.23.255a.75.75 0 00-.562.37c-.447.772-.79 1.6-1.019 2.46a.75.75 0 00.14.663l1.391 1.742v.405L2.354 13.95a.75.75 0 00-.139.662c.23.862.573 1.69 1.02 2.46a.75.75 0 00.563.37l2.224.247c.093.097.186.191.28.281l.26 2.23a.75.75 0 00.37.562c.772.447 1.6.79 2.46 1.019a.75.75 0 00.663-.14l1.742-1.391c.135.004.27.004.405 0l1.748 1.399a.75.75 0 00.662.139 10.05 10.05 0 002.46-1.02.75.75 0 00.37-.563l.247-2.224c.097-.092.191-.186.281-.281l2.23-.262a.75.75 0 00.562-.37c.447-.772.79-1.6 1.019-2.46a.75.75 0 00-.14-.663l-1.391-1.742zM12 15.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhGearFillIcon;
/* prettier-ignore-end */
