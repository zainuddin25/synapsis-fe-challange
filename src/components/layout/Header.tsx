"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-6 px-10 bg-[#393e46] rounded-md flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide text-white">
        Synapsis Blogs
      </h1>
      <div className="flex gap-8 items-center">
        {pathname.includes("users") && (
          <input
            placeholder="Search user name..."
            className="w-80 px-4 py-2 text-sm outline-none rounded-xl bg-white/20 text-white"
          />
        )}
        <div className="flex items-center justify-center gap-4">
          <Link
            href={"/"}
            className={`${
              !pathname.includes("users") && !pathname.includes("my-blog")
                ? "text-white"
                : "text-white/50"
            } font-medium`}
          >
            Blogs
          </Link>
          <Link
            href={"/users"}
            className={`${
              pathname.includes("users") ? "text-white" : "text-white/50"
            } font-medium`}
          >
            Users
          </Link>
          <Link href={"/my-blog"}>
            <button className="bg-blue-500 text-sm px-6 py-2 rounded-xl text-white">
              My Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
