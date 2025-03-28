/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BathIcon(props: BathIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.036 1.521c-.783.086-1.514.681-1.766 1.439-.109.327-.123.627-.123 2.55v1.797h-.644c-.616 0-.647.002-.748.06a.533.533 0 00-.178.18c-.07.118-.07.128-.079.702-.017 1.073.051 1.664.266 2.296.213.629.497 1.104.989 1.647l.21.233-.39.91c-.215.502-.381.92-.368.93.058.051.87.377.89.357.012-.012.168-.364.346-.782.11-.262.223-.522.342-.78.01-.01.122.035.249.101.415.216.978.392 1.501.47.348.052 4.586.052 4.934 0a5.003 5.003 0 001.506-.472c.124-.065.234-.109.245-.098.01.01.165.361.343.779.178.418.335.77.347.784.02.021.833-.306.89-.359.013-.012-.146-.414-.368-.932l-.39-.912.177-.19a4.667 4.667 0 001.223-2.472c.057-.338.09-1.882.043-2.068a.483.483 0 00-.238-.324l-.098-.06H4.16v-1.93c0-1.824.003-1.936.05-2.076a1.186 1.186 0 01.745-.744c.132-.046.232-.05 1.036-.05h.889v1.226h.987V2.81c0-.885-.003-.93-.056-1.041a.426.426 0 00-.18-.189l-.124-.072-1.134-.004a25.903 25.903 0 00-1.337.018zm8.45 7.419c-.014.695-.037.855-.18 1.26-.155.442-.316.74-.59 1.086a3.695 3.695 0 01-2.27 1.34c-.37.06-4.514.06-4.887 0A3.633 3.633 0 013.573 11.6a3.433 3.433 0 01-.718-1.016c-.264-.555-.347-.972-.348-1.75v-.54h10.992l-.013.646z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BathIcon;
/* prettier-ignore-end */
