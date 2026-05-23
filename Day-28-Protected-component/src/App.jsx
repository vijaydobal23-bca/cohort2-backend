import React from "react";
import FaceExpression from "./features/expression/components/FaceExpression";

import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";
import "./features/shared/styles/global.scss";
import { AuthProvider } from "./features/auth/auth.context";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
};

export default App;
