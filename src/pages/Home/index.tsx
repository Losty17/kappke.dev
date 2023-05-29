import { Container, Footer, Navbar } from "@components";
import { ClientContext, ServerContext } from "@custom-types";
import { Post } from "@prisma/client";
import Nullstack from "nullstack";
import { About, Contact, Header, Posts, Projects } from "./sections";

class Home extends Nullstack {
  static async getPosts(context?: ServerContext) {
    const posts = await context.db.post.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      take: 3,
      where: {
        published: true,
      },
    });

    return posts;
  }

  prepare(
    context: ClientContext<{
      posts: Post[];
    }>
  ) {
    Home.getPosts().then((posts) => {
      console.log(posts);

      context.posts = posts;
    });
  }

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
