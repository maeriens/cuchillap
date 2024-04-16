import { Flex } from "@radix-ui/themes";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Flex justify="center" py="5">
      <ReactLoading type="spinningBubbles" color="black" />
    </Flex>
  );
};

export default Loading;
