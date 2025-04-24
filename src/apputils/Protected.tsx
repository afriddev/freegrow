import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import HomeFooter from "./HomeFooter";

function Protected() {
  return (
    <div className="flex flex-col bg-[#F8F8FF] w-full h-screen">
      <AppNavBar />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <HomeFooter />
    </div>
  );
}

export default Protected;
