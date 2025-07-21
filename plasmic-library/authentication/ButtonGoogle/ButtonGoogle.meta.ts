const ButtonGoogleMeta = {
    name: "ButtonGoogle",
    section: "1.🔑 Authentication",
    displayName: "Button Google",
    description: "Google button",
    importPath: "./plasmic-library/authentification/ButtonGoogle",
    thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/AccountParameters.png`,

    props: {
      label: {
        type: "string",
        defaultValue: "google",
      },
      icon: {
        type: "choice",
        defaultValue: "start",
        options: ["start", "end", "only", "none"],
        required: false,
      },
      iconImage: {
        type: "imageUrl",
        defaultValue: "/google-logo.svg",
      },
      destructive: "boolean",
      hierarchy: {
        type: "choice",
        defaultValue: "primary",
        options: ["primary", "secondary"],
        required: false,
      },
      size: {
        type: "choice",
        defaultValue: "large",
        options: ["small", "large"],
        required: false,
      },

      redirectTo: {
        type: "string",
        defaultValue: "/auth/oauth-callback",
        description: "URL vers laquelle rediriger après login Google",
      },
      className: "string",
      onClick: {
        type: "eventHandler",
        description: "Fonction appelée lors du clic sur le bouton.",
        argTypes: [],
      },
      
      state: {
        type: "choice",
        defaultValue: "default",
        options: ["default", "hover", "focused", "disabled"],
        required: false,
      },
      
      
    },
    
  };
  
  export default ButtonGoogleMeta;
  