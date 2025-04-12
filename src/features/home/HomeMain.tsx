import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { FaSortDown } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import HowItWorks from "./HowItWorks";

function HomeMain() {
  return (
    <main className="flex flex-col gpa-5 items-center ">
      <div className="flex flex-row  lg:p-10 min-h-[100vh] lg:bg-[#ffefe3]">
        <div className="flex flex-col-reverse lg:flex-row w-full rounded-lg ">
          <div className=" w-full lg:w-[60vw] flex flex-col lg:flex-row">
            <div className="w-full lg:w-[15vw] h-full flex flex-col">
              <div className="h-[80%] hidden w-full bg-blue-400 lg:rounded-tl-lg lg:p-5 lg:flex flex-col p-3 lg:pt-10 justify-between items-center">
                <div className="flex items-center  flex-col gap-2 mt-10 relative">
                  <div className="flex  mb-4">
                    <div className="w-6 h-3 rotate-90 rounded-t-full bg-white"></div>
                    <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-white"></div>
                  </div>
                  <p className="text-white font-semibold text-[50px] leading-[50px]">
                    Free <br />
                    Grow
                  </p>
                  <Button variant={"link"} className="text-white  lg:flex">
                    Read More
                  </Button>
                </div>

                <div className="hidden lg:flex">
                  <img
                    className=" bg-white rounded-full  lg:rounded-full w-full flex h-[40vh] mb-3 lg:mb-0 lg:h-[25vh] object-cover "
                    src="home/home_1.webp"
                  />
                </div>
              </div>

              <div className=" flex flex-col items-center justify-between  lg:h-[20%] bg-[#7bc5d4] lg:rounded-bl-lg p-5">
                <div>
                  <p className="text-2xl  font-medium text-blue-950">
                    Receive insatnt update.
                  </p>
                </div>

                <div className="flex mt-3 lg:mt-0">
                  <div className="border border-white w-10 h-10 rounded-full"></div>
                  <div className="border -ml-4 lg:-ml-7 border-white w-10 h-10 rounded-full"></div>
                  <div className="border flex items-center justify-center -ml-4 lg:-ml-7 bg-white w-10 h-10 rounded-full">
                    <GoPlus className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:w-[40vw] h-full flex flex-col">
              <div className="w-14 h-14 hidden lg:flex absolute bg-white rounded-full top-12 -left-7 z-50">
                <img
                  src="home/home_3.jpg "
                  className="rounded-full p-1 object-cover "
                />
              </div>

              <div className=" flex flex-col lg:flex-row w-full ">
                <div className="relative w-full p-5 h-[45vh] bg-[#7bc5d4] flex">
                  <div className="absolute top-20 z-10 -right-12 p-5 w-[15vw] hidden lg:flex h-[20vh] rotate-90 rounded-t-full bg-[#f29674]"></div>
                  <div className="flex flex-col text-blue-900 gap-1 pl-2  absolute lg:left-4 lg:top-4 right-4  -top-5  ">
                    <LuUserPlus className="w-12 p-2 border border-blue-900 rounded-full h-12" />
                    <MdOutlineSecurity className="w-12 h-12 ml-10 lg:ml-4 border border-blue-900 rounded-full p-2" />
                  </div>

                  <div className="absolute z-50 -bottom-6 lg:-bottom-6  right-2">
                    <img src="home/home_2.png" className="" />
                  </div>
                </div>

                <div className=" lg:flex bg-[#f29674] relative  p-5 w-full  items-center justify-center">
                  <div className="hidden absolute z-10 top-24 lg:top-20 -left-[75px] lg:-left-[55px] p-5 lg:w-[15vw]  lg:flex w-[40vh] h-[20vh] lg:h-[20vh] rotate-90 rounded-t-full bg-blue-400"></div>

                  <div className="z-50 relative p-5">
                    <div className="flex flex-col gap-10 items-center ">
                      <p className=" text-white text-center text-4xl">
                        Aggregates job <br />
                        opportunities
                        <br /> from multiple
                        <br /> sources
                      </p>
                      <div className="pl-5 h-14 lg:w-[12vw] cursor-pointer bg-white group rounded-full flex justify-between items-center gap-3">
                        <p className="text-xl text-black font-medium">
                          Create account
                        </p>
                        <div>
                          <BsArrowDownLeftCircleFill className="w-14 h-full p-1 rotate-[3.12rad] transition-transform duration-300 group-hover:rotate-[3.9rad]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 w-full h-full relative hidden lg:flex">
                <div className="pl-5 h-10 top-10 -left-20 w-fit absolute z-50 cursor-pointer bg-white group rounded-full flex justify-between items-center gap-7">
                  <p className=" text-black font-medium">
                    Career Freedom & Flexibility
                  </p>
                  <div>
                    <GoPlus className="w-9 mr-[1px] text-white rounded-full h-full p-1  bg-black " />
                  </div>
                </div>

                <div className="pl-5 h-10 w-fit bottom-10  -left-10 absolute z-50 cursor-pointer bg-white group rounded-full flex justify-between items-center gap-7">
                  <p className=" text-black font-medium">
                    {" "}
                    All-in-One Growth Platform
                  </p>
                  <div>
                    <GoPlus className="w-9 mr-[1px] text-white rounded-full h-full p-1  bg-black " />
                  </div>
                </div>

                <div className="pl-5 h-10 w-fit absolute lg:z-50 bottom-20 right-4 cursor-pointer bg-white group rounded-full flex justify-between items-center gap-7">
                  <p className=" text-black font-medium">
                    Verified Projects & Professional Clients
                  </p>
                  <div>
                    <GoPlus className="w-9 mr-[1px] text-white rounded-full h-full p-1  bg-black " />
                  </div>
                </div>

                <div className="absolute z-50 lg:z-10   top-0 w-[20vw] h-[10vw] bg-blue-400 rounded-b-full"></div>
                <div className="absolute right-0 bottom-0 w-[20vw] h-[10vw] bg-blue-400 rounded-t-full"></div>

                <div className="absolute z-10  flex w-full items-center justify-center bg-blue-900 lg:bg-transparent">
                  <img src="home/home_4.png" className="h-[45vh] -mt-8 z-50" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:hidden  w-full bg-blue-400 lg:rounded-tl-lg  flex-col p-3 justify-between items-center">
              <div className="flex mt-4  gap-  relative">
                <div className="flex ">
                  <div className="w-6 h-3 rotate-90 rounded-t-full bg-white"></div>
                  <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-white"></div>
                </div>
                <p className="text-white font-semibold text-[40px] leading-[50px]">
                  Free Grow
                </p>
              </div>
            </div>

            <div className="w-full h-full   bg-white p-8 lg:p-10 rounded-tr-lg rounded-br-lg gap-10 flex flex-col justify-between text-blue-900 ">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div>
                    <Popover>
                      <PopoverTrigger className="font-semibold text-lg flex items-center gap-1">
                        Services <FaSortDown className="w-4 h-4 -mt-1" />
                      </PopoverTrigger>
                    </Popover>
                  </div>
                  <div className="border-b w-fit font-medium cursor-pointer lg:hover:scale-105 border-blue-950">
                    FAQS
                  </div>
                </div>

                <div className="flex flex-row gap-5 items-center">
                  <div className="cursor-pointer font-semibold text-blue-900">
                    Login
                  </div>
                  <div className="cursor-pointer font-semibold text-blue-900 border px-4 py-2 rounded-full border-blue-900">
                    Sign Up
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 items-center justify-center text-center">
                <h1 className="text-3xl">
                  {" "}
                  <span className=" text-4xl font-semibold text-blue-950">
                    Work Beyond Boundaries.
                  </span>
                  <br /> Grow Without Limits.
                </h1>
                <p className="lg:px-20 text-xl font-normal text-blue-950">
                  Empowering tech professionals, freelancers, and companies with
                  tools to manage work, hire talent, and build careers — all in
                  one AI-driven platform.
                </p>
                <div className="flex flex-row items-center gap-5">
                  <input
                    placeholder="Search jobs,Projects Or Company ..."
                    className="px-3  outline-none placeholder:text-xs lg:placeholder:text-lg placeholder-blue-900 placeholder:font-medium border border-blue-950 rounded-full h-14 w-[70vw] lg:w-[15vw]"
                  />
                  <div className="bg-blue-950  text-white px-3   rounded h-12 flex items-center justify-center cursor-pointer lg:hover:scale-105">
                    <CiSearch className="text-white w-8 h-8" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-10">
                <div>
                  <h3 className="font-semibold text-2xl">
                    Connect <br /> With Us
                  </h3>
                </div>

                <div className="flex items-center flex-row gap-3">
                  <div className="border rounded-full border-blue-950 p-1 h-12 w-12 flex items-center justify-center text-white bg-blue-950 cursor-pointer lg:hover:scale-105">
                    <FaLinkedinIn className="w-5 h-5" />
                  </div>

                  <div className="border rounded-full border-blue-950 p-1 h-12 w-12 flex items-center justify-center text-white bg-blue-950 cursor-pointer lg:hover:scale-105">
                    <IoLogoInstagram className="w-5 h-5" />
                  </div>
                  <div className="border rounded-full border-blue-950 p-1 h-12 w-12 flex items-center justify-center text-white bg-blue-950 cursor-pointer lg:hover:scale-105">
                    <FaXTwitter className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
    </main>
  );
}

export default HomeMain;
