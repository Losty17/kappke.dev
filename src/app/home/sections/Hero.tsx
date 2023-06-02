"use client";

import { useI18n } from "@/hooks";
import { useEffect, useState } from "react";

export default () => {
  const i18n = useI18n();
  const welcomeText = i18n.greeting.welcome + " " + i18n.greeting.to;
  const [text, setText] = useState(welcomeText);
  const [revealedChars, setRevealedChars] = useState(0);

  useEffect(() => {
    let changeLetterInterval: NodeJS.Timer;
    let increaseRevealInterval: NodeJS.Timer;

    changeLetterInterval = setInterval(() => {
      // set the text to random numbers, letters, and symbols, following the original length
      // of the welcome text. Then, after each run, reveal one more character of the original
      // text, until it's fully revealed.
      setText(
        welcomeText.substring(0, revealedChars) +
          Array.from(
            welcomeText.substring(revealedChars, welcomeText.length),
            (v) => (v === " " ? " " : Math.random().toString(36).charAt(2))
          ).join("")
      );

      if (revealedChars === welcomeText.length) {
        clearInterval(changeLetterInterval);
        clearInterval(increaseRevealInterval);
      }
    }, 75);

    increaseRevealInterval = setInterval(() => {
      setRevealedChars((prev) => prev + 1);
    }, 150);

    return () => {
      clearInterval(changeLetterInterval);
      clearInterval(increaseRevealInterval);
    };
  }, [revealedChars, welcomeText]);

  return (
    <section className="flex flex-col justify-center m-auto h-screen font-semibold uppercase">
      <span className="text-xl font-tech tracking-widest">{text}</span>
      <h1 className="text-5xl font-semibold">kappke.dev</h1>
      <a href="#who-am-i" className="text-right">
        {i18n.seeMore} <span className="font-fira-code">{"->"}</span>
      </a>
    </section>
  );
};
