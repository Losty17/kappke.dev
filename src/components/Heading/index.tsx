import Nullstack from "nullstack";
import { ClientContext } from "@custom-types";

type HeadingProps = {
  type?: "h1" | "h2" | "h3";
  side?: "left" | "right";
};

export default class Heading extends Nullstack {
  render({
    children,
    type = "h2",
    side = "left",
  }: ClientContext<HeadingProps>) {
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

    let textPosition = window.innerWidth < 768 ? "center" : side;
    return (
      <span
        class={`${size} font-semibold uppercase w-full text-${textPosition}`}
      >
        {children}
      </span>
    );
  }
}
