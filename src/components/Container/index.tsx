import Nullstack from "nullstack";
import { ClientContext } from "@custom-types";
import Box from "@components/Box";

type ContainerProps = {
  gap?: "sm" | "md" | "lg";
  type?: "outer" | "inner" | "full";
  class?: string;
};

export default class Container extends Nullstack {
  render({
    children,
    gap = "md",
    type = "outer",
    class: className,
  }: ClientContext<ContainerProps>) {
    const gapSize = gap === "sm" ? 4 : gap === "md" ? 8 : 12;

    const conditionalStyle =
      type === "inner"
        ? "px-12 py-12 tablet:w-1/2 tablet:px-0"
        : type === "outer"
        ? "tablet:w-1/2"
        : "w-full";

    return (
      <Box class={`gap-${gapSize} w-full ${conditionalStyle} ${className}`}>
        {children}
      </Box>
    );
  }
}
