// pages/api/stripe/manage-subscription.ts
import { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../../lib/stripeServer";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { action, priceId, clientReferenceId, customerEmail, successUrl, cancelUrl } = req.body;

  if (!action) {
    return res.status(400).json({ error: "Action requise" });
  }

  try {
    switch (action) {
      case "create": {
        if (!priceId || !successUrl || !cancelUrl) {
          return res.status(400).json({ error: "Paramètres requis manquants pour 'create'" });
        }

        const session = await stripe.checkout.sessions.create({
          mode: "subscription",
          line_items: [{ price: priceId, quantity: 1 }],
          client_reference_id: clientReferenceId,
          customer_email: customerEmail,
          success_url: successUrl,
          cancel_url: cancelUrl,
        });

        return res.status(200).json({ sessionId: session.id });
      }

      case "update": {
        if (!customerEmail) {
          return res.status(400).json({ error: "Email client requis pour 'update'" });
        }

        const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
        const customer = customers.data[0];
        if (!customer) {
          return res.status(404).json({ error: "Client introuvable" });
        }

        const portalSession = await stripe.billingPortal.sessions.create({
          customer: customer.id,
          return_url: successUrl || "https://your-default-return-url.com",
        });

        return res.status(200).json({ url: portalSession.url });
      }

      case "cancel": {
        if (!customerEmail) {
          return res.status(400).json({ error: "Email client requis pour 'cancel'" });
        }

        const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
        const customer = customers.data[0];
        if (!customer) {
          return res.status(404).json({ error: "Client introuvable" });
        }

        const subscriptions = await stripe.subscriptions.list({ customer: customer.id, limit: 1 });
        const subscription = subscriptions.data[0];
        if (!subscription) {
          return res.status(404).json({ error: "Aucune souscription trouvée" });
        }

        await stripe.subscriptions.update(subscription.id, {
          cancel_at_period_end: true, // ⚠️ Mieux que suppression immédiate
        });

        return res.status(200).json({ success: true });
      }

      default:
        return res.status(400).json({ error: `Action '${action}' inconnue` });
    }
  } catch (err: any) {
    console.error("Erreur Stripe:", err);
    return res.status(500).json({ error: err.message || "Erreur serveur" });
  }
}
