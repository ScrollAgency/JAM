import * as React from "react";
import {
  PlasmicButton6,
  DefaultButton6Props
} from "./plasmic/jam_production_\uD83D\uDE80/PlasmicButton6";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface Button6Props extends DefaultButton6Props {
  // Feel free to add any additional props that this component should receive
}
function Button6_(props: Button6Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton6.useBehavior<Button6Props>(props, ref);
  return <PlasmicButton6 {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<Button6Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button6Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Button6 = React.forwardRef(Button6_) as any as ButtonComponentType;

export default Object.assign(Button6, { __plumeType: "button" });
