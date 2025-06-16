const LoginMeta = {
  name: "Login",
  section: "🔑 Authentication",
  displayName: "Login Form",
  description: "Un formulaire simple pour se connecter",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/login.png",
  props: {
    // Wrapper styles
    wrapperStyle: {
      type: "choice",
      defaultValue: "card",
      options: ["simple", "card", "custom"],
      description: "Style du conteneur global",
    },
    padding: {
      type: "string",
      defaultValue: "48px",
      description: "Espacement interne du composant",
    },

    // Title
    title: {
      type: "string",
      defaultValue: "Connexion",
    },
    titleHeading: {
      type: "choice",
      defaultValue: "h1",
      options: ["h1", "h2", "h3"],
      description: "Choisissez le niveau du titre (h1, h2, h3)",
    },

    // Input style
    inputStyle: {
      type: "choice",
      defaultValue: "simple",
      options: ["simple", "advance"],
      description: "Style des champs de saisie",
    },

    // Email
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
    placeholderEmail: {
      type: "string",
      defaultValue: "Entrez votre email",
    },

    // Password
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
    placeholderPassword: {
      type: "string",
      defaultValue: "Entrez votre mot de passe",
    },

    // Links
    forgotPasswordText: {
      type: "string",
      defaultValue: "Mot de passe oublié ?",
    },
    createAccountText: {
      type: "string",
      defaultValue: "Créer un compte",
      description: "Texte à afficher pour le lien Créer un compte",
    },
    signUpPrefixText: {
      type: "string",
      defaultValue: "Pas encore de compte ?",
      description: "Texte affiché avant le lien d'inscription",
    },
    signUpLinkLabel: {
      type: "string",
      defaultValue: "INSCRIPTION",
      description: "Texte du lien d'inscription",
    },

    forgotPasswordPosition: {
      type: "choice",
      defaultValue: "left",
      options: ["left", "right"],
      description: "Position du lien forgot password",
    },

    // Buttons
    buttonStyle: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton de soumission",
    },
    submitButtonText: {
      type: "string",
      defaultValue: "Connexion",
    },
    submitButtonIcon: {
      type: "slot",
      hidePlaceholder: true,
      description: "Icône à afficher dans le bouton de connexion",
    },
    submitButtonIconPosition: {
      type: "choice",
      options: ["left", "right"],
      defaultValue: "right",
      description: "Position de l'icône dans le bouton de connexion",
    },

    // show / hide
    showPasswordToggle: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche ou non l'oeil",
    },
    showSocialOAuth: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche ou non la section complète de connexion sociale (séparateur + boutons)",
    },
    showBottomSignupLink: {
      type: "boolean",
      defaultValue: false,
      description: "Affiche ou non le lien signup du bas",
    },

    // Events handlers
    onEmailChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onPasswordChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onSubmit: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onError: {
      type: "eventHandler",
      argTypes: [{ name: "error", type: "object" }],
      description: "Appelé lorsqu'une erreur se produit dans le composant",
    },
  },

  // States
  states: {
    email: {
      type: "writable",
      variableType: "text",
      valueProp: "email",
      onChangeProp: "onEmailChange",
    },
    password: {
      type: "writable",
      variableType: "text",
      valueProp: "password",
      onChangeProp: "onPasswordChange",
    },
  },
  importPath: "./components/auth/Login",
};

export default LoginMeta;
