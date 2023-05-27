import { ClientContext } from "@custom-types";
import Nullstack from "nullstack";

type FormProps = {
  onsubmit: (data: { [key: string]: string }) => void;
};

export default class Form extends Nullstack<FormProps> {
  formRef: HTMLFormElement;

  handleSubmit({
    event,
    onsubmit: submit,
  }: ClientContext<FormProps & { event: Event }>) {
    event?.preventDefault();

    const data = Object.fromEntries(
      Array.from(this.formRef.elements)
        .map((element: HTMLInputElement) =>
          element.name ? [element.name, element.value] : undefined
        )
        .filter(Boolean)
    );

    submit(data);
  }

  render({ children }: ClientContext<FormProps>) {
    return (
      <form
        ref={this.formRef}
        class="flex flex-col gap-4 p-12 tablet:p-0"
        onsubmit={this.handleSubmit}
      >
        {children}
      </form>
    );
  }
}
