import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import InterPhoneInput from "@/components/ui/phone-input";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  agree: boolean;
};

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className=" flex items-center justify-between h-screen w-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto rounded-lg  bg-white p-10 space-y-4"
      >
        <div className="text-center">
          <h2 className="text-3xl ">Create Your Account</h2>
          <p className="text-muted-foreground  mt-1">Freegrow Nextgen</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <Input
              label="First name"
              errorMessage={errors?.firstName?.message}
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required",
              })}
            />
          </div>
          <div className="w-full">
            <Input
              label="Last name"
              errorMessage={errors.lastName?.message}
              placeholder="Last name"
              {...register("lastName", { required: false })}
            />
          </div>
        </div>
        <div>
          <Input
            label="Email Address"
            errorMessage={errors.email?.message}
            placeholder="Enter your email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid Email Adress format",
              },
            })}
          />
        </div>
        <div className="flex  gap-1 flex-col h-16">
          <label className="block  font-medium mb-1">Phone Number</label>
          <InterPhoneInput
            {...register("phone", {
              required: false,
            })}
          />
          <p className="  text-destructive">
            {<label className="">{errors?.phone?.message}</label>}
          </p>
        </div>
        <div>
          <div className="relative ">
            <Input
              label="Password"
              errorMessage={errors.password?.message}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pr-10 w-full"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,
                  message:
                    "Password must be at least 8 characters, include an uppercase letter, a number, and a special character",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-[39px] -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex  gap-1 flex-col h-20 pt-4">
          <label className="flex items-start gap-2  text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              {...register("agree", {
                required:
                  "You must accept FreeGrow’s Terms of Use and Privacy Policy to continue.",
                validate: (v) =>
                  v === true ||
                  "You must accept FreeGrow’s Terms of Use and Privacy Policy to continue.",
              })}
              className="mt-1 cursor-pointer accent-primary"
            />
            I have read and agree to the FreeGrow Terms of Use, User Agreement,
            and Privacy Policy.
          </label>
          <p className="  text-destructive">
            {<label className="">{errors?.agree?.message}</label>}
          </p>
        </div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const userData = jwtDecode(credentialResponse.credential);
              console.log("Decoded user data:", userData);
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        <div className="w-full flex items-center justify-center">
          <Button
            type="submit"
            className="px-10 w-fit"
            variant={"constructive"}
          >
            Create account
          </Button>
        </div>
        <p className="text-center  text-muted-foreground">
          Already have an account?{" "}
          <a href="/login" className="text-primary underline font-medium">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
