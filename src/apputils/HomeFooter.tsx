import { useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function HomeFooter() {
  const navigate = useNavigate();

  return (
    <footer className="bg-foreground text-white w-full pt-16 pb-10 px-8 md:px-16 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
        {/* Brand */}
        <div className="flex flex-col items-start space-y-4">
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
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className=" text-sm flex  items-center gap-4">
            <button
              onClick={() => navigate("/about")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <div className=" text-sm flex gap-3 lg:gap-0 lg:flex-col  items-start">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate("/terms")}
              className="hover:text-blue-300 transition duration-300 text-left "
            >
              Terms of Service
            </button>
            
            <button
              onClick={() => navigate("/cookie-policy")}
              className="hover:text-blue-300 transition duration-300 text-left "
            >Cookie Policy
            </button>

          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <div className="flex gap-6 text-2xl">
            <button
              onClick={() => navigate("/twitter")}
              aria-label="Twitter"
              className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => navigate("/instagram")}
              aria-label="Instagram"
              className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
            >
              <FaInstagram />
            </button>
            <button
              onClick={() => navigate("/linkedin")}
              aria-label="LinkedIn"
              className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
            >
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 border-t border-white/20 pt-8 text-center text-sm text-background gap-2">
        <p>© 2025 FreeGrow LLP. All rights reserved.</p>
        <p className="">An Indian Company</p>
        <div className="flex space-x-6 lg:mt-4 md:mt-0">
          <button
            onClick={() => navigate("/twitter")}
            className="hover:underline"
          >
            Twitter
          </button>
          <button
            onClick={() => navigate("/linkedin")}
            className="hover:underline"
          >
            LinkedIn
          </button>
          <button
            onClick={() => navigate("/instagram")}
            className="hover:underline"
          >
            Instagram
          </button>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
