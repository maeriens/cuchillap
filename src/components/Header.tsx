import { Container, Flex, Heading } from "@radix-ui/themes";

const Header = () => {
  return (
    <header>
      <Container>
        <Flex my="3" gap="4" align="baseline">
          <Heading size="8">Cuchillo</Heading>
          <Heading color="gray">
            <em>O una lista de cosas que corté</em>
          </Heading>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
