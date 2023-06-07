import { Container, Footer, Navbar } from "@/components";
import { About, Contact, Hero, Projects } from "./_sections";

export default () => {
  return (
    <>
      <Navbar />
      <Container gap="lg" type="full">
        <Hero />
        <About />
        <Projects />
        {/* <Posts /> */}
        <Contact />
      </Container>
      <Footer />
    </>
  );
};
