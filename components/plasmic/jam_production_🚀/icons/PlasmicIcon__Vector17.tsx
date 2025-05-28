/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.399 3.089a1.544 1.544 0 100-3.089 1.544 1.544 0 000 3.089zm0-2.317a.772.772 0 110 1.545.772.772 0 010-1.545zm3.089 5.405a.386.386 0 01-.386.387c-1.705 0-2.556-.86-3.24-1.55a11.321 11.321 0 00-.386-.379l-.648 1.49 1.795 1.283a.386.386 0 01.162.314v2.702a.386.386 0 11-.772 0V7.921l-1.5-1.072-1.62 3.73a.386.386 0 01-.71-.309l2.61-6.002c-.449-.08-1.009.058-1.674.414A7.915 7.915 0 00.644 5.733a.386.386 0 01-.529-.563c.12-.113 2.977-2.762 4.765-1.21.184.16.36.338.53.51.674.68 1.31 1.321 2.692 1.321a.386.386 0 01.386.386z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
