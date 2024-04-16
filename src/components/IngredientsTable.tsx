import { Button, Flex, Table, Text } from "@radix-ui/themes";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { IngredienteDB } from "../hooks/types";
import { supabase } from "../utils/supabase";

type TableProps = {
  searchTerm: string;
};

export const IngredientsTable = ({ searchTerm }: TableProps) => {
  const [data, setData] = useState<IngredienteDB[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | unknown>();

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error, data } = await supabase.from("ingredients").select();
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Flex justify="center" py="5">
        <ReactLoading type="spinningBubbles" color="black" />
      </Flex>
    );
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

  const filteredData = data.filter((r) =>
    r.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Table.Row key={row.id}>
            <Table.Cell className="upper">{row.nombre}</Table.Cell>
            <Table.Cell>{row.cantidad}</Table.Cell>
            <Table.Cell>{new Date(row.created_at).toLocaleDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
