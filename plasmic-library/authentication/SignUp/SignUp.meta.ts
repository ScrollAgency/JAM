const SignUpMeta = {
  name: "SignUp",
  section: "🔑 Authentication",
  displayName: "Sign Up",
  description: "Un formulaire d'inscription avec validation, contrôle de force du mot de passe, visibilité du mot de passe et système d'alertes intégré",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/signup.png",
  props: {

    // Wrapper style
    wrapperStyle: {
      type: "string",
      defaultValue: "card",
      options: ["simple", "card", "custom"],
      description: "Style du conteneur du formulaire",
    },

    // Title
    title: {
      type: "string",
      defaultValue: "Bienvenue !",
    },
    titleHeading: {
      type: "string",
      defaultValue: "h1",
      options: ["h1", "h2", "h3"],
      description: "Niveau du titre",
    },

    // Input style
    inputStyle: {
      type: "choice",
      defaultValue: "simple",
      options: ["simple", "advance"],
      description: "Style des champs de saisie",
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
    
    // Contrôle de visibilité du mot de passe
    showPasswordToggle: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche un bouton pour montrer/masquer le mot de passe",
    },
    eyeIconColor: {
      type: "string",
      defaultValue: "#666",
      description: "Couleur de l'icône d'œil",
    },
    showOAuthButtons: {
      type: "boolean",
      defaultValue: true,
      description: "Montrer/masquer les boutons SSO",
    },

    // Gestion des alertes
    showAlerts: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche des alertes pour les erreurs et succès",
    },
    alertPosition: {
      type: "choice",
      options: ["top", "bottom", "inline"],
      defaultValue: "top",
      description: "Position des alertes dans le composant",
    },
    maxAlerts: {
      type: "number",
      defaultValue: 3,
      description: "Nombre maximum d'alertes à afficher simultanément",
    },
    customErrorMessages: {
      type: "object",
      description: "Messages d'erreur personnalisés pour chaque type d'erreur",
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

    // Barres de progression pour le mot de passe
    passwordStrength: {
      type: "boolean",
      defaultValue: true,
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
    onAlertClose: {
      type: "eventHandler",
      argTypes: [{ name: "id", type: "string" }],
      description: "Fonction appelée lorsqu'une alerte est fermée",
    },
    buttonStyle: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton de soumission",
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
  
  importPath: "./plasmic-library/authentication/SignUp",
};

export default SignUpMeta;
