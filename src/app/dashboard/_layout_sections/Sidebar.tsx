import { Sidebar } from "flowbite-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import tabs from "../_tabs";
import Tablist from "./Tablist";
import { PowerIcon } from "@heroicons/react/24/outline";

export default () => {
  const activeTabRoute = usePathname().split("/")[2] || "";
  const [activeTab, setActiveTab] = useState(
    tabs.find((t) => t.id === activeTabRoute)?.activateId || activeTabRoute
  );

  return (
    <Sidebar className="font-medium [&>*:nth-child(1)]:rounded-2xl [&>*:nth-child(1)]:[&>*:nth-child(1)]:h-full">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col h-full">
          <div className="flex items-center justify-center gap-2 text-neutral-900">
            <img src="/kappke.svg" className="w-12 h-12" />
            <span className="uppercase font-bold text-sm">kappke.dev</span>
          </div>
          <div className="grow pt-10">
            <Tablist
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <a
            href="#"
            className="text-neutral-400 text-xs m-auto flex gap-2"
            onClick={() => signOut()}
          >
            <PowerIcon className="h-4" /> Log out
          </a>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
