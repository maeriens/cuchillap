import { Button, Flex, Table, Text } from "@radix-ui/themes";

import useTableData from "../../hooks/useTableData";
import { TableProps, TotalsDB } from "../../types/types";
import { TOTALS_TABLE_NAME } from "../../utils/constants";
import Loading from "../Loading";
import Row from "./Row";

export const IngredientsTotalTable = ({ searchTerm }: TableProps) => {
  const { data, loading, error, getData } = useTableData<TotalsDB>(TOTALS_TABLE_NAME, []);

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
          <Table.ColumnHeaderCell>Total</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Último</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {filteredData.map((row) => (
          <Row key={row.id} name={row.name} total={row.total} most_recent={row.most_recent} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};
