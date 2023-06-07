"use client";

import { signIn, useSession } from "next-auth/react";

export default () => {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  return <></>;
};
