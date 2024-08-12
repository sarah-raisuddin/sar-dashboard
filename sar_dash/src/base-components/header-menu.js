import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/wanderSafe-logo-grey.png";

function HeaderMenu({ isUserLoggedIn, handleUserLogOut }) {
  const loginState = localStorage.getItem("isUserLoggedIn");

  return (
    <nav className="header-menu">
      <div className="header-menu-left">
        <Link to="/dashboard" className="menu-logo">
          <img className="menu-logo" src={logo} alt="WanderSafe Logo" />
        </Link>
      </div>
      <div className="header-menu-right">
        <ul className="menu-links">
          {/* The links below are for development rn and should be removed once proper
                        routing is in place. */}
          {/* DEBUG: left links here for easy debug later if needed
                    <li>
                        <Link to="/terms-conditions">Terms and Conditions</Link>
                    </li>
                    <li>
                        <Link to="/trips">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/account-registration">Account Registration</Link>
                    </li>
                                        <li>
                        <Link to="/trip-summary">Trip Summary</Link>
                    </li>
                    <li>
                        <Link to="/trip-plan">Trip Plan</Link>
                    </li>
                    */}

          {loginState === "true" ? (
            <div className="account-control-link">
              <li>
                <Link to="/login" onClick={handleUserLogOut}>
                  Logout
                </Link>
              </li>
            </div>
          ) : (
            <div className="account-control-link">
              <li>
                <Link to="/login">Login</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default HeaderMenu;
