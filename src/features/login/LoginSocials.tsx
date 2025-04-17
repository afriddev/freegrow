import { Button } from "@/components/ui/button";
import { BiLogoGithub } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

function LoginSocials() {
  return (
    <div className="flex flex-col gap-y-1 mt-5 mb-2">
      <Button variant={"outline"} className="border-2 border-gray-200">
        <FcGoogle />
        Login with Google
      </Button>
      <Button variant={"outline"} className="border-2 border-gray-200">
        <BiLogoGithub />
        Login with GitHub
      </Button>
    </div>
  );
}

export default LoginSocials;
