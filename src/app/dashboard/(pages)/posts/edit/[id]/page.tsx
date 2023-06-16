"use client";

import { useSWR } from "@/hooks";
import { formatDate } from "@/utils";
import { CloudArrowUpIcon, CloudIcon } from "@heroicons/react/24/outline";
import Wordsmith from "@wordsmith/components/Editor";
import "@wordsmith/styles/commandpalette.css";
import "@wordsmith/styles/index.css";
import "@wordsmith/styles/texteditor.css";
import "@wordsmith/styles/vars.css";
import { useCallback, useEffect, useRef, useState } from "react";

type PostContent = {
  blocks: {
    type: string | null;
    content: string;
  }[];
};

export default ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { data } = useSWR(`/api/posts/${params.id}`);
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const [editor, setEditor] = useState<Wordsmith | null>(null);
  const [state, setState] = useState<"saving" | "saved" | "notsaved" | "">("");
  const editorContainer = useRef<HTMLDivElement>(null);

  const savePost = useCallback(() => {
    const content = editor?.toJSON() as PostContent;
    setState("saving");

    fetch(`/api/posts/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        content,
      }),
    }).then(() => {
      setLastSaved(new Date());
      setState("saved");
    });
  }, [setState, setLastSaved]);

  useEffect(() => {
    const body = document.querySelector("body");

    if (state === "saved" || !state) {
      body?.removeAttribute("onbeforeunload");
    } else {
      body?.setAttribute(
        "onbeforeunload",
        "return 'Changes you made may not be saved.'"
      );
    }
  }, [state]);

  useEffect(() => {
    if (!data || editor) return;

    const blocks = data.content ? JSON.parse(data.content) : null;
    const wordsmith = new Wordsmith(
      editorContainer.current as HTMLDivElement
    ).init(blocks ? { blocks } : undefined, {
      keyup: () => {
        setState("notsaved");
        console.log("not saved");
      },
    });

    const interval = setInterval(() => savePost(), 5 * 60 * 1000); // <- 5 minutes
    const updateSavedTime = setInterval(() => setState((state) => state), 1000);

    const beforeUnload = (e: Event) => {
      clearInterval(interval);
      clearInterval(updateSavedTime);

      savePost();
    };
    window.addEventListener("beforeunload", beforeUnload);

    setEditor(wordsmith);

    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, [data, editor, setEditor]);

  return (
    <>
      <div className="flex items-center gap-2 px-3 mb-4">
        <button
          className="flex items-center gap-2 p-3 bg-almost-white rounded-full cursor-pointer text-graphite after:content-[attr(data-content)] after:pr-1 after:hidden hover:after:inline-flex"
          data-content={
            state === "saving"
              ? "Saving..."
              : state === "saved"
              ? `Saved ${formatDate(lastSaved).toLocaleLowerCase()}`
              : state === "notsaved"
              ? "Not saved"
              : "Up to date"
          }
          onClick={() => savePost()}
        >
          {state === "saving" ? (
            <CloudArrowUpIcon className="h-6 w-6 text-magenta" />
          ) : state === "notsaved" ? (
            <CloudArrowUpIcon className="h-6 w-6 text-magenta" />
          ) : (
            <CloudIcon className="h-6 w-6 text-magenta" />
          )}
        </button>
      </div>
      <div
        className="bg-almost-white rounded-xl p-2 w-full min-h-full"
        ref={editorContainer}
      />
    </>
  );
};
