/* eslint-disable @typescript-eslint/no-explicit-any */
import DividerWithText from "@/apputils/DividerWithText";
import LoginForm from "./LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/loginHooks";
import TopSpinner from "@/apputils/TopSpinner";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageTransitionWrapper from "@/apputils/PageTransitionWrapper";
import HomeNavBar from "@/apputils/HomeNavbar";
import HomeFooter from "@/apputils/HomeFooter";

function Login() {
  const [loginStep, setLoginStep] = useState<number>(0);
  const { login, isPending } = useLogin();
  const navigate = useNavigate();
  const { formState, handleSubmit, register, reset } = useForm();

  function handleLoginSubmit(e: any) {
    login(
      {
        emailId: e?.emailId,
        password: e?.password,
        otp: e?.otp,
        googleLogin: e?.googleLogin ? true : false,
        profileUrl: e?.profileUrl,
        firstName: e?.firstName,
      },
      {
        onSuccess(data) {
          if (data?.data === "OTP_SENT") {
            setLoginStep(1);
          } else if (data?.data === "SUCCESS") {
            navigate("/in");
          } else {
            reset();
          }
        },
      }
    );
  }

  function handleGoogleLoginSuccess(response: any) {
    const googleAuthResponse: any = jwtDecode(response.credential);
    console.log(googleAuthResponse);
    handleLoginSubmit({
      emailId: googleAuthResponse?.email,
      googleLogin: true,
      firstName: googleAuthResponse?.name,
      profileUrl: googleAuthResponse?.picture,
    });
  }

  return (
    <PageTransitionWrapper>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-10 h-[95vh] justify-between">
          <HomeNavBar />
          <div className=" flex  h-full items-center">
            {<TopSpinner isPending={isPending} />}
            <div className=" w-full  flex items-center flex-col justify-between  ">
              <div className="flex flex-col gap-y-5  justify-center px-2">
                <div className="flex flex-col items-center gap-2">
                  <h2 className=" text-3xl ">Login to your account</h2>
                  <p className="text-xs text-foreground/70">
                    Continue tracking your progress after logging <br /> in to
                    your account
                  </p>
                </div>

                {loginStep === 0 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex w-full items-center justify-center">
                      <GoogleLogin
                        width={360}
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </div>
                    <DividerWithText title={"OR"} />
                  </div>
                )}
                <LoginForm
                  loginStep={loginStep}
                  handleLoginSubmit={handleLoginSubmit}
                  formState={formState}
                  handleSubmit={handleSubmit}
                  register={register}
                />
              </div>
            </div>
          </div>
        </div>

        <HomeFooter />
      </div>
    </PageTransitionWrapper>
  );
}

export default Login;
