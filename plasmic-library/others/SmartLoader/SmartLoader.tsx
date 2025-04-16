import * as React from "react";
import { useEffect } from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface SmartLoaderProps {
  shouldRun?: boolean;
  condition1?: boolean;
  action1?: () => void;
  condition2?: boolean;
  action2?: () => void;
  condition3?: boolean;
  action3?: () => void;
  condition4?: boolean;
  action4?: () => void;
  condition5?: boolean;
  action5?: () => void;
  className?: string;
}

function SmartLoader_(props: SmartLoaderProps, ref: HTMLElementRefOf<"div">) {
  const {
    shouldRun = true,
    condition1,
    action1,
    condition2,
    action2,
    condition3,
    action3,
    condition4,
    action4,
    condition5,
    action5,
  } = props;

  useEffect(() => {
    if (shouldRun && condition1 && typeof action1 === "function") {
      action1();
    }
  }, [shouldRun, condition1, action1]);

  useEffect(() => {
    if (shouldRun && condition2 && typeof action2 === "function") {
      action2();
    }
  }, [shouldRun, condition2, action2]);

  useEffect(() => {
    if (shouldRun && condition3 && typeof action3 === "function") {
      action3();
    }
  }, [shouldRun, condition3, action3]);

  useEffect(() => {
    if (shouldRun && condition4 && typeof action4 === "function") {
      action4();
    }
  }, [shouldRun, condition4, action4]);

  useEffect(() => {
    if (shouldRun && condition5 && typeof action5 === "function") {
      action5();
    }
  }, [shouldRun, condition5, action5]);

  return null;
}

const SmartLoader = React.forwardRef(SmartLoader_);
export default SmartLoader;
