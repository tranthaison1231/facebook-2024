import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function PrivateLayout() {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  return (
    <div>
      <Header />
      <div className="pt-14 px-2">
        <Outlet />
      </div>
    </div>
  );
}
