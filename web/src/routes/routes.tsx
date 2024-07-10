import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PrivateLayout from "../layouts/PrivateLayout";
import Market from "../pages/Market";
import Group from "../pages/Group";
import Gaming from "../pages/Gaming";
import Notifications from "../pages/Notification";

const routes = [
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
      {
        path: "/notifications",
        element: <Notifications/>
      }
    ],
  },
  { path: "*", element: <NotFound /> },
];
export default routes;
