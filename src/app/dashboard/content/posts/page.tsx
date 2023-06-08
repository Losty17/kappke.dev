"use client";

import PostTable from "./PostTable";
import ActionArray from "./ActionArray";
import { useEffect, useState } from "react";
import { Post } from "@prisma/client";
import useSWR from "swr";

export default () => {
  const { data, error, isLoading } = useSWR("/api/posts", (...args) =>
    fetch(...args).then((res) => res.json())
  );
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (data) setPosts(data.data);
  }, [data]);

  const handleSearchPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const filteredPosts = data.data.filter((post: Post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setPosts(filteredPosts);
  };

  return (
    <div className="relative overflow-x-auto rounded-lg scroll">
      <ActionArray searchPosts={handleSearchPosts} />
      {error && <div>Error: {error}</div>}
      <PostTable posts={posts} />
    </div>
  );
};
