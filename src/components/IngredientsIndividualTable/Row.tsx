import { Table } from "@radix-ui/themes";

import { IngredienteDB } from "../../types/types";

const IngredientRow = ({ name, amount, created_at }: IngredienteDB) => {
  return (
    <Table.Row>
      <Table.Cell className="capitalize">{name}</Table.Cell>
      <Table.Cell>{amount}</Table.Cell>
      <Table.Cell>{new Date(created_at).toLocaleDateString()}</Table.Cell>
    </Table.Row>
  );
};

export default IngredientRow;
