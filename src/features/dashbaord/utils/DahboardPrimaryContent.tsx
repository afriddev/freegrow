import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa6";
import { FcBriefcase } from "react-icons/fc";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import JobDialog from "./JobDialog";
import { AiTwotoneThunderbolt } from "react-icons/ai";

function DashboardPrimaryContent() {
  const [openJobDialog, setOpenJobDialog] = useState(false);

  return (
    <div>
      <JobDialog
        closeDialog={() => {
          setOpenJobDialog(false);
        }}
        open={openJobDialog}
      />
      <div className="lg:w-[25vw] border p-4 bg-background rounded flex flex-col gap-3">
        <div className="justify-between w-full flex">
          <div className="flex gap-2">
            <div className="w-12 h-12  rounded-full">
              <img src="/favicon.png" className="w-12 h-12 object-fill" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-medium">FreeGrow</h3>
              <div className="text-xs text-foreground/60 space-y-0.5">
                <p>432,423 Followers</p>
                <p>432,473 Likes</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center gap-2 -mt-8">
            <div className="text-foreground/60  -mt-[2px] text-sm">
              <p>
                Posted <span>3 min ago</span>
              </p>
            </div>
            <Popover>
              <PopoverTrigger>
                <HiOutlineDotsVertical className="w-4 h-4 text-foreground" />
              </PopoverTrigger>
              <PopoverContent className="absolute right-0 p-0 w-[10vw]">
                <div className="flex flex-row gap-2 p-2 hover:bg-foreground/5 cursor-pointer rounded">
                  <FaBookmark className="w-4 h-4 text-foreground" />
                  <p>Save Job</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="text-sm font-medium leading-snug break-words text-foreground/90">
          <FcBriefcase className="inline-block align-text-bottom w-5 h-5 mr-1" />
          Looking for React developer with expertise in TypeScript and Tailwind
          CSS
        </div>

        <div className="text-sm text-foreground/80 leading-relaxed">
          We’re hiring a frontend developer to join our growing team. You’ll be
          building modern, responsive user interfaces using React and Tailwind
          CSS.
          <button
            className="text-blue-500 font-medium mt-1"
            onClick={() => {
              setOpenJobDialog(true);
            }}
          >
            Read more
          </button>
        </div>

        <Button
          onClick={() => {
            setOpenJobDialog(true);
          }}
          className=" flex flex-row items-center gap-2"
        >
          <AiTwotoneThunderbolt />
          Apply Now
        </Button>
      </div>
    </div>
  );
}

export default DashboardPrimaryContent;
