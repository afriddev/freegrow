import { useNavigate } from "react-router-dom";

function DashboardQuickLinks() {
  const navigate = useNavigate();

  return (
    <div className="rounded border border-foreground/10 shadow p-4 bg-background  flex flex-col gap-3">
      <div className="flex flex-col items-start">
        <div className="cursor-pointer  w-fit    ">
          <div className="flex mt-5">
            <div className="w-6 h-3 rotate-90 rounded-t-full bg-blue-500"></div>
            <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-blue-500"></div>
          </div>
          <p className=" font-semibold -mt-6 ml-6 text-xl leading-[50px]">
            Free Grow
          </p>
        </div>
        <p className="text-sm max-w-xs">
          Empowering individuals and businesses to grow and collaborate
          seamlessly.
        </p>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-lg font-semibold -ml-1 text-foreground/60">
          Quick Links
        </h3>
        <div className=" text-sm flex  items-center gap-4">
          <button
            onClick={() => navigate("/about")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left"
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left"
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/faq")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left"
          >
            FAQ
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left"
          >
            Pricing
          </button>
        </div>
      </div>
      <div className=" flex flex-col ">
        <h3 className="text-lg font-semibold -ml-1 text-foreground/60">Legal</h3>
        <div className=" text-sm flex gap-3 lg:gap-3 lg:flex-grow   items-start">
          <button
            onClick={() => navigate("/privacy-policy")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => navigate("/terms")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left "
          >
            Terms of Service
          </button>

          <button
            onClick={() => navigate("/cookie-policy")}
            className="hover:text-primary lg:hover:border-b border-primary transition duration-300 text-left "
          >
            Cookie Policy
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col mt-5 justify-between items-center  border-t border-white/20  text-center text-sm  gap-2">
        <p>© 2025 FreeGrow LLP. All rights reserved.</p>
        <p className="">An Indian Company</p>
      </div>
    </div>
  );
}

export default DashboardQuickLinks;
