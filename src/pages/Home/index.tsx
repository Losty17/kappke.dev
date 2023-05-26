import Navbar from "@components/Navbar";
import { ClientContext } from "@custom-types";
import i18n from "@i18n";
import Nullstack, { NullstackNode } from "nullstack";
import { About, Header, Posts } from "./sections";

declare function Input(context: { placeholder: string }): NullstackNode;

class Home extends Nullstack {
  prepare(context: ClientContext) {
    context.i18n = i18n();
  }

  renderInput({ placeholder }: { placeholder: string }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        class="w-full bg-transparent border-b-2 border-gray-900 focus:outline-none pb-2"
      />
    );
  }

  render({ i18n }: ClientContext) {
    return (
      <div class="flex flex-col gap-12">
        <Navbar />
        <Header i18n={i18n} />
        <About i18n={i18n} />
        <div class="w-1/2 flex flex-col m-auto">
          <span class="text-3xl font-semibold uppercase w-full">
            {i18n.myProjects.title}
          </span>
          @TODO
        </div>
        <Posts i18n={i18n} />
        <div id="contact" class="w-1/2 flex flex-col gap-8 m-auto mb-40">
          <span class="text-3xl font-semibold uppercase w-full">
            {i18n.contactMe.title}
          </span>
          <form class="flex flex-col gap-4">
            <div class="flex gap-12">
              <div class="flex flex-col gap-8 w-1/2">
                <Input placeholder="Nome" />
                <Input placeholder="Email" />
                <Input placeholder="País" />
                <Input placeholder="Telefone" />
                <Input placeholder="Como chegou até aqui?" />
              </div>
              <div class="flex flex-col gap-8 w-1/2">
                <Input placeholder="Assunto" />
                <textarea
                  placeholder="Digite sua mensagem"
                  type="text"
                  class="w-full h-full bg-transparent border-b-2 border-gray-900 focus:outline-none resize-none"
                />
              </div>
            </div>
            <button type="submit" class="place-self-end bg-gray-900 text-gray-100 py-3 px-5 rounded">Enviar <span class="font-fira-code">{"->"}</span></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
