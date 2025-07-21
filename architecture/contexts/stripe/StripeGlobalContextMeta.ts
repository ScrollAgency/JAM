import { GlobalContextMeta } from "@plasmicapp/host";

interface StripeGlobalContextProps {
  cart: Array<{
    id: string;
    quantity: number;
  }>;
}

export const StripeGlobalContextMeta: GlobalContextMeta<StripeGlobalContextProps> = {
  name: "Stripe",
  providesData: true,

  props: {
    cart: {
      type: "array",
      itemType: {
        type: "object",
        fields: {
          id: { type: "string" },
          quantity: { type: "number" },
        },
      },
    },
  },

  globalActions: {
    checkoutSession: {
      parameters: [
        {
          name: "item",
          type: "object",
        },
      ],
    },
  },
  importPath: ""
};
