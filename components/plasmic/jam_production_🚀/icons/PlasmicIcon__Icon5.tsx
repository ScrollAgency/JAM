/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 18 17"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.875 8.352a5.934 5.934 0 000-.337l1.166-1.457a.625.625 0 00.115-.551 8.407 8.407 0 00-.85-2.051.626.626 0 00-.469-.307l-1.853-.206a6.204 6.204 0 00-.234-.235l-.219-1.857a.626.626 0 00-.308-.47 8.382 8.382 0 00-2.05-.848.625.625 0 00-.552.116L9.17 1.309h-.34L7.375.144A.625.625 0 006.823.03a8.406 8.406 0 00-2.05.85.625.625 0 00-.307.47l-.207 1.855a8.63 8.63 0 00-.234.235l-1.858.213a.625.625 0 00-.469.308A8.415 8.415 0 00.85 6.01a.625.625 0 00.117.552l1.159 1.453v.337L.962 9.808a.625.625 0 00-.116.552 8.4 8.4 0 00.85 2.05.624.624 0 00.469.308l1.853.206c.078.081.156.16.234.234l.217 1.858a.625.625 0 00.308.469 8.416 8.416 0 002.05.85.626.626 0 00.552-.117l1.452-1.16c.113.004.225.004.338 0l1.456 1.166a.626.626 0 00.552.116 8.372 8.372 0 002.05-.85.624.624 0 00.307-.47l.207-1.852c.08-.077.159-.155.234-.235l1.858-.218a.625.625 0 00.469-.308 8.415 8.415 0 00.849-2.051.623.623 0 00-.117-.552l-1.159-1.452zM9 11.308a3.125 3.125 0 110-6.25 3.125 3.125 0 010 6.25z"
        }
        fill={"#666"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
