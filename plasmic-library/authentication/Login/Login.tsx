import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import styles from "./Login.module.css";
import { useCallback, useEffect, useState } from "react";
import { tokens } from "@/styles/design-tokens";

export interface LoginProps {
  // Styles généraux
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  rowGap?: string;

  // Styles du titre
  title?: string;
  titleFont?: string;
  titleSize?: string;
  titleColor?: string;
  titleAlign?: "left" | "center" | "right";

  // Styles des inputs
  showLabels?: boolean;
  emailLabel?: string;
  passwordLabel?: string;
  inputFont?: string;
  inputSize?: string;
  inputColor?: string;
  labelColor?: string;
  inputBorderRadius?: string;
  inputBorderColor?: string;
  placeholderEmail?: string;
  placeholderPassword?: string;

  // États contrôlés
  email?: string;
  password?: string;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;

  // Styles du lien "Mot de passe oublié ?"
  forgotPasswordText?: string;

  // Styles du bouton Submit
  submitButtonText?: string;
  submitFont?: string;
  submitSize?: string;
  submitColor?: string;
  submitBackgroundColor?: string;
  submitBorderRadius?: string;
  submitWidth?: string;
  submitHeight?: string;

  // Comportement
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;

  // Autres
  className?: string;
}

function Login_(
  props: LoginProps, 
  ref: HTMLElementRefOf<"div">
) {

  const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";

  const {
    width = "630px",
    height = "auto",
    padding = "64px",
    borderRadius = "24px",
    rowGap = "8px",

    title = "Connexion",
    titleFont = "Arial, sans-serif",
    titleSize = "48px",
    titleColor = "#000",
    titleAlign = "left",

    showLabels = true,
    emailLabel = "Email",
    passwordLabel = "Mot de passe",
    inputFont = "Arial, sans-serif",
    inputSize = "16px",
    inputColor = "#000",
    labelColor = "#333",
    inputBorderRadius = "5px",
    inputBorderColor = "#ccc",
    placeholderEmail = "Entrez votre email",
    placeholderPassword = "Entrez votre mot de passe",

    onEmailChange,
    onPasswordChange,

    forgotPasswordText = "Mot de passe oublié ?",

    submitButtonText = "Connexion",
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
  const [password, setPassword] = useState(props.password || "");

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    if (onEmailChange) onEmailChange(value);
  }, [onEmailChange]);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    if (onPasswordChange) onPasswordChange(value);
  }, [onPasswordChange]);

  // Met à jour la valeur quand initialValue change
  useEffect(() => {
    setEmail(props.email || "");
  }, [props.email]);

  useEffect(() => {
    setPassword(props.password || "");
  }, [props.password]);

  return (
    <div
      className={`${styles.loginCard} ${className}`}
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

        <div className={styles.inputGroup}>
          {showLabels && (
            <label
              htmlFor="passwordInput"
              style={{
                fontFamily: inputFont,
                fontSize: inputSize,
                color: labelColor,
                textAlign: "left",
              }}
            >
              {passwordLabel}
            </label>
          )}
          <input
            type="password"
            id="passwordInput"
            placeholder={placeholderPassword}
            className={styles.input}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
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

        <div className={styles.links}>
          <a href="/forgotPassword" className={styles.rightLink} style={{ color: primaryColor }}>
            <span className={styles.leftLink}>{forgotPasswordText}</span>
          </a>
          <a href="/signup" className={styles.rightLink} style={{ color: primaryColor }}>
            Créer un compte
          </a>
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
    </div>
  );
}

const Login = React.forwardRef(Login_);
export default Login;
