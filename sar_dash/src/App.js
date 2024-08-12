import { Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ManageTrails from "./pages/manage-trails";
import "./App.scss";
import ManageCheckpoints from "./pages/manage-checkpoints";
import ManageUsers from "./pages/manage-users";
import { useState } from "react";
import HeaderMenu from "./base-components/header-menu";
import { useEffect } from "react";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    const loginState = localStorage.getItem("isUserLoggedIn");
    return loginState === "true";
  });

  useEffect(() => {
    localStorage.setItem("isUserLoggedIn", isUserLoggedIn);
  }, [isUserLoggedIn]);
  const handleUserLogIn = () => {
    setIsUserLoggedIn(true);
  };

  const handleUserLogOut = () => {
    setIsUserLoggedIn(false);
    localStorage.setItem("isUserLoggedIn", "false");
  };

  return (
    <div className="App">
      <HeaderMenu
        isUserLoggedIn={isUserLoggedIn}
        handleUserLogOut={handleUserLogOut}
      />

      <Routes>
        <Route
          path="/login"
          element={<Login handleUserLogIn={handleUserLogIn} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-trails" element={<ManageTrails />} />
        <Route path="/manage-checkpoints" element={<ManageCheckpoints />} />
        <Route path="/manage-users" element={<ManageUsers />} />
      </Routes>
    </div>
  );
}

export default App;
