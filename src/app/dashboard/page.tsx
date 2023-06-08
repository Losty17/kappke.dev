"use client";

import { useSession } from "next-auth/react";

export default () => {
  useSession({
    required: true,
  });

  return <></>;
};
