/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: i_6_bWmNYijl

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicLikeJobCard.module.css"; // plasmic-import: i_6_bWmNYijl/css

import PhMapPin3Icon from "./icons/PlasmicIcon__PhMapPin3"; // plasmic-import: jTh-0Y4plpX9/icon
import PhBriefcaseIcon from "./icons/PlasmicIcon__PhBriefcase"; // plasmic-import: EdRddldiV5u0/icon
import PhFileText2Icon from "./icons/PlasmicIcon__PhFileText2"; // plasmic-import: dbjbAgK_hzNM/icon
import PhClockCountdown2Icon from "./icons/PlasmicIcon__PhClockCountdown2"; // plasmic-import: jfi-_eNi6Hdj/icon
import PhClock2Icon from "./icons/PlasmicIcon__PhClock2"; // plasmic-import: pRkBKEiKHDz6/icon
import PhCoinsLight2Icon from "./icons/PlasmicIcon__PhCoinsLight2"; // plasmic-import: NXtPmYqMEGnX/icon

createPlasmicElementProxy;

export type PlasmicLikeJobCard__VariantMembers = {};
export type PlasmicLikeJobCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicLikeJobCard__VariantsArgs;
export const PlasmicLikeJobCard__VariantProps = new Array<VariantPropType>();

export type PlasmicLikeJobCard__ArgsType = {
  name?: string;
  onNameChange?: (val: string) => void;
  city?: string;
  onCityChange?: (val: string) => void;
  campany?: string;
  onCampanyChange?: (val: string) => void;
  sector?: string;
  onSectorChange2?: (val: string) => void;
  contractType?: string;
  onContractTypeChange?: (val: string) => void;
  availability?: string;
  onAvailabilityChange?: (val: string) => void;
  workingTime?: string;
  onWorkingTimeChange?: (val: string) => void;
  salary?: string;
  onSalaryChange?: (val: string) => void;
  workMode?: string;
  onWorkModeChange?: (val: string) => void;
  companyLogo?: string;
  onCompanyLogoChange?: (val: string) => void;
  isLastMinute?: boolean;
  onIsLastMinuteChange?: (val: string) => void;
  isNew?: boolean;
  onIsNewChange?: (val: string) => void;
  isApplied?: boolean;
  onIsAppliedChange?: (val: string) => void;
  onClick?: (event: any) => void;
  showCompanyLogo?: boolean;
};
type ArgPropType = keyof PlasmicLikeJobCard__ArgsType;
export const PlasmicLikeJobCard__ArgProps = new Array<ArgPropType>(
  "name",
  "onNameChange",
  "city",
  "onCityChange",
  "campany",
  "onCampanyChange",
  "sector",
  "onSectorChange2",
  "contractType",
  "onContractTypeChange",
  "availability",
  "onAvailabilityChange",
  "workingTime",
  "onWorkingTimeChange",
  "salary",
  "onSalaryChange",
  "workMode",
  "onWorkModeChange",
  "companyLogo",
  "onCompanyLogoChange",
  "isLastMinute",
  "onIsLastMinuteChange",
  "isNew",
  "onIsNewChange",
  "isApplied",
  "onIsAppliedChange",
  "onClick",
  "showCompanyLogo"
);

export type PlasmicLikeJobCard__OverridesType = {
  root?: Flex__<"div">;
  frame?: Flex__<"div">;
  frame3?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  frame4?: Flex__<"div">;
  frame5?: Flex__<"div">;
  infos?: Flex__<"div">;
  frame6?: Flex__<"div">;
  jobs?: Flex__<"div">;
  jobs2?: Flex__<"div">;
  jobs3?: Flex__<"div">;
  frame7?: Flex__<"div">;
  frame8?: Flex__<"div">;
};

export interface DefaultLikeJobCardProps {
  name?: string;
  onNameChange?: (val: string) => void;
  city?: string;
  onCityChange?: (val: string) => void;
  campany?: string;
  onCampanyChange?: (val: string) => void;
  sector?: string;
  onSectorChange2?: (val: string) => void;
  contractType?: string;
  onContractTypeChange?: (val: string) => void;
  availability?: string;
  onAvailabilityChange?: (val: string) => void;
  workingTime?: string;
  onWorkingTimeChange?: (val: string) => void;
  salary?: string;
  onSalaryChange?: (val: string) => void;
  workMode?: string;
  onWorkModeChange?: (val: string) => void;
  companyLogo?: string;
  onCompanyLogoChange?: (val: string) => void;
  isLastMinute?: boolean;
  onIsLastMinuteChange?: (val: string) => void;
  isNew?: boolean;
  onIsNewChange?: (val: string) => void;
  isApplied?: boolean;
  onIsAppliedChange?: (val: string) => void;
  onClick?: (event: any) => void;
  showCompanyLogo?: boolean;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLikeJobCard__RenderFunc(props: {
  variants: PlasmicLikeJobCard__VariantsArgs;
  args: PlasmicLikeJobCard__ArgsType;
  overrides: PlasmicLikeJobCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showCompanyLogo: true
        },
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "name",
        type: "writable",
        variableType: "text",

        valueProp: "name",
        onChangeProp: "onNameChange"
      },
      {
        path: "city",
        type: "writable",
        variableType: "text",

        valueProp: "city",
        onChangeProp: "onCityChange"
      },
      {
        path: "campany",
        type: "writable",
        variableType: "text",

        valueProp: "campany",
        onChangeProp: "onCampanyChange"
      },
      {
        path: "sector",
        type: "writable",
        variableType: "text",

        valueProp: "sector",
        onChangeProp: "onSectorChange2"
      },
      {
        path: "contractType",
        type: "writable",
        variableType: "text",

        valueProp: "contractType",
        onChangeProp: "onContractTypeChange"
      },
      {
        path: "availability",
        type: "writable",
        variableType: "text",

        valueProp: "availability",
        onChangeProp: "onAvailabilityChange"
      },
      {
        path: "workingTime",
        type: "writable",
        variableType: "text",

        valueProp: "workingTime",
        onChangeProp: "onWorkingTimeChange"
      },
      {
        path: "salary",
        type: "writable",
        variableType: "text",

        valueProp: "salary",
        onChangeProp: "onSalaryChange"
      },
      {
        path: "workMode",
        type: "writable",
        variableType: "text",

        valueProp: "workMode",
        onChangeProp: "onWorkModeChange"
      },
      {
        path: "companyLogo",
        type: "writable",
        variableType: "text",

        valueProp: "companyLogo",
        onChangeProp: "onCompanyLogoChange"
      },
      {
        path: "isLastMinute",
        type: "writable",
        variableType: "boolean",

        valueProp: "isLastMinute",
        onChangeProp: "onIsLastMinuteChange"
      },
      {
        path: "isNew",
        type: "writable",
        variableType: "boolean",

        valueProp: "isNew",
        onChangeProp: "onIsNewChange"
      },
      {
        path: "isApplied",
        type: "writable",
        variableType: "boolean",

        valueProp: "isApplied",
        onChangeProp: "onIsAppliedChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      onClick={args.onClick}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"frame"}
        data-plasmic-override={overrides.frame}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"frame3"}
          data-plasmic-override={overrides.frame3}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame3)}
        >
          {(() => {
            try {
              return $props.showCompanyLogo;
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
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__wHnrI)}
                displayHeight={"auto"}
                displayMaxHeight={"30px"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"86px"}
                height={``}
                loading={"lazy"}
                src={$state.companyLogo}
                width={``}
              />
            </div>
          ) : null}
          <Stack__
            as={"div"}
            data-plasmic-name={"frame4"}
            data-plasmic-override={overrides.frame4}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame4)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3LmuK
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Vietnamese Interpreter";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"frame5"}
              data-plasmic-override={overrides.frame5}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame5)}
            >
              <PhMapPin3Icon
                className={classNames(projectcss.all, sty.svg__iMlLp)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1MhYg
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.city + ", " + $state.campany;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Paris (75), Impact.com";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"infos"}
            data-plasmic-override={overrides.infos}
            hasGap={true}
            className={classNames(projectcss.all, sty.infos)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"frame6"}
              data-plasmic-override={overrides.frame6}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame6)}
            >
              <PhBriefcaseIcon
                className={classNames(projectcss.all, sty.svg___3VOio)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___98B5X
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.sector;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Langues \u00e9trang\u00e8res";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"jobs"}
              data-plasmic-override={overrides.jobs}
              hasGap={true}
              className={classNames(projectcss.all, sty.jobs)}
            >
              <PhFileText2Icon
                className={classNames(projectcss.all, sty.svg__lbS3C)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vFby5
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.contractType;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "CDI";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"jobs2"}
              data-plasmic-override={overrides.jobs2}
              hasGap={true}
              className={classNames(projectcss.all, sty.jobs2)}
            >
              <PhClockCountdown2Icon
                className={classNames(projectcss.all, sty.svg__aOcCa)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4Oxq4
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.availability;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Imm\u00e9diat";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"jobs3"}
              data-plasmic-override={overrides.jobs3}
              hasGap={true}
              className={classNames(projectcss.all, sty.jobs3)}
            >
              <PhClock2Icon
                className={classNames(projectcss.all, sty.svg__lrRjq)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zLiUm
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.workingTime;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "25h";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"frame7"}
              data-plasmic-override={overrides.frame7}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame7)}
            >
              <PhCoinsLight2Icon
                className={classNames(projectcss.all, sty.svg__x5TNy)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n3Uxp
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.salary;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "2000\u20ac";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"frame8"}
              data-plasmic-override={overrides.frame8}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame8)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__x1Sdw)}
                displayHeight={"12px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"12px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/jam_production_🚀/images/iconPhOfficeChair6.svg",
                  fullWidth: 12,
                  fullHeight: 12,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i9Cem
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.workMode;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "T\u00e9l\u00e9travail 100%";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
          </Stack__>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame",
    "frame3",
    "freeBox",
    "frame4",
    "frame5",
    "infos",
    "frame6",
    "jobs",
    "jobs2",
    "jobs3",
    "frame7",
    "frame8"
  ],
  frame: [
    "frame",
    "frame3",
    "freeBox",
    "frame4",
    "frame5",
    "infos",
    "frame6",
    "jobs",
    "jobs2",
    "jobs3",
    "frame7",
    "frame8"
  ],
  frame3: [
    "frame3",
    "freeBox",
    "frame4",
    "frame5",
    "infos",
    "frame6",
    "jobs",
    "jobs2",
    "jobs3",
    "frame7",
    "frame8"
  ],
  freeBox: ["freeBox"],
  frame4: ["frame4", "frame5"],
  frame5: ["frame5"],
  infos: ["infos", "frame6", "jobs", "jobs2", "jobs3", "frame7", "frame8"],
  frame6: ["frame6"],
  jobs: ["jobs"],
  jobs2: ["jobs2"],
  jobs3: ["jobs3"],
  frame7: ["frame7"],
  frame8: ["frame8"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame: "div";
  frame3: "div";
  freeBox: "div";
  frame4: "div";
  frame5: "div";
  infos: "div";
  frame6: "div";
  jobs: "div";
  jobs2: "div";
  jobs3: "div";
  frame7: "div";
  frame8: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLikeJobCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLikeJobCard__VariantsArgs;
    args?: PlasmicLikeJobCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLikeJobCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLikeJobCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLikeJobCard__ArgProps,
          internalVariantPropNames: PlasmicLikeJobCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLikeJobCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLikeJobCard";
  } else {
    func.displayName = `PlasmicLikeJobCard.${nodeName}`;
  }
  return func;
}

export const PlasmicLikeJobCard = Object.assign(
  // Top-level PlasmicLikeJobCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame: makeNodeComponent("frame"),
    frame3: makeNodeComponent("frame3"),
    freeBox: makeNodeComponent("freeBox"),
    frame4: makeNodeComponent("frame4"),
    frame5: makeNodeComponent("frame5"),
    infos: makeNodeComponent("infos"),
    frame6: makeNodeComponent("frame6"),
    jobs: makeNodeComponent("jobs"),
    jobs2: makeNodeComponent("jobs2"),
    jobs3: makeNodeComponent("jobs3"),
    frame7: makeNodeComponent("frame7"),
    frame8: makeNodeComponent("frame8"),

    // Metadata about props expected for PlasmicLikeJobCard
    internalVariantProps: PlasmicLikeJobCard__VariantProps,
    internalArgProps: PlasmicLikeJobCard__ArgProps
  }
);

export default PlasmicLikeJobCard;
/* prettier-ignore-end */
