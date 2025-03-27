import * as React from "react";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useCallback, useEffect, useState } from "react";
import { presets } from "@/styles/presets";
import Link from "next/link";

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

  email?: string;
  password?: string;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  showCreateAccount?: boolean;
  createAccountText?: string;
}

function Login_(
  props: LoginProps,
  ref: React.ForwardedRef<HTMLDivElement>
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
    showCreateAccount = false,
    createAccountText = "Créer un compte",
  } = props;

  const Title = titleHeading as keyof JSX.IntrinsicElements;
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
    setEmail((prevEmail) => props.email || prevEmail);
  }, [props.email]);

  useEffect(() => {
    setPassword((prevPassword) => props.password || prevPassword);
  }, [props.password]);

  return (
    <div
      ref={ref}
      style={presets.wrappers[wrapperStyle] as React.CSSProperties}
    >
      <Title style={presets.heading1}>{title}</Title>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (onSubmit) onSubmit(event);
        }}
        style={{ display: "flex", flexDirection: "column", rowGap: presets.form.rowGap }}
      >
        <div style={{ rowGap: presets.inputField.rowGap }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="email">{emailLabel}</label>
          <input
            type="email"
            id="email"
            placeholder={placeholderEmail}
            style={presets.inputs[inputStyle]}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </div>

        <div style={{ rowGap: presets.inputField.rowGap }}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="password">{passwordLabel}</label>
          <input
            type="password"
            id="password"
            placeholder={placeholderPassword}
            style={presets.inputs[inputStyle]}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/forgotpassword">
            <span style={presets.links.linkLeft}>{forgotPasswordText}</span>
          </Link>

          {showCreateAccount && (
            <Link href="/signup">
              <span style={presets.links.linkRight}>{createAccountText}</span>
            </Link>
          )}
        </div>

        <button type="submit" style={presets.buttons[buttonStyle] as React.CSSProperties}>
          {submitButtonText}
        </button>
      </form>
    </div>
  );
}

const Login = React.forwardRef(Login_);
export default Login;