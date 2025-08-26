"use client";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import IngredientForm from "@/components/IngredientForm";
import Login from "@/components/Login";
import { supabase } from "@/utils/supabase";

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Login />;
  } else {
    return <IngredientForm />;
  }
};

export default Admin;
