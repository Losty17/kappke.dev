"use client";

import { Checkbox, Table } from "flowbite-react";

const CustomCheckbox = () => (
  <Checkbox className="border-magenta/60 bg-transparent focus:ring-transparent checked:bg-magenta" />
);

const Row = ({
  userId,
  id,
  title,
  body,
}: {
  userId: number;
  id: number;
  title: string;
  body: string;
}) => (
  <Table.Row className="even:bg-almost-white odd:bg-white">
    <Table.Cell className="!p-3 text-center">
      <CustomCheckbox />
    </Table.Cell>
    <Table.Cell className="break-all">{title}</Table.Cell>
    <Table.Cell>
      {new Intl.DateTimeFormat("en", {
        dateStyle: "short",
        timeStyle: "short",
        hour12: false,
      }).format(new Date(1970, 0, 1))}
    </Table.Cell>
    <Table.Cell>
      {new Intl.DateTimeFormat("en", {
        dateStyle: "short",
        timeStyle: "short",
        hour12: false,
      }).format(new Date(1970, 0, 1))}
    </Table.Cell>
    <Table.Cell>Vinícius Kappke</Table.Cell>
    <Table.Cell>Draft</Table.Cell>
  </Table.Row>
);

export default ({
  posts,
}: {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}) => (
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
        <CustomCheckbox />
      </Table.HeadCell>
      <Table.HeadCell>Post title</Table.HeadCell>
      <Table.HeadCell>Date posted</Table.HeadCell>
      <Table.HeadCell>Last updated</Table.HeadCell>
      <Table.HeadCell>Author</Table.HeadCell>
      <Table.HeadCell className="rounded-tr-2xl">Status</Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      {posts.map((post) => (
        <Row {...post} key={post.id} />
      ))}
    </Table.Body>
  </Table>
);
