import { getProviders, ClientSafeProvider } from "next-auth/react";

const LogInWithDiscord = (provider: ClientSafeProvider) => {
  console.log(provider);
  return (
    <a href={provider.signinUrl + "?callbackUrl=" + provider.callbackUrl}>
      {provider.name}
    </a>
  );
};

const LogInWithProvider = (provider: ClientSafeProvider) => {
  switch (provider.id) {
    case "discord":
      return <LogInWithDiscord {...provider} />;
    default:
      return <></>;
  }
};

export default async () => {
  const providers = (await getProviders()) as any;

  return (
    <>
      {(Object.values(providers) as ClientSafeProvider[]).map((value) => (
        <LogInWithProvider {...value} />
      ))}
    </>
  );
};
