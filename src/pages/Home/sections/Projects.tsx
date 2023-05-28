import { Container, Heading } from "@components";
import { ClientContext } from "@custom-types";
import Nullstack from "nullstack";

export default class Projecs extends Nullstack {
  render({ i18n }: ClientContext) {
    return (
      <Container id="projects">
        <Heading type="h2">{i18n.myProjects.title}</Heading>
        <div class="text-center">Coming Soon</div>
      </Container>
    );
  }
}
