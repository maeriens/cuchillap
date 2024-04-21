import { Button, Flex, Table, Text } from "@radix-ui/themes";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { INGREDIENTS_TABLE_NAME } from "../../utils/constants";
import { supabase } from "../../utils/supabase";
import Loading from "../Loading";
import IngredientRow from "./IngredientRow";
import { IngredienteDB, TableProps } from "./types";

export const IngredientsTable = ({ searchTerm }: TableProps) => {
  const [data, setData] = useState<IngredienteDB[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | string>();

  const getData = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const { error, data } = await supabase.from(INGREDIENTS_TABLE_NAME).select();
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    } catch (e) {
      let error;
      if (typeof e === "string") {
        error = e.toUpperCase();
      } else if (e instanceof Error) {
        error = e.message;
      }
      console.error(error);
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

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
