/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoorIcon(props: DoorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.265 2.189c-.45.052-.869.257-1.186.582-.338.34-.506.685-.558 1.14-.018.15-.027 1.826-.028 4.575v4.34l-.66.007-.66.007v.987h11.654v-.987l-.66-.007-.66-.007v-4.34c-.001-2.75-.01-4.425-.028-4.575-.052-.455-.22-.8-.558-1.14a1.945 1.945 0 00-1.221-.584c-.281-.032-5.157-.03-5.435.002zm5.649 1.07c.187.087.412.307.5.488l.066.133.007 4.473.007 4.474H4.506l.007-4.474.007-4.473.06-.122c.123-.25.339-.442.601-.535.131-.046.296-.048 2.859-.042l2.72.006.154.072zm-1.55 4.49c-.244.123-.365.345-.346.638a.62.62 0 00.3.506c.118.072.153.08.349.08.195 0 .23-.008.348-.08a.7.7 0 00.211-.212c.073-.117.08-.152.08-.348 0-.195-.007-.23-.08-.348a.609.609 0 00-.53-.3c-.163-.007-.21.002-.332.064z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DoorIcon;
/* prettier-ignore-end */
