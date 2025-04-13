import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

function LoginForm() {
  return (
    <form>
      <div className="space-y-2">
        <Input accept="Email address" placeholder="Email address" />
        <Input accept="Password" placeholder="Password" />
      </div>
      <div className="mt-3 flex justify-between px-2">
        <Checkbox label="Remember me" checked={true} onChange={() => {}} />
        <p className="text-xs md:text-sm font-medium text-blue-700 cursor-pointer">
          Forgot password?
        </p>
      </div>
      <div className="w-full mt-5">
        <Button className="w-full bg-blue-700">Login now</Button>
      </div>
      <div className="mt-3 flex justify-start px-2">
        <p className="text-xs md:text-sm">
          Don't have an account?&nbsp;
          <span className="text-blue-700 cursor-pointer font-medium">
            Create one now.
          </span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
