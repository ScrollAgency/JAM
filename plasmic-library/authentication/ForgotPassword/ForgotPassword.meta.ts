import { tokens } from "@/styles/design-tokens";
const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";

const ForgotPasswordMeta = {
  name: "ForgotPassword",
  section: "🔑 Authentication",
  displayName: "Forgot Password",
  description: "Un formulaire pour réinitialiser le mot de passe",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/forgot-password.png",
  props: {
    // Propriétés pour le titre
    title: {
      type: "string",
      defaultValue: "Mot de passe oublié ?",
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

    // Champ email
    emailLabel: {
      type: "string",
      defaultValue: "Email",
    },
    email: {
      type: "string",
      defaultValue: "",
      valueProp: "email",
      onChangeProp: "onEmailChange",
    },
    inputFont: {
      type: "string",
      defaultValue: "Arial, sans-serif",
    },
    inputSize: {
      type: "string",
      defaultValue: "16px",
    },
    inputColor: {
      type: "string",
      defaultValue: "#000",
    },
    inputBorderRadius: {
      type: "string",
      defaultValue: "5px",
    },
    inputBorderColor: {
      type: "string",
      defaultValue: "#ccc",
    },
    placeholderEmail: {
      type: "string",
      defaultValue: "Entrez votre email",
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
    onEmailChange: {
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
    email: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'email',
      onChangeProp: 'onEmailChange'
    },
  },
  importPath: "./components/auth/ForgotPassword",
};

export default ForgotPasswordMeta;
