import { tokens } from "@/styles/design-tokens";
const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";

const ResetPasswordMeta = {
  name: "ResetPassword",
  section: "🔑 Authentication",
  displayName: "Reset Password",
  description: "Un formulaire pour réinitialiser le mot de passe",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/reset-password.png",
  props: {
    // Propriétés pour le titre
    title: {
      type: "string",
      defaultValue: "Réinitialiser le mot de passe",
    },
    titleFont: {
      type: "string",
      defaultValue: "Arial, sans-serif",
    },
    titleSize: {
      type: "string",
      defaultValue: "42px",
    },
    titleColor: {
      type: "string",
      defaultValue: "#000",
    },
    titleAlign: {
      type: "string",
      defaultValue: "left",
      options: ["left", "center", "right"],
    },

    // Nouveau mot de passe
    passwordLabel: {
      type: "string",
      defaultValue: "Nouveau mot de passe*",
    },
    password: {
      type: "string",
      defaultValue: "",
      valueProp: "password",
      onChangeProp: "onPasswordChange",
    },
    passwordPlaceholder: {
      type: "string",
      defaultValue: "Entrez votre nouveau mot de passe",
    },
    passwordFont: {
      type: "string",
      defaultValue: "Arial, sans-serif",
    },
    passwordSize: {
      type: "string",
      defaultValue: "16px",
    },
    passwordColor: {
      type: "string",
      defaultValue: "#000",
    },
    passwordBorderRadius: {
      type: "string",
      defaultValue: "5px",
    },
    passwordBorderColor: {
      type: "string",
      defaultValue: "#ccc",
    },

    // Confirmer mot de passe
    repeatPasswordLabel: {
      type: "string",
      defaultValue: "Répétez le mot de passe*",
    },
    repeatPassword: {
      type: "string",
      defaultValue: "",
      valueProp: "repeatPassword",
      onChangeProp: "onRepeatPasswordChange",
    },
    repeatPasswordPlaceholder: {
      type: "string",
      defaultValue: "Confirmez votre mot de passe",
    },
    repeatPasswordFont: {
      type: "string",
      defaultValue: "Arial, sans-serif",
    },
    repeatPasswordSize: {
      type: "string",
      defaultValue: "16px",
    },
    repeatPasswordColor: {
      type: "string",
      defaultValue: "#000",
    },
    repeatPasswordBorderRadius: {
      type: "string",
      defaultValue: "5px",
    },
    repeatPasswordBorderColor: {
      type: "string",
      defaultValue: "#ccc",
    },

    // Barres de progression pour le mot de passe
    passwordStrength: {
      type: "boolean",
      defaultValue: true,
    },

    // Bouton de soumission
    submitButtonText: {
      type: "string",
      defaultValue: "Réinitialiser",
    },
    submitFont: {
      type: "string",
      defaultValue: "Arial, sans-serif",
    },
    submitSize: {
      type: "string",
      defaultValue: "16px",
    },
    submitColor: {
      type: "string",
      defaultValue: "#fff",
    },
    submitBackgroundColor: {
      type: "string",
      defaultValue: primaryColor,
    },
    submitBorderRadius: {
      type: "string",
      defaultValue: "5px",
    },
    submitWidth: {
      type: "string",
      defaultValue: "100%",
    },
    submitHeight: {
      type: "string",
      defaultValue: "48px",
    },

    // Comportement
    onSubmit: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onPasswordChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onRepeatPasswordChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },

    // Autres props
    className: {
      type: "string",
      defaultValue: "",
    },
  },
  states: {
    password: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'password',
      onChangeProp: 'onPasswordChange'
    },
    repeatPassword: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'repeatPassword',
      onChangeProp: 'onRepeatPasswordChange'
    },
  },
  importPath: "./components/auth/ResetPassword",
};

export default ResetPasswordMeta;
