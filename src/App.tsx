import { Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

import Header from "./components/Header";

const App = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="column">
      <Header />
      {children}
    </Flex>
  );
};

export default App;
