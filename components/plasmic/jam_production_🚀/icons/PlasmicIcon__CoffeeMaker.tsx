/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoffeeMakerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoffeeMakerIcon(props: CoffeeMakerIconProps) {
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
          "M2.258 2.29c-.01.027-.014 1.04-.008 2.25l.01 2.2 5.99.01 5.99.01v12.48H2v1.52l9.87-.01 9.87-.01V2.26l-9.731-.01c-7.764-.008-9.735 0-9.751.04zM14.24 4.5v.74H3.76V3.76h10.48v.74zm6 7v7.74h-4.48V3.76h4.48v7.74zM5.607 10.28c-.32.048-.691.249-.911.491-.233.253-.38.573-.422.915-.024.171-.034 1.23-.025 2.649.014 2.335.016 2.369.106 2.645a2.639 2.639 0 001.058 1.385c.536.347.853.395 2.587.395 1.734 0 2.051-.048 2.587-.395a2.535 2.535 0 001.035-1.34l.09-.285.294-.082c.763-.213 1.381-.772 1.623-1.469.143-.41.143-.968 0-1.378-.177-.51-.517-.909-1.046-1.227-.232-.14-.332-.181-.647-.262l-.164-.042-.027-.381c-.032-.455-.131-.743-.35-1.02a1.63 1.63 0 00-.709-.527c-.225-.091-.235-.091-2.546-.098-1.276-.003-2.416.008-2.533.026zm4.624 3.84c.012 2.607.019 2.534-.259 2.82-.29.298-.288.298-1.972.298-1.672 0-1.676 0-1.957-.281-.292-.292-.281-.187-.282-2.8-.001-1.289.011-2.356.026-2.371.015-.015 1.018-.022 2.23-.016l2.203.01.011 2.34zm1.884-.003c.087.114.105.178.105.383 0 .205-.018.269-.105.383a.97.97 0 01-.23.209l-.125.073v-1.33l.125.073a.97.97 0 01.23.209zM17.52 17v1H19v-2h-1.48v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoffeeMakerIcon;
/* prettier-ignore-end */
