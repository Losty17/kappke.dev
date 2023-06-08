"use client";

import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => (
  <SessionProvider>{children}</SessionProvider>
);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const path = usePathname();

  if (!session || path.startsWith("/dashboard")) return <>{children}</>;

  return (
    <>
      <div className="sticky top-0 w-full h-10 px-4 flex flex-row justify-between items-center text-sm bg-charcoal text-misty-rose">
        <span>Hello, {session.user?.name}!</span>
        <a href="/dashboard" className="flex flex-row items-center gap-2">
          Dashboard
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
      {children}
    </>
  );
};
