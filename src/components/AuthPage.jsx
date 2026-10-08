import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthPage() {
  const [mode, setMode] = useState("signin");

  return (
    <div className="auth-page">
      <h1>decoded-dummy-login</h1>
      <div className="tabs">
        <button
          className={mode === "signin" ? "tab active" : "tab"}
          onClick={() => setMode("signin")}
        >
          Sign In
        </button>
        <button
          className={mode === "signup" ? "tab active" : "tab"}
          onClick={() => setMode("signup")}
        >
          Sign Up
        </button>
      </div>

      {mode === "signin" ? (
        <SignIn onSwitchToSignUp={() => setMode("signup")} />
      ) : (
        <SignUp onSwitchToSignIn={() => setMode("signin")} />
      )}
    </div>
  );
}
