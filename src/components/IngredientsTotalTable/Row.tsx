import { Table } from "@radix-ui/themes";

import { Totals } from "../../types/types";

const Row = ({ name, sum }: Totals) => {
  return (
    <Table.Row>
      <Table.Cell className="upper">{name}</Table.Cell>
      <Table.Cell>{sum}</Table.Cell>
    </Table.Row>
  );
};

export default Row;
