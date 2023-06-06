"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";

const tabs = [
  {
    name: "Dashboard",
    href: "/dashboard",
    id: "",
  },
  {
    name: "Content",
    href: "/dashboard/content/posts",
    id: "content",
  },
  {
    name: "Users",
    href: "/dashboard/users",
    id: "users",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    id: "settings",
  },
];

const Sidebar = () => {
  const activeTabRoute = usePathname().split("/")[2] || "";
  const [activeTab, setActiveTab] = useState(activeTabRoute);

  return (
    <aside className="flex flex-col justify-between w-1/6 p-4 shadow-lg bg-neutral-100 text-neutral-500 rounded-2xl">
      <div className="flex flex-col h-1/3 justify-between">
        <span className="font-tech font-semibold text-center text-neutral-900 text-lg">
          kappke.dev
        </span>
        <ul className="flex flex-col gap-3 text-sm font-semibold">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`flex items-center w-full px-6 hover:text-neutral-900 ${
                activeTab === tab.id ? "text-neutral-900" : ""
              }`}
            >
              <Link
                href={tab.href}
                className="w-full"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col text-xs">
        <span>Help and information</span>
        <span>Log out</span>
      </div>
    </aside>
  );
};

const Topbar = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <nav className="flex items-center justify-between w-full h-16 px-4 bg-neutral-100 text-neutral-900 shadow-lg rounded-xl">
      <div className="flex items-center">
        {session?.user?.image ? (
          <img
            src={session?.user?.image}
            alt="logo"
            className="h-10 aspect-square mr-4 rounded-full"
          />
        ) : (
          <svg
            aria-hidden="true"
            className="w-10 h-10 mr-4 text-neutral-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="flex flex-col">
          <span className="leading-tight">Hello, {session?.user?.name}!</span>
          <span className="text-xs leading-tight">Product Manager</span>
        </span>
      </div>
    </nav>
  );
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-row gap-4 h-screen bg-neutral-300 text-neutral-100 p-4">
      <Sidebar />
      <div className="flex flex-col gap-4 w-full">
        <Topbar />
        <main className="flex flex-col w-full px-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </section>
  );
};
