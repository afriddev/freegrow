import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { MdEdit, MdVerifiedUser } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

function ProfileMain() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-3 mt-4 w-[35vw]">
        <Card className="rounded ">
          <CardContent>
            <div className="flex flex-col ">
              <div className="w-full border-b border-foreground/5  h-32 bg-red-40 relative ">
                <div className="absolute top-2 right-2">
                  <div className=" cursor-pointer flex items-center justify-center w-6 h-6   lg:hover:scale-105 rounded-full bg-white ">
                    <MdEdit className="w-4 h-4" />
                  </div>
                </div>
                <img
                  src="/public/home/work.png"
                  className="object-cover h-32 w-full"
                />
              </div>

              <div className="flex w-[7vw] h-[7vw] -mt-[3.5vw] z-50 ml-4 rounded-full shadow ">
                <img
                  src="/home/howitworks/employee.avif"
                  className="object-cover rounded-full"
                />
              </div>

              <div className="flex flex-row px-5 py-2">
                <div className="flex flex-col gap-2 w-[60%]">
                  <div className="flex flex-row items-center gap-1 ">
                    <p className="text-xl ">Shaik Afrid</p>
                    <div className="flex flex-row gap-1 text-foreground/60 items-center">
                      <MdVerifiedUser className="w-5 h-5 text-constructive" />
                    </div>
                  </div>
                  <p className="text-foreground/70">
                    Try to create a bug that results a feature,Try to create a
                    bug that results a feature,Try to create a bug that results
                    a feature,Try to create a bug that results a feature
                  </p>
                  <Button
                    variant={"link"}
                    className="w-fit flex items-center p-0"
                  >
                    <div className="flex items-center">
                      Portfolio
                      <ArrowUpRight className="w-4 h-4 -mt-[0.1rem]" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded ">
          <CardContent>
            <div className=" flex flex-row items-center justify-between p-5">
              <div className="justify-center text-sm items-center gap-1 flex flex-col">
                <p className="font-medium text-foreground/80">Total Earnings</p>
                <p className="font-semibold">$10K+ </p>
              </div>

              <div className="justify-center text-sm items-center gap-1 flex flex-col">
                <p className="font-medium text-foreground/80">Active Jobs</p>
                <p className="font-semibold">1</p>
              </div>
              <div className="justify-center text-sm items-center gap-1 flex flex-col">
                <p className="font-medium text-foreground/80">Pending Jobs</p>
                <p className="font-semibold">3</p>
              </div>

              <div className="justify-center text-sm items-center gap-1 flex flex-col">
                <p className="font-medium text-foreground/80">Total Jobs</p>
                <p className="font-semibold">31</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded ">
          <CardContent>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-sm font-semibold">Skills</h3>
                <RiEditLine className="" />
              </div>

              <div className="flex flex-wrap flex-grow gap-3">
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  Java
                </div>
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  Python
                </div>
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  Flutter
                </div>
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  Web Development
                </div>
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  App Development
                </div>
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  Android studio
                </div>
                <div className="px-5 py-1 bg-foreground/5  font-medium  rounded-full">
                  VS code
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProfileMain;
