import { getTokenValue } from "./getTokenValue";

export const wrappers = {
  simple: {
      padding: "32px",
      borderRadius: "8px",
      backgroundColor: getTokenValue("tertiary"),
      boxShadow: "none",
      rowGap: "32px",
    },
    card: {
      position: "relative",
      padding: "48px",
      backgroundColor: getTokenValue("white"),
      borderRadius: "24px",
      rowGap: "24px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: getTokenValue("shadow-medium"),
      border: `1px solid ${getTokenValue("sand-200-borders")}`,
      width: "100%",
      maxWidth: "630px",
      minHeight: "auto",
      boxSizing: "border-box",
    
      "@media (max-width: 768px)": {
        padding: "24px",
        borderRadius: "16px",
        rowGap: "20px",
      },

      "@media (max-width: 480px)": {
        padding: "20px",
        borderRadius: "12px",
        rowGap: "16px",
      }
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
      margin: 0,
    },
    custom: {
      padding: "48px",
      width: "100%",
      borderRadius: "16px",
      backgroundColor: getTokenValue("secondary"),
      boxShadow: getTokenValue("shadow-small"),
    },
    signUpCard: {
      backgroundColor: getTokenValue("white"),
      maxWidth: "400px",
      width: "100%",
      margin: "0 auto",
    },
    accountCard: {
      display: "flex",
      flexDirection: "column",
      rowGap: "20px",
      backgroundColor: getTokenValue("white"),
      width: "1191px",
      maxWidth: "100%",
      maxHeight: "640px",
      padding: "64px",
      borderRadius: "24px",
      boxSizing: "border-box",
    },
};
