
function DashboardProfileInfo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="border  border-foreground/10 cursor-pointer bg-background rounded-lg shadow-sm">
        <div className="flex flex-col gap-3 items-center ">
          <div className="flex flex-col gap-3">
            <div className="h-12 w-full bg-red-400 rounded-t"></div>

            <div className="p-2">
              <div className="w-12 -mt-11 h-12 bg-blue-400 rounded-full"></div>
              <div className="flex flex-col">
                <h3 className="text-medium text-sm">Shaik Afrid</h3>
                <p className="max-w-[15vw] text-xs text-foreground/70">
                  Founder & Product Owner at FreeGrow | Empowering Talent with
                  Next-Gen Tools
                </p>
                <p className="mt-1 text-foreground/50">
                  Piduguralla, Andra pradesh - 533437
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border  border-foreground/10 flex flex-col gap-2 p-4 bg-background rounded-lg shadow-sm">
        <h3 className="text-sm text-foreground/60 -ml-1 -mb-1">Profile</h3>
        <div className="flex flex-row justify-between items-center">
          <span className="font-medium text-sm cursor-pointer lg:hover:border-b border-foreground">
            Profile Viewers
          </span>{" "}
          <span>10</span>
        </div>
        
        <div className="flex flex-row justify-between items-center">
          <span className="font-medium text-sm cursor-pointer lg:hover:border-b border-foreground">
            Upgrade Account
          </span>{" "}
        </div>

        <h3 className="text-sm text-foreground/60 -ml-1 -mb-1">Account</h3>

        <div className="flex flex-row justify-between items-center">
          <span className="font-medium text-sm cursor-pointer lg:hover:border-b border-foreground">
            Applied Jobs
          </span>{" "}
          <span>10</span>
        </div>

        <div className="flex flex-row justify-between items-center">
          <span className="font-medium text-sm cursor-pointer lg:hover:border-b border-foreground">
            Active Jobs
          </span>{" "}
          <span>10</span>
        </div>
        
        <div className="flex flex-row justify-between items-center">
          <span className="font-medium text-sm cursor-pointer lg:hover:border-b border-foreground">
            Saved Jobs
          </span>{" "}
          <span>10</span>
        </div>

      </div>
    </div>
  );
}
export default DashboardProfileInfo;
