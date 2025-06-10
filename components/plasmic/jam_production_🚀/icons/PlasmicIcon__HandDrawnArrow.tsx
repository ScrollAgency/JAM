/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandDrawnArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandDrawnArrowIcon(props: HandDrawnArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M19.313.477C34.36.773 47.672 9.52 58.353 19.423c.55.509 1.142.995 1.706 1.477-.099-1.552-1.803-13.925.198-14.263 1.169-.198 1.361 1.406 1.449 2.047.632 4.637 1.076 8.866 1.339 13.551.198 3.528-2.78 4.297-5.801 4.934-4.614.97-5.139.789-9.956 1.623-.795.137-1.595.34-2.376.39-.919.058-2.117-.25-2.21-1.286-.105-1.174.867-1.648 1.862-1.77q.312-.037.62-.094c2.266-.41 12.855-1.732 12.788-2.503-.023-.26-.192-.48-.357-.681-4.754-5.826-11.049-10.356-17.54-14.068a46.6 46.6 0 0 0-14.083-5.246c-3.968-.783-8.07-1.024-12.088-.505-4.309.556-7.842 2.198-11.678 4.119C.017 8.254.534 5.243 1.59 4.328c1.16-1.006 2.82-1.36 4.24-1.829A40.4 40.4 0 0 1 19.313.477"
        }
      ></path>
    </svg>
  );
}

export default HandDrawnArrowIcon;
/* prettier-ignore-end */
