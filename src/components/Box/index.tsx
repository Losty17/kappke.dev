import Nullstack from "nullstack";
import { ClientContext } from "@custom-types";

type BoxProps = {
  class?: string;
  id?: string;
};

export default class Box extends Nullstack {
  render({ children, class: className, id }: ClientContext<BoxProps>) {
    return (
      <div id={id} class={`flex flex-col text-justify m-auto ${className}`}>
        {children}
      </div>
    );
  }
}
