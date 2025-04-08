"use client";

import { type LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs uppercase tracking-wider text-purple-600 font-semibold mb-1 px-2">
        Platform
      </SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;

          return (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem className="mb-1 last:mb-0">
                {" "}
                {/* 👈 gap between items */}
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a
                    href={item.url}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white shadow-md text-white hover:brightness-90"
                      : "text-gray-700 hover:bg-gradient-to-r hover:text-black hover:brightness-90"
                  }
                `}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-all duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "text-purple-500 group-hover:text-black"
                    }
                  `}
                    />
                    <span className="truncate">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
