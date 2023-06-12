"use client";

import { useSWR } from "@/hooks";
import { useEffect, useRef } from "react";
import TextEditor from "@wordsmith/components/Editor";
import "@wordsmith/styles/vars.css";
import "@wordsmith/styles/index.css";
import "@wordsmith/styles/texteditor.css";
import "@wordsmith/styles/commandpalette.css";

export default ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { data, error, isLoading } = useSWR(`/api/posts/${params.id}`);
  const editorContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-expect-error
    const editor = new TextEditor(editorContainer.current);
    editor.init();

    const interval = setInterval(() => {
      console.log("editor", editor.toJSON());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-almost-white rounded-xl p-2" ref={editorContainer}></div>
  );
};
