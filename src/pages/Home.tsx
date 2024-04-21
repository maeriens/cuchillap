import { Box, Container, Flex, Tabs, TextField } from "@radix-ui/themes";
import { ChangeEvent, useState } from "react";

import { IngredientsIndividualTable } from "../components/IngredientsIndividualTable/Table";
import { IngredientsTotalTable } from "../components/IngredientsTotalTable/Table";
import { useDebounce } from "../hooks/useDebounceValue";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 350);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target?.value ?? "");
  };

  return (
    <Container>
      <Tabs.Root defaultValue="total">
        <Tabs.List>
          <Tabs.Trigger value="individual">Individual</Tabs.Trigger>
          <Tabs.Trigger value="total">Total</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="individual">
            <Box position="sticky" top="0" style={{ zIndex: 2, background: "#FFF" }} pb="4">
              <TextField.Root
                placeholder="Buscá si te pinta…"
                radius="large"
                onChange={handleSearch}
              />
            </Box>
            <Flex direction="column">
              <IngredientsIndividualTable searchTerm={debouncedTerm} />
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="total">
            <Box position="sticky" top="0" style={{ zIndex: 2, background: "#FFF" }} pb="4">
              <TextField.Root
                placeholder="Buscá si te pinta…"
                radius="large"
                onChange={handleSearch}
              />
            </Box>
            <IngredientsTotalTable searchTerm={debouncedTerm} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Container>
  );
}

export default Home;
