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
        // Ne pas rediriger ici automatiquement,
        // laisser la redirection se faire par le composant parent si nécessaire
        // La redirection sera gérée par le middleware ou le composant parent
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
        <div
          onClick={onGoogleSignIn}
          role="button"
          tabIndex={0}
          style={presets.oAuthButton as React.CSSProperties}
          onKeyDown={(e) => e.key === 'Enter' && onGoogleSignIn?.()}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8084 9.2C17.8084 8.6 17.7584 8 17.6584 7.4H9.00839V10.9H13.9584C13.7584 12 13.1084 12.9 12.1084 13.5V15.8H15.0084C16.7084 14.2 17.8084 11.9 17.8084 9.2Z" fill="#4285F4"/>
            <path d="M9.00843 18C11.4084 18 13.4084 17.2 15.0084 15.8L12.1084 13.5C11.3084 14 10.2584 14.3 9.00843 14.3C6.60843 14.3 4.60843 12.7 3.90843 10.6H0.908432V13C2.50843 16 5.50843 18 9.00843 18Z" fill="#34A853"/>
            <path d="M3.90833 10.6C3.70833 10 3.60833 9.4 3.60833 8.8C3.60833 8.2 3.70833 7.6 3.90833 7L3.90833 4.6H0.908328C0.308328 5.9 -0.00167273 7.3 -0.00167273 8.8C-0.00167273 10.3 0.308328 11.7 0.908328 13L3.90833 10.6Z" fill="#FBBC05"/>
            <path d="M9.00843 3.3C10.3084 3.3 11.4584 3.7 12.3584 4.6L14.9084 2C13.4084 0.8 11.4084 0 9.00843 0C5.50843 0 2.50843 2 0.908432 5L3.90843 7.4C4.60843 5.3 6.60843 3.3 9.00843 3.3Z" fill="#EA4335"/>
          </svg>
          {googleButtonText}
        </div>
        <div
          onClick={onAppleSignIn}
          role="button"
          tabIndex={0}
          style={presets.oAuthButton as React.CSSProperties}
          onKeyDown={(e) => e.key === 'Enter' && onAppleSignIn?.()}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3354 9.47829C14.3173 7.21055 16.1398 6.14422 16.2304 6.08828C15.0317 4.34462 13.1617 4.09605 12.4961 4.08056C10.9048 3.92143 9.3677 5.05102 8.56057 5.05102C7.73586 5.05102 6.49336 4.09605 5.16367 4.12963C3.45429 4.16321 1.87805 5.18162 1.02148 6.73602C-0.743086 9.8914 0.626914 14.6195 2.31773 17.3183C3.16086 18.6389 4.15742 20.1281 5.46367 20.0621C6.72711 19.9907 7.20429 19.1879 8.71836 19.1879C10.2152 19.1879 10.6596 20.0621 11.9838 20.0223C13.3533 19.9907 14.2037 18.6718 15.0121 17.3402C15.9815 15.8235 16.3706 14.3397 16.3887 14.2737C16.3525 14.2628 14.3571 13.4927 14.3354 11.2359C14.3173 9.34099 15.904 8.42087 15.9973 8.35384C14.8221 6.68471 13.0212 6.45943 12.4961 6.41266C10.9371 6.25352 9.59836 7.23076 8.71836 7.23076C7.8563 7.23076 6.67148 6.45943 5.29461 6.45943C5.29742 6.45943 5.29742 6.45943 5.29461 6.45943Z" fill="black"/>
            <path d="M12.2016 2.23033C12.8977 1.37239 13.3368 0.186 13.2079 -1C12.1957 0.0486913 10.8865 0.813195 10.159 1.64423C9.51504 2.37865 8.98067 3.60254 9.12773 4.75541C10.2692 4.84572 11.4774 3.08827 12.2016 2.23033Z" fill="black"/>
          </svg>
          {appleButtonText}
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
          <Link href="/forgot-password" passHref legacyBehavior>
            <a style={presets.links.linkLeft}>{forgotPasswordText}</a>
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
        <Link href="/register" passHref legacyBehavior>
          <a style={{
            color: getTokenValue("information-text"),
            fontSize: "14px",
            fontWeight: "500",
            textDecoration: "none",
            cursor: "pointer"
          }}>
            {signUpLinkText}
          </a>
        </Link>
      </div>
    </div>
  );
}

const Login = React.forwardRef(Login_);
export default Login;
