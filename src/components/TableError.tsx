import { Button, Flex, Text } from "@radix-ui/themes";

const TableError = ({ onButtonClick }: { onButtonClick: () => void }) => {
  return (
    <Flex justify="center" align="center" py="5" direction="column" gap="6">
      <Text size="3" align="center" weight="medium">
        HUBO UN ERROR WACHEX
      </Text>
      <Button onClick={onButtonClick} color="tomato">
        Reintentar
      </Button>
    </Flex>
  );
};

export default TableError;
