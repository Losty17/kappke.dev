import { Table } from "flowbite-react";

export default () => (
  <>
    {Array(8)
      .fill(0)
      .map((v, i) => (
        <Table.Row key={i} className="even:bg-almost-white odd:bg-white">
          <Table.Cell className="!p-3 text-center"></Table.Cell>
          <Table.Cell className="break-all">
            <div className="animate-pulse h-4 bg-classic-gray rounded"></div>
          </Table.Cell>
          <Table.Cell>
            <div className="animate-pulse h-4 bg-classic-gray rounded"></div>
          </Table.Cell>
          <Table.Cell>
            <div className="animate-pulse h-4 bg-classic-gray rounded"></div>
          </Table.Cell>
          <Table.Cell>
            <div className="animate-pulse h-4 bg-classic-gray rounded"></div>
          </Table.Cell>
          <Table.Cell>
            <div className="animate-pulse h-4 bg-classic-gray rounded"></div>
          </Table.Cell>
        </Table.Row>
      ))}
  </>
);
