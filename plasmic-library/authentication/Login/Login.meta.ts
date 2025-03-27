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
    showCreateAccount: {
      type: "boolean",
      defaultValue: false,
      description: "Affiche ou non le lien Créer un compte",
    },

    // Buttons
    submitButtonText: {
      type: "string",
      defaultValue: "Connexion",
    },
    buttonStyle: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton de soumission",
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
  },

  // States
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
  importPath: "./plasmic-library/authentication/Login",
};

export default LoginMeta;
