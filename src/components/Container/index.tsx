import Box from "@/components/Box";

type ContainerProps = {
  gap?: "sm" | "md" | "lg";
  type?: "outer" | "inner" | "full";
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export default ({
  children,
  gap = "md",
  type = "outer",
  className,
  id,
}: ContainerProps) => {
  const gapSize = gap === "sm" ? 4 : gap === "md" ? 8 : 12;

  const conditionalStyle =
    type === "inner"
      ? "px-12 py-12 tablet:w-1/2 laptop:w-2/3 tablet:px-0"
      : type === "outer"
      ? "tablet:w-1/2"
      : "w-full";

  return (
    <Box
      id={id}
      className={`gap-${gapSize} w-full ${conditionalStyle} ${className}`}
    >
      {children}
    </Box>
  );
};
