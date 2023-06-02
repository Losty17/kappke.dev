"use client";

type HeadingProps = {
  type?: "h1" | "h2" | "h3";
  side?: "left" | "right" | "center";
  children: React.ReactNode;
};

export default ({ children, type = "h2", side = "left" }: HeadingProps) => {
  let size: string;
  switch (type) {
    case "h1":
      size = "text-4xl";
      break;
    case "h2":
      size = "text-3xl";
      break;
    case "h3":
      size = "text-xl";
      break;
  }

  return (
    <span className={`${size} font-semibold uppercase w-full text-${side}`}>
      {children}
    </span>
  );
};
