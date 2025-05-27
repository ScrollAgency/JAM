const StripeSubscriptionButtonMeta = {
  name: "StripeSubscriptionButton",
  section: "🔖 Jam",
  displayName: "Stripe Subscription Button",
  description: "Gère création, gestion et résiliation d'abonnement Stripe",
  thumbnailUrl: "https://static1.plasmic.app/insertables/button.svg",
  props: {
    stripeAction: {
      type: "choice",
      options: ["create", "update", "cancel"],
      defaultValue: "create",
    },
    priceId: {
      type: "string",
      displayName: "Price ID",
      description: "Identifiant Stripe du tarif (price_xxx)",
    },
    clientReferenceId: "string",
    customerEmail: "string",
    successUrl: {
      type: "string",
      description: "URL de redirection après succès (pour checkout)",
    },
    cancelUrl: {
      type: "string",
      description: "URL de redirection après annulation (pour checkout)",
    },
    disabled: {
      type: "boolean",
      description: "Désactiver le bouton",
    },
    className: {
      type: "string",
      description: "Classe CSS personnalisée",
    },

    // Modale
    confirmTitle: {
      type: "string",
      defaultValue: "Voulez-vous résilier votre abonnement ?",
      displayName: "Titre de confirmation",
    },
    confirmDescription: {
      type: "string",
      defaultValue: "Votre abonnement sera actif jusqu’à la fin du mois en cours. Sans abonnement, vous ne pourrez plus utiliser la plateforme.",
      displayName: "Texte de confirmation",
    },
    confirmIcon: {
      type: "imageUrl",
      displayName: "Icône de confirmation",
      description: "Icône affichée en haut de la modale",
    },
    confirmButtonLabel: {
      type: "string",
      defaultValue: "Résilier",
      displayName: "Texte du bouton de confirmation",
    },
    cancelButtonLabel: {
      type: "string",
      defaultValue: "Annuler",
      displayName: "Texte du bouton d’annulation",
    },
    showConfirmationModal: {
      type: "boolean",
      defaultValue: true,
      displayName: "Afficher la modale de confirmation",
    },


    // Slots et callbacks
    children: "slot",
    onSuccess: {
      type: "eventHandler",
      argTypes: [],
      description: "Callback appelé en cas de succès",
    },
    onError: {
      type: "eventHandler",
      argTypes: [{ name: "error", type: "object" }],
      description: "Callback appelé en cas d'erreur",
    },
    onStatusChange: {
      type: "eventHandler",
      argTypes: [{ name: "status", type: { type: "choice", options: ["success", "error"] } }],
      description: "Retour d'état (hors création), succès ou erreur",
    },
  },
  importPath: "./components/forms/StripeSubscriptionButton/StripeSubscriptionButton",
};

export default StripeSubscriptionButtonMeta;
