import Nullstack from "nullstack";
import { ClientContext } from "@custom-types";

type BoxProps = {
  class?: string;
};

export default class Box extends Nullstack {
  render({ children, class: className }: ClientContext<BoxProps>) {
    return <div class={`flex flex-col text-justify m-auto ${className}`}>{children}</div>;
  }
}
