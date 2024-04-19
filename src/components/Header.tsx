import "./Header.css";

import { Container, Flex, Heading, Link } from "@radix-ui/themes";

const Header = () => {
  return (
    <header>
      <Container>
        <Flex my="3" gap="4" justify="between" className="header-flex">
          <Link href="/" className="link">
            <Heading size="8">Cuchillapp</Heading>
          </Link>
          <Heading
            color="gray"
            size={{
              initial: "2",
              xs: "3",
              sm: "5",
            }}
          >
            <em>O una lista de cosas que corté</em>
          </Heading>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
