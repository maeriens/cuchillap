import { Box, Container, Tabs } from "@radix-ui/themes";

import { IngredientsIndividualTable } from "../components/IngredientsIndividualTable/Table";
import { IngredientsTotalTable } from "../components/IngredientsTotalTable/Table";
import Tab from "../components/Tab";

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

const TABS_TRIGGERS = TABS_DATA.map((t) => t.name);

function Home() {
  return (
    <Container>
      <Tabs.Root defaultValue="total">
        <Tabs.List>
          {TABS_TRIGGERS.map((tabName) => (
            <Tabs.Trigger value={tabName} className="capitalize">
              {tabName}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Box pt="3">
          {TABS_DATA.map((tab) => (
            <Tab tabName={tab.name}>
              {(searchTerm: string) => <tab.Component searchTerm={searchTerm} />}
            </Tab>
          ))}
        </Box>
      </Tabs.Root>
    </Container>
  );
}

export default Home;
