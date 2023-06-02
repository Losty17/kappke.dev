import { Container, Footer, Navbar } from "@/components";
import { About, Contact, Hero, Posts, Projects } from "./sections";

export default () => {
  return (
    <>
      <Navbar />
      <Container gap="lg" type="full">
        <Hero />
        <About />
        <Projects />
        {/* @ts-expect-error */}
        <Posts />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};
