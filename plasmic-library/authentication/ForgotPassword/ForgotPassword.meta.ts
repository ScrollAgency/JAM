const ForgotPasswordMeta = {
  name: "ForgotPassword",
  section: "1.🔑 Authentication",
  displayName: "Forgot Pwd",
  description: "Un formulaire pour réinitialiser le mot de passe",
  importPath: "./plasmic-library/authentication/ForgotPassword",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/ForgotPassword.png`,
  
  props: {

    // Wrapper style
    wrapperStyle: {
      type: "choice",
      defaultValue: "card",
      options: ["simple", "card", "custom"],
      description: "Style du conteneur du formulaire",
    },

    // Title
    title: {
      type: "string",
      defaultValue: "Mot de passe oublié ?",
      description: "Texte du titre",
    },
    titleHeading: {
      type: "choice",
      defaultValue: "h1",
      options: ["h1", "h2", "h3"],
      description: "Niveau du titre",
    },

    // Description
    descriptionText: {
      type: "string",
      defaultValue: "Pas de panique, nous allons vous envoyer un e-mail pour vous aider à réinitialiser votre mot de passe.",
      description: "Texte affiché sous le titre",
    },

    // Input
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
      description: "Label du champ email",
    },
    email: {
      type: "string",
      defaultValue: "",
      valueProp: "email",
      onChangeProp: "onEmailChange",
      description: "Valeur du champ email",
    },
    placeholderEmail: {
      type: "string",
      defaultValue: "Entrez votre email",
      description: "Texte de placeholder pour l'email",
    },

    // Boutons
    submitButtonText: {
      type: "string",
      defaultValue: "Réinitialiser",
      description: "Texte du bouton de soumission",
    },
    submitButtonStyle: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton de soumission",
    },
    cancelButtonText: {
      type: "string",
      defaultValue: "Annuler",
      description: "Texte du bouton annuler",
    },
    buttonCancelStyle: {
      type: "choice",
      defaultValue: "tertiary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton annuler",
    },

    // Events handlers
    onSubmit: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
      description: "Action lors de la soumission du formulaire",
    },
    onEmailChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
      description: "Action lors du changement du champ email",
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
  },
};

export default ForgotPasswordMeta;
