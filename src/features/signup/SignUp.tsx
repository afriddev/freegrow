import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "@/components/ui/phone-input";

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
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      agree: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto rounded-lg border bg-white p-10 space-y-5"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Create Your Account</h2>
          <p className="text-muted-foreground text-sm mt-1">Freegrow Nextgen</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <Input
              label="First name"
              errorMessage={errors.firstName?.message}
              type="text"
              placeholder="First name"
              {...register("firstName", { required: "First name is required" })}
            />
          </div>
          <div className="w-full">
            <Input
              label="Last name"
              errorMessage={errors.lastName?.message}
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: "Last name is required" })}
            />
          </div>
        </div>

        <div>
          <Input
            label="Email Address"
            errorMessage={errors.email?.message}
            type="email"
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

        <div>
            <PhoneInput  />
        </div>

        <div>
          <div className="relative">
            <Input
              label="Password"
              errorMessage={errors.password?.message}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pr-10"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            {...register("agree", {
              required: "You must accept the terms",
              validate: (v) => v === true || "You must accept the terms",
            })}
            className="mt-1 accent-primary"
          />
          I have read and agree with the Terms of Use, Client Agreement and
          Privacy Policy
        </label>
        {errors.agree && (
          <p className="text-sm text-red-500">{errors.agree.message}</p>
        )}

        <Button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white"
        >
          Create account
        </Button>

        <p className="text-center text-sm text-muted-foreground">
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
