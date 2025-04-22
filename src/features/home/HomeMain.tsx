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
import { MdVerified } from "react-icons/md";

import HowItWorks from "./HowItWorks";
import { Link } from "react-router-dom";
import HomeFooter from "@/apputils/HomeFooter";
import { CiBoxList } from "react-icons/ci";
import { GoVerified } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LiaGratipay } from "react-icons/lia";

function HomeMain() {
  return (
    <main className="flex flex-col gpa-5 items-center ">
      <div className="flex flex-row  lg:p-10 min-h-[100vh] lg:h-[100vh] lg:bg-[#ffefe3]">
        <div className="flex flex-col-reverse lg:flex-row w-full rounded-lg ">
          <div className=" w-full lg:w-[60vw] flex flex-col lg:flex-row">
            <div className="w-full lg:w-[15vw] h-full flex flex-col">
              <div className="h-[80%] hidden w-full bg-blue-400 lg:rounded-tl-lg lg:p-5 lg:flex flex-col p-3 lg:pt-10 justify-between items-center">
                <div className="flex items-center  flex-col gap-2 mt-10 relative">
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

              <div className=" flex flex-col items-center justify-between  lg:h-[30%] bg-[#7bc5d4] lg:rounded-bl-lg p-5">
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
                <div className="relative w-full p-5 h-[45vh] lg:h-full bg-[#7bc5d4] flex">
                  <div className="absolute top-20 z-10 right-0 p-5 w-[8vw]  hidden lg:flex h-[30vh]  rounded-tr-full rounded-br-full bg-[#f29674]"></div>
                  <div className="flex flex-col text-blue-900 gap-1 pl-2  absolute lg:left-4 lg:top-4 right-4  -top-5  ">
                    <LuUserPlus className="w-12 p-2 border border-blue-900 rounded-full h-12" />
                    <MdOutlineSecurity className="w-12 h-12 ml-10 lg:ml-4 border border-blue-900 rounded-full p-2" />
                  </div>

                  <div className="absolute z-50 -bottom-6 lg:-bottom-5  right-2">
                    <img src="home/home_2.png" className="" />
                  </div>
                </div>

                <div className=" lg:flex bg-[#f29674] relative  p-5 w-full  items-center justify-center">
                  <div className="absolute top-20 z-10 left-0 p-5 w-[8vw]  hidden lg:flex h-[30vh]  rounded-tr-full rounded-br-full bg-blue-400"></div>

                  <div className="z-50 relative p-5">
                    <div className="flex flex-col gap-10 items-center ">
                      <p className=" text-white text-center text-3xl">
                        Aggregates job <br />
                        opportunities
                        <br /> from multiple
                        <br /> sources
                      </p>
                      <div className="pl-5 h-14 lg:w-[15vw] cursor-pointer bg-white group rounded-full flex justify-between items-center gap-3">
                        <p className="text-xl text-black font-medium text-nowrap">
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

                <div className="pl-5 h-10 w-fit absolute lg:z-50 bottom-28 right-4 cursor-pointer bg-white group rounded-full flex justify-between items-center gap-7">
                  <p className=" text-black font-medium">
                    Verified Projects & Professional Clients
                  </p>
                  <div>
                    <GoPlus className="w-9 mr-[1px] text-white rounded-full h-full p-1  bg-black " />
                  </div>
                </div>

                <div className="absolute z-50 lg:z-10   top-0 w-[20vw] h-[10vw] bg-blue-400 rounded-b-full"></div>
                <div className="absolute right-0 bottom-0 w-[20vw] h-[10vw] bg-blue-400 rounded-t-full"></div>

                <div className=" z-10  flex w-full items-center  justify-center bg-blue-900 lg:bg-transparent">
                  <img
                    src="home/home_4.png"
                    className=" h-[47vh] w-[20vw] absolute  flex  z-50"
                  />
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
                  <Link
                    to="login"
                    className="cursor-pointer font-semibold text-blue-900"
                  >
                    Login
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <div className="cursor-pointer font-semibold text-blue-900 border px-4 py-2 rounded-full border-blue-900">
                      Sign Up
                    </div>
                  </Link>
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
                    className="px-3  outline-none placeholder:text-xs lg:placeholder:text-md placeholder-blue-900 placeholder:font-medium border border-blue-950 rounded-full h-14 w-[70vw] lg:w-[15vw]"
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

      <div className="flex flex-col  lg:gap-5 items-center  lg:p-0  mt-10   ">
        {/* Banner 2 - Find Great Work */}
        <div className="flex  flex-col md:flex-row bg-white  overflow-hidden shadow-md ">
          <div className="md:w-1/2">
            <img
              src="/home/employee.jpeg"
              alt="Freelancer woman"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="md:w-1/2 bg-blue-600 text-white p-8 flex flex-col">
            <div className=" p-4">
              <div className="mb-7">
                <p className="text-lg mb-2 text-white/60">For talent</p>
                <h2 className="text-4xl font-semibold mb-4">
                  Unlock your next opportunity
                </h2>
                <p className="mb-6 text-white/90 text-lg">
                  Whether you're looking for freelance gigs or full-time roles,
                  FreeGrow connects you with work that aligns with your goals.
                </p>
              </div>
              <hr className="border-white/30 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 text-lg">
                <div>
                  <p>
                    Discover jobs and projects for every stage of your career
                  </p>
                  <p className="mt-2">Explore multiple ways to grow and earn</p>
                </div>
                <div>
                  <p>Work your way — flexible, remote, or on-site roles</p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-white text-blue-600 font-medium px-5 py-3 rounded-md hover:bg-gray-100 transition">
              Start exploring
            </button>
          </div>
        </div>
        <div>
          <HowItWorks />
        </div>

        {/* Banner 1 - Trusted Globally */}
        <div className="lg:w-[80vw] ">
          <div className="flex w-full  md:flex-row items-center lg:rounded bg-[#060314] text-white  overflow-hidden flex-col-reverse ">
            <div className="md:w-1/2 p-8 ">
              <p className="text-xl mb-2 text-white/60">Grow your business</p>
              <h2 className=" font-semibold text-2xl lg:text-[40px] mb-4 leading-snug">
                Trusted globally by over 1 million businesses, small to large
              </h2>
              <Button
                variant={"constructive"}
                className=" text-white font-medium px-6 py-5 lg:py-7 lg:px-10 w-full lg:w-fit rounded mt-4 lg:text-xl"
              >
                Start now for free
              </Button>
            </div>
            <div className="md:w-1/2 ">
              <img
                src="/home/work.png"
                alt="Business woman"
                className=" h-[30vh] lg:h-[50vh] rounded object-cover"
              />
            </div>
          </div>
          {/* <div className="mt-10 border-t pt-6 flex flex-wrap justify-center items-center gap-6 text-2xl text-gray-600 font-semibold">
            <span>BBC</span>
            <span>BUSINESS INSIDER</span>
            <span>CNBC</span>
            <span>FT</span>
            <span>Forbes</span>
            <span>The INDEPENDENT</span>
          </div> */}
        </div>

        <div className="w-full  left-0 bg-pink-50 p-6 lg:h-32 flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-serif">
            Post your job for millions of people to see
          </p>
          <Button
            variant={"outline"}
            className="border-blue-600 rounded-full h-12 px-10 lg:h-10 lg:px-5"
          >
            Post a job
          </Button>
        </div>

        {/* Banner 3 - For Clients */}

        <div className="relative overflow-hidden  lg:rounded  lg:w-[80vw]  ">
          {/* Background Image */}
          <img
            src="/home/find.jpg"
            alt="Client working"
            className="w-full h-full object-cover absolute inset-0 z-0 brightness-[0.3]"
          />

          {/* Content */}
          <div className="z-50 inset-0 relative  p-10 text-white">
            <div>
              <p className="text-lg mb-2 text-white/70">For clients</p>
              <div>
                <h2 className="text-3xl font-semibold mb-4 drop-shadow-xl">
                  Find talent your way
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 drop-shadow-2xl">
                  Work with the largest network of independent professionals and
                  get things done—from quick turnarounds to big transformations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full pb-10">
              {[
                {
                  title: "Post a job and hire a pro",
                  label: "Talent Marketplace",
                },
                {
                  title: "Browse and buy projects",
                  label: "Project Catalog",
                },
                {
                  title: "Get advice from an industry expert",
                  label: "Consultations",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-constructive  p-4 gap-2 lg:gap-0  rounded-lg transition  flex flex-col justify-between  shadow-lg"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-lg flex text-background/80 items-center justify-between">
                    {card.label} <span>→</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-[80vw] my-10">
          <div className="flex items-start justify-start w-full ">
            <p className="text-4xl">Make it all happen with FreeGrow</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex flex-col gap-1 w-full ">
              <CiBoxList className="w-10 h-10" />
              <p className="text-lg lg:text-sm">
                Access top opportunities and talent across 700+ categories
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full ">
              <GoVerified className="w-10 h-10" />
              <p className="text-lg lg:text-sm">
                Enjoy a smooth experience whether you're hiring or applying
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full ">
              <AiOutlineThunderbolt className="w-10 h-10" />
              <p className="text-lg lg:text-sm">
                Achieve your goals efficiently and stay on budget
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full ">
              <LiaGratipay className="w-10 h-10" />
              <p className="text-lg lg:text-sm">
                Satisfaction guaranteed — only pay when you're happy
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-foreground text-background hover:bg-foreground/80 py-4 w-fit px-8">
              Join Now
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-constructive/20 p-6 flex flex-col gap-4 lg:w-[80vw] ">
          <h2 className="text-2xl lg:text-3xl flex flex-row gap-3">
            <span className="font-semibold">FreeGrow</span>Pro.
          </h2>
          <p className="text-xl lg:text-2xl font-medium">
            The{" "}
            <span className="font-bold text-constructive font-serif">
              Premium
            </span>{" "}
            solution for hiring and growing your career
          </p>

          <div className="flex lg:flex-row flex-col justify-between gap-10 mt-2">
            <div className="flex flex-col text-xl gap-1 w-full">
              <MdVerified className="text-constructive w-6 h-6" />
              <h3 className="font-semibold text-blue-950">
                Personalized support
              </h3>
              <p>
                Get matched with the right people — whether you’re hiring or
                looking for your next big opportunity.
              </p>
            </div>
            <div className="flex flex-col text-xl gap-1 w-full">
              <MdVerified className="text-constructive w-6 h-6" />
              <h3 className="text-blue-950 font-semibold">
                Satisfaction guarantee
              </h3>
              <p>
                Move forward with confidence — guaranteed quality or your money
                back.
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-10 mt-2 lg:flex-row flex-col ">
            <div className="flex flex-col text-xl gap-1 w-full">
              <MdVerified className="text-constructive w-6 h-6" />
              <h3 className="text-blue-950 font-semibold">
                Premium visibility
              </h3>
              <p>
                Stand out with Pro features that highlight your profile or job
                listings to the right people.
              </p>
            </div>
            <div className="flex flex-col text-xl gap-1 w-full">
              <MdVerified className="text-constructive w-6 h-6" />
              <h3 className="font-semibold text-blue-950">
                Accelerated results
              </h3>
              <p>
                Get work done faster or land your next project quicker — Pro
                makes it easier.
              </p>
            </div>
          </div>

          <div>
            <Button className="bg-foreground hover:bg-foreground/80">
              Try Now
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 lg:w-[80vw] mt-6 lg:mt-3 lg:rounded-lg bg-[#590117] text-background items-center">
          <p className="text-4 text-4xl font-semibold ">
            Freelance services at your fingertips
          </p>
          <Button>Join Now</Button>
        </div>
      </div>
      <HomeFooter />
    </main>
  );
}

export default HomeMain;
