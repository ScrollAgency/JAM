import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useCallback, useEffect, useState } from "react";
import { presets, getTokenValue } from "@/styles/presets";
import Link from "next/link";
import { useRouter } from "next/router";

export interface LoginProps {
  wrapperStyle?: "simple" | "card" | "custom";
  buttonStyle?: "primary" | "secondary" | "tertiary";
  inputStyle?: "simple" | "advance";
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  forgotPasswordText?: string;
  titleHeading?: "h1" | "h2" | "h3";
  title?: string;
  emailLabel?: string;
  passwordLabel?: string;
  placeholderEmail?: string;
  placeholderPassword?: string;
  submitButtonText?: string;
  showPasswordToggle?: boolean;
  eyeIconColor?: string;

  // OAuth props
  showOAuthButtons?: boolean;
  googleButtonText?: string;
  appleButtonText?: string;
  oAuthButtonsPosition?: 'top' | 'bottom';
  oAuthSeparatorText?: string;
  onGoogleSignIn?: () => void;
  onAppleSignIn?: () => void;

  email?: string;
  password?: string;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  showCreateAccount?: boolean;
  createAccountText?: string;
  signUpLinkText?: string;
  redirectAfterLogin?: string;
}

function Login_(
  props: LoginProps, 
  ref: HTMLElementRefOf<"div">
) {
  const {
    wrapperStyle = "card", 
    buttonStyle = "primary", 
    inputStyle = "simple", 
    onSubmit, 
    forgotPasswordText = "Mot de passe oublié ?", 
    titleHeading = "h1",  
    title = "Connexion",  
    emailLabel = "Email",
    passwordLabel = "Mot de passe",
    placeholderEmail = "Entrez votre email",  
    placeholderPassword = "Entrez votre mot de passe",  
    submitButtonText = "Connexion",  
    onEmailChange,  
    onPasswordChange,  
    showCreateAccount = true,  
    createAccountText = "Créer un compte",
    showPasswordToggle = true,
    eyeIconColor = "#666",
    // OAuth props
    showOAuthButtons = true,
    googleButtonText = "GOOGLE",
    appleButtonText = "APPLE",
    oAuthButtonsPosition = 'bottom',
    oAuthSeparatorText = "ou",
    onGoogleSignIn,
    onAppleSignIn,
    signUpLinkText = "Pas encore de compte ? INSCRIPTION",
    redirectAfterLogin = "/",
  } = props;
  
  const router = useRouter();
  const Title = titleHeading as keyof JSX.IntrinsicElements;
  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (onEmailChange) onEmailChange(e.target.value);
  }, [onEmailChange]);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (onPasswordChange) onPasswordChange(e.target.value);
  }, [onPasswordChange]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      try {
        await onSubmit(event);
        // Au lieu d'utiliser router.push qui peut causer des boucles, utilisons window.location
        window.location.href = redirectAfterLogin || "/";
      } catch (error) {
        console.error("Erreur lors de la connexion:", error);
      }
    }
  };

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>Icône d'œil</title>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const ViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>Icône de vue</title>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  // Rendu des boutons OAuth
  const renderOAuthButtons = () => {
    if (!showOAuthButtons) return null;
    
    return (
      <div style={presets.oAuthButtons as React.CSSProperties}>
         <div style={presets.oAuthButtons as React.CSSProperties}>
        <button
          type="button"
          onClick={onGoogleSignIn}
          onKeyDown={(e) => e.key === "Enter" && onGoogleSignIn?.()}
          style={presets.oAuthButton as React.CSSProperties}
          aria-label="Se connecter avec Google"
        >
          <img src="/google-logo.svg" alt="Logo Google" className="w-5 h-5" />
          <span>{googleButtonText}</span>
        </button>

        <button
          type="button"
          onClick={onAppleSignIn}
          onKeyDown={(e) => e.key === "Enter" && onAppleSignIn?.()}
          style={presets.oAuthButton as React.CSSProperties}
          aria-label="Se connecter avec Apple"
        >
          <img src="/apple-logo.svg" alt="Logo Apple" className="w-5 h-5" />
          <span>{appleButtonText}</span>
        </button>
      </div>
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
      style={presets.wrappers[wrapperStyle] as React.CSSProperties}
    >
      <Title style={presets.heading1}>{title}</Title>

      {oAuthButtonsPosition === 'top' && renderOAuthButtons()}

      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div style={{ marginBottom: "8px" }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="email">{emailLabel}</label>
          <input
            type="email"
            id="email"
            placeholder={placeholderEmail}
            style={presets.inputs[inputStyle]} 
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="password">{passwordLabel}</label>
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
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href="/forgot-password" style={presets.linkRegister} passHref legacyBehavior onClick={(e) => {
            e.preventDefault();
            window.location.href = "/forgot-password";
          }}>
            {forgotPasswordText}
          </Link>
        </div>

        <button type="submit" style={presets.buttons[buttonStyle] as React.CSSProperties}>
          {submitButtonText}
        </button>

        {oAuthButtonsPosition === 'bottom' && renderOAuthButtons()}
      </form>

      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "24px"
      }}>
        <Link href="/register" style={presets.linkRegister} passHref legacyBehavior onClick={(e) => {
          e.preventDefault();
          window.location.href = "/register";
        }}>
            {signUpLinkText}
        </Link>
      </div>
    </div>
  );
}

const Login = React.forwardRef(Login_);
export default Login;
