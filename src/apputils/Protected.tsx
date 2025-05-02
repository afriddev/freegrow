import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import HomeFooter from "./HomeFooter";

function Protected() {
  const firstTimeLogin = localStorage.getItem("isFirstTimeLogin") ?? false;
  return (
    <div className="flex flex-col bg-[#F8F8FF] w-full  ">
      {firstTimeLogin === "false" && <AppNavBar />}
      <div className="min-h-[90vh]">
        <Outlet />
      </div>

      {firstTimeLogin === "false" && <HomeFooter />}
    </div>
  );
}

export default Protected;
