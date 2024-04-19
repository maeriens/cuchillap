import { createHashRouter } from "react-router-dom";

import IngredientForm from "../components/IngredientForm.tsx";
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
  {
    path: "new",
    element: <IngredientForm />,
  },
]);
