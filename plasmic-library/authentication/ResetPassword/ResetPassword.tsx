import type * as React from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import Link from "next/link";
import { presets } from "@/styles/presets";
import AlertManager, { type AlertType, type AlertMessage } from "@/plasmic-library/alerts/AlertManager/AlertManager";
import { EyeIcon, ViewIcon } from "@/plasmic-library/icons/icons";

export interface ResetPasswordProps {
  // Wrapper
  wrapperStyle?: "simple" | "card" | "custom";

  // Title
  titleHeading?: "h1" | "h2" | "h3";
  title?: string;

  // Input
  inputStyle?: "simple" | "advance";

  // Password
  password?: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  confirmPassword?: string;
  eyeIconColor?: string;

  // Buttons
  buttonSubmitStyle?: "primary" | "secondary" | "tertiary";
  submitButtonText?: string;
  buttonAbordStyle?: "primary" | "secondary" | "tertiary";
  cancelButtonText?: string;

  // Alert
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

  // show / hide
  showPasswordToggle?: boolean;
  showAlerts?: boolean;

  // Events handlers
  onPasswordChange?: (value: string) => void;
  onConfirmPasswordChange?: (value: string) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onAlertClose?: (id: string) => void;
}

function ResetPassword_(
  props: ResetPasswordProps,
  ref: HTMLElementRefOf<"div">
) {
  const {
    // Wrapper
    wrapperStyle = "card",

    // Title
    titleHeading = "h1",
    title = "Réinitialiser le mot de passe",
    
    // Input
    inputStyle = "simple",

    // Password
    passwordLabel= "Nouveau mot de passe*",
    confirmPasswordLabel= "Répétez le mot de passe*",
    eyeIconColor = "#666",

    // Buttons
    buttonSubmitStyle = "primary",
    submitButtonText = "Réinitialiser",
    buttonAbordStyle = "tertiary",
    cancelButtonText = "Annuler",
    
    // Alert
    alertPosition = 'top',
    maxAlerts = 3,
    customErrorMessages,
    resetSuccessMessage = "Votre mot de passe a été réinitialisé avec succès!",

    // show / hide
    showPasswordToggle = true,
    showAlerts = true,

    // Events handlers
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
    onAlertClose,
  } = props;

  const Title = titleHeading as keyof JSX.IntrinsicElements;
  const [password, setPassword] = useState(props.password || "");
  const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword || "");
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

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
    if (onPasswordChange) onPasswordChange(e.target.value);
  }, [onPasswordChange]);


  const handleConfirmPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (onConfirmPasswordChange) onConfirmPasswordChange(e.target.value);
  }, [onConfirmPasswordChange]);

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

  useEffect(() => {
    return () => {
      setAlerts([]);
    };
  }, []);

  useEffect(() => {
    setPassword(props.password || "");
  },  [props.password]);
  
    useEffect(() => {
      setConfirmPassword(props.confirmPassword || "");
    },  [props.confirmPassword]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        onSubmit(event);
        addAlert('success', resetSuccessMessage);
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
              onChange={handlePasswordChange}
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
          <label style={presets.formLabel as React.CSSProperties} htmlFor="confirmPasswordInput">{confirmPasswordLabel}</label>
          <div style={presets.passwordInputWrapper as React.CSSProperties}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPasswordInput"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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

const ResetPassword = forwardRef(ResetPassword_);
export default ResetPassword;
