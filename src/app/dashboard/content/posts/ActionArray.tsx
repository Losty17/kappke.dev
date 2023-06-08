"use client";

import {
  ChevronDownIcon,
  ClockIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Post } from "@prisma/client";

const postActions = [
  {
    icon: PlusCircleIcon,
    label: "New post",
    action: () => {},
  },
  {
    icon: PencilIcon,
    label: "Edit",
    action: () => {},
  },
  {
    icon: TrashIcon,
    label: "Delete",
    action: () => {},
  },
  {
    icon: PaperAirplaneIcon,
    label: "Publish",
    action: () => {},
  },
  {
    icon: LockClosedIcon,
    label: "Lock",
    action: () => {},
  },
];

export default ({
  searchPosts,
}: {
  searchPosts: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <section className="flex justify-between items-center mb-4">
    <div className="flex items-center gap-4">
      {postActions.map(({ icon: Icon, label, action }) => (
        <button
          key={label}
          onClick={action}
          className="bg-almost-white text-magenta rounded-full p-2"
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <button className="bg-almost-white rounded-full h-10 px-4 text-sm text-graphite flex items-center gap-2">
        <ClockIcon className="w-4 h-4 text-magenta" />
        Last 30 days
        <ChevronDownIcon className="w-3 h-3 mt-[2px] text-magenta" />
      </button>
      <span className="bg-almost-white rounded-full h-10 px-4 text-sm text-graphite flex items-center gap-2">
        <MagnifyingGlassIcon className="w-4 h-4 text-magenta" />
        <input
          type="text"
          placeholder="Search"
          className="focus:ring-transparent p-0 text-sm border-none bg-almost-white"
          onChange={searchPosts}
        />
      </span>
    </div>
  </section>
);
