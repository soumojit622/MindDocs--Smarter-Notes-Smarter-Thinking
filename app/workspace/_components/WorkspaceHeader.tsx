import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Keyboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  return (
    <div className="w-full shadow-md backdrop-blur-md bg-white/70 border-b border-blue-100 px-6 py-3 flex justify-between items-center">
      {/* Left Logo Section */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 p-2 hover:bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg transition"
        >
          <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.25 11.5L4.75 14L12 18.25L19.25 14L14.75 11.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="grid text-left text-sm leading-tight">
            <span className="truncate font-bold text-blue-800 text-base">
              MindDocs
            </span>
            <span className="truncate text-xs text-purple-500">Enterprise</span>
          </div>
        </Link>
      </div>

      {/* Right Action Section */}
      <div className="flex items-center gap-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-purple-300/40 shadow-lg transition-all duration-300 cursor-pointer">
                <Keyboard className="h-5 w-5 text-purple-500 " />
                <span className="font-semibold text-sm text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r from-purple-500 to-blue-500 group-hover:bg-clip-text">
                  Ctrl + S
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              sideOffset={8}
              className="text-sm text-white bg-gradient-to-br from-purple-600 to-blue-600 px-3 py-2 rounded-md shadow-lg"
            >
              <p>Save notes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
