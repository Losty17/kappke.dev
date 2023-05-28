import { ClientContext } from "@custom-types";
import Nullstack, { NullstackNode } from "nullstack";
import { Container, Heading, Section } from "@components";

declare function Post(): NullstackNode;
declare function PostList(): NullstackNode;

interface PostsContext {
  posts: {
    title: string;
    summary: string;
    cover: string;
    url: string;
  }[];
}
export default class Posts extends Nullstack {
  prepare(context: ClientContext<PostsContext>) {
    context.posts = [];
  }

  renderPost({
    post,
  }: ClientContext<{
    post: PostsContext["posts"][0];
  }>) {
    let { title, summary, cover, url } = post;

    if (summary.length > 210) summary = summary.slice(0, 210) + "...";

    return (
      <a class="flex flex-col gap-4 w-full tablet:w-1/3" href={url}>
        <div class="w-full h-fit aspect-square bg-neutral-100 rounded-lg"></div>
        <span class="flex flex-col gap-1">
          <Heading type="h3">{title}</Heading>
          <span class="text-sm text-justify font-regular">{summary}</span>
        </span>
      </a>
    );
  }

  renderPostList({ posts, i18n }: ClientContext<PostsContext>) {
    return (
      <>
        <div class="flex flex-col tablet:flex-row justify-between gap-12">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </div>
        <a
          class="text-lg font-semibold uppercase w-full text-center"
          href="/posts"
        >
          {i18n.seeMore} <span class="font-fira-code">{"->"}</span>
        </a>
      </>
    );
  }

  render({ i18n, posts }: ClientContext<PostsContext>) {
    return (
      <Section id="posts">
        <Container type="inner">
          <Heading size="h2" side="right">
            {i18n.recentPosts.title}
          </Heading>

          {posts.length ? (
            <PostList />
          ) : (
            <span class="text-lg font-regular w-full text-center">
              {i18n.recentPosts.empty}
            </span>
          )}
        </Container>
      </Section>
    );
  }
}
