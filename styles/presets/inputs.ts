import { getTokenValue } from "./getTokenValue";

export const inputs = {
  simple: {
      fontFamily: "Manrope, sans-serif",
      padding: "12px",
      width: "100%",
      height: "48px",
      color: getTokenValue("grey-400"),
      fontWeight: 600,
      borderRadius: "8px",
      borderColor: getTokenValue("grey-200"),
      borderWidth: "1px",
      fontSize: "15px",
      backgroundColor: getTokenValue("white"),
      focus: {
        outline: "none",
        borderColor: getTokenValue("purple-500"),
        boxShadow: getTokenValue("shadow-focus"),
      },
      placeholder: {
        opacity: "1",
        color: "inherit",
        fontFamily: "Manrope, sans-serif",
      },
    },
    advance: {
      fontSize: "16px",
      padding: "12px",
      border: `1px solid ${getTokenValue("lavender-500")}`,
      borderRadius: "8px",
      width: "100%",
      backgroundColor: getTokenValue("grey-50"),
    },
};

export const inputField = {
    rowGap: "12px",
  };

export const inputGroup = {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    width: "100%",
  };

export const inputGroupItem = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

export const selectStyle = {
    padding: "12px",
    width: "100%",
    height: "48px",
    color: getTokenValue("grey-400"),
    borderRadius: "8px",
    borderColor: getTokenValue("grey-200"),
    borderWidth: "1px",
    fontSize: "15px",
    backgroundColor: getTokenValue("white"),
    appearance: "none", // Supprime les styles natifs du navigateur pour une meilleure personnalisation
    cursor: "pointer",
    focus: {
      outline: "none",
      borderColor: getTokenValue("purple-500"),
      boxShadow: getTokenValue("shadow-focus"),
    },
  };

export const textareaStyle = {
    padding: "12px",
    width: "100%",
    height: "120px", // Ajuste la hauteur pour un textarea
    color: getTokenValue("grey-400"),
    borderRadius: "8px",
    borderColor: getTokenValue("grey-200"),
    borderWidth: "1px",
    fontSize: "15px",
    backgroundColor: getTokenValue("white"),
    resize: "vertical", // Permet de redimensionner verticalement le textarea
    focus: {
      outline: "none",
      borderColor: getTokenValue("purple-500"),
      boxShadow: getTokenValue("shadow-focus"),
    },
  };

export const passwordInputWrapper = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    marginBottom: "24px",
  };

export const togglePasswordVisibility = {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: getTokenValue("grey-500"),
    cursor: "pointer",
    zIndex: 1,
  };

export const passwordHint = {
    fontSize: "13px",
    color: getTokenValue("grey-600"),
    marginTop: "4px",
    marginBottom: "4px",
  };

export const strengthBars = {
    display: "flex",
    gap: "4px",
    marginTop: "4px",
    marginBottom: "8px",
  };

export const strengthBar = {
    width: "25%",
    height: "6px",
    backgroundColor: getTokenValue("grey-300"),
    borderRadius: "16px",
    transition: "background-color 0.3s ease",
  };

export const strengthBarFilled = {
    backgroundColor: getTokenValue("green-500"),
  };

export const strengthBarFilledFirst = {
    backgroundColor: getTokenValue("green-600"),
  };
