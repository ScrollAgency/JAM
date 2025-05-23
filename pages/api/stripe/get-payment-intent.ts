import type { NextApiRequest, NextApiResponse } from "next";
import type Stripe from "stripe";
import stripe from "../../../lib/stripeServer";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sessionId = req.query.session_id as string;
  if (!sessionId) {
    return res.status(400).json({ error: "Missing session_id" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent.charges"],
    });

    // Cast pour étendre le type avec charges
    const paymentIntent = session.payment_intent as Stripe.PaymentIntent & {
      charges: Stripe.ApiList<Stripe.Charge>;
    };

    console.log("💳 Charges data:", JSON.stringify(paymentIntent.charges?.data, null, 2));

    const charge = paymentIntent.charges?.data?.[0];
    const receiptUrl = charge?.receipt_url;

    res.status(200).json({
      receiptUrl,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
    });
  } catch (err: any) {
    console.error("Erreur Stripe paymentIntent :", err);
    res.status(500).json({ error: err.message });
  }
}
