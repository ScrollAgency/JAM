const SupabaseCrudMeta = {
  name: "SupabaseCrud",
  section: "1.🔑 Authentication",
  displayName: "User Crud",
  description: "Permet de réaliser les opérations de CRUD sur les users en toute sécurité",
  importPath: "./plasmic-library/authentication/SupabaseCrud",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/SupabaseCrud.png`,

  props: {
    userId: {
      type: "string",
    },
    firstnameToUpdate: {
      type: "string",
    },
    lastnameToUpdate: {
      type: "string",
    },
    emailToUpdate: {
      type: "string",
    },
    companyToUpdate: {
      type: "string",
    },
    roleToUpdate: {
      type: "string",
    },
    isOpen: {
      type: "boolean",
      defaultValue: false,
    },
    setIsOpen: {
      type: "function",
    },
    onClose: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onSuccess: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    action: {
      type: "choice",
      options: ["read", "create", "update", "reset", "delete"],
      defaultValue: "read",
    },
  },
  hideProps: ["setIsOpen"],
};

export default SupabaseCrudMeta;
