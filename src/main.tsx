import "./index.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Admin from "./components/Admin.tsx";
import Home from "./components/Home.tsx";
import InredientForm from "./components/InredientForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "new",
    element: <InredientForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <App>
        <RouterProvider router={router} />
      </App>
    </Theme>
  </React.StrictMode>
);
