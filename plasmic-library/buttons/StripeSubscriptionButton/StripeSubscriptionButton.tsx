import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState, cloneElement, isValidElement } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ConfirmModal } from "./ConfirmModal";
import { AlertCircle } from "lucide-react";

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

  // Props confirmation modal
  confirmTitle?: string;
  confirmDescription?: string;
  confirmIcon?: React.ReactNode;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  showConfirmationModal?: boolean;
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

    // Modal props avec valeurs par défaut
    confirmTitle = "Voulez-vous vraiment procéder ?",
    confirmDescription = "Cette action est irréversible.",
    confirmIcon = <AlertCircle size={40} className="text-red-500" />,
    confirmButtonLabel = "Confirmer",
    cancelButtonLabel = "Annuler",
    showConfirmationModal = true,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Appelé une fois la confirmation validée
  const handleConfirm = async () => {
    setShowConfirmModal(false);
    setLoading(true);
    try {
      if (stripeAction === "cancel") {
        const res = await fetch("/api/stripe/manage-subscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "cancel",
            customerEmail,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Erreur lors de l’annulation");
        }

        onStatusChange?.("success");
        onSuccess?.();
      } else {
        // create ou update
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
        );
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

        if (stripeAction === "create") {
          onStatusChange?.("success");
          await stripe.redirectToCheckout({ sessionId: data.sessionId });
        } else if (stripeAction === "update") {
          if (!data.success) {
            throw new Error("La mise à jour de l'abonnement a échoué");
          }
          onStatusChange?.("success");
          onSuccess?.();
        }
      }
    } catch (error: any) {
      console.error("Erreur Stripe :", error);
      alert(error.message); // Tu pourras remplacer par ta modale personnalisée
      onError?.(error);
      if (stripeAction !== "create") {
        onStatusChange?.("error");
      }
    } finally {
      setLoading(false);
    }
  };

  // Bouton click: soit on affiche la modale si demandé, soit on exécute directement
  const handleClick = () => {
    if (
      (stripeAction === "cancel" || stripeAction === "update") &&
      showConfirmationModal
    ) {
      setShowConfirmModal(true);
      return;
    }

    // Pour create ou si pas de modale confirmation
    handleConfirm();
  };

  if (isValidElement(children)) {
    return (
      <>
        <ConfirmModal
          show={showConfirmModal}
          onCancel={() => setShowConfirmModal(false)}
          onConfirm={handleConfirm}
          icon={confirmIcon}
          title={confirmTitle}
          description={confirmDescription}
          confirmLabel={confirmButtonLabel}
          cancelLabel={cancelButtonLabel}
          loading={loading}
        />
        {cloneElement(children as React.ReactElement<any>, {
          onClick: handleClick,
          disabled: disabled || loading,
          className,
          ref,
        })}
      </>
    );
  }

  return (
    <>
      <ConfirmModal
        show={showConfirmModal}
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={handleConfirm}
        icon={confirmIcon}
        title={confirmTitle}
        description={confirmDescription}
        confirmLabel={confirmButtonLabel}
        cancelLabel={cancelButtonLabel}
        loading={loading}
      />
      <button
        type="button"
        ref={ref}
        className={className}
        disabled={disabled || loading}
        onClick={handleClick}
      >
        {loading ? "Chargement..." : children || "Abonnement"}
      </button>
    </>
  );
}

const StripeSubscriptionButton = React.forwardRef(StripeSubscriptionButton_);
export default StripeSubscriptionButton;
