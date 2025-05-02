import { useState } from "react";
import { Button } from "@/components/ui/button";
import JobDialog from "./JobDialog";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

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
        <div className="flex flex-row items-center justify-between">
          <p className="text-xs text-foreground/60">Posted 20min ago</p>
          <div className="cursor-pointer">
            <CiBookmark className="h-6 w-6 lg:hover:text-constructive" />
          </div>
        </div>
        <div className="text-foreground/70 -mt-2">Price - Est.Budget $1000</div>

        <div className="text-lg font-medium leading-snug break-words text-foreground/90 ">
          Looking for React developer with expertise in TypeScript and Tailwind
          CSS
        </div>

        <div className="text-sm text-foreground/70 leading-relaxed">
          We’re hiring a frontend developer to join our growing team. You’ll be
          building modern, responsive user interfaces using React and Tailwind
          CSS.
          <Button
            variant={"link"}
            className="text-constructive pl-1  font-medium mt-1"
            onClick={() => {
              setOpenJobDialog(true);
            }}
          >
            Read more
          </Button>
        </div>
        <div className="flex-grow flex  gap-2 flex-wrap">
          <div className="py-1 px-4  bg-foreground/5 text-xs w-fit rounded-full">
            Python
          </div>
          <div className="py-1 px-4  bg-foreground/5 text-xs w-fit rounded-full">
            Java
          </div>
          <div className="py-1 px-4  bg-foreground/5 text-xs w-fit rounded-full">
            Javascript
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-foreground/70">{"Applied : Less then 5"}</div>
          <div className="flex gap-1 text-foreground/60 items-center">
            Verified <MdVerified className="w-4 h-4 text-constructive" />
          </div>
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
