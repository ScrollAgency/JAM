import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { LeafletMapProps } from "./LeafletMap.tsx";

const LeafletMap = dynamic<LeafletMapProps>(
  () => import("./LeafletMap.tsx").then((mod) => mod.default),
  {
    ssr: false,
  }
) as ComponentType<LeafletMapProps>;

export default LeafletMap;
