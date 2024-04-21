import { Box, Flex, Tabs, TextField } from "@radix-ui/themes";
import { ChangeEvent, ReactElement, useState } from "react";

import { useDebounce } from "../hooks/useDebounceValue";

type TabProps = {
  children: (text: string) => ReactElement;
  tabName: string;
};

const Tab = ({ children, tabName }: TabProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 350);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target?.value ?? "");
  };
  return (
    <Tabs.Content value={tabName}>
      <Box position="sticky" top="0" style={{ zIndex: 2, background: "#FFF" }} pb="4">
        <TextField.Root placeholder="Buscá si te pinta…" radius="large" onChange={handleSearch} />
      </Box>
      <Flex direction="column">{children(debouncedTerm)}</Flex>
    </Tabs.Content>
  );
};

export default Tab;
