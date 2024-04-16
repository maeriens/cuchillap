import { Box, Container, Heading } from "@radix-ui/themes";

const Header = () => {
  return (
    <header>
      <Container>
        <Box my="3">
          <Heading size="8">Cuchillo</Heading>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
