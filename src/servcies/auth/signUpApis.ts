import { postAPI } from "@/apiServices";
import { signUpRequestType } from "@/types/auth/signUpDataTypes";

export function signUpAPI(data: signUpRequestType) {
  return postAPI("auth/signup", data);
}
