import type React from "react";
import { X } from "lucide-react";

export interface ConfirmModalProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
  show: boolean;
  loading?: boolean;
}

export const ConfirmModal = ({
  icon,
  title = "Voulez-vous résilier votre abonnement ?",
  description = "Votre abonnement sera actif jusqu’à la fin du mois en cours. Sans abonnement, vous ne pourrez plus utiliser la plateforme.",
  onCancel,
  onConfirm,
  cancelLabel = "Annuler",
  confirmLabel = "Résilier",
  show,
  loading = false,
}: ConfirmModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center relative">
        <button type="button" className="absolute top-4 right-4" onClick={onCancel}>
          <X />
        </button>
        {icon && <div className="mb-4 flex justify-center">{icon}</div>}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">{description}</p>
        <div className="flex justify-center gap-4">
          <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg border">
            {cancelLabel}
          </button>
          <button 
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            {loading ? "Chargement..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
