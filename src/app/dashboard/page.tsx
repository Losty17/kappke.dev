"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return <>dashboard</>;
};
