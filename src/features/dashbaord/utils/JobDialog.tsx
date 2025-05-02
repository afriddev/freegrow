import AppDialog from "@/apputils/AppDialog";
import { FaBookmark } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";

interface JobDialogInterface {
  closeDialog: () => void;
  open: boolean;
}

function JobDialog({ closeDialog, open }: JobDialogInterface) {
  return (
    <div>
      <AppDialog
        onClose={closeDialog}
        isOpen={open}
        start="LEFT"
        title="Looking for React developer ..."
      >
        <div className="lg:w-[50vw]   bg-background rounded flex h-full justify-between flex-row gap-3">
          <div className="flex border-r flex-col   ">
            <div className="flex flex-col border-b border-foreground/10 py-4 p-5">
              <div className="text-lg font-medium leading-snug break-words text-foreground/90">
                Looking for React developer with expertise in TypeScript and
                Tailwind CSS
              </div>
              <div className="flex flex-row gap-8 text-xs mt-1 ml-2">
                <div>Posted 1 hour ago</div>
                <div className="flex flex-row items-center gap-2">
                  <IoLocationOutline className="w-4 h-4" />
                  Hyderabad
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row gap-2 text-foreground/70">
                  <CiStickyNote className="w-7   h-7" />
                  Specialized profiles can help you better highlight your
                  expertise when submitting proposals to jobs like these.{" "}
                </div>
              </div>
            </div>

            <div className="text-sm  border-foreground/10 leading-relaxed border-b">
              <div className=" py-4   p-5">
                We’re hiring a frontend developer to join our growing team.
                You’ll be building modern, responsive user interfaces using
                React and Tailwind CSS.
              </div>
              <div className="mt-2 space-y-2 p-5">
                <p>
                  <span className="font-semibold">Responsibilities:</span>
                </p>
                <ul className="list-disc list-inside ml-2">
                  <li>Build responsive UI components using React</li>
                  <li>Maintain scalable CSS architecture with Tailwind</li>
                  <li>Collaborate with backend and design teams</li>
                </ul>

                <p>
                  <span className="font-semibold">Requirements:</span>
                </p>
                <ul className="list-disc list-inside ml-2">
                  <li>2+ years experience with React and TypeScript</li>
                  <li>Strong knowledge of Tailwind CSS</li>
                  <li>Familiarity with REST APIs and version control (Git)</li>
                </ul>
              </div>
            </div>

            <div className="w-full flex  p-5 border-b border-foreground/10">
              <div className="font-medium text-foreground">
                Project Type -{" "}
                <span className="font-normal text-foreground/70">
                  On going project
                </span>
              </div>
            </div>

            <div className="flex-col gap-3 w-full flex  p-5  border-foreground/10">
              <label>Skills and Expertise</label>
              <div className="w-[70%] flex-grow flex  gap-2 flex-wrap">
                <div className="py-1 px-4  bg-foreground/5 text-xs w-fit rounded-full">
                  Python
                </div>
                <div className="py-1 px-4  bg-foreground/5 text-xs w-fit rounded-full">
                  Java
                </div>
              </div>
            </div>

            <div className="flex-col gap-3 w-full flex  p-5  border-t border-foreground/10">
              <label>Activity on this job</label>
              <div className="text-xs ml-1 text-foreground/70 flex flex-col ">
                <div>
                  Proposals - <span>10-15</span>
                </div>
                <div>
                  Last viewed by client - <span>1 hour ago</span>
                </div>
                <div>
                  Interviewing - <span>3</span>
                </div>
                <div>
                  Invites sent - <span>1</span>
                </div>
                <div>
                  Unanswered invites - <span>6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-3 px-5 pt-5">
            <div className=" flex flex-col  gap-5 pr-5 w-[15vw]">
              <Button className="flex flex-row items-center  h-10 gap-2">
                <AiTwotoneThunderbolt />
                Apply Now
              </Button>

              <Button
                className="flex  flex-row h-10 items-center gap-2"
                variant={"constructive"}
              >
                <FaBookmark />
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </AppDialog>
    </div>
  );
}

export default JobDialog;
