import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

import { supabase } from "../utils/supabase";

const Admin = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    console.log(event);
    if (event !== "SIGNED_OUT") {
      navigate("/new");
    }
  });

  return (
    <Flex align={"center"} justify={"center"} flexGrow={"1"} direction={"column"} height={"100%"}>
      <Box style={{ background: "red" }}>
        <Card>
          <Heading>Login</Heading>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            // showLinks={false}
            view="sign_in"
          />
        </Card>
      </Box>
    </Flex>
  );
};

export default Admin;
