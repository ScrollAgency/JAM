// pages/[[...catchall]].tsx

import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  type ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import Error from "next/error";
import { PLASMIC } from "@/plasmic-init";

// ✅ Composant principal
export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, unknown>;
  pageQuery?: Record<string, any>;
}) {
  const { plasmicData, queryCache, pageQuery } = props;

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
      pageQuery={pageQuery}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

// ✅ Génération statique des pages Plasmic
export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath =
    typeof catchall === "string"
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join("/")}`
      : "/";

  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return { props: {}, notFound: true };
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
      pageQuery: {}, // 👈 On passe un objet vide ici car context.query n'existe pas
    },
    revalidate: 60,
  };
};

// ✅ Déclaration des routes dynamiques pour Next.js
export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();

  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: "blocking",
  };
};
