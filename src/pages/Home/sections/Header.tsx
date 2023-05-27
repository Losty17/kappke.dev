import { ClientContext } from "@custom-types";
import Nullstack from "nullstack";

export default class Header extends Nullstack {
  render({ i18n }: ClientContext) {
    return (
      <section class="flex flex-col justify-center m-auto h-screen font-semibold uppercase">
        <span>
          {i18n.greeting.welcome} {i18n.greeting.to}
        </span>
        <h1 class="text-5xl font-semibold">kappke.dev</h1>
        <a href="#who-am-i" class="text-right">
          {i18n.seeMore} <span class="font-fira-code">{"->"}</span>
        </a>
      </section>
    );
  }
}
