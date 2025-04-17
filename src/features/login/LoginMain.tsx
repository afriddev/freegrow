import DividerWithText from "@/apputils/DividerWithText";
import LoginForm from "./LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
  return (
    <div className=" flex  h-full items-center">
      <div className=" w-full  flex items-center flex-col justify-between  ">
        <div className="flex flex-col gap-y-5  justify-center px-2">
          <div className="flex flex-col items-center gap-2">
            <h2 className=" text-3xl ">Login to your account</h2>
            <p className="text-xs text-foreground/70">
              Continue tracking your progress after logging <br /> in to your
              account
            </p>
          </div>
          
          <div className="flex w-full items-center justify-center">
          <GoogleLogin
          width={360}
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
          
          </div>
          <DividerWithText title={"OR"} />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
