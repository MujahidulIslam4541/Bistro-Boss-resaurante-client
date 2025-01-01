import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
