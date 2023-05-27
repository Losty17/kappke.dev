import { Container, Footer, Navbar } from "@components";
import Nullstack from "nullstack";
import { About, Contact, Header, Posts, Projects } from "./sections";

class Home extends Nullstack {
  render() {
    return (
      <>
        <Navbar />
        <Container gap="lg" type="full">
          <Header />
          <About />
          <Projects />
          <Posts />
          <Contact />
        </Container>
        <Footer />
      </>
    );
  }
}

export default Home;
