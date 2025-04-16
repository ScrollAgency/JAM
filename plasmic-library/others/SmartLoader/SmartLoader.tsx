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
    if (!shouldRun) return;

    const steps: { condition?: boolean; action?: () => void }[] = [
      { condition: condition1, action: action1 },
      { condition: condition2, action: action2 },
      { condition: condition3, action: action3 },
      { condition: condition4, action: action4 },
      { condition: condition5, action: action5 },
    ];

    for (const { condition, action } of steps) {
      if (condition && typeof action === "function") {
        action();
      }
    }
  }, [
    shouldRun,
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
  ]);

  return null;
}

const SmartLoader = React.forwardRef(SmartLoader_);
export default SmartLoader;
