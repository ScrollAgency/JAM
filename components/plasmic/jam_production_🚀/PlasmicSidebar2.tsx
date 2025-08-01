/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: RXqL3kdDrXwo

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import SideBarButton from "../../SideBarButton"; // plasmic-import: QWOZXZk1eTc0/component
import { Separator } from "../../../plasmic-library/others/Separator/Separator"; // plasmic-import: DY1R_wd6WfSn/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantshm8Nko4B5BDd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HM8Nko4B5BDd/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicSidebar2.module.css"; // plasmic-import: RXqL3kdDrXwo/css

import Pictogram2Icon from "./icons/PlasmicIcon__Pictogram2"; // plasmic-import: 6mBt3D9w7c35/icon
import GridFourIcon from "./icons/PlasmicIcon__GridFour"; // plasmic-import: KzAe7cfwmhYT/icon
import PictogramIcon from "./icons/PlasmicIcon__Pictogram"; // plasmic-import: KlZQiGxQTluF/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: PEpkd9PswE7k/icon
import PhGearFillIcon from "./icons/PlasmicIcon__PhGearFill"; // plasmic-import: M0oN64eO6n3z/icon
import SolarLogoutOutlineIcon from "./icons/PlasmicIcon__SolarLogoutOutline"; // plasmic-import: UZfkN-2mqbQ1/icon

createPlasmicElementProxy;

export type PlasmicSidebar2__VariantMembers = {};
export type PlasmicSidebar2__VariantsArgs = {};
type VariantPropType = keyof PlasmicSidebar2__VariantsArgs;
export const PlasmicSidebar2__VariantProps = new Array<VariantPropType>();

export type PlasmicSidebar2__ArgsType = {
  disableLinks?: boolean;
  onDisableLinksChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicSidebar2__ArgsType;
export const PlasmicSidebar2__ArgProps = new Array<ArgPropType>(
  "disableLinks",
  "onDisableLinksChange"
);

export type PlasmicSidebar2__OverridesType = {
  sidebarMenu?: Flex__<"nav">;
  logoWrapper?: Flex__<"a"> & Partial<LinkProps>;
  container?: Flex__<"div">;
  links?: Flex__<"div">;
  disconnectButton?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultSidebar2Props {
  disableLinks?: boolean;
  onDisableLinksChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSidebar2__RenderFunc(props: {
  variants: PlasmicSidebar2__VariantsArgs;
  args: PlasmicSidebar2__ArgsType;
  overrides: PlasmicSidebar2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showButton",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return false;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })()
      },
      {
        path: "disableLinks",
        type: "writable",
        variableType: "boolean",

        valueProp: "disableLinks",
        onChangeProp: "onDisableLinksChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    sidebarGetUserStripeInfos: usePlasmicDataOp(() => {
      return {
        sourceId: "kVSSe8ab4TtzwRPnTeEeUp",
        opId: "1284f981-03a5-4aae-9f90-4a9eb18e1c6b",
        userArgs: {
          filters: [$ctx.SupabaseUser.user.id]
        },
        cacheKey: `plasmic.$.1284f981-03a5-4aae-9f90-4a9eb18e1c6b.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    sidebarUserMonthlyRecharge: usePlasmicDataOp(() => {
      return {
        sourceId: "5T6gSzGCrEfYgV9rAkCoaD",
        opId: "9258b35e-6135-4ba7-8ce4-fe23b60361d6",
        userArgs: {
          params: [$queries.sidebarGetUserStripeInfos.data[0].customer_id]
        },
        cacheKey: `plasmic.$.9258b35e-6135-4ba7-8ce4-fe23b60361d6.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshm8Nko4B5BDd()
  });

  return (
    <Stack__
      as={"nav"}
      data-plasmic-name={"sidebarMenu"}
      data-plasmic-override={overrides.sidebarMenu}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.sidebarMenu
      )}
    >
      <Stack__
        as={PlasmicLink__}
        data-plasmic-name={"logoWrapper"}
        data-plasmic-override={overrides.logoWrapper}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.logoWrapper)}
        component={Link}
        onClick={async event => {
          const $steps = {};

          $steps["goToAccueil"] = true
            ? (() => {
                const actionArgs = { destination: `/` };
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToAccueil"] != null &&
            typeof $steps["goToAccueil"] === "object" &&
            typeof $steps["goToAccueil"].then === "function"
          ) {
            $steps["goToAccueil"] = await $steps["goToAccueil"];
          }
        }}
        platform={"nextjs"}
      >
        <Pictogram2Icon
          className={classNames(projectcss.all, sty.svg__zMu1J)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__udCos
          )}
        >
          {"JOB AROUND ME"}
        </div>
      </Stack__>
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(projectcss.all, sty.container)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"links"}
          data-plasmic-override={overrides.links}
          hasGap={true}
          className={classNames(projectcss.all, sty.links)}
        >
          <SideBarButton
            className={classNames("__wab_instance", sty.sideBarButton__qTcNb)}
            disabled={(() => {
              try {
                return (() => {})();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            iconStart={true}
            label={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__o16Ff
                )}
              >
                {"MES OFFRES"}
              </div>
            }
            linkTo={`/offre-employeur`}
            onClick={async event => {
              const $steps = {};

              $steps["goToOffreEmployeur"] = true
                ? (() => {
                    const actionArgs = { destination: `/offre-employeur` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToOffreEmployeur"] != null &&
                typeof $steps["goToOffreEmployeur"] === "object" &&
                typeof $steps["goToOffreEmployeur"].then === "function"
              ) {
                $steps["goToOffreEmployeur"] = await $steps[
                  "goToOffreEmployeur"
                ];
              }
            }}
            start={
              <GridFourIcon
                className={classNames(projectcss.all, sty.svg__v6Mau)}
                role={"img"}
              />
            }
            type={(() => {
              try {
                return $ctx.pagePath === "/offre-employeur" ||
                  $ctx.pagePath === "/candidatures-employeur/[job_id]"
                  ? "actif"
                  : "";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "actif";
                }
                throw e;
              }
            })()}
          />

          <SideBarButton
            className={classNames("__wab_instance", sty.sideBarButton___0Uclj)}
            disabled={(() => {
              try {
                return (() => {})();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            iconStart={true}
            label={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9WifW
                )}
              >
                {"Recherche Candidat"}
              </div>
            }
            linkTo={`/recherche-candidat`}
            onClick={async event => {
              const $steps = {};

              $steps["goToAccueil"] = true
                ? (() => {
                    const actionArgs = { destination: `/recherche-candidat` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToAccueil"] != null &&
                typeof $steps["goToAccueil"] === "object" &&
                typeof $steps["goToAccueil"].then === "function"
              ) {
                $steps["goToAccueil"] = await $steps["goToAccueil"];
              }
            }}
            start={
              <SearchIcon
                className={classNames(projectcss.all, sty.svg__lpi8H)}
                role={"img"}
              />
            }
            type={(() => {
              try {
                return $ctx.pagePath === "/recherche-candidat" ? "actif" : "";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "actif";
                }
                throw e;
              }
            })()}
          />

          <SideBarButton
            className={classNames("__wab_instance", sty.sideBarButton__ndpsZ)}
            disabled={(() => {
              try {
                return (() => {})();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            iconStart={true}
            label={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aPZnf
                )}
              >
                {"parametres"}
              </div>
            }
            linkTo={`/parametres-employeur`}
            onClick={async event => {
              const $steps = {};

              $steps["goToParametresEmployeur"] = true
                ? (() => {
                    const actionArgs = { destination: `/parametres-employeur` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToParametresEmployeur"] != null &&
                typeof $steps["goToParametresEmployeur"] === "object" &&
                typeof $steps["goToParametresEmployeur"].then === "function"
              ) {
                $steps["goToParametresEmployeur"] = await $steps[
                  "goToParametresEmployeur"
                ];
              }
            }}
            start={
              <PhGearFillIcon
                className={classNames(projectcss.all, sty.svg__hft1S)}
                role={"img"}
              />
            }
            type={(() => {
              try {
                return $ctx.pagePath === "/parametres-employeur" ||
                  $ctx.pagePath === "/parametres-abonnement"
                  ? "actif"
                  : "";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "actif";
                }
                throw e;
              }
            })()}
          />

          {(() => {
            try {
              return (() => {})();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <SideBarButton
              className={classNames("__wab_instance", sty.sideBarButton__po425)}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sFEhL
                  )}
                >
                  {"Mon compte"}
                </div>
              }
              linkTo={`/parametres-employeur`}
              onClick={async event => {
                const $steps = {};

                $steps["goToParametresDeCompte"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/parametres-employeur`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToParametresDeCompte"] != null &&
                  typeof $steps["goToParametresDeCompte"] === "object" &&
                  typeof $steps["goToParametresDeCompte"].then === "function"
                ) {
                  $steps["goToParametresDeCompte"] = await $steps[
                    "goToParametresDeCompte"
                  ];
                }
              }}
              start={null}
              type={(() => {
                try {
                  return $ctx.pagePath === "/parametres-employeur"
                    ? "actif"
                    : "";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "actif";
                  }
                  throw e;
                }
              })()}
            />
          ) : null}
          {(() => {
            try {
              return (() => {})();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <SideBarButton
              className={classNames("__wab_instance", sty.sideBarButton__gn78H)}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zkEHz
                  )}
                >
                  {"Mon abonnement"}
                </div>
              }
              linkTo={`/parametres-abonnement`}
              onClick={async event => {
                const $steps = {};

                $steps["goToParametresDeCompte"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/parametres-abonnement`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToParametresDeCompte"] != null &&
                  typeof $steps["goToParametresDeCompte"] === "object" &&
                  typeof $steps["goToParametresDeCompte"].then === "function"
                ) {
                  $steps["goToParametresDeCompte"] = await $steps[
                    "goToParametresDeCompte"
                  ];
                }
              }}
              start={null}
              type={(() => {
                try {
                  return $ctx.pagePath === "/parametres-abonnement"
                    ? "actif"
                    : "";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "actif";
                  }
                  throw e;
                }
              })()}
            />
          ) : null}
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"disconnectButton"}
          data-plasmic-override={overrides.disconnectButton}
          hasGap={true}
          className={classNames(projectcss.all, sty.disconnectButton)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__iiBjj)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oJi1F
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 600 }}
                >
                  {"VOS ANNONCES"}
                </span>
              </React.Fragment>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__tWrQc)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ek9E1
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 500 }}
                  >
                    {"Classiques :"}
                  </span>
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ngIM,
                  (() => {
                    try {
                      return $queries.sidebarUserMonthlyRecharge?.data?.response
                        ?.solde?.totalClassic == 0
                        ? "grey-600"
                        : "green-500";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        ($queries.sidebarUserMonthlyRecharge.data?.response
                          ?.solde?.totalClassic || 0) +
                        "/" +
                        ($queries.sidebarUserMonthlyRecharge.data?.response
                          ?.total?.totalClassic || 0)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <Separator
              className={
                "" + " " + classNames("__wab_instance", sty.separateur__pqhI)
              }
              decorative={false}
              orientation={"horizontal"}
            />

            <div className={classNames(projectcss.all, sty.freeBox___8HqIp)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ptU3M
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 500 }}
                  >
                    {"Last Minute :"}
                  </span>
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z3Gq,
                  (() => {
                    try {
                      return $queries.sidebarUserMonthlyRecharge.data?.response
                        ?.solde?.totalLastMinute == 0
                        ? "grey-600"
                        : "green-500";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        ($queries.sidebarUserMonthlyRecharge.data?.response
                          ?.solde?.totalLastMinute || 0) +
                        "/" +
                        ($queries.sidebarUserMonthlyRecharge.data?.response
                          ?.total?.totalLastMinute || 0)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <Separator
              className={
                "" + " " + classNames("__wab_instance", sty.separateur__m5BEk)
              }
              decorative={false}
              orientation={"horizontal"}
            />

            <div className={classNames(projectcss.all, sty.freeBox__qc7WD)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qVzSn
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 500 }}
                  >
                    {"Boost\u00e9es :"}
                  </span>
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yal,
                  (() => {
                    try {
                      return $queries.sidebarUserMonthlyRecharge.data?.response
                        ?.solde?.totalBoost == 0
                        ? "grey-600"
                        : "green-500";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        ($queries.sidebarUserMonthlyRecharge.data?.response
                          ?.solde?.totalBoost || 0) +
                        "/" +
                        ($queries.sidebarUserMonthlyRecharge.data?.response
                          ?.total?.totalBoost || 0)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <Separator
              className={
                "" + " " + classNames("__wab_instance", sty.separateur__zMctD)
              }
              decorative={false}
              orientation={"horizontal"}
            />
          </div>
          <SolarLogoutOutlineIcon
            className={classNames(projectcss.all, sty.svg___42UmA)}
            role={"img"}
          />

          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            component={Link}
            href={""}
            onClick={async event => {
              const $steps = {};

              $steps["invokeGlobalAction"] = true
                ? (() => {
                    const actionArgs = { args: ["/login"] };
                    return $globalActions[
                      "SupabaseUserGlobalContext.logout"
                    ]?.apply(null, [...actionArgs.args]);
                  })()
                : undefined;
              if (
                $steps["invokeGlobalAction"] != null &&
                typeof $steps["invokeGlobalAction"] === "object" &&
                typeof $steps["invokeGlobalAction"].then === "function"
              ) {
                $steps["invokeGlobalAction"] = await $steps[
                  "invokeGlobalAction"
                ];
              }
            }}
            platform={"nextjs"}
          >
            {"D\u00e9connexion"}
          </PlasmicLink__>
          <SideBarButton
            className={classNames("__wab_instance", sty.sideBarButton__pTy6I)}
            iconStart={true}
            label={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__owv49
                )}
              >
                {"D\u00e9connexion"}
              </div>
            }
            onClick={async event => {
              const $steps = {};

              $steps["invokeGlobalAction"] = true
                ? (() => {
                    const actionArgs = { args: ["/"] };
                    return $globalActions[
                      "SupabaseUserGlobalContext.logout"
                    ]?.apply(null, [...actionArgs.args]);
                  })()
                : undefined;
              if (
                $steps["invokeGlobalAction"] != null &&
                typeof $steps["invokeGlobalAction"] === "object" &&
                typeof $steps["invokeGlobalAction"].then === "function"
              ) {
                $steps["invokeGlobalAction"] = await $steps[
                  "invokeGlobalAction"
                ];
              }
            }}
            start={
              <SolarLogoutOutlineIcon
                className={classNames(projectcss.all, sty.svg__rBazY)}
                role={"img"}
              />
            }
            type={(() => {
              try {
                return $ctx.pagePath === "/" ? "actif" : "";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "actif";
                }
                throw e;
              }
            })()}
          />
        </Stack__>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  sidebarMenu: [
    "sidebarMenu",
    "logoWrapper",
    "container",
    "links",
    "disconnectButton",
    "link"
  ],
  logoWrapper: ["logoWrapper"],
  container: ["container", "links", "disconnectButton", "link"],
  links: ["links"],
  disconnectButton: ["disconnectButton", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  sidebarMenu: "nav";
  logoWrapper: "a";
  container: "div";
  links: "div";
  disconnectButton: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebar2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebar2__VariantsArgs;
    args?: PlasmicSidebar2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSidebar2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidebar2__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSidebar2__ArgProps,
          internalVariantPropNames: PlasmicSidebar2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSidebar2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "sidebarMenu") {
    func.displayName = "PlasmicSidebar2";
  } else {
    func.displayName = `PlasmicSidebar2.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebar2 = Object.assign(
  // Top-level PlasmicSidebar2 renders the root element
  makeNodeComponent("sidebarMenu"),
  {
    // Helper components rendering sub-elements
    logoWrapper: makeNodeComponent("logoWrapper"),
    container: makeNodeComponent("container"),
    links: makeNodeComponent("links"),
    disconnectButton: makeNodeComponent("disconnectButton"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSidebar2
    internalVariantProps: PlasmicSidebar2__VariantProps,
    internalArgProps: PlasmicSidebar2__ArgProps
  }
);

export default PlasmicSidebar2;
/* prettier-ignore-end */
