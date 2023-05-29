import { Container, Navbar, Section, Box, Heading, Footer } from "@/components";
import { PrismaClient, Post } from "@prisma/client";
import { useI18n } from "@/hooks";
import Contact from "./Contact";

const getPosts = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    take: 3,
    where: {
      published: true,
    },
  });

  return posts;
};

const Header = () => {
  const i18n = useI18n();

  return (
    <section className="flex flex-col justify-center m-auto h-screen font-semibold uppercase">
      <span>
        {i18n.greeting.welcome} {i18n.greeting.to}
      </span>
      <h1 className="text-5xl font-semibold">kappke.dev</h1>
      <a href="#who-am-i" className="text-right">
        {i18n.seeMore} <span className="font-fira-code">{"->"}</span>
      </a>
    </section>
  );
};

const About = () => {
  const i18n = useI18n();

  return (
    <Section id="who-am-i">
      <Container type="inner" className="tablet:!flex-row">
        <div className="bg-[url(https://avatars.githubusercontent.com/u/45098519)] bg-cover w-full h-fit tablet:w-[200px] tablet:h-[200px] m-auto aspect-square rounded"></div>
        <Box className="gap-4 text-justify !m-0">
          <Heading type="h2" side="right">
            {i18n.whoAmI.title}
          </Heading>
          {i18n.whoAmI.content}
        </Box>
      </Container>
    </Section>
  );
};

const Projects = () => {
  const i18n = useI18n();

  return (
    <Container id="projects">
      <Heading type="h2">{i18n.myProjects.title}</Heading>
      <div className="text-center">Coming Soon</div>
    </Container>
  );
};

const PostElement = ({ post }: { post: Post }) => {
  let { title, content, id } = post;

  let summary = content.length <= 210 ? content : content.slice(0, 210) + "...";

  return (
    <a
      className="flex flex-col gap-4 w-full tablet:w-1/3"
      href={`/posts/${id}`}
    >
      <div className="w-full h-fit aspect-square bg-neutral-100 rounded-lg"></div>
      <span className="flex flex-col gap-1">
        <Heading type="h3">{title}</Heading>
        <span className="text-sm text-justify font-regular">{summary}</span>
      </span>
    </a>
  );
};

const Posts = async () => {
  const i18n = useI18n();
  const posts = await getPosts();

  return (
    <Section id="posts">
      <Container type="inner">
        <Heading type="h2" side="right">
          {i18n.recentPosts.title}
        </Heading>

        {posts?.length ? (
          <>
            <div className="flex flex-col tablet:flex-row justify-between gap-12">
              {posts.map((post) => (
                <PostElement post={post} />
              ))}
            </div>
            <a
              className="text-lg font-semibold uppercase w-full text-center"
              href="/posts"
            >
              {i18n.seeMore} <span className="font-fira-code">{"->"}</span>
            </a>
          </>
        ) : (
          <span className="text-lg font-regular w-full text-center">
            {i18n.recentPosts.empty}
          </span>
        )}
      </Container>
    </Section>
  );
};

export default async () => {
  return (
    <>
      <Navbar />
      <Container gap="lg" type="full">
        <Header />
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
