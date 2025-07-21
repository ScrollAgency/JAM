const ProfileBadgeMeta = {
  name: "ProfileBadge",
  section: "1.🔑 Authentication",
  displayName: "Profile Badge",
  description: "Un badge utilisateur avec avatar et notifications.",
  importPath: "./plasmic-library/authentication/ProfileBadge",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/ProfileBadge.png`,

  props: {
    name: {
      type: "string",
      defaultValue: "Scroll",
      description: "Nom de l'utilisateur affiché à côté de l'avatar.",
    },
    badgeContent: {
      type: "string",
      defaultValue: "1",
      description: "Contenu du badge (ex: nombre de notifications).",
    },
    badgeColor: {
      type: "choice",
      options: ["primary", "success", "warning", "danger"],
      defaultValue: "primary",
      description: "Couleur du badge.",
    },
    avatarUrl: {
      type: "string",
      defaultValue: "https://i.pravatar.cc/150",
      description: "URL de l'avatar de l'utilisateur.",
    },
    connexionLogo: {
      type: "string",
      defaultValue: "",
      description: "URL de l'avatar de l'utilisateur.",
    },
    avatarRadius: {
      type: "choice",
      options: ["none", "sm", "md", "lg", "full"],
      defaultValue: "full",
      description: "Forme de l'avatar.",
    },
    isConnected: {
      type: "boolean",
      defaultValue: false,
    },

    // show/hide
    showName: {
      type: "boolean",
      defaultValue: false,
    },
  },
};
  
export default ProfileBadgeMeta;
  