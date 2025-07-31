/*import * as React from "react";
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
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
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
  // Use revalidate if you want incremental static regeneration
  return { props: { plasmicData, queryCache }, revalidate: 60 };
}

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
}*/


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

type CatchAllProps = {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, unknown>;
  // Ajout de votre donnée custom
  customData?: any;
};

export default function PlasmicLoaderPage(props: CatchAllProps) {
  const { plasmicData, queryCache, customData } = props;
  const router = useRouter();

  // 404 si la page Plasmic n'existe pas
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
      {/* On passe customData à votre composant Plasmic */}
      <PlasmicComponent
        component={pageMeta.displayName}
        componentProps={{ customData }}
      />
    </PlasmicRootProvider>
  );
}

export const getStaticProps: GetStaticProps<CatchAllProps> = async (context) => {
  const { catchall } = context.params ?? {};
  const slug = typeof catchall === "string"
    ? catchall
    : Array.isArray(catchall)
    ? catchall.join("/")
    : "";

  // 1) Récupère les données Plasmic
  const plasmicData = await PLASMIC.maybeFetchComponentData(`/${slug}`);
  if (!plasmicData) {
    // route non-Plasmic
    return { props: {} };
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  // 2) Pré-cache des Data Fetchers Plasmic (si vous en utilisez)
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );

  // 3) **Fetch de VOS données** côté serveur
  //    Exemple : https://api.mondomaine.com/items/[slug]
  let customData = null;
  try {
    const res = await fetch(`https://api.mondomaine.com/items/${slug}`);
    if (res.ok) {
      customData = await res.json();
    }
  } catch (e) {
    console.warn("Erreur de fetch customData:", e);
  }

  return {
    props: {
      plasmicData,
      queryCache,
      customData,      // on renvoie votre donnée au composant
    },
    revalidate: 60,    // ISR toutes les 60 s
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
    fallback: "blocking",
  };
};
