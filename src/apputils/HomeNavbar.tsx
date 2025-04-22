import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function HomeNavBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate("/");
  const handleGetStartedClick = () => {
    navigate("/pricing")
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-5 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex relative">
            <div className="w-6 h-3 rotate-90 rounded-t-full bg-blue-500"></div>
            <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-blue-500"></div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold text-blue-600 tracking-tight">
            FreeGrow
          </h1>
        </div>


        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-block border-blue-500 text-blue-600 hover:bg-blue-50"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            onClick={handleGetStartedClick}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HomeNavBar;
