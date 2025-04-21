import { Outlet } from "react-router-dom";
import HomeNavBar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";

function UnProtected() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HomeNavBar />

      <main className="flex-1 min-h-[95vh] ">
        <Outlet />
      </main>

      <HomeFooter />
    </div>
  );
}

export default UnProtected;
