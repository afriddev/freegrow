/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useToast } from "./components/ui/use-toast";

export const BASE_URL = "https://api.freegrow.live/"

// export const BASE_URL = "http://127.0.0.1:8080/";

export async function getAPI(url: string) {
  const { data } = await axios.get(BASE_URL + url);
  return data;
}

export async function postAPI(url: string, payload: any) {
  console.log(payload)
  const {data} = await axios.post(BASE_URL + url, payload,{
      headers: {
        Accept: 'application/json'
      },

  });
  return data;

}

export function useHandleApiResponse() {
  const responseData = [
    { data: "SUCCESS", message: "Success", variant: "constructive" },
    { data: "ERROR", message: "Something went wrong", variant: "destructive" },
    {
      data: "UNAUTHORIZED",
      message: "You are not authorized",
      variant: "destructive",
    },
    { data: "BAD_REQUEST", message: "Bad request", variant: "destructive" },
    {
      data: "USER_EXISTS",
      message: "User already exists",
      variant: "destructive",
    },
    {
      data: "INVLAID_EMAIL_ID",
      message: "Invalid email address",
      variant: "destructive",
    },
    {
      data: "INVALID_MOBILE_NUMBER",
      message: "Invalid mobile number",
      variant: "destructive",
    },
    {
      data: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
      variant: "destructive",
    },
    { data: "OTP_SENT", message: "OTP has been sent", variant: "constructive" },
    { data: "INVALID_OTP", message: "Invalid OTP", variant: "destructive" },
    {
      data: "USER_NOT_FOUND",
      message: "User not found",
      variant: "destructive",
    },
  ];

  const { toast } = useToast();

  function handleToast(data: string) {
    for (let index = 0; index < responseData.length; index++) {
      if (responseData[index].data === data) {
        toast({
          title: responseData[index].message,
          variant: responseData[index].variant as
            | "constructive"
            | "destructive"
            | "default",
        });

        break;
      }
    }
  }
  return { handleToast };
}
