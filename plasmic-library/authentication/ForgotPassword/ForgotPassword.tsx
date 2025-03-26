import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState } from "react";
import { presets } from "@/styles/presets";
import Link from "next/link";  

export interface ForgotPasswordProps {
  wrapperStyle?: "simple" | "card" | "custom";
  buttonSubmitStyle?: "primary" | "secondary" | "tertiary";
  buttonAbordStyle?: "primary" | "secondary" | "tertiary";
  inputStyle?: "simple" | "advance";
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;

  // Titre
  titleHeading?: "h1" | "h2" | "h3";
  title?: string;

  // Champ email
  emailLabel?: string;
  placeholderEmail?: string;
  onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Bouton de soumission
  submitButtonText?: string;
  cancelButtonText?: string;

  // Texte explicatif
  descriptionText?: string;
}

function ForgotPassword_(
  { 
    wrapperStyle = "card",
    buttonSubmitStyle = "primary",
    buttonAbordStyle = "tertiary",
    inputStyle = "simple",
    onSubmit,

    titleHeading = "h1",
    title = "Mot de passe oublié ?",

    emailLabel = "Email",
    placeholderEmail = "Entrez votre email",
    onEmailChange,

    submitButtonText = "Réinitialiser",
    cancelButtonText = "Annuler",
    descriptionText = "Pas de panique, nous allons vous envoyer un e-mail pour vous aider à réinitialiser votre mot de passe.", // Valeur par défaut
  }: ForgotPasswordProps,
  ref: HTMLElementRefOf<"div">
) {
  const [emailState, setEmail] = useState("");

  const Title = titleHeading;

  return (
    <div
      ref={ref}
      style={presets.wrappers[wrapperStyle] as React.CSSProperties}
    >
      <Title style={presets.heading1}>{title}</Title>

      <p style={presets.formMessage as React.CSSProperties}>
        {descriptionText}
      </p>

      <form
        onSubmit={(event) => { event.preventDefault(); onSubmit?.(event); }}
        style={{ display: "flex", flexDirection: "column", rowGap: presets.form.rowGap }}
      >
        <div style={{ rowGap: presets.inputField.rowGap }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="email">{emailLabel}</label>
          <input
            type="email"
            id="email"
            placeholder={placeholderEmail}
            style={presets.inputs[inputStyle]} 
            value={emailState}
            onChange={(e) => { 
              setEmail(e.target.value); 
              onEmailChange?.(e);
            }}
          />
        </div>

        <button type="submit" style={presets.buttons[buttonSubmitStyle] as React.CSSProperties}>
          {submitButtonText}
        </button>
      </form>

      <Link href="/login">
        <button
          type="button"
          style={presets.buttons[buttonAbordStyle] as React.CSSProperties}
        >
          {cancelButtonText}
        </button>
      </Link>
    </div>
  );
}

const ForgotPassword = React.forwardRef(ForgotPassword_);
export default ForgotPassword;
