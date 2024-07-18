// src/About.js
import React, { useState } from "react";
import logo from "../images/logo.png";
import SubmissionButton from "../base-components/button";
import InputText from "../base-components/input-text";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your API endpoint
    const apiEndpoint = "http://localhost:3000/sar_dashboard/login";
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
      } else {
        // Handle errors
        console.log("Login failed", response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login">
      <div>
        <h1>
          <i>TrekCheck</i>
        </h1>
        <div className="login-subtitle">
          <h2>by</h2>
          <img className="login-logo" src={logo}></img>
        </div>
      </div>
      <div className="login-body">
        <InputText
          label="Email"
          placeholder="type your email"
          value={email}
          setValue={setEmail}
        />
        <InputText
          label="Password"
          placeholder="type your password"
          value={password}
          setValue={setPassword}
        />
        <div className="forgot-password-link">
          <p>
            Forgot password? <a>Click here for account recovery</a>
          </p>
        </div>
        <SubmissionButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Login;
