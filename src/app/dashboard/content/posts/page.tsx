import PostTable from "./PostTable";
import ActionArray from "./ActionArray";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return data as {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
};

export default async () => {
  const data = await getData();

  return (
    <div className="relative overflow-x-auto rounded-lg scroll">
      <ActionArray />
      <PostTable posts={data} />
    </div>
  );
};
