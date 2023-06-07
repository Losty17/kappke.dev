import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <nav className="flex items-center justify-between w-full h-16 min-h-[4rem] px-4 bg-neutral-100 text-neutral-900 shadow-lg rounded-xl">
      <div className="flex items-center">
        {session?.user?.image ? (
          <img
            src={session?.user?.image}
            alt="logo"
            className="h-10 aspect-square mr-4 rounded-full"
          />
        ) : (
          <svg
            aria-hidden="true"
            className="w-10 h-10 mr-4 text-neutral-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="flex flex-col">
          <span className="leading-tight">Hello, {session?.user?.name}!</span>
          <span className="text-xs leading-tight">Product Manager</span>
        </span>
      </div>
    </nav>
  );
};
