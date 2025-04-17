import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

function LoginIcons({ white }: { white: boolean }) {
  return (
    <div
      className={`flex  ${
        white ? "p-4 space-x-7" : "space-x-4"
      } items-center justify-center`}
    >
      <FaTwitter
        className={`${
          white ? "text-white" : "text-black"
        } w-4 h-4  hover:scale-110 transition-transform duration-300 cursor-pointer`}
      />
      <PiInstagramLogoFill
        className={`${
          white ? "text-white" : "text-black"
        } w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer`}
      />
      <FaFacebook
        className={`${
          white ? "text-white" : "text-black"
        }  w-4 h-4  hover:scale-110 transition-transform duration-300 cursor-pointer`}
      />
      <FaLinkedin
        className={`${
          white ? "text-white" : "text-black"
        } w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer`}
      />
      <FaYoutube
        className={`${
          white ? "text-white" : "text-black"
        } w-6 h-5 hover:scale-110 transition-transform duration-300 cursor-pointer`}
      />
    </div>
  );
}

export default LoginIcons;
