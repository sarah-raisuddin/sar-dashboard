import { Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ManageTrails from "./pages/manage-trails";
import "./App.scss";
import ManageCheckpoints from "./pages/manage-checkpoints";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/manage_trails">Manage Trails</Link>
        </li>

        <li>
          <Link to="/manage_checkpoints">Manage Checkpoints</Link>
        </li>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage_trails" element={<ManageTrails />} />
        <Route path="/manage_checkpoints" element={<ManageCheckpoints />} />
      </Routes>
    </div>
  );
}

export default App;
