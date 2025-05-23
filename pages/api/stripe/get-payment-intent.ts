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

    type PaymentIntentWithCharges = Stripe.PaymentIntent & {
        charges: {
            data: Array<Stripe.Charge>;
        };
    };

    const paymentIntent = session.payment_intent as PaymentIntentWithCharges;


    if (!paymentIntent) {
      return res.status(404).json({ error: "No payment intent found for this session" });
    }

    const receiptUrl = paymentIntent.charges?.data?.[0]?.receipt_url;

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
