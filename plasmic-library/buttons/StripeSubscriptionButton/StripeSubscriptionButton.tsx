import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState, cloneElement, isValidElement } from "react";
import { loadStripe } from "@stripe/stripe-js";

export interface StripeSubscriptionButtonProps {
  stripeAction: "create" | "update" | "cancel";
  priceId?: string;
  clientReferenceId?: string;
  customerEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onStatusChange?: (status: "success" | "error") => void;
}

function StripeSubscriptionButton_(
  props: StripeSubscriptionButtonProps,
  ref: HTMLElementRefOf<"button">
) {
  const {
    stripeAction,
    priceId,
    clientReferenceId,
    customerEmail,
    successUrl,
    cancelUrl,
    children,
    disabled = false,
    className,
    onSuccess,
    onError,
    onStatusChange,
  } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (stripeAction === "cancel") {
        const confirmed = window.confirm("Souhaitez-vous vraiment annuler votre abonnement ?");
        if (!confirmed) {
          setLoading(false);
          return;
        }
      }

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
      if (!stripe) throw new Error("Stripe.js non initialisé");

      const res = await fetch("/api/stripe/manage-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: stripeAction,
          priceId,
          clientReferenceId,
          customerEmail,
          successUrl,
          cancelUrl,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erreur lors de la gestion de l’abonnement");
      }

      const data = await res.json();

      // Create subscription
      if (stripeAction === "create") {
        await stripe.redirectToCheckout({ sessionId: data.sessionId });

      // Update subscription
      } else if (stripeAction === "update") {
        if (!data.success) {
          throw new Error("La mise à jour de l'abonnement a échoué");
        }
        onStatusChange?.("success");
        onSuccess?.();

      // Cancel subscription
      } else if (stripeAction === "cancel") {
        alert("Abonnement annulé avec succès.");
        onStatusChange?.("success");
      }

      onSuccess?.();
    } catch (error: any) {
      console.error("Erreur Stripe :", error);
      alert("Une erreur est survenue. Merci de réessayer.");
      onError?.(error);
      if (stripeAction !== "create") {
        onStatusChange?.("error");
      }
    } finally {
      setLoading(false);
    }
  };

  if (isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick,
      disabled: disabled || loading,
      className,
      ref,
    });
  }

  return (
    <button
      type="button"
      ref={ref}
      className={className}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {loading ? "Chargement..." : children || "Abonnement"}
    </button>
  );
}

const StripeSubscriptionButton = React.forwardRef(StripeSubscriptionButton_);
export default StripeSubscriptionButton;
