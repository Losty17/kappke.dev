"use client";

import { getCsrfToken, getProviders, signIn } from "next-auth/react";

export default async () => {
  const providers = await getProviders();

  return (
    <>
      {/* @ts-expect-error */}
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: provider.callbackUrl,
                redirect: true,
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};
