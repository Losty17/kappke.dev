import { ClientContext } from "@custom-types";
import Nullstack from "nullstack";

export default class Footer extends Nullstack {
  render({ i18n }: ClientContext) {
    const { made, with: withStr, by, and, using, hosted } = i18n.footer;

    return (
      <footer class="flex flex-col m-auto w-1/2 mt-12 p-4 text-center text-[0.55rem] text-neutral-500">
        <p class="text-xs">
          {made} {withStr} ❤️ {by} Vinícius Kappke
        </p>
        <p>
          {made} {using} <a href="https://nullstack.app">Nullstack </a>
          {and} {hosted} by <a href="https://vercel.com">Vercel </a>
        </p>
      </footer>
    );
  }
}
