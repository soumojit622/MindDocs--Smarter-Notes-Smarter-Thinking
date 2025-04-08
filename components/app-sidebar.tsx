"use client";

import * as React from "react";
import { LayoutPanelLeft, Plus, ShieldEllipsis, Brain } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Progress } from "./ui/progress";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import UploadPdfFile from "./upload-pdf";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Workspace",
      url: "/dashboard",
      icon: LayoutPanelLeft,
    },
    {
      title: "Upgrade plan",
      url: "/dashboard/upgrade",
      icon: ShieldEllipsis,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const userPdfs = useQuery(api.filestorage.getUserPdfs, {
    email: user?.primaryEmailAddress?.emailAddress as string,
  });

  const plan = "unlimited";

  return (
    <Sidebar
      variant="inset"
      className="bg-white shadow-xl rounded-xl p-3"
      {...props}
    >
      {/* Header with logo */}
      <SidebarHeader className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link
                href="/"
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md">
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
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-gray-800 text-base">
                    MindDocs
                  </span>
                  <span className="truncate text-xs text-gray-500">
                    Enterprise
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Separator */}
      <Separator className="mb-5 bg-gray-200" />

      {/* Upload PDF Button */}
      <UploadPdfFile
        limitReached={
          (userPdfs && userPdfs?.length >= 5) || plan === "unlimited"
            ? true
            : false
        }
      >
        <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl text-white  hover:brightness-90 transition-all">
          <Plus className="h-4 w-4" />
          Upload PDF
        </div>
      </UploadPdfFile>

      {/* Navigation Content */}
      <SidebarContent className="mt-6">
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto space-y-5 pt-4 pb-6 px-4 border-t border-gray-100 bg-white">
        {/* Coming Soon Plan Notice */}
        <div className="relative flex items-center gap-4 rounded-2xl border border-dashed border-purple-300 bg-gradient-to-br from-purple-50/40 via-white to-blue-50/40 p-4 shadow-inner hover:shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">
              Plans Coming Soon
            </p>
            <p className="text-xs text-gray-500">
              New features & upgrades are on the way – stay tuned!
            </p>
          </div>
          <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-yellow-400 animate-ping"></div>
        </div>

        {/* Unlimited Plan Highlight */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 px-6 py-4 text-center shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
          <div className="absolute -top-5 -left-5 h-20 w-20 bg-white/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-5 -right-5 h-16 w-16 bg-white/10 rounded-full blur-2xl opacity-20"></div>
          <p className="text-white text-sm font-semibold tracking-wide">
             Unlimited Plan Enabled
          </p>
          <p className="mt-1 text-xs text-white/80">
            Enjoy full access without limits 🚀
          </p>
        </div>

        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
