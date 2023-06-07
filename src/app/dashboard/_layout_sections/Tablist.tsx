"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import type { Tab } from "../_tabs";
import { HomeIcon } from "@heroicons/react/24/outline";

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
            className="!font-semibold"
            label={tab.name}
            icon={HomeIcon}
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
            icon={HomeIcon}
            className="font-semibold"
          >
            {tab.name}
          </Sidebar.Item>
        )
      )}
    </>
  );
};

export default Tablist;
