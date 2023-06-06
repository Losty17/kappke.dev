"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = [
  {
    name: "Posts",
    href: "/dashboard/content/posts",
    id: "posts",
    icon: (
      <svg
        aria-hidden="true"
        className="w-5 h-5 mr-2 text-neutral-900"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      </svg>
    ),
  },
  {
    name: "Products",
    href: "/dashboard/content/products",
    id: "products",
    icon: (
      <svg
        aria-hidden="true"
        className="w-5 h-5 mr-2 text-neutral-900"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3zm1 2h12v8H4V6zm2 2a1 1 0 100 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default ({ children }: { children: React.ReactNode }) => {
  const activeTabRoute = usePathname().split("/")[3] || "";
  const [activeTab, setActiveTab] = useState(activeTabRoute);

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-neutral-900">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href={tab.href}
              className={`inline-flex px-4 py-3 border-b-2 border-transparent hover:text-neutral-700 hover:border-gray-700 ${
                activeTab === tab.id ? "border-gray-700" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
      <main className="my-4">{children}</main>
    </>
  );
};
