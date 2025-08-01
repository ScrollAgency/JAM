/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: nbNWFt-vOCjr

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
import sty from "./PlasmicSectionCard.module.css"; // plasmic-import: nbNWFt-vOCjr/css

import PersonSimpleWalkIcon from "./icons/PlasmicIcon__PersonSimpleWalk"; // plasmic-import: SiceSr5Gywz4/icon
import MailIcon from "./icons/PlasmicIcon__Mail"; // plasmic-import: 59m3anp9jGDs/icon
import IconPhClockCountdownIcon from "./icons/PlasmicIcon__IconPhClockCountdown"; // plasmic-import: ZcpjJL-rRIkk/icon

createPlasmicElementProxy;

export type PlasmicSectionCard__VariantMembers = {};
export type PlasmicSectionCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionCard__VariantsArgs;
export const PlasmicSectionCard__VariantProps = new Array<VariantPropType>();

export type PlasmicSectionCard__ArgsType = {
  icon?: string;
  onIconChange?: (val: string) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  description?: string;
  onDescriptionChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicSectionCard__ArgsType;
export const PlasmicSectionCard__ArgProps = new Array<ArgPropType>(
  "icon",
  "onIconChange",
  "title",
  "onTitleChange",
  "description",
  "onDescriptionChange"
);

export type PlasmicSectionCard__OverridesType = {
  sectionCard?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  textAndSupportingText4?: Flex__<"div">;
  text?: Flex__<"div">;
  supportingText6?: Flex__<"p">;
};

export interface DefaultSectionCardProps {
  icon?: string;
  onIconChange?: (val: string) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  description?: string;
  onDescriptionChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionCard__RenderFunc(props: {
  variants: PlasmicSectionCard__VariantsArgs;
  args: PlasmicSectionCard__ArgsType;
  overrides: PlasmicSectionCard__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "icon",
        type: "writable",
        variableType: "text",

        valueProp: "icon",
        onChangeProp: "onIconChange"
      },
      {
        path: "title",
        type: "writable",
        variableType: "text",

        valueProp: "title",
        onChangeProp: "onTitleChange"
      },
      {
        path: "description",
        type: "writable",
        variableType: "text",

        valueProp: "description",
        onChangeProp: "onDescriptionChange"
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
    <Stack__
      as={"div"}
      data-plasmic-name={"sectionCard"}
      data-plasmic-override={overrides.sectionCard}
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
        sty.sectionCard
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {(() => {
          try {
            return $state.icon == "img1";
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
          <PersonSimpleWalkIcon
            className={classNames(projectcss.all, sty.svg__da58L)}
            role={"img"}
          />
        ) : null}
        {(() => {
          try {
            return $state.icon == "img2";
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
          <MailIcon
            className={classNames(projectcss.all, sty.svg__lM3RK)}
            role={"img"}
          />
        ) : null}
        {(() => {
          try {
            return $state.icon == "img3";
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
          <IconPhClockCountdownIcon
            className={classNames(projectcss.all, sty.svg__dVdnR)}
            role={"img"}
          />
        ) : null}
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"textAndSupportingText4"}
        data-plasmic-override={overrides.textAndSupportingText4}
        hasGap={true}
        className={classNames(projectcss.all, sty.textAndSupportingText4)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $state.title;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Il suffit de traverser la rue";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <p
          data-plasmic-name={"supportingText6"}
          data-plasmic-override={overrides.supportingText6}
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.supportingText6
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $state.description;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Gr\u00e2ce \u00e0 la carte, rep\u00e9rez les jobs \u00e0 pourvoir pr\u00e8s de chez vous.";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </p>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  sectionCard: [
    "sectionCard",
    "freeBox",
    "textAndSupportingText4",
    "text",
    "supportingText6"
  ],
  freeBox: ["freeBox"],
  textAndSupportingText4: ["textAndSupportingText4", "text", "supportingText6"],
  text: ["text"],
  supportingText6: ["supportingText6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  sectionCard: "div";
  freeBox: "div";
  textAndSupportingText4: "div";
  text: "div";
  supportingText6: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionCard__VariantsArgs;
    args?: PlasmicSectionCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSectionCard__ArgProps,
          internalVariantPropNames: PlasmicSectionCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "sectionCard") {
    func.displayName = "PlasmicSectionCard";
  } else {
    func.displayName = `PlasmicSectionCard.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionCard = Object.assign(
  // Top-level PlasmicSectionCard renders the root element
  makeNodeComponent("sectionCard"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    textAndSupportingText4: makeNodeComponent("textAndSupportingText4"),
    text: makeNodeComponent("text"),
    supportingText6: makeNodeComponent("supportingText6"),

    // Metadata about props expected for PlasmicSectionCard
    internalVariantProps: PlasmicSectionCard__VariantProps,
    internalArgProps: PlasmicSectionCard__ArgProps
  }
);

export default PlasmicSectionCard;
/* prettier-ignore-end */
