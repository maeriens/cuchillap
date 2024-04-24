import { Cross1Icon } from "@radix-ui/react-icons";
import { Box, Container, Flex, Tabs, TextField } from "@radix-ui/themes";
import { ChangeEvent, useState } from "react";

import { IngredientsIndividualTable } from "../components/IngredientsIndividualTable/Table";
import { IngredientsTotalTable } from "../components/IngredientsTotalTable/Table";
import { useDebounce } from "../hooks/useDebounceValue";

const TABS_DATA = [
  {
    name: "individual",
    Component: IngredientsIndividualTable,
  },
  {
    name: "total",
    Component: IngredientsTotalTable,
  },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 350);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target?.value ?? "");
  };

  const clearSearch = () => setSearchTerm("");

  return (
    <Container>
      <Tabs.Root defaultValue={TABS_DATA[0].name}>
        <Tabs.List>
          {TABS_DATA.map(({ name }) => (
            <Tabs.Trigger value={name} className="capitalize" key={name}>
              {name.toUpperCase()}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Box pt="3">
          {TABS_DATA.map((tab) => (
            <Tabs.Content value={tab.name}>
              <Box position="sticky" top="0" style={{ zIndex: 2, background: "#FFF" }} pb="4">
                <TextField.Root
                  placeholder="Buscá si te pinta…"
                  radius="large"
                  onChange={handleSearch}
                  value={searchTerm}
                >
                  <TextField.Slot side="right">
                    {searchTerm.length > 0 && (
                      <Cross1Icon height="16" width="16" onClick={clearSearch} />
                    )}
                  </TextField.Slot>
                </TextField.Root>
              </Box>
              <Flex direction="column">
                <tab.Component searchTerm={debouncedTerm} />
              </Flex>
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    </Container>
  );
}

export default Home;
