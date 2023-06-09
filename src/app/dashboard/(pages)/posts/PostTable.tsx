"use client";

import { Checkbox, Table } from "flowbite-react";
import { SetStateAction, forwardRef, useRef } from "react";
import { Post } from "./page";
import PostTableSkeleton from "./PostTableSkeleton";
import { formatDate } from "@/utils";

type CustomCheckboxProps = {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ checked, onChange }, ref) => {
    return (
      <Checkbox
        ref={ref}
        checked={checked}
        onChange={onChange}
        className="border-magenta/60 bg-transparent focus:ring-transparent checked:bg-magenta"
      />
    );
  }
);

const Row = ({
  post,
  selected,
  handleSelectPost,
}: {
  post: Post;
  selected: boolean;
  handleSelectPost: (post: Post) => void;
}) => {
  const { title, createdAt, updatedAt, author, published } = post;

  return (
    <Table.Row className="even:bg-almost-white odd:bg-white">
      <Table.Cell className="!p-3 text-center">
        <CustomCheckbox
          checked={selected}
          onChange={() => handleSelectPost(post)}
        />
      </Table.Cell>
      <Table.Cell className="break-all">
        <span
          className="cursor-pointer hover:text-magenta hover:underline"
          onClick={() =>
            window.open(`/dashboard/posts/edit/${post.id}`, "_blank")?.focus()
          }
        >
          {title}
        </span>
      </Table.Cell>
      <Table.Cell>{formatDate(new Date(createdAt))}</Table.Cell>
      <Table.Cell>{formatDate(new Date(updatedAt))}</Table.Cell>
      <Table.Cell>{author.name}</Table.Cell>
      <Table.Cell>{published ? "Published" : "Draft"}</Table.Cell>
    </Table.Row>
  );
};

export default ({
  posts,
  selectedPosts,
  setSelectedPosts,
  loading,
}: {
  posts: Post[];
  selectedPosts: Post[];
  setSelectedPosts: React.Dispatch<SetStateAction<Post[]>>;
  loading: boolean;
}) => {
  const checkAllCheckbox = useRef<HTMLInputElement>(null);

  const handleSelectAllPosts = () =>
    setSelectedPosts(checkAllCheckbox.current?.checked ? posts : []);

  const handleSelectPost = (post: Post) => {
    let newSelectedPosts: Post[] = selectedPosts.includes(post)
      ? selectedPosts.filter((p) => p.id !== post.id)
      : [...selectedPosts, post];

    const ckb = checkAllCheckbox.current as HTMLInputElement;
    ckb.checked = newSelectedPosts.length === posts.length;

    setSelectedPosts(newSelectedPosts);
  };

  return (
    <Table className="table-fixed border-classic-gray text-graphite font-medium rounded-t-2xl">
      <colgroup>
        <col span={1} style={{ width: "40px" }} />
        <col span={1} style={{ width: "45%" }} />
        <col span={1} style={{ width: "15%" }} />
        <col span={1} style={{ width: "15%" }} />
        <col span={1} style={{ width: "15%" }} />
        <col span={1} style={{ width: "10%" }} />
      </colgroup>
      <Table.Head className="!text-magenta !bg-almost-white">
        <Table.HeadCell className="!p-3 text-center rounded-tl-2xl">
          <CustomCheckbox
            ref={checkAllCheckbox}
            onChange={handleSelectAllPosts}
          />
        </Table.HeadCell>
        <Table.HeadCell>Post title</Table.HeadCell>
        <Table.HeadCell>Date posted</Table.HeadCell>
        <Table.HeadCell>Last updated</Table.HeadCell>
        <Table.HeadCell>Author</Table.HeadCell>
        <Table.HeadCell className="rounded-tr-2xl">Status</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {loading ? (
          <PostTableSkeleton />
        ) : posts.length === 0 ? (
          <Table.Row>
            <Table.Cell colSpan={6} className="text-center">
              No posts found.
            </Table.Cell>
          </Table.Row>
        ) : (
          posts.map((post) => (
            <Row
              key={post.id}
              post={post}
              selected={selectedPosts.includes(post)}
              handleSelectPost={handleSelectPost}
            />
          ))
        )}
      </Table.Body>
    </Table>
  );
};
