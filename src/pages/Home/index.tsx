import { Navbar, Container, Heading } from "@components";
import { ClientContext } from "@custom-types";
import i18n from "@i18n";
import Nullstack, { NullstackNode } from "nullstack";
import { About, Header, Posts } from "./sections";

declare function Input(context: { placeholder: string }): NullstackNode;

class Home extends Nullstack {
  prepare(context: ClientContext) {}

  renderInput({ placeholder }: { placeholder: string }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        class="w-full bg-transparent border-b-2 border-neutral-900 focus:outline-none pb-2"
      />
    );
  }

  render({ i18n }: ClientContext) {
    return (
      <>
        <Navbar />
        <Container gap="lg" type="full">
          <Header i18n={i18n} />
          <About i18n={i18n} />
          <Container>
            <Heading type="h2">{i18n.myProjects.title}</Heading>
          </Container>
          <Posts i18n={i18n} />
          <Container id="contact">
            <Heading type="h2">{i18n.contactMe.title}</Heading>
            <form class="flex flex-col gap-4 p-12 tablet:p-0">
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
                    class="w-full h-full bg-transparent border-b-2 border-neutral-900 focus:outline-none resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="place-self-end bg-neutral-900 text-neutral-100 py-3 px-5 rounded"
              >
                Enviar <span class="font-fira-code">{"->"}</span>
              </button>
            </form>
          </Container>
        </Container>
      </>
    );
  }
}

export default Home;
