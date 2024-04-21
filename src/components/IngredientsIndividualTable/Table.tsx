import { Button, Flex, Table, Text } from "@radix-ui/themes";

import useTableData from "../../hooks/useTableData";
import { IngredienteDB, TableProps } from "../../types/types";
import { INGREDIENTS_TABLE_NAME } from "../../utils/constants";
import Loading from "../Loading";
import IngredientRow from "./Row";

export const IngredientsIndividualTable = ({ searchTerm }: TableProps) => {
  const { data, loading, error, getData } = useTableData<IngredienteDB>(INGREDIENTS_TABLE_NAME, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Flex justify="center" align="center" py="5" direction="column" gap="6">
        <Text size="3" align="center" weight="medium">
          HUBO UN ERROR WACHEX
        </Text>
        <Button onClick={getData} color="tomato">
          Reintentar
        </Button>
      </Flex>
    );
  }

  const filteredData = data.filter((r) => r.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Table.Root size="3" variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Ingrediente</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Cantidad</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Fecha</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {filteredData.map((row) => (
          <IngredientRow
            key={row.id}
            id={row.id}
            name={row.name}
            amount={row.amount}
            created_at={row.created_at}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
};
