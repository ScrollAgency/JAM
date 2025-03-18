import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import styles from "./ResetPassword.module.css";
import { useCallback, useEffect, useState } from "react";
import { tokens } from "@/styles/design-tokens";

export interface ResetPasswordProps {
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

  inputFont?: string;
  inputSize?: string;
  inputColor?: string;
  labelColor?: string;
  inputBorderRadius?: string;
  inputBorderColor?: string;
  
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

function ResetPassword_(
  props: ResetPasswordProps, 
  ref: HTMLElementRefOf<"div">
) {
  const primaryColor = tokens.find(token => token.name === "primaryColor")?.value ?? "#7641f1";

  const {
    width = "630px",
    height = "auto",
    padding = "64px",
    borderRadius = "24px",
    rowGap = "8px",

    title = "Réinitialiser le mot de passe",
    titleFont = "Arial, sans-serif",
    titleSize = "42px",
    titleColor = "#000",
    titleAlign = "left",

    inputFont = "Arial, sans-serif",
    inputSize = "16px",
    inputColor = "#000",
    labelColor = "#333",
    inputBorderRadius = "5px",
    inputBorderColor = "#ccc",

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

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    checkPasswordStrength(value);
  }, []);

  const handleConfirmPasswordChange = useCallback((value: string) => {
    setConfirmPassword(value);
  }, []);

  const checkPasswordStrength = (password: string) => {
    const criteria = [
      /[a-z]/,   // Lowercase letters
      /[A-Z]/,   // Uppercase letters
      /\d/,      // Numbers
      /[^A-Za-z0-9]/,  // Special characters
    ];

    const strength = criteria.filter(regex => regex.test(password)).length;
    setPasswordStrength(strength);
  };

  const renderStrengthBars = () => {
    const bars = [];
    for (let i = 0; i < 4; i++) {
      bars.push(
        <div
          key={i}
          className={`${styles.strengthBar} ${i < passwordStrength ? styles.filled : ""}`}
          style={{
            backgroundColor: i < passwordStrength ? primaryColor : "#ccc",  // Apply green color for filled bars
          }}
        />
      );
    }
    return bars;
  };

  return (
    <div
      className={`${styles.resetPasswordCard} ${className}`}
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
          <label
            htmlFor="passwordInput"
            style={{
              fontFamily: inputFont,
              fontSize: inputSize,
              color: labelColor,
              textAlign: "left",
            }}
          >
            Nouveau mot de passe*
          </label>
          <input
            type="password"
            id="passwordInput"
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
          <p className={styles.checkPassword}>Utilisez 8 caractères ou plus en mélangeant lettres, chiffres et symboles.</p>
          <div className={styles.strengthBars}>
            {renderStrengthBars()}
          </div>
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
            Répétez le mot de passe*
          </label>
          <input
            type="password"
            id="confirmPasswordInput"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
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

const ResetPassword = React.forwardRef(ResetPassword_);
export default ResetPassword;
