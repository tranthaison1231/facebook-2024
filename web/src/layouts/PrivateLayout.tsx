import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function PrivateLayout() {

  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;


  return (
    <div>
      <Header/>
      <div className="grid grid-cols-4 pt-14">
        <Navbar className="col-span-1 "/>
        <div className="col-span-3 place-self-center pt-4 h-[1000px]">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
