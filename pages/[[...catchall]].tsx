import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  type ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticPaths, GetStaticProps } from "next";

import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, unknown>;
}) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();

  // Si la page est en fallback (mode "blocking"), afficher un loader
  if (router.isFallback) {
    return <div>Chargement…</div>;
  }

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};

  const plasmicPath = Array.isArray(catchall)
    ? `/${catchall.join("/")}`
    : typeof catchall === "string"
    ? `/${catchall}`
    : "/";

  console.log("🔍 [Plasmic Catchall] Fetching path:", plasmicPath);

  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  if (!plasmicData) {
    console.warn("⚠️ No Plasmic data found for path:", plasmicPath);
    return {
      notFound: true,
    };
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );

  return {
    props: {
      plasmicData,
      queryCache,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();

  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: "blocking", // assure un bon rendu à la première visite
  };
};
