const ButtonWalkMeta = {
  name: "ButtonWalk",
  section: "3.🌍 Géoloc",
  displayName: "Button walk",
  description: "Button used to walk in Job Around Me project",
  importPath: "./plasmic-library/geolocalisation/ButtonWalk",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/ButtonWalk.png`,

  props: {
    label: "string",
    variant: {
      type: "choice",
      defaultValue: "active",
      options: ["active", "inactive", "disabled"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
};

export default ButtonWalkMeta;
  