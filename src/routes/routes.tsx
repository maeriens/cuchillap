import { createHashRouter } from "react-router-dom";

import Admin from "../pages/Admin.tsx";
import Home from "../pages/Home.tsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
]);
