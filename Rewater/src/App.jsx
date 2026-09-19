import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup Page */}
        <Route
          path="/signup"
          element={<Signup />}
        />
      <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Default: / → Login */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;