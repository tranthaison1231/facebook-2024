import ReactDOM from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import Users from "./pages/Users";
import MenuStyle from "./pages/MenuStyle";
import PrivateLayout from "./layouts/PrivateLayout";

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
        path: "/users",
        element: <Users />,
      },
      {
        path: "/menu-styles",
        element: <MenuStyle />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors position="top-right" />
    <RouterProvider router={router} />
  </>,
);
