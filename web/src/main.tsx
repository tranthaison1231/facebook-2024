import ReactDOM from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";

import PrivateLayout from "./layouts/PrivateLayout";
import Market from "./pages/Market";
import Group from "./pages/Group";
import Gaming from "./pages/Gaming";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <Market />,
      },
      {
        path: "/groups",
        element: <Group />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors position="top-right" />
    <RouterProvider router={router} />
  </>
);
