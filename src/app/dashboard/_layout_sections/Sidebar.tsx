import { Sidebar } from "flowbite-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import tabs from "../_tabs";
import Tablist from "./Tablist";
import { PowerIcon } from "@heroicons/react/24/outline";
import Kappke from "@/assets/KappkeLogo";
import Link from "next/link";

export default () => {
  const activeTabRoute = usePathname().split("/")[2] || "";
  const [activeTab, setActiveTab] = useState(
    tabs.find((t) => t.id === activeTabRoute)?.activateId || activeTabRoute
  );

  return (
    <Sidebar className="fixed sidebar font-medium">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col h-full">
          <div className="mt-4 flex items-center justify-center gap-2 text-magenta">
            <Kappke className="h-10 w-10" />
            <span className="uppercase font-bold text-lg">kappke.dev</span>
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
  );
};
