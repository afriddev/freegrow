/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const { formState, handleSubmit, register } = useForm();
  const { errors } = formState;

  function handleLoginSubmit(e: any) {
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <div className="space-y-4">
        <Input
          label="Email address"
          placeholder="Email address"
          errorMessage={errors?.emailId?.message}
          {...register("emailId", {
            required: "Please enter Email address",
          })}
        />
        <Input
          label="Password"
          placeholder="Password"
          errorMessage={errors?.password?.message}
          {...register("password", {
            required: "Please enter Password",
          })}
        />
      </div>
      <div className="mt-3 flex justify-between px-2">
        <Checkbox label="Remember me" checked={true} onChange={() => {}} />
        <p className=" font-medium text-blue-700 cursor-pointer">
          Forgot password?
        </p>
      </div>
      <div className="w-full mt-5">
        <Button className="w-full ">Login now</Button>
      </div>
      <div className="mt-3 flex justify-start px-2">
        <p className="">
          Don't have an account?&nbsp;
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            type="button"
            className="text-xs px-1 "
            variant={"link"}
          >
            Create account now
          </Button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
