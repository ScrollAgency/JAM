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
