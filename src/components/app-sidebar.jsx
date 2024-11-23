import * as React from "react";
import Logo from "../assets/taskly-logo.svg?react";
import LogoSquare from "../assets/taskly-square-logo.svg?react";

import { NavLists } from "./nav-lists";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <Logo
          width="100"
          className="max-w-full h-auto group-data-[state=collapsed]:hidden"
        />
        <LogoSquare
          width="80"
          className="max-w-full h-auto group-data-[state=expanded]:hidden"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavLists />
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <p className="text-sm font-light text-center my-4">
          Made by{" "}
          <a href="https://www.linkedin.com/in/helenewestrin/">
            Helene Westrin
          </a>
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
