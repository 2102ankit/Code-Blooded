"use client";
import React from "react";
import Link from "next/link";
import { useFiltersContext } from "@/context/use-filters-context";
import { type Project } from "@prisma/client";
import { EpicFilter } from "@/components/filter-epic";
import { IssueTypeFilter } from "@/components/filter-issue-type";
import { SearchBar } from "@/components/filter-search-bar";
import { Members } from "../members";
import { ClearFilters } from "../filter-issue-clear";
import { SprintFilter } from "../filter-sprint";
import { NotImplemented } from "../not-implemented";
import { Button } from "../ui/button";
import { BiLineChart } from "react-icons/bi";

const BoardHeader: React.FC<{ project: Project }> = ({ project }) => {
  const { search, setSearch } = useFiltersContext();
  return (
    <div className="flex h-fit flex-col">
      <div className="w-full text-sm text-gray-500">Projects / Nyaydoot</div>
      <div className="flex items-center">
        <h1 className="min-w-max">Active sprints </h1>
        <div className="ml-12 flex w-full justify-between">
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <Link href="http://localhost:3001">Open Text Editor</Link>
          </button>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <Link href="http://localhost:3002">Open Whiteboard</Link>
          </button>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <Link href="http://localhost:3003">Open Shared Sheet</Link>
          </button>
        </div>
      </div>
      <div className="my-3 flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <SearchBar search={search} setSearch={setSearch} />
          <Members />
          <EpicFilter />
          <IssueTypeFilter />
          <SprintFilter />
          <ClearFilters />
        </div>
        {/* USE THIS */}
        {/* <NotImplemented feature="insights">
          <Button className="flex items-center gap-x-2">
            <BiLineChart className="text-gray-900" />
            <span className="text-sm text-gray-900">Insights</span>
          </Button>
        </NotImplemented> */}
      </div>
    </div>
  );
};

export { BoardHeader };
