import { Outlet } from "react-router-dom";
import HomeNavBar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";

function UnProtected() {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <div className="h-[6%] w-full ">
        <HomeNavBar />
      </div>
      <div className="w-full h-[80%]">
        <Outlet />
      </div>

      <div className="h-[5%] w-full ">
        {" "}
        <HomeFooter />
      </div>
    </div>
  );
}

export default UnProtected;
