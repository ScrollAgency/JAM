import {tokens} from "@/styles/design-tokens"
const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";

const LoginMeta = {
  name: "Login",
  section: "🔑 Authentication",
  displayName: "Login Form",
  description: "Un formulaire simple pour se connecter",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/login.png",
  props: {
    // Propriétés pour le titre
    title: {
      type: "string",
      defaultValue: "Connexion",
    },
    titleFont: {
      type: "string",
      defaultValue: "Arial, sans-serif",
    },
    titleSize: {
      type: "string",
      defaultValue: "48px",
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

    // Propriétés pour les labels et les inputs
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
    passwordLabel: {
      type: "string",
      defaultValue: "Mot de passe",
    },
    password: {
      type: "string",
      defaultValue: "",
      valueProp: "password",
      onChangeProp: "onPasswordChange",
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
    placeholderPassword: {
      type: "string",
      defaultValue: "Entrez votre mot de passe",
    },

    // Propriétés pour le lien "Mot de passe oublié ?"
    forgotPasswordText: {
      type: "string",
      defaultValue: "Mot de passe oublié ?",
    },

    // Propriétés pour le bouton de soumission
    submitButtonText: {
      type: "string",
      defaultValue: "Connexion",
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
    onPasswordChange: {
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
    password: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'password',
      onChangeProp: 'onPasswordChange'
    },
  },
  importPath: "./components/auth/Login",
};

export default LoginMeta;
