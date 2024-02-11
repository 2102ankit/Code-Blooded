"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  backlogIcon,
  BoardIcon,
  DevelopmentIcon,
  RoadmapIcon,
  // DashboardIcon,
} from "./svgs";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineRoute } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { FaChessPawn, FaChevronRight } from "react-icons/fa";
import { useProject } from "@/hooks/query-hooks/use-project";
// import { d } from "../assets/readme/d.svg";

type NavItemType = {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  href: string;
};

const Sidebar: React.FC = () => {
  const { project } = useProject();
  const planningItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: MdOutlineDashboard,
      href: `/project/dashboard`,
    },
    {
      id: "roadmap",
      label: "Roadmap",
      icon: MdOutlineRoute,
      href: `/project/roadmap`,
    },
    {
      id: "backlog",
      label: "Backlog",
      icon: MdOutlinePendingActions,
      href: `/project/backlog`,
    },
    {
      id: "board",
      label: "Board",
      icon: FaClipboardList,
      href: `/project/board`,
    },
    {
      id: "board",
      label: "Graphs",
      icon: VscGraph,
      href: `/project/graphs`,
    },
  ];

  // const developmentItems = [
  //   {
  //     id: "development",
  //     label: "Development",
  //     icon: DevelopmentIcon,
  //     href: `/project/`,
  //   },
  // ];
  return (
    <div className="flex h-full w-64 flex-col gap-y-0 bg-gray-50 p-3 shadow-inner">
      <div className="px-auto my-5 flex items-center gap-x-3">
        {/* <div className="mt-1 flex items-center justify-center rounded-sm bg-[#FF5630] p-1 text-xs font-bold text-white">
          <FaChessPawn className="aspect-square text-2xl" />
        </div> */}
        <div className="mx-auto">
          <h1 className="text-primary -mb-[0.5px] text-2xl font-semibold text-blue-500">
            Nyaydoot
          </h1>
          {/* <p className="text-xs text-gray-500">Software Project</p> */}
        </div>
      </div>
      {/* <NavList label={"PLANNING"} items={planningItems} /> */}

      <h2 className="mb-4">PLANNING</h2>

      {planningItems.map((item, idx) => {
        const currentPath = usePathname();

        if (currentPath === item.href) {
          return (
            <div className="flex w-full rounded-lg border-transparent border-l-blue-700 bg-blue-100 font-bold text-blue-700 hover:cursor-not-allowed">
              <a
                key={item.id}
                href={item.href}
                className="flex w-full items-center gap-x-1 border-l-4 border-transparent px-2 py-2"
              >
                <span className="font-bolder text-lg text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                  >
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                </span>
                <item.icon />
                <span className="text-sm">{item.label}</span>
              </a>
            </div>
          );
        } else {
          return (
            <div className="flex w-full rounded-lg text-gray-600 hover:cursor-not-allowed ">
              <a
                key={item.id}
                href={item.href}
                className="flex w-full items-center gap-x-1 border-l-4 border-transparent px-2 py-2"
              >
                <span className="font-bolder text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                </span>
                <item.icon />
                <span className="text-sm">{item.label}</span>
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

const NavList: React.FC<{ items: NavItemType[]; label: string }> = ({
  items,
  label,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex flex-col gap-y-2">
      <NavListHeader
        label={label}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <NavigationMenu
        data-state={isVisible ? "open" : "closed"}
        className="hidden [&[data-state=open]]:block"
      >
        <NavigationMenuList>
          {items.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              disabled={label === "DEVELOPMENT"}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const NavListHeader: React.FC<{
  label: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ label, isVisible, setIsVisible }) => (
  <div className="group flex items-center gap-x-1">
    <button
      data-state={isVisible ? "open" : "closed"}
      onClick={() => setIsVisible(!isVisible)}
      className="invisible group-hover:visible [&[data-state=open]>svg]:rotate-90"
    >
      <FaChevronRight className="text-xs transition-transform" />
    </button>
    <span className="text-xs font-bold text-gray-700">{label}</span>
  </div>
);

const NavItem: React.FC<{ item: NavItemType; disabled?: boolean }> = ({
  item,
  disabled = false,
}) => {
  const currentPath = usePathname();
  if (disabled) {
    return (
      <div className="w-full rounded-lg text-gray-600 hover:cursor-not-allowed">
        <div className="flex w-full items-center gap-x-3 border-l-4 border-transparent px-2 py-2">
          <item.icon />
          <span className="text-sm">{item.label}</span>
        </div>
      </div>
    );
  }
  return (
    <Link
      href={item.href}
      className="w-full rounded-lg text-gray-600 "
      passHref
      legacyBehavior
    >
      <NavigationMenuLink
        active={currentPath === item.href}
        className="flex w-full rounded-sm border-transparent py-2 [&[data-active]]:border-l-blue-700 [&[data-active]]:bg-blue-100 [&[data-active]]:text-blue-700"
      >
        <div className="flex w-full items-center gap-x-3 border-l-4 border-inherit bg-inherit px-2">
          <item.icon />
          <span className="text-sm">{item.label}</span>
        </div>
      </NavigationMenuLink>
    </Link>
  );
};

export { Sidebar };
