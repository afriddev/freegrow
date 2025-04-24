import DashboardPrimaryContent from "./utils/DahboardPrimaryContent";
import DashboardProfileInfo from "./utils/DashboardProfileInfo";
import DashboardQuickLinks from "./utils/DashboardQuickLinks";

function DashboardMain() {
  return (
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
  );
}

export default DashboardMain;
