import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useCallback, useEffect, useState } from "react";
import { presets } from "@/styles/presets";
import Link from "next/link";
import { EyeIcon, ViewIcon } from "@/plasmic-library/authentication/icons/icons";
import AuthButton from "@/plasmic-library/buttons/ButtonGoogle/ButtonGoogle";


export interface LoginProps {
  // Wrapper
  wrapperStyle?: "simple" | "card" | "custom";
  padding?: string;  // Controls inner padding of the component

  // Title
  titleHeading?: "h1" | "h2" | "h3";
  title?: string;

  // Input
  inputStyle?: "simple" | "advance";

  // Email
  email?: string;
  emailLabel?: string;
  placeholderEmail?: string;

  // Password
  password?: string;
  passwordLabel?: string;
  placeholderPassword?: string;
  eyeIconColor?: string;

  // Links
  forgotPasswordText?: string;
  createAccountText?: string;
  signUpPrefixText?: string;  // Texte régulier (ex: "Pas encore de compte ?")
  signUpLinkLabel?: string;   // Texte du lien (ex: "INSCRIPTION")

  forgotPasswordPosition?: 'left' | 'right';

  // Buttons
  buttonStyle?: "primary" | "secondary" | "tertiary";
  submitButtonText?: string;
  submitButtonIcon?: React.ReactNode;
  submitButtonIconPosition?: "left" | "right"; // default: right

  // OAuth
  googleButtonText?: string;
  appleButtonText?: string;
  oAuthButtonsPosition?: 'top' | 'bottom';
  oAuthSeparatorText?: string;
  showSocialOAuth?: boolean;

  // show / hide
  showPasswordToggle?: boolean;
  showBottomSignupLink?: boolean;

  // Events handlers
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  onGoogleSignIn?: () => void;
  onAppleSignIn?: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onError?: (error: Error) => void;
}

function Login_(
  props: LoginProps,
  ref: HTMLElementRefOf<"div">
) {
  const {
    // Wrapper
    wrapperStyle = "card",
    padding = "48px",

    // Title
    titleHeading = "h1",
    title = "Connexion",

    // Input
    inputStyle = "simple",

    // Email
    emailLabel = "Email",
    placeholderEmail = "Entrez votre email",

    // Password
    passwordLabel = "Mot de passe",
    placeholderPassword = "Entrez votre mot de passe",
    eyeIconColor = "#666",

    // Links
    forgotPasswordText = "Mot de passe oublié ?",
    createAccountText = "Créer un compte",
    signUpPrefixText = "Pas encore de compte ?",
    signUpLinkLabel = "INSCRIPTION",

    forgotPasswordPosition = "left",

    // Buttons
    buttonStyle = "primary",
    submitButtonText = "CONNEXION",
    submitButtonIcon,
    submitButtonIconPosition = "right",

    // OAuth
    googleButtonText = "GOOGLE",
    appleButtonText = "APPLE",
    oAuthButtonsPosition = 'bottom',
    oAuthSeparatorText = "ou",
    showSocialOAuth = true,

    // show / hide
    showPasswordToggle = true,
    showBottomSignupLink = false,

    // Events handlers
    onEmailChange,
    onPasswordChange,
    onGoogleSignIn,
    onAppleSignIn,
    onSubmit,
    onError,
  } = props;

  const Title = titleHeading as keyof JSX.IntrinsicElements;
  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (onEmailChange) onEmailChange(newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (onPasswordChange) onPasswordChange(newPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleError = (error: Error) => {
    console.error('Login error:', error);
    onError?.(error);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      throw new Error("L'email est requis");
    }
    if (!emailRegex.test(email)) {
      throw new Error("Format d'email invalide");
    }
    if (!password) {
      throw new Error("Le mot de passe est requis");
    }
    if (password.length < 6) {
      throw new Error("Le mot de passe doit contenir au moins 6 caractères");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Validate all form fields before submission
      validateForm();

      setIsSubmitting(true);

      // Wait for the onSubmit promise to resolve
      await onSubmit?.(event);

    } catch (error) {
      handleError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = () => {
    try {
      onGoogleSignIn?.();
    } catch (error) {
      handleError(error instanceof Error ? error : new Error(String(error)));
    }
  };

  const handleAppleSignIn = () => {
    try {
      onAppleSignIn?.();
    } catch (error) {
      handleError(error instanceof Error ? error : new Error(String(error)));
    }
  };

  // Rendu des boutons OAuth
  const renderOAuthButtons = () => {
    return (
      <div style={presets.oAuthButtons as React.CSSProperties}>
        <AuthButton
          label={googleButtonText}
          icon="start"
          iconImage="/google-logo.svg"
          size="large"
          hierarchy="secondary"
          onClick={handleGoogleSignIn}
        />

        <button
          type="button"
          onClick={handleAppleSignIn}
          onKeyDown={(e) => e.key === "Enter" && handleAppleSignIn()}
          style={presets.oAuthButton as React.CSSProperties}
          aria-label="Se connecter avec Apple"
        >
          <img src="/apple-logo.svg" alt="Logo Apple" className="w-5 h-5" />
          <span>{appleButtonText}</span>
        </button>
      </div>
    );
  };

  useEffect(() => {
    setEmail(props.email || "");
  }, [props.email]);

  useEffect(() => {
    setPassword(props.password || "");
  }, [props.password]);

  return (
    <div
      ref={ref}
      style={{
        ...presets.wrappers[wrapperStyle] as React.CSSProperties,
        rowGap: "16px",
        padding
      }}
    >
      <Title style={presets.heading1}>{title}</Title>

      <form
        onSubmit={handleSubmit}
        style={{ ...presets.form as React.CSSProperties, gap: "16px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <label style={{
            ...presets.formLabel as React.CSSProperties,
            fontSize: "14px"
          }} htmlFor="email">
            {emailLabel}
          </label>
          <input
            type="email"
            id="email"
            placeholder={placeholderEmail}
            style={presets.inputs[inputStyle]}
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <label style={{
            ...presets.formLabel as React.CSSProperties,
            fontSize: "14px"
          }} htmlFor="password">
            {passwordLabel}
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder={placeholderPassword}
              style={presets.inputs[inputStyle]}
              value={password}
              onChange={handlePasswordChange}
            />
            {showPasswordToggle && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={presets.togglePasswordVisibility as React.CSSProperties}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? <EyeIcon /> : <ViewIcon />}
              </button>
            )}
          </div>
          <div style={{
            display: "flex",
            paddingTop: "8px",
            justifyContent: "space-between",
            flexDirection: forgotPasswordPosition === "left" ? "row" : "row-reverse"
          }}>
            <Link href="/forgot-password"><span style={presets.links.linkLeft}>{forgotPasswordText}</span></Link>
          </div>

        </div>

        <button
          type="submit"
          style={{
            ...presets.buttons[buttonStyle] as React.CSSProperties,
            color: "#000",
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px", // <-- espace entre texte et icône
          }}
          disabled={isSubmitting}
        >
          {submitButtonIconPosition === "left" && submitButtonIcon}
          {isSubmitting ? "CONNEXION..." : submitButtonText}
          {submitButtonIconPosition !== "left" && submitButtonIcon}
        </button>

        {showSocialOAuth && oAuthSeparatorText && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
              <span style={{ margin: '0 10px', color: '#6B7280' }}>{oAuthSeparatorText}</span>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
            </div>
            {renderOAuthButtons()}
          </>
        )}
      </form>

      {showBottomSignupLink && (
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <span style={{ fontSize: "16px", fontWeight: 400, color: "#000" }}>
            {signUpPrefixText}{" "}
          </span>
          <Link href="/register" style={presets.links.linkLeft}>
            {signUpLinkLabel}
          </Link>
        </div>
      )}

    </div>
  );
}

const Login = React.forwardRef(Login_);
export default Login;