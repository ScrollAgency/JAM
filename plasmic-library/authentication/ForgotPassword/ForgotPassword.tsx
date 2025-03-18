import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import styles from "./ForgotPassword.module.css";
import { useCallback, useEffect, useState } from "react";
import { tokens } from "@/styles/design-tokens";

export interface ForgotPasswordProps {
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  rowGap?: string;

  title?: string;
  titleFont?: string;
  titleSize?: string;
  titleColor?: string;
  titleAlign?: "left" | "center" | "right";

  showLabels?: boolean;
  emailLabel?: string;
  inputFont?: string;
  inputSize?: string;
  inputColor?: string;
  labelColor?: string;
  inputBorderRadius?: string;
  inputBorderColor?: string;
  placeholderEmail?: string;

  email?: string;
  onEmailChange?: (value: string) => void;

  submitButtonText?: string;
  submitFont?: string;
  submitSize?: string;
  submitColor?: string;
  submitBackgroundColor?: string;
  submitBorderRadius?: string;
  submitWidth?: string;
  submitHeight?: string;

  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

function ForgotPassword_(
  props: ForgotPasswordProps, 
  ref: HTMLElementRefOf<"div">
) {
  const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";

  const {
    width = "630px",
    height = "auto",
    padding = "64px",
    borderRadius = "24px",
    rowGap = "8px",

    title = "Mot de passe oublié ?",
    titleFont = "Arial, sans-serif",
    titleSize = "48px",
    titleColor = "#000",
    titleAlign = "left",

    showLabels = true,
    emailLabel = "Email",
    inputFont = "Arial, sans-serif",
    inputSize = "16px",
    inputColor = "#000",
    labelColor = "#333",
    inputBorderRadius = "5px",
    inputBorderColor = "#ccc",
    placeholderEmail = "Entrez votre email",

    onEmailChange,

    submitButtonText = "Réinitialiser",
    submitFont = "Arial, sans-serif",
    submitSize = "16px",
    submitColor = "#fff",
    submitBackgroundColor = primaryColor,
    submitBorderRadius = "5px",
    submitWidth = "100%",
    submitHeight = "48px",

    onSubmit,
    className,
  } = props;

  const [email, setEmail] = useState(props.email || "");

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    if (onEmailChange) onEmailChange(value);
  }, [onEmailChange]);

  useEffect(() => {
    setEmail(props.email || "");
  }, [props.email]);

  return (
    <div
      className={`${styles.forgotPasswordCard} ${className}`}
      ref={ref}
      style={{
        width,
        height,
        padding,
        borderRadius,
        display: "flex",
        flexDirection: "column",
        gap: rowGap,
      }}
    >
      <div
        className={styles.title}
        style={{
          fontFamily: titleFont,
          fontSize: titleSize,
          color: titleColor,
          textAlign: titleAlign,
        }}
      >
        {title}
      </div>

      <p className={styles.description}>
        Pas de panique, nous allons vous envoyer un e-mail pour vous aider à réinitialiser votre mot de passe.
      </p>

      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          if (onSubmit) onSubmit(event);
        }}
      >
        <div className={styles.inputGroup}>
          {showLabels && (
            <label
              htmlFor="emailInput"
              style={{
                fontFamily: inputFont,
                fontSize: inputSize,
                color: labelColor,
                textAlign: "left",
              }}
            >
              {emailLabel}
            </label>
          )}
          <input
            type="email"
            id="emailInput"
            placeholder={placeholderEmail}
            className={styles.input}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
            style={{
              fontFamily: inputFont,
              fontSize: inputSize,
              color: inputColor,
              borderRadius: inputBorderRadius,
              borderColor: inputBorderColor,
            }}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          style={{
            fontFamily: submitFont,
            fontSize: submitSize,
            color: submitColor,
            backgroundColor: submitBackgroundColor,
            borderRadius: submitBorderRadius,
            width: submitWidth,
            height: submitHeight,
          }}
        >
          {submitButtonText}
        </button>
      </form>

      <a href="/login" className={styles.cancelLink} style={{ color: primaryColor }}>
        Annuler
      </a>
    </div>
  );
}

const ForgotPassword = React.forwardRef(ForgotPassword_);
export default ForgotPassword;
