import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa6";
import { FcBriefcase } from "react-icons/fc";
import { useState } from "react";

function DashboardPrimaryContent() {
    const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="lg:w-[25vw] border p-4 bg-background rounded flex flex-col gap-3">
      {/* Header */}
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

        <div className="relative">
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

      {/* Title */}
      <div className="text-sm font-medium leading-snug break-words text-foreground/90">
        <FcBriefcase className="inline-block align-text-bottom w-5 h-5 mr-1" />
        Looking for React developer with expertise in TypeScript and Tailwind CSS
      </div>

      {/* Description */}
      <div className="text-sm text-foreground/80 leading-relaxed">
        We’re hiring a frontend developer to join our growing team. You’ll be building modern, responsive user interfaces using React and Tailwind CSS.
        {!showMore && (
          <button
            className="text-blue-500 font-medium mt-1"
            onClick={() => setShowMore(true)}
          >
            Read more
          </button>
        )}

        {showMore && (
          <div className="mt-2 space-y-2">
            <p><span className="font-semibold">Responsibilities:</span></p>
            <ul className="list-disc list-inside ml-2">
              <li>Build responsive UI components using React</li>
              <li>Maintain scalable CSS architecture with Tailwind</li>
              <li>Collaborate with backend and design teams</li>
            </ul>

            <p><span className="font-semibold">Requirements:</span></p>
            <ul className="list-disc list-inside ml-2">
              <li>2+ years experience with React and TypeScript</li>
              <li>Strong knowledge of Tailwind CSS</li>
              <li>Familiarity with REST APIs and version control (Git)</li>
            </ul>

            <button
              className="text-blue-500 font-medium"
              onClick={() => setShowMore(false)}
            >
              Show less
            </button>
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button className="mt-2 w-full text-sm bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
    </div>
  );
}

export default DashboardPrimaryContent;
