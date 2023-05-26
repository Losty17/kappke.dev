import { ClientContext } from "@custom-types";
import Nullstack, { NullstackNode } from "nullstack";

declare function Post(): NullstackNode;

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
    context.posts = [
      {
        title: "Post 1",
        summary: context.i18n.whoAmI.content,
        cover: "",
        url: "/posts/1",
      },
      {
        title: "Post 2",
        summary: context.i18n.whoAmI.content,
        cover: "",
        url: "/posts/1",
      },
      {
        title: "Post 3",
        summary: context.i18n.whoAmI.content,
        cover: "",
        url: "/posts/1",
      },
    ];
  }

  renderPost({
    post,
  }: ClientContext<{
    post: PostsContext["posts"][0];
  }>) {
    const { title, summary, cover, url } = post;
    return (
      <a class="flex flex-col gap-4 w-1/3" href={url}>
        <div class="w-full h-fit aspect-square bg-gray-100 rounded-lg"></div>
        <span class="flex flex-col gap-1">
          <span class="text-xl uppercase font-semibold">{title}</span>
          <span class="text-sm text-justify font-regular">{summary}</span>
        </span>
      </a>
    );
  }

  render({ i18n, posts }: ClientContext<PostsContext>) {
    return (
      <section id="posts" class="bg-gray-900 w-full text-gray-100 py-16">
        <div class="w-1/2 flex flex-col gap-8 m-auto">
          <span class="text-3xl font-semibold uppercase w-full text-right">
            {i18n.recentPosts.title}
          </span>

          {posts.length ? (
            <>
              <div class="flex justify-between gap-12">
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
          ) : (
            <span class="text-lg font-regular w-full text-center">
              {i18n.recentPosts.empty} :(
            </span>
          )}
        </div>
      </section>
    );
  }
}
