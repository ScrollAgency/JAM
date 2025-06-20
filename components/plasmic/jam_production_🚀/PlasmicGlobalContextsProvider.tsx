/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { SupabaseUserGlobalContext } from "../../../index"; // plasmic-import: tNrCv3fe8u3Y/codeComponent
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-shopify";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  supabaseUserGlobalContextProps?: Partial<
    Omit<React.ComponentProps<typeof SupabaseUserGlobalContext>, "children">
  >;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    antdConfigProviderProps,
    supabaseUserGlobalContextProps,
    commerceProviderComponentProps,
    embedCssProps
  } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#FFFFFF"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677FF"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : false
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <SupabaseUserGlobalContext
        {...supabaseUserGlobalContextProps}
        defaultRedirectOnLoginSuccess={
          supabaseUserGlobalContextProps &&
          "defaultRedirectOnLoginSuccess" in supabaseUserGlobalContextProps
            ? supabaseUserGlobalContextProps.defaultRedirectOnLoginSuccess!
            : ``
        }
      >
        <CommerceProviderComponent
          {...commerceProviderComponentProps}
          accessToken={
            commerceProviderComponentProps &&
            "accessToken" in commerceProviderComponentProps
              ? commerceProviderComponentProps.accessToken!
              : "ef7d41c7bf7e1c214074d0d3047bcd7b"
          }
          storeDomain={
            commerceProviderComponentProps &&
            "storeDomain" in commerceProviderComponentProps
              ? commerceProviderComponentProps.storeDomain!
              : "next-js-store.myshopify.com"
          }
        >
          <EmbedCss
            {...embedCssProps}
            css={
              embedCssProps && "css" in embedCssProps
                ? embedCssProps.css!
                : "/* CSS snippet */\r\n\r\n.stretch {\r\n  width: 100%;\r\n}\r\n\r\n.last-minute {\r\n  background: linear-gradient(180deg, #F6165B, #F36320); /* Rose \u2192 Orange (haut \u2192 bas) */\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.zero-charge {\r\n  color: #C8C8C8;\r\n}\r\n\r\ncharge {\r\n  color: #666666;\r\n}\r\n\r\n.grey-600 {\r\n  color: #666666;\r\n}\r\n\r\n.green-500 {\r\n  color: #BBFE68;\r\n}\r\n"
            }
          >
            {children}
          </EmbedCss>
        </CommerceProviderComponent>
      </SupabaseUserGlobalContext>
    </AntdConfigProvider>
  );
}
