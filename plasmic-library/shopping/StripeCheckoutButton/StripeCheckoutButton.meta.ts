const StripeCheckoutButtonMeta = {
    name: "StripeCheckoutButton",
    section: "6.🛒 Shopping",
    displayName: "Stripe Checkout",
    description: "Stripe button used in JAM project",
    importPath: "./plasmic-library/shopping/StripeCheckoutButton",
    thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/StripeCheckoutButton.png`,

    props: {
        items: {
        type: "array",
        itemType: {
          type: "object",
          fields: {
            price: { type: "string" },
            quantity: { type: "number" },
          },
        },
      },
      clientReferenceId: "string",
      customerEmail: "string",
      successUrl: {
        type: "string",
        description: "nomDeLaPage?credit=success&session_id={CHECKOUT_SESSION_ID}",
      },
      cancelUrl: {
        type: "string",
        description: "nomDeLaPage?credit=cancel",
      },
      children: "slot",
    },
};

export default StripeCheckoutButtonMeta;
