import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  CalendarIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  return (
    <nav className="fixed topbar flex items-center justify-between h-[4.5rem] min-h-[4.5rem] px-4 bg-neutral-100 text-charcoal rounded-xl select-none">
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
        {session?.user?.image && (
          <>
            <span className="flex flex-col">
              <span className="leading-tight font-semibold">
                {session?.user?.name}
              </span>
              <span className="text-xs leading-tight italic text-graphite">
                Product Manager
              </span>
            </span>
            <img
              src={session?.user?.image}
              alt="logo"
              className="h-10 aspect-square rounded-full"
            />
          </>
        )}
      </div>
    </nav>
  );
};
