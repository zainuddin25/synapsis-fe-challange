"use client";
import { searchUser } from "@/lib/features/user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-6 px-5 lg:px-10 bg-[#393e46] rounded-md flex justify-between items-center">
      <h1 className="text-base lg:text-xl font-bold tracking-wide text-white">
        Synapsis Blogs
      </h1>
      <div className="flex gap-8 items-center">
        <div className="flex items-center justify-center gap-4">
          <Link
            href={"/"}
            className={`${
              !pathname.includes("users") && !pathname.includes("my-blog")
                ? "text-white"
                : "text-white/50"
            } font-medium text-sm lg:text-base`}
          >
            Blogs
          </Link>
          <Link
            href={"/users"}
            className={`${
              pathname.includes("users") ? "text-white" : "text-white/50"
            } font-medium text-sm lg:text-base`}
          >
            Users
          </Link>
          <Link href={"/my-blog"}>
            <button className="bg-blue-500 text-xs lg:text-sm px-4 lg:px-6 py-1.5 lg:py-2 rounded-xl text-white">
              My Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
