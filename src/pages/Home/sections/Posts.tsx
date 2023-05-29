import { Container, Heading, Section } from "@components";
import { ClientContext as Context, ServerContext } from "@custom-types";
import { Post } from "@prisma/client";
import Nullstack, { NullstackNode } from "nullstack";

declare function Post(): NullstackNode;

type ClientContext = Context & {
  posts: Post[];
};

export default class Posts extends Nullstack {
  posts: Post[] = [];

  renderPost({ post }: { post: Post }) {
    let { title, content, id } = post;

    let summary =
      content.length <= 210 ? content : content.slice(0, 210) + "...";

    return (
      <a class="flex flex-col gap-4 w-full tablet:w-1/3" href={`/posts/${id}`}>
        <div class="w-full h-fit aspect-square bg-neutral-100 rounded-lg"></div>
        <span class="flex flex-col gap-1">
          <Heading type="h3">{title}</Heading>
          <span class="text-sm text-justify font-regular">{summary}</span>
        </span>
      </a>
    );
  }

  render(context: ClientContext) {
    return (
      <Section id="posts">
        <Container type="inner">
          <Heading size="h2" side="right">
            {context.i18n.recentPosts.title}
          </Heading>

          {context.posts?.length ? (
            <>
              <div class="flex flex-col tablet:flex-row justify-between gap-12">
                {context.posts.map((post) => (
                  <Post post={post} />
                ))}
              </div>
              <a
                class="text-lg font-semibold uppercase w-full text-center"
                href="/posts"
              >
                {context.i18n.seeMore}{" "}
                <span class="font-fira-code">{"->"}</span>
              </a>
            </>
          ) : (
            <span class="text-lg font-regular w-full text-center">
              {context.i18n.recentPosts.empty}
            </span>
          )}
        </Container>
      </Section>
    );
  }
}
