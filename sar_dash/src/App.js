import { Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <li>
          <Link to="/login">Login</Link>
        </li>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
