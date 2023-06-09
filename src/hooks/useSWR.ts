"use client";

import useSWR from "swr";

export default (url: string, options?: RequestInit) => {
  const { data, error, isLoading } = useSWR(url, (...args) =>
    fetch(...args, {
      ...options,
    }).then((res) => res.json())
  );

  return {
    data,
    error,
    isLoading,
  };
};
