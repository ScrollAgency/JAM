import { getTokenValue } from "./getTokenValue";

export const heading1 = {
      fontFamily: "Manrope, sans-serif",
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "120%",
      color: getTokenValue("brand-black"),
    };
export const heading2 = {
      fontFamily: "Improvise, sans-serif",
      fontWeight: "bold",
      fontSize: "40px",
      lineHeight: "130%",
      color: getTokenValue("primary"),
    };
export const heading3 = {
      fontFamily: "Improvise, sans-serif",
      fontWeight: "normal",
      fontSize: "32px",
      lineHeight: "140%",
      color: getTokenValue("primary"),
      paddingBottom: "18px",
    };
export const heading4 = {
      fontFamily: "Manrope",
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "150%",
      color: getTokenValue("brand-black"),
    };

export const checkPassword = {
    fontFamily: "Manrope, sans-serif",
    fontWeight: "500",
    fontSize: "14px",
    color: getTokenValue("grey-700"),
    lineHeight: "1.4",
    marginTop: "8px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  };

export const accountInfos = {
    fontFamily: "Manrope, sans-serif",
    fontWeight: "regular",
    fontSize: "12px",
    lineHeight: "130%",
    color: getTokenValue("grey-600"),
  };
