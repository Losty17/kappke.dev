"use client";

import { useSWR } from "@/hooks";

export default ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { data, error, isLoading } = useSWR(`/api/posts/${params.id}`);

  return <div>Post edit page</div>;
};
