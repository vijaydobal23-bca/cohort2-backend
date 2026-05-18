import React from "react";
import AppRoutes from "./routes";
import { RouterProvider } from "react-router-dom";
import "./styles.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes></AppRoutes>
    </AuthProvider>
  );
};

export default App;
