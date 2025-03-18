import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import styles from "./SignUp.module.css";
import { useCallback, useEffect, useState } from "react";
import {tokens} from "@/styles/design-tokens"

export interface SignUpProps {
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
  placeholderConfirmPassword?: string;

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
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;

  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  onFirstNameChange?: (value: string) => void;
  onLastNameChange?: (value: string) => void;
  onConfirmPasswordChange?: (value: string) => void;

  isPasswordValid?: boolean;

  // Autres
  className?: string;
}

function SignUp_(
  props: SignUpProps, 
  ref: HTMLElementRefOf<"div">
) {
  const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";
  const sand200Borders = tokens.find(token => token.name === "sand-200-borders")?.value ?? "#7641f1";

  const {
    width = "630px",
    height = "auto",
    padding = "64px",
    borderRadius = "24px",
    rowGap = "10px",

    title = "Bienvenue !",
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
    inputBorderColor = sand200Borders,
    placeholderEmail = "Entrez votre email",
    placeholderPassword = "Entrez votre mot de passe",
    placeholderConfirmPassword = "Répétez votre mot de passe",

    submitButtonText = "S'inscrire",
    submitFont = "Arial, sans-serif",
    submitSize = "16px",
    submitColor = "#fff",
    submitBackgroundColor = primaryColor,
    submitBorderRadius = "5px",
    submitWidth = "100%",
    submitHeight = "48px",

    onSubmit,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onFirstNameChange,
    onLastNameChange,
    className,
  } = props;

  const [email, setEmail] = useState(props.email || "");
  const [firstName, setFirstName] = useState(props.firstName || "");
  const [lastName, setLastName] = useState(props.lastName || "");
  const [password, setPassword] = useState(props.password || "");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Gestion du changement des inputs
  const handleEmailChange = useCallback((value: string) => {
      setEmail(value);
      if (onEmailChange) onEmailChange(value);
    }, [onEmailChange]);

  const handleFirstNameChange = useCallback((value: string) => {
    setFirstName(value);
    if (onFirstNameChange) onFirstNameChange(value);
  }, [onFirstNameChange]);

  const handleLastNameChange = useCallback((value: string) => {
    setLastName(value);
    if (onLastNameChange) onLastNameChange(value);
  }, [onLastNameChange]);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    if (onPasswordChange) onPasswordChange(value);
  }, [onPasswordChange]);

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setConfirmPassword(newValue);
    
    // Si onConfirmPasswordChange est passé dans les props, on l'appelle
    if (onConfirmPasswordChange) {
      onConfirmPasswordChange(newValue);  // On passe la nouvelle valeur de confirmPassword
    }
  };
  

  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

useEffect(() => {
  setEmail((prevEmail) => props.email || prevEmail);
  setFirstName((prevFirstName) => props.firstName || prevFirstName);
  setLastName((prevLastName) => props.lastName || prevLastName);
  setPassword((prevPassword) => props.password || prevPassword);
  setConfirmPassword((prevConfirmPassword) => props.confirmPassword || prevConfirmPassword);
}, [props.email, props.firstName, props.lastName, props.password, props.confirmPassword]);


  return (
    <div
      className={`${styles.signUpCard} ${className}`}
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
      <p className={styles.subTitle}>
        Pour votre première connexion, renseignez votre e-mail et choisissez un mot de passe.
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

        <div className={styles.inputGroup}>
          {showLabels && (
            <label
              htmlFor="firstNameInput"
              style={{
                fontFamily: inputFont,
                fontSize: inputSize,
                color: labelColor,
                textAlign: "left",
              }}
            >
              Prénom
            </label>
          )}
          <input
            type="text"
            id="firstNameInput"
            placeholder="Entrez votre prénom"
            className={styles.input}
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
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
              htmlFor="lastNameInput"
              style={{
                fontFamily: inputFont,
                fontSize: inputSize,
                color: labelColor,
                textAlign: "left",
              }}
            >
              Nom
            </label>
          )}
          <input
            type="text"
            id="lastNameInput"
            placeholder="Entrez votre nom"
            className={styles.input}
            value={lastName}
            onChange={(e) => handleLastNameChange(e.target.value)}
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
          <small>Utilisez 8 caractères ou plus en mélangeant lettres, chiffres et symboles.</small>
        </div>

        <div className={styles.passwordStrength}>
          <div className={isPasswordValid ? styles.valid : styles.invalid} />
          <div className={isPasswordValid ? styles.valid : styles.invalid} />
          <div className={isPasswordValid ? styles.valid : styles.invalid} />
          <div className={isPasswordValid ? styles.valid : styles.invalid} />
        </div>

        <div className={styles.inputGroup}>
          <label
            htmlFor="confirmPasswordInput"
            style={{
              fontFamily: inputFont,
              fontSize: inputSize,
              color: labelColor,
              textAlign: "left",
            }}
          >
            Répétez le mot de passe
          </label>
          <input
            type="password"
            id="confirmPasswordInput"
            placeholder={placeholderConfirmPassword}
            className={styles.input}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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

        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="termsCheckbox" required />
          <label htmlFor="termsCheckbox">
            J'accepte la <a href="/politique">politique de confidentialité</a>
          </label>
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

const SignUp = React.forwardRef(SignUp_);
export default SignUp;
