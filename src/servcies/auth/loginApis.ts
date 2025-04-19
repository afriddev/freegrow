import { postAPI } from "@/apiServices";
import { loginRequestType } from "@/types/auth/loginDataTypes";

export function loginAPI(data: loginRequestType) {
  return postAPI("auth/login", data);
}
