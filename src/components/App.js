import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <nav>
          <Link to="/">Login</Link> |{" "}
          <Link to="/home">Code Playground</Link>
          <p>Status: {isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
        </nav>

        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/home"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
