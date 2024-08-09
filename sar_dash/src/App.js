import { Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ManageTrails from "./pages/manage-trails";
import "./App.scss";
import ManageCheckpoints from "./pages/manage-checkpoints";
import ManageUsers from "./pages/manage-users";
import { useState } from "react";
import HeaderMenu from "./base-components/header-menu";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("");

  const handleUserLogIn = () => {
    setIsUserLoggedIn(true);
  };

  const handleUserLogOut = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <HeaderMenu
        handleUserLogOut={handleUserLogOut}
        handleUserLogIn={handleUserLogIn}
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-trails" element={<ManageTrails />} />
        <Route path="/manage-checkpoints" element={<ManageCheckpoints />} />
        <Route path="/manage-users" element={<ManageUsers />} />
      </Routes>
    </div>
  );
}

export default App;
