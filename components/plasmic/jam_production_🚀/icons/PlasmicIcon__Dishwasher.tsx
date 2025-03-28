/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DishwasherIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DishwasherIcon(props: DishwasherIconProps) {
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
          "M5.072 2.28c-.53.068-1.05.381-1.396.841-.236.313-.35.604-.4 1.019-.024.199-.034 3.25-.027 8.1l.011 7.78.093.26c.227.638.729 1.14 1.367 1.367l.26.093 6.9.011c4.535.008 7.016-.002 7.238-.029a2.17 2.17 0 001.762-1.473c.078-.251.08-.398.081-8.245.001-7.894 0-7.991-.079-8.249-.233-.754-.958-1.375-1.722-1.474-.351-.045-13.735-.047-14.088-.001zm14.091 1.571c.074.05.176.152.226.226.091.134.091.14.091 1.649V7.24h-7.235c-3.979 0-7.292.011-7.361.025l-.127.026.012-1.576c.011-1.554.012-1.577.1-1.699.195-.274-.386-.254 7.255-.255l6.904-.001.135.091zM6 5.5V6h1V5H6v.5zm4 0V6h5V5h-5v.5zm2.27 3.26h7.21v11.028l-.091.135a1.01 1.01 0 01-.226.226l-.135.091H12.13c-7.638 0-7.065.02-7.261-.255l-.089-.125-.01-5.575-.011-5.576.151.025c.082.014 3.395.025 7.36.026z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DishwasherIcon;
/* prettier-ignore-end */
