import { Flex } from "@radix-ui/themes";
import { BeatLoader } from "react-spinners";

const Loading = () => (
  <Flex justify="center" py="5">
    <BeatLoader />
  </Flex>
);

export default Loading;
