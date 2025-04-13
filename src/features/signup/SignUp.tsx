import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
    setError,
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
    <div className="mt-6">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-md mx-auto rounded-xl bg-white shadow p-6 space-y-5"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Create Your Account</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Join American legal
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">First name</label>
            <Input
              type="text"
              placeholder="First name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Last name</label>
            <Input
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              value="+1"
              disabled
              className="w-14 text-center"
            />
            <Input
              type="tel"
              placeholder="(000) 000-0000"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                  message: "Invalid phone number",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <Input
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
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
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
