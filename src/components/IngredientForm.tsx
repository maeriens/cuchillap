import * as Form from "@radix-ui/react-form";
import { Box, Button, Card, Flex, Heading, Spinner, Text, TextField } from "@radix-ui/themes";
import React, { FormEvent, useState } from "react";

import { INGREDIENTS_TABLE_NAME } from "../utils/constants";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/navigation";

const INITIAL_STATE = {
  name: "",
  amount: "",
};

const InredientForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const validFormData = () => {
    const { name, amount } = formData;
    if (name.trim().length === 0 || RegExp(/^\D+$/i).exec(name) === null) return false;
    if (RegExp(/\d+/).exec(amount) === null || +amount <= 0) return false;
    return true;
  };

  const updateTable = async () => {
    const parsedFormData = {
      name: formData.name.trim().toLowerCase(),
      amount: formData.amount,
    };

    try {
      const { error } = await supabase.from(INGREDIENTS_TABLE_NAME).insert(parsedFormData);
      if (error) {
        console.log({ error });
      } else {
        setFormData(INITIAL_STATE);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (validFormData()) {
      await updateTable();
    }
    setLoading(false);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <Flex align={"center"} justify={"center"} flexGrow={"1"} direction={"column"} height={"100%"}>
      <Box>
        <Card className="offgrey-background">
          <Heading>Agregar ingrediente</Heading>
          <Form.Root className="FormRoot" onSubmit={onSubmit}>
            <Form.Field className="FormField" name="name">
              <Flex align="baseline" justify="between">
                <Form.Label className="FormLabel">Ingrediente</Form.Label>
              </Flex>
              <Form.Control asChild>
                <TextField.Root
                  required
                  type="text"
                  onChange={handleChange}
                  value={formData.name}
                />
              </Form.Control>
              <Form.Message match="valueMissing">
                <Text size="1" color="red">
                  Dale poné el ingrediente, hippie
                </Text>
              </Form.Message>
            </Form.Field>
            <Form.Field className="FormField" name="amount">
              <Flex align="baseline" justify="between">
                <Form.Label className="FormLabel">Cantidad</Form.Label>
              </Flex>
              <Form.Control asChild>
                <TextField.Root
                  required
                  type="number"
                  onChange={handleChange}
                  value={formData.amount}
                />
              </Form.Control>
              <Form.Message match="valueMissing">
                <Text size="1" color="red">
                  Falta la cantidad
                </Text>
              </Form.Message>
            </Form.Field>
            <Form.Submit asChild>
              <Box my="2">
                <Button
                  className="fullWidth"
                  type="submit"
                  disabled={loading || !formData.name || !formData.amount}
                >
                  {loading && <Spinner loading />}
                  Crear
                </Button>
              </Box>
            </Form.Submit>
          </Form.Root>
          <Box my="2">
            <Button
              className="fullWidth"
              type="button"
              color="amber"
              variant="soft"
              disabled={loading}
              onClick={() => router.push("/")}
            >
              {loading && <Spinner loading />}
              Volver
            </Button>
          </Box>
        </Card>
      </Box>
    </Flex>
  );
};

export default InredientForm;
