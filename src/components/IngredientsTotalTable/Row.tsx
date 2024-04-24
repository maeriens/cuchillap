import { Table } from "@radix-ui/themes";

import { Totals } from "../../types/types";

const Row = ({ name, total, most_recent }: Totals) => {
  return (
    <Table.Row>
      <Table.Cell className="capitalize">{name}</Table.Cell>
      <Table.Cell>{total}</Table.Cell>
      <Table.Cell>{new Date(most_recent).toLocaleDateString()}</Table.Cell>
    </Table.Row>
  );
};

export default Row;
