import * as React from "react";
import { useEffect, useRef } from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface PageLoaderProps {
  shouldRun?: boolean;
  onMount?: () => void;
  className?: string;
}

function PageLoader_(props: PageLoaderProps, ref: HTMLElementRefOf<"div">) {
  const { shouldRun = true, onMount } = props;
  const hasRun = useRef(false);

  useEffect(() => {
    if (shouldRun && onMount && !hasRun.current) {
      onMount();
      hasRun.current = true;
    }
  }, [shouldRun, onMount]);

  return null;
}

const PageLoader = React.forwardRef(PageLoader_);
export default PageLoader;
