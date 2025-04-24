import AppDialog from "@/apputils/AppDialog";
import { FcBriefcase } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AiTwotoneThunderbolt } from "react-icons/ai";

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
        <div className="lg:w-[25vw]  bg-background rounded flex h-full justify-between flex-col gap-3">
          <div className="flex flex-col gap-3  h-full">
            <div className="justify-between w-full flex">
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-red-400 rounded-full" />
                <div className="flex flex-col">
                  <h3 className="text-sm font-medium">FreeGrow</h3>
                  <div className="text-xs text-foreground/60 space-y-0.5">
                    <p>432,423 Followers</p>
                    <p>432,473 Likes</p>
                  </div>
                </div>
              </div>
              <div className="text-foreground/60 -mt-3 text-sm">
                <p>
                  Posted <span>3 min ago</span>
                </p>
              </div>
            </div>

            <div className="text-sm font-medium leading-snug break-words text-foreground/90">
              <FcBriefcase className="inline-block align-text-bottom w-5 h-5 mr-1" />
              Looking for React developer with expertise in TypeScript and
              Tailwind CSS
            </div>

            <div className="text-sm text-foreground/80 leading-relaxed">
              We’re hiring a frontend developer to join our growing team. You’ll
              be building modern, responsive user interfaces using React and
              Tailwind CSS.
              <div className="mt-2 space-y-2">
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
          </div>
          <div className="flex flex-col  gap-3">
            <div className=" flex  gap-5 pr-5">
              <Button className="flex flex-row items-center w-1/2 gap-2">
                <AiTwotoneThunderbolt />
                Apply Now
              </Button>

              <Button
                className="flex  w-1/2 items-center gap-2"
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
