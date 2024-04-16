import "./index.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <App>
        <RouterProvider router={router} />
      </App>
    </Theme>
  </React.StrictMode>
);
