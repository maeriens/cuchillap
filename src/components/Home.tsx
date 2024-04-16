import { Box, Container, Flex, Tabs, Text, TextField } from "@radix-ui/themes";
import { ChangeEvent, useState } from "react";

import { useDebounce } from "../hooks/useDebounceValue";
import { IngredientsTable } from "./IngredientsTable";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 350);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target?.value ?? "");
  };

  return (
    <Container>
      <Flex direction="column">
        <IngredientsTable searchTerm={debouncedTerm} />
      </Flex>
    </Container>
  );

  return (
    <Container>
      <Tabs.Root defaultValue="total">
        <Tabs.List>
          <Tabs.Trigger value="total">Total</Tabs.Trigger>
          <Tabs.Trigger value="individual">Individual</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="total">
            <Text size="2">Total.</Text>
          </Tabs.Content>

          <Tabs.Content value="individual">
            <Box position="sticky" top="0" style={{ zIndex: 2, background: "#FFF" }} pb="4">
              <TextField.Root
                placeholder="Buscá si te pinta…"
                radius="large"
                onChange={handleSearch}
              />
            </Box>

            <Flex direction="column">
              <IngredientsTable searchTerm={debouncedTerm} />
            </Flex>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Container>
  );
}

export default Home;
