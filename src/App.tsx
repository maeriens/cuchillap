import { Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

import Header from "./components/Header";

const App = ({ children }: { children: ReactNode }) => (
  <Flex direction="column" px="4">
    <Header />
    {children}
  </Flex>
);

export default App;
