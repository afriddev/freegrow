import { Input } from "@/components/ui/input";
import { MdHome } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { IoIosChatboxes } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import { FaCaretDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoLogOutOutline } from "react-icons/io5";
import { useAppContext } from "./AppContext";

function AppNavBar() {
  const { navBarIndex, dispatch } = useAppContext();

  function handleNavBarIndex(value: number) {
    dispatch({
      type: "setNavBarIndex",
      payload: value,
    });
  }

  function handleNavBarNavigation(route: string) {
    switch (route) {
      case "/home":
        handleNavBarIndex(0);
        break;
      case "/network":
        handleNavBarIndex(1);
        break;
      case "/jobs":
        handleNavBarIndex(2);
        break;
      case "/messages":
        handleNavBarIndex(3);
        break;
      case "/notifications":
        handleNavBarIndex(4);
        break;
    }
    // navigate(route);
  }

  const navItems = [
    {
      icon: <MdHome className="w-6 h-6 text-gray-600" />,
      label: "Home",
      route: "/home",
      index: 0,
    },
    {
      icon: <FaUserFriends className="w-6 h-6 text-gray-600" />,
      label: "Network",
      route: "/network",
      index: 1,
    },
    {
      icon: <PiSuitcaseSimpleFill className="w-6 h-6 text-gray-600" />,
      label: "Jobs",
      route: "/jobs",
      index: 2,
    },
    {
      icon: <IoIosChatboxes className="w-6 h-6 text-gray-600" />,
      label: "Messages",
      route: "/messages",
      index: 3,
    },
    {
      icon: <FaBell className="w-6 h-6 text-gray-600" />,
      label: "Notifications",
      route: "/notifications",
      index: 4,
    },
  ];

  return (
    <div className="w-full  h-fit flex flex-row gap-20 p-2 items-center justify-center bg-background border-b shadow-sm">
      <div className="flex flex-row gap-20 w-full lg:w-fit px-2 lg:px-0">
        <div className="hidden lg:flex flex-row items-center gap-1 justify-center">
          <div>
            <Input
              placeholder="Search "
              icon="search"
              className="w-[15vw] h-8 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-row lg:gap-2  justify-between w-full">
          {navItems.map(({ icon, label, route, index }) => (
            <div
              key={label}
              onClick={() => handleNavBarNavigation(route)}
              className="group items-center cursor-pointer lg:hover:scale-105 rounded  lg:px-3 py-1 flex flex-col"
            >
              {icon}
              <h2
                className={`relative hidden lg:flex w-fit text-center 
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px]
              after:bg-primary after:transition-all after:duration-300 after:ease-in-out 
              ${navBarIndex === index ? "after:w-full" : "after:w-0"} 
              group-hover:after:w-full`}
              >
                {label}
              </h2>
            </div>
          ))}

          <div>
            <Popover>
              <PopoverTrigger>
                <div className="items-center cursor-pointer rounded lg:px-3 py-1 flex flex-col">
                  <div className="w-8 -mt-1  lg:-mt-2 -ml-2 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                    a
                  </div>
                  <h2 className=" hidden lg:flex items-center gap-1">
                    Profile
                    <FaCaretDown className="w-4 h-4" />
                  </h2>
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-fit mt-1">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-row gap-3 p-2">
                      <div className="w-12 h-12 rounded-full bg-red-400"></div>
                      <div className="flex gap-1 flex-col">
                        <h3 className="text-lg font-medium">Shaik Afrid</h3>
                        <p className="text-foreground/70 max-w-[15vw]">
                          Founder & Product Owner at FreeGrow | Empowering
                          Talent with Next-Gen Tools
                        </p>
                      </div>
                    </div>
                    <Button
                      className="h-7 rounded-full w-[80%] border-primary/70 bg-primary/5 text-primary hover:text-primary lg:hover:bg-primary/10"
                      variant={"outline"}
                    >
                      View Profile
                    </Button>
                  </div>
                  <div className="h-[1px] w-[95%] bg-foreground/10"></div>
                  <div className="w-full flex flex-col">
                    <h2 className="text-lg font-medium pl-3">Account</h2>
                    <div className="p-2 ml-2 text-foreground/70 flex flex-col gap-2">
                      <p className="cursor-pointer lg:hover:text-foreground">
                        Settings & Privacy
                      </p>
                      <p className="cursor-pointer lg:hover:text-foreground">
                        Help
                      </p>

                      <p className="cursor-pointer lg:hover:text-foreground">
                        Membership & Plans
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] w-[95%] bg-foreground/10"></div>
                  <div className="text-foreground/70 flex items-center w-full px-4 pb-2 cursor-pointer lg:hover:text-foreground justify-between">
                    Signout
                    <IoLogOutOutline className="w-5 h-5" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;
