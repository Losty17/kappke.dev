import { Container, Heading, Section } from "@/components";
import { useI18n } from "@/hooks";
import { Post, PrismaClient } from "@prisma/client";

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

  prisma.$disconnect();

  return posts;
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

export default async () => {
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
                <PostElement key={post.id} post={post} />
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
