import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";

function HomeMain() {
  return (
    <main className="">
      <div className="flex flex-row p-20 min-h-[100vh] bg-[#ffefe3]">
        <div className="flex flex-row w-full rounded-lg ">
          <div className="w-[60vw] flex flex-row">
            <div className="w-[15vw] h-full flex flex-col">
              <div className="h-[80%] bg-blue-400 rounded-tl-lg p-5 flex flex-col pt-10 justify-between items-center">
                <div className="flex items-center  flex-col gap-2 mt-10 relative">
                  <div className="flex  mb-4">
                    <div className="w-6 h-3 rotate-90 rounded-t-full bg-white"></div>
                    <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-white"></div>
                  </div>
                  <p className="text-white font-semibold text-[50px] leading-[50px]">
                    Free <br />
                    Grow
                  </p>
                  <Button variant={"link"} className="text-white">
                    Read More
                  </Button>
                </div>

                <div>
                  <img
                    className=" bg-white rounded-full w-full flex h-[28vh] object-cover "
                    src="freelancer1.webp"
                  />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between  h-[20%] bg-[#7bc5d4] rounded-bl-lg p-5">
                <div>
                  <p className="text-2xl  font-medium text-blue-950">
                    Receive insatnt update.
                  </p>
                </div>

                <div className="flex">
                  <div className="border border-white w-10 h-10 rounded-full"></div>
                  <div className="border -ml-7 border-white w-10 h-10 rounded-full"></div>
                  <div className="border flex items-center justify-center -ml-7 bg-white w-10 h-10 rounded-full">
                    <GoPlus className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[40vw] h-full flex flex-col">
              <div className="w-12 h-12 absolute bg-white rounded-full top-12 -left-6 z-50">
                <img
                  src="freelancer3.jpg "
                  className="rounded-full object-cover "
                />
              </div>

              <div className="flex flex-row w-full ">
                <div className="relative w-full p-5 h-[45vh] bg-[#7bc5d4]">
                  <div className="absolute top-20 z-10 -right-12 p-5 w-[15vw] h-[20vh] rotate-90 rounded-t-full bg-[#f29674]"></div>
                  <div className="flex flex-col text-blue-900 gap-1 pl-2">
                    <LuUserPlus className="w-12 p-2 border border-blue-900 rounded-full h-12" />
                    <MdOutlineSecurity className="w-12 h-12 ml-4 border border-blue-900 rounded-full p-2" />
                  </div>
                  <div className="absolute z-50 top-20 right-2">
                    <img src="freelancer2.png" className="" />
                  </div>
                </div>
                <div className="bg-[#f29674] relative  p-5 w-full flex items-center justify-center">
                  <div className="absolute z-10 top-20  -left-[50px] p-5 w-[15vw] h-[20vh] rotate-90 rounded-t-full bg-blue-400"></div>

                  <div className="z-50 absolute p-5">
                    <div className="flex flex-col gap-10 items-center ">
                      <p className=" text-white text-center text-4xl">
                        Aggregates job <br />
                        opportunities
                        <br /> from multiple
                        <br /> sources
                      </p>
                      <div className="pl-5 h-14 w-[12vw] cursor-pointer bg-white group rounded-full flex justify-between items-center gap-3">
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
              <div className="bg-blue-900 w-full h-full relative">
                
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


                <div className="pl-5 h-10 w-fit absolute z-50 bottom-20 right-0 cursor-pointer bg-white group rounded-full flex justify-between items-center gap-7">
                  <p className=" text-black font-medium">
                    Verified Projects & Professional Clients
                  </p>
                  <div>
                    <GoPlus className="w-9 mr-[1px] text-white rounded-full h-full p-1  bg-black " />
                  </div>
                </div>

                <div className="absolute top-0 w-[20vw] h-[10vw] bg-blue-400 rounded-b-full"></div>
                <div className="absolute right-0 bottom-0 w-[20vw] h-[10vw] bg-blue-400 rounded-t-full"></div>

                <div className="absolute z-10 flex w-full items-center justify-center">
                  <img src="freelancer4.png" className="h-[45vh] -mt-8 z-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex items-center  justify-center text-xl bg-white ">
            <div className="flex gap-1 items-center flex-col">
              <p>Coming soon....</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeMain;
