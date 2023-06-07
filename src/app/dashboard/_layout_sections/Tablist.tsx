"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import type { Tab } from "../_tabs";

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
            className={`font-semibold ${activeTab === tab.id ? "!text-magenta [&>svg]:!text-magenta [&>svg]:hover:!text-magenta" : "!text-graphite [&>svg]:hover:!text-graphite"}`}
          >
            {tab.name}
          </Sidebar.Item>
        )
      )}
    </>
  );
};

export default Tablist;
