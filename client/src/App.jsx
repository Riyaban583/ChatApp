import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import assets from "./assets/assets";

const App = () => {

  const { authUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div
      style={{ backgroundImage: `url(${assets.bgImage})` }}
      className="bg-cover bg-center min-h-screen bg-[#0d0d1a] text-white"
    >

      <Toaster />

      <Routes>

        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>

    </div>
  );
};

export default App;