import type * as React from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { presets } from "@/styles/presets";
import AlertManager, { type AlertType, type AlertMessage } from "../../alerts/AlertManager/AlertManager";

export interface ResetPasswordProps {
  wrapperStyle?: "simple" | "card" | "custom";
  inputStyle?: "simple" | "advance";
  titleHeading?: "h1" | "h2" | "h3";
  title?: string;
  passwordLabel?: string;
  repeatPasswordLabel?: string;
  buttonSubmitStyle?: "primary" | "secondary" | "tertiary";
  buttonAbordStyle?: "primary" | "secondary" | "tertiary";
  submitButtonText?: string;
  cancelButtonText?: string;
  showPasswordToggle?: boolean;
  eyeIconColor?: string;
  showAlerts?: boolean;
  alertPosition?: 'top' | 'bottom' | 'inline';
  maxAlerts?: number;
  customErrorMessages?: {
    weakPassword?: string;
    passwordMismatch?: string;
    resetTokenInvalid?: string;
    resetTokenExpired?: string;
    networkError?: string;
  };
  resetSuccessMessage?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onAlertClose?: (id: string) => void;
  className?: string;
  redirectAfterReset?: string;
}

function ResetPassword_(
  props: ResetPasswordProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    wrapperStyle = "card",
    inputStyle = "simple",
    onSubmit,
    titleHeading = "h1",
    title = "Réinitialiser le mot de passe",
    passwordLabel= "Nouveau mot de passe*",
    repeatPasswordLabel= "Répétez le mot de passe*",
    submitButtonText = "Réinitialiser",
    cancelButtonText = "Annuler",
    buttonSubmitStyle = "primary",
    buttonAbordStyle = "tertiary",
    showPasswordToggle = true,
    eyeIconColor = "#666",
    showAlerts = true,
    alertPosition = 'top',
    maxAlerts = 3,
    customErrorMessages,
    resetSuccessMessage = "Votre mot de passe a été réinitialisé avec succès!",
    onAlertClose,
    redirectAfterReset = "/login",
  } = props;

  const router = useRouter();
  const Title = titleHeading as keyof JSX.IntrinsicElements;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  const defaultErrorMessages = {
    weakPassword: "Le mot de passe est trop faible. Utilisez au moins 8 caractères avec des lettres, chiffres et symboles.",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    resetTokenInvalid: "Le lien de réinitialisation n'est pas valide",
    resetTokenExpired: "Le lien de réinitialisation a expiré",
    networkError: "Une erreur réseau s'est produite. Veuillez réessayer."
  };

  const errorMessages = { ...defaultErrorMessages, ...customErrorMessages };

  const addAlert = (type: AlertType, message: string) => {
    const id = Date.now().toString();
    setAlerts(prevAlerts => [...prevAlerts, { id, type, message }]);
    return id;
  };

  const removeAlert = (id: string) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
    if (onAlertClose) onAlertClose(id);
  };

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    checkPasswordStrength(value);
  }, []);

  const handleConfirmPasswordChange = useCallback((value: string) => {
    setConfirmPassword(value);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const checkPasswordStrength = (password: string) => {
    const criteria = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/];
    const hasMinLength = password.length >= 8;
    const criteriaCount = criteria.filter(regex => regex.test(password)).length;
    const strength = hasMinLength ? criteriaCount : Math.min(criteriaCount, 2);
    setPasswordStrength(strength);
  };

  const getStrengthColor = (strength: number) => {
    switch (strength) {
      case 1: return "#ff4d4d";
      case 2: return "#ffaa00";
      case 3: return "#c9d64f";
      case 4: return "#4caf50";
      default: return "#ddd";
    }
  };

  const renderStrengthBars = () => {
    const bars = [];
    for (let i = 0; i < 4; i++) {
      bars.push(
        <div
          key={i}
          style={{
            ...presets.strengthBar,
            backgroundColor: i < passwordStrength ? getStrengthColor(passwordStrength) : "#ddd",
          }}
        />
      );
    }
    return bars;
  };

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>Icône d'œil</title> {/* Accessibilité */}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const ViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>Icône de vue</title> {/* Accessibilité */}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  useEffect(() => {
    return () => {
      setAlerts([]);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlerts([]);
    let isValid = true;
    let hasShownError = false;

    if (passwordStrength < 3) {
      isValid = false;
      addAlert('error', errorMessages.weakPassword);
      hasShownError = true;
    }

    if (password !== confirmPassword) {
      isValid = false;
      if (!hasShownError) {
        addAlert('error', errorMessages.passwordMismatch);
      }
    }

    if (isValid && onSubmit) {
      try {
        await onSubmit(event);
        addAlert('success', resetSuccessMessage);
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } catch (error) {
        if (error instanceof Error) {
          addAlert('error', error.message || errorMessages.networkError);
        } else {
          addAlert('error', errorMessages.networkError);
        }
      }
    }
  };

  return (
    <div
      ref={ref}
      style={presets.wrappers[wrapperStyle] as React.CSSProperties}
    >
      <Title style={presets.heading1}>{title}</Title>

      {showAlerts && <AlertManager
        alerts={alerts}
        position={alertPosition}
        onClose={removeAlert}
        maxAlerts={maxAlerts}
      />}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", rowGap: presets.form.rowGap }}
      >
        <div style={{ rowGap: presets.inputField.rowGap }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="passwordInput">{passwordLabel}</label>
          <div style={presets.passwordInputWrapper as React.CSSProperties}>
            <input
              type={showPassword ? "text" : "password"}
              id="passwordInput"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              style={presets.inputs[inputStyle]}
            />
            {showPasswordToggle && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{ ...presets.togglePasswordVisibility, color: eyeIconColor} as React.CSSProperties}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? <EyeIcon /> : <ViewIcon />}
              </button>
            )}
          </div>
          <p style={presets.checkPassword as React.CSSProperties}>Utilisez 8 caractères ou plus en mélangeant lettres, chiffres et symboles.</p>
          <div style={presets.strengthBars}>{renderStrengthBars()}</div>
        </div>

        <div style={{ rowGap: presets.inputField.rowGap }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="confirmPassword">{repeatPasswordLabel}</label>
          <div style={presets.passwordInputWrapper as React.CSSProperties}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPasswordInput"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              required
              style={presets.inputs[inputStyle]}
            />
            {showPasswordToggle && (
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                style={{ ...presets.togglePasswordVisibility, color: eyeIconColor } as React.CSSProperties}
                aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showConfirmPassword ? <EyeIcon /> : <ViewIcon />}
              </button>
            )}
          </div>
        </div>

        <button
          type="submit"
          style={presets.buttons[buttonSubmitStyle] as React.CSSProperties}
        >
          {submitButtonText}
        </button>
      </form>

      <Link href="/login" passHref legacyBehavior>
        <a style={presets.buttons[buttonAbordStyle] as React.CSSProperties}>
          {cancelButtonText}
        </a>
      </Link>
    </div>
  );
}

const ResetPassword = forwardRef(ResetPassword_);
export default ResetPassword;
