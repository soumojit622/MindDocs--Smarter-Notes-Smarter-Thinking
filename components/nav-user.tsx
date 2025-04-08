"use client";

import { ChevronsUpDown, LogOut, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useClerk, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const createUser = useMutation(api.user.createUser);

  const plan = useQuery(api.user.fetchUserPlan, {
    email: user?.primaryEmailAddress?.emailAddress as string,
  });

  // ✅ useCallback to prevent re-creation on every render
  const checkUser = useCallback(async () => {
    if (!user) return;

    await createUser({
      email: user.primaryEmailAddress?.emailAddress!,
      imageUrl: user.imageUrl!,
      userName: user.fullName!,
    });
  }, [createUser, user]);

  useEffect(() => {
    if (user) checkUser();
  }, [user, checkUser]);

  const handleSignOut = async () => {
    try {
      await signOut({ redirectUrl: "/" });
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="bg-white hover:bg-indigo-50 text-neutral-800 transition-all duration-200 ease-in-out border border-indigo-100 shadow-sm rounded-xl data-[state=open]:bg-indigo-100 data-[state=open]:text-indigo-700"
            >
              <Avatar className="h-8 w-8 rounded-lg ring-1 ring-white/30 shadow-sm">
                <AvatarImage src={user?.imageUrl} alt={user?.fullName!} />
                <AvatarFallback className="rounded-lg bg-indigo-100 text-indigo-800">
                  CN
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user?.fullName}</span>
                <span className="truncate text-xs text-neutral-500">
                  {user?.primaryEmailAddress?.emailAddress}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-indigo-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl border border-indigo-100 bg-white shadow-xl backdrop-blur-xl text-neutral-900"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-3 py-2 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg ring-1 ring-white/40 shadow-sm">
                  <AvatarImage src={user?.imageUrl} alt={user?.fullName!} />
                  <AvatarFallback className="rounded-lg bg-indigo-100 text-indigo-800">
                    CN
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user?.fullName}
                  </span>
                  <span className="truncate text-xs text-neutral-500">
                    {user?.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="bg-indigo-100" />

            {plan === "free" && (
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => router.push("/dashboard/upgrade")}
                  className="hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 group"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-700 transition-colors" />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}

            <DropdownMenuItem
              onClick={handleSignOut}
              className="hover:bg-red-50 hover:text-red-600 transition-all duration-150 group"
            >
              <LogOut className="mr-2 h-4 w-4 text-red-500 group-hover:text-red-600 transition-colors" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
