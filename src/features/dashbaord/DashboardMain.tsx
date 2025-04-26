import DashboardPrimaryContent from "./utils/DahboardPrimaryContent";
import DashboardJoinAs from "./utils/DashboardJoinAs";
import DashboardProfileInfo from "./utils/DashboardProfileInfo";
import DashboardQuickLinks from "./utils/DashboardQuickLinks";

function DashboardMain() {
  const firstTimeLogin = localStorage.getItem("isFirstTimeLogin");

  return (
    <div className="w-full h-full">
      {firstTimeLogin === "true"  ? (
        <div className="fixed inset-0 w-screen h-screen">
          <DashboardJoinAs />
        </div>
      ) : (
        <div className="w-full h-full flex flex-row gap-5 justify-center mt-4">
          <div className="hidden lg:flex h-fit">
            <DashboardProfileInfo />
          </div>

          <div>
            <DashboardPrimaryContent />
          </div>
          <div className="hidden lg:flex h-fit">
            <DashboardQuickLinks />
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardMain;
