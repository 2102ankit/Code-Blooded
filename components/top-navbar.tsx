"use client";
import { SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import { AiFillGithub } from "react-icons/ai";
import { useFullURL } from "@/hooks/use-full-url";

const TopNavbar: React.FC = () => {
  const { user } = useUser();
  const [url] = useFullURL();
  return (
    <div className="flex h-12 w-full items-center justify-between border-b px-4">
      <div className="flex items-center gap-x-2">
        {/* <Image
          src="https://cdn.worldvectorlogo.com/logos/jira-3.svg"
          alt="Jira logo"
          width={25axios";
          height={25}
        /> */}

        <a
          href="/project/dashboard"
          className="font-bolder text-2xl text-gray-600"
        >
          ProducTrack
        </a>

        {/* <Button

          target="_blank"
          className="ml-3 flex gap-x-2"
        >
          <AiFillGithub />
          <span className="text-sm font-medium">Github Repo</span>
        </Button> */}
      </div>
      {user ? (
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-medium text-gray-600">
            {user?.fullName ?? user?.emailAddresses[0]?.emailAddress ?? "Guest"}
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="flex items-center gap-x-3">
          <div className="rounded-sm bg-inprogress px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-600">
            <SignInButton mode="modal" redirectUrl={url} />
          </div>
        </div>
      )}
    </div>
  );
};

export { TopNavbar };
