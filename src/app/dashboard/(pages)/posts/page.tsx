"use client";

import { useSWR } from "@/hooks";
import {
  ChevronDownIcon,
  ClockIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Post as PostType, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import PostTable from "./PostTable";
import { useRouter } from "next/navigation";

export type Post = PostType & {
  author: User;
  selected?: boolean;
};

type Action = {
  icon: React.FC<React.ComponentProps<"svg">>;
  label: string;
  action: (payload: {
    posts: Post[];
    selectedPosts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    activeUser: User;
    router: ReturnType<typeof useRouter>;
  }) => void;
};

const postActions = [
  {
    icon: PlusCircleIcon,
    label: "Create",
    action: ({ setPosts, activeUser, router }) => {
      fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New post",
          content: "New post content",
          author: activeUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts((posts) => [data.data, ...posts]);

          router.push(`/dashboard/posts/edit/${data.data.id}`);
        });
    },
  },
  {
    icon: TrashIcon,
    label: "Delete",
    action: ({ selectedPosts, setPosts }) => {
      fetch("/api/posts/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posts: selectedPosts,
        }),
      }).then(() =>
        setPosts((posts) => posts.filter((p) => !selectedPosts.includes(p)))
      );
    },
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
] as Action[];

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Post[]>([]);
  const { data, error, isLoading } = useSWR("/api/posts");
  const { data: session } = useSession({ required: true });
  const router = useRouter();

  useEffect(() => data && setPosts(data.data), [data]);

  const handleSearchPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const filteredPosts = data.data.filter((post: Post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setPosts(filteredPosts);
  };

  return (
    <div className="relative overflow-x-auto rounded-lg scroll px-4">
      <section className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          {postActions.map(({ icon: Icon, label, action }) => (
            <button
              key={label}
              className="bg-almost-white rounded-full p-2 transition-all duration-100 cursor-pointer text-magenta"
              onClick={() =>
                action({
                  posts,
                  setPosts,
                  selectedPosts,
                  activeUser: session?.user as User,
                  router,
                })
              }
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
              onChange={handleSearchPosts}
            />
          </span>
        </div>
      </section>
      {error && <div>Error: {error}</div>}
      <PostTable
        posts={posts}
        selectedPosts={selectedPosts}
        setSelectedPosts={setSelectedPosts}
        loading={isLoading}
      />
    </div>
  );
};
