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
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((post, index) => (
            <tr key={index} className={index % 2 === 0 ? "" : "bg-neutral-200"}>
              <th
                scope="row"
                className="px-6 py-4 rounded-l-lg font-medium whitespace-nowrap"
              >
                {post.title}
              </th>
              <td className="px-6 py-4">Vinícius Kappke</td>
              <td className="px-6 py-4 rounded-r-lg">01/01/1970 00h00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
