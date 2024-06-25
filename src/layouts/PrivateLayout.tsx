import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { cn } from "../utils/cn";

export default function PrivateLayout() {
  const [isToggle, setIsToggle] = useState(false);

  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <Header isToggle={isToggle} onToggle={onToggle} />
      <div className="flex pt-[68px]">
        <Navbar isToggle={isToggle} />
        <div
          className={cn("bg-gray-300 w-full pl-[260px] overflow-y-scroll", {
            "pl-32": isToggle,
          })}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
