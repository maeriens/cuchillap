import { createClient } from "@supabase/supabase-js";

const { VITE_DB_URL, VITE_DB_KEY } = import.meta.env;

export const supabase = createClient(VITE_DB_URL, VITE_DB_KEY);
