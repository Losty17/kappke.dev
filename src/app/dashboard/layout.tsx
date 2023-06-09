"use client";

import Kappke from "@/assets/KappkeLogo";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  DocumentIcon,
  FolderIcon,
  HomeIcon,
  PencilIcon,
  PhotoIcon,
  PowerIcon,
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Sidebar, Spinner } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = [
  {
    name: "Dashboard",
    href: "/dashboard",
    id: "",
    icon: HomeIcon,
  },
  {
    name: "Content",
    href: "",
    id: "content",
    icon: FolderIcon,
    activateId: "posts",
    subtabs: [
      {
        name: "Posts",
        href: "/dashboard/posts",
        id: "posts",
        icon: PencilIcon,
      },
      {
        name: "Pages",
        href: "/dashboard/pages",
        id: "pages",
        icon: DocumentIcon,
      },
      {
        name: "Products",
        href: "/dashboard/products",
        id: "products",
        icon: ShoppingCartIcon,
      },
      {
        name: "Media",
        href: "/dashboard/media",
        id: "media",
        icon: PhotoIcon,
      },
    ],
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    id: "orders",
    icon: CreditCardIcon,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    id: "users",
    icon: UserGroupIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    id: "settings",
    icon: Cog6ToothIcon,
  },
];

export type Tab = {
  name: string;
  href: string;
  id: string;
  icon: React.FC;
  subtabs?: Tab[];
};

const Tablist = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <>
      {tabs.map((tab) =>
        tab.subtabs ? (
          <Sidebar.Collapse
            key={tab.id}
            className="sidebar-collapse !font-semibold !text-graphite [&>svg]:!text-graphite [&+ul]:py-0 [&+ul]:space-y-0"
            label={tab.name}
            icon={tab.icon}
            open
          >
            <Tablist
              tabs={tab.subtabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </Sidebar.Collapse>
        ) : (
          <Sidebar.Item
            as={Link}
            href={tab.href}
            key={tab.id}
            icon={tab.icon}
            onClick={() => setActiveTab(tab.id)}
            className={`font-semibold ${
              activeTab === tab.id
                ? "!text-magenta [&>svg]:!text-magenta [&>svg]:hover:!text-magenta"
                : "!text-graphite [&>svg]:hover:!text-graphite"
            }`}
          >
            {tab.name}
          </Sidebar.Item>
        )
      )}
    </>
  );
};

export default ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({
    required: true,
  });
  const activeTabRoute = usePathname().split("/")[2] || "";
  const [activeTab, setActiveTab] = useState(
    tabs.find((t) => t.id === activeTabRoute)?.activateId || activeTabRoute
  );

  return (
    <section className="desktop:w-4/5 m-auto h-screen p-4">
      {status === "authenticated" ? (
        <div className="m-auto flex flex-row gap-4 h-full">
          <Sidebar className="fixed sidebar font-medium">
            <Sidebar.Items>
              <Sidebar.ItemGroup className="flex flex-col h-full">
                <div className="mt-4 flex items-center justify-center gap-2 text-magenta">
                  <Kappke className="h-10 w-10" />
                  <span className="uppercase font-bold text-lg">
                    kappke.dev
                  </span>
                </div>
                <div className="grow border-t-2 border-classic-gray p-4">
                  <Tablist
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </div>
                <button
                  className="text-graphite font-semibold text-xs w-full flex justify-center border-t-2 border-classic-gray gap-2 p-4"
                  onClick={() => signOut()}
                >
                  <PowerIcon className="h-4" /> Log out
                </button>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <div className="flex flex-col gap-4 w-full">
            <nav className="fixed topbar flex items-center justify-between h-[4.5rem] min-h-[4.5rem] px-4 bg-neutral-100 text-magenta rounded-xl select-none">
              <button className="flex items-center gap-2">
                <CalendarIcon className="h-6 ml-2 text-magenta" />
                <span className="text-sm font-bold text-graphite">
                  {new Intl.DateTimeFormat("en", {
                    day: "numeric",
                    month: "long",
                  }).format(new Date(1970, 1, 1, 0, 0, 0, 0))}
                </span>
              </button>
              <div className="flex items-center text-right gap-4">
                <QuestionMarkCircleIcon
                  onClick={console.log}
                  className="h-6 text-magenta cursor-pointer"
                />
                <BellIcon
                  onClick={console.log}
                  className="h-6 text-magenta cursor-pointer"
                />
                <ChatBubbleLeftIcon
                  onClick={console.log}
                  className="h-6 text-magenta cursor-pointer"
                />
                {status === "authenticated" ? (
                  <>
                    <span className="flex flex-col">
                      <span className="leading-tight font-semibold">
                        {session?.user?.name}
                      </span>
                      <span className="text-xs leading-tight italic text-graphite">
                        {session?.user?.email}
                      </span>
                    </span>
                    <img
                      src={session?.user?.image || ""}
                      alt="logo"
                      className="h-10 aspect-square rounded-full"
                    />
                  </>
                ) : (
                  <>
                    <span className="flex flex-col items-end gap-2 animate-pulse">
                      <span className="h-2.5 w-16 rounded-full bg-classic-gray" />
                      <span className="h-2 w-32 rounded-full bg-classic-gray" />
                    </span>
                    <span className="h-10 aspect-square rounded-full bg-classic-gray animate-pulse" />
                  </>
                )}
              </div>
            </nav>
            <div className="dashboard-content">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner className="w-32 h-32 animate-pulse" />
        </div>
      )}
    </section>
  );
};
