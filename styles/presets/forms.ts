import { Column } from "jspdf-autotable";
import { getTokenValue } from "./getTokenValue";

export const form = {
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
    width: "100%",
  };

export const  formLabel = {
    fontFamily: "Manrope, sans-serif",
    fontSize: "14px",
    fontWeight: "bold",
    color: getTokenValue("grey-900"),
    lineHeight: "20px",
    textAlign: "left",
    verticalAlign: "top",
    marginBottom: "4px",
    display: "block",
  };

export const formMessage = {
    fontFamily: "Manrope, sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    color: getTokenValue("grey-900"),
    lineHeight: "140%",
    textAlign: "left",
    marginTop: "12px",
  };

export const requiredField = {
    content: "*",
    color: getTokenValue("error"),
    marginLeft: "2px",
    fontSize: "16px",
    position: "relative",
    top: "2px",
  };

export const checkboxGroup = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "8px 0",
  };

export const checkboxLabel = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    fontSize: "14px",
    color: getTokenValue("grey-900"),
    lineHeight: "1.4",
    columnGap: "8px",
  };

export const phoneInputGroup = {
    display: "flex",
    border: `1px solid ${getTokenValue("sand-200-borders")}`,
    borderRadius: "8px",
    overflow: "hidden",
    height: "42px",
    backgroundColor: getTokenValue("white"),
  };

export const phoneSelector = {
    minWidth: "80px",
    display: "flex",
    alignItems: "center",
    padding: "0 0 0 12px",
    backgroundColor: getTokenValue("white"),
    border: "none",
    borderRight: "none !important",
    position: "relative",
    after: {
      content: "",
      position: "absolute",
      right: "8px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "0",
      height: "0",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "5px solid #666",
      pointerEvents: "none",
    },
  };

export const phoneInput = {
    flex: 1,
    padding: "10px 12px 10px 0",
    border: "none",
    outline: "none",
    fontSize: "16px",
  };
