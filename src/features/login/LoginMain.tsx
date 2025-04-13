import LoginSocials from "./LoginSocials";
import DividerWithText from "@/apputils/DividerWithText";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <section className="h-screen flex p-1 md:p-2 bg-gray-200 ">
      <div className="border-2 w-full md:w-[57%] pl-[1%] md:pl-[2%] flex items-center flex-col justify-between rounded-lg bg-white ">
        <div className="font-medium w-full flex justify-start mt-[4%] gap-x-2 items-center">
          <img src="public/favicon.png" width="18" />
          FreeGrow
        </div>
        <div className="flex flex-col gap-y-1 justify-center px-2">
          <h2 className="font-semibold text-[2.5vh]">Login to your account</h2>
          <p className="text-xs xl:text-lg">
            Continue tracking your progress after logging in to your account
          </p>
          <LoginSocials />
          <DividerWithText title={"OR"} />
          <LoginForm />
        </div>
        <div className="w-full pb-[4%] flex justify-start text-xs xl:text-sm">
          &copy;2025 FreeGrow. All rights reserved.
        </div>
      </div>
      <div className="border-2 md:flex hidden"></div>
    </section>
  );
}

export default Login;
