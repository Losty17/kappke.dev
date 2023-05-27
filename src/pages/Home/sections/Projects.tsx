import { Container, Heading } from "@components";
import { ClientContext } from "@custom-types";
import Nullstack from "nullstack";

export default class Projecs extends Nullstack {
  render({ i18n }: ClientContext) {
    return (
      <Container>
        <Heading type="h2">{i18n.myProjects.title}</Heading>
      </Container>
    );
  }
}
