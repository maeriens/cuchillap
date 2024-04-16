import { Table } from "@radix-ui/themes";

import { IngredienteDB } from "./types";

const IngredientRow = ({ nombre, cantidad, created_at }: IngredienteDB) => {
  return (
    <Table.Row>
      <Table.Cell className="upper">{nombre}</Table.Cell>
      <Table.Cell>{cantidad}</Table.Cell>
      <Table.Cell>{new Date(created_at).toLocaleDateString()}</Table.Cell>
    </Table.Row>
  );
};

export default IngredientRow;
