import {tokens} from "@/styles/design-tokens"

const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";
const sand200Borders = tokens.find(token => token.name === "sand-200-borders")?.value ?? "#7641f1";

const SignUpMeta = {
  name: "SignUp",
  section: "🔑 Authentication",
  displayName: "Sign Up",
  description: "Un formulaire simple pour s'inscrire avec e-mail et mot de passe",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/signup.png",
  props: {
    // Propriétés pour le titre
    title: {
      type: "string",
      defaultValue: "Bienvenue !",
    },
    titleFont: {
      type: "string",
      defaultValue: "Manrope, Arial, sans-serif",
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
    firstNameLabel: {
      type: "string",
      defaultValue: "Prénom",
    },
    lastNameLabel: {
      type: "string",
      defaultValue: "Nom",
    },
    passwordLabel: {
      type: "string",
      defaultValue: "Mot de passe",
    },
    confirmPasswordLabel: {
      type: "string",
      defaultValue: "Répétez le mot de passe",
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
      defaultValue: sand200Borders,
    },
    placeholderEmail: {
      type: "string",
      defaultValue: "Entrez votre email",
    },
    placeholderPassword: {
      type: "string",
      defaultValue: "Entrez votre mot de passe",
    },
    placeholderConfirmPassword: {
      type: "string",
      defaultValue: "Confirmez votre mot de passe",
    },

    // Propriétés pour les messages supplémentaires
    passwordInfoText: {
      type: "string",
      defaultValue: "Utilisez 8 caractères ou plus en mélangeant lettres, chiffres et symboles.",
    },

    // Propriétés pour la checkbox
    privacyPolicyText: {
      type: "string",
      defaultValue: "J'accepte la politique de confidentialité",
    },

    // Propriétés pour le bouton de soumission
    submitButtonText: {
      type: "string",
      defaultValue: "S'inscrire",
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

    email: {
      type: "string",
      defaultValue: "",
      valueProp: "email",
      onChangeProp: "onEmailChange",
    },
    password: {
      type: "string",
      defaultValue: "",
      valueProp: "password",
      onChangeProp: "onPasswordChange",
    },
    confirmPassword: {
      type: "string",
      defaultValue: "",
      valueProp: "confirmPassword",
      onChangeProp: "onConfirmPasswordChange",
    },
    firstName: {
      type: "string",
      defaultValue: "",
      valueProp: "firstName",
      onChangeProp: "onFirstNameChange",
    },
    lastName: {
      type: "string",
      defaultValue: "",
      valueProp: "lastName",
      onChangeProp: "onLastNameChange",
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
    onFirstNameChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onLastNameChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onConfirmPasswordChange: {
      type: "eventHandler",
      argTypes: [{ name: "value", type: "string" }],
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
    firstName: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'firstName',
      onChangeProp: 'onFirstNameChange'
    },
    lastName: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'lastName',
      onChangeProp: 'onLastNameChange'
    },
    password: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'password',
      onChangeProp: 'onPasswordChange'
    },
    confirmPassword: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'confirmPassword',
      onChangeProp: 'onConfirmPasswordChange'
    },
  },
  
  importPath: "./components/auth/SignUp",
};

export default SignUpMeta;
