import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { supabase } from "@/utils/supabase";

const Login = () => (
  <Flex align="center" justify="center" flexGrow="1" direction="column" height="100%">
    <Box>
      <Card className="offgrey-background">
        <Heading>Login</Heading>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          view="sign_in"
          redirectTo="/new"
        />
      </Card>
    </Box>
  </Flex>
);

export default Login;
