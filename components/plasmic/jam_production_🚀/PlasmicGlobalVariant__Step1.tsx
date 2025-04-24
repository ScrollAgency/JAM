/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type Step1Value = "unnamedVariant";
export const Step1Context = React.createContext<Step1Value | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useStep1() {
  return React.useContext(Step1Context);
}

export default Step1Context;
/* prettier-ignore-end */
