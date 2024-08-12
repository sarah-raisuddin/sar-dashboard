// src/About.js
import React, { useState } from "react";
import logo from "../images/logo.png";
import SubmissionButton from "../base-components/buttons/button";
import InputText from "../base-components/inputs/input-text";
import { Link, useNavigate } from "react-router-dom";
import apiEndpoint from "../requests/base";
import InputErrorMessage from "../base-components/input-error-message";

function Login({ handleUserLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    const endpoint = `${apiEndpoint}sar_dashboard/login`;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        localStorage.setItem("isUserLoggedIn", "true");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("firstName", data.firstName);
        navigateTo("/dashboard");
        handleUserLogin();
      } else {
        // Handle errors
        setError(true);
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
          onChange={setEmail}
        />
        <InputText
          label="Password"
          password={true}
          placeholder="type your password"
          value={password}
          onChange={setPassword}
        />
        {error && <InputErrorMessage message={"Invaild login"} />}
        <SubmissionButton text={"login"} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Login;
