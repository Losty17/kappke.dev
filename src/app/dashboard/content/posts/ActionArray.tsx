"use client";

import {
  LockClosedIcon,
  PaperAirplaneIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

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

export default () => (
  <section className="flex justify-between items-center mb-4">
    <div className="flex items-center gap-4">
      {postActions.map(({ icon: Icon, label, action }) => (
        <button
          onClick={action}
          className="bg-almost-white text-magenta rounded-full p-2"
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
    <div className="flex items-center">
      {/* <button className="btn btn-primary">Last 30 days</button>
      <button className="btn btn-secondary ml-4">Search</button> */}
    </div>
  </section>
);
