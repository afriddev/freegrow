import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdEdit, MdVerifiedUser } from "react-icons/md";

function ProfileMain() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-3 mt-4">
        <Card className="rounded w-[35vw]">
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
                      <MdVerifiedUser className="w-5 h-5" /> <span>He/Him</span>
                    </div>
                  </div>
                  <p className="text-foreground/70">
                    Try to create a bug that results a feature,Try to create a
                    bug that results a feature,Try to create a bug that results
                    a feature,Try to create a bug that results a feature
                  </p>
                  <Button  variant={"link"} className="w-fit flex items-center p-0">
                    <div className="flex items-center gap-1">
                      Portfolio
                    </div>
                  </Button>
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
