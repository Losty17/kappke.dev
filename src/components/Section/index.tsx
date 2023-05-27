import Nullstack from "nullstack";
import { ClientContext } from "@custom-types";

type SectionProps = {
  id?: string;
  class?: string;
};

export default class Section extends Nullstack {
  render({ children, id, class: className }: ClientContext<SectionProps>) {
    return (
      <section
        id={id}
        class={`bg-neutral-900 w-full text-neutral-100 py-16 ${className}`}
      >
        {children}
      </section>
    );
  }
}
