import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_DB_URL = process.env["NEXT_PUBLIC_DB_URL"] || "";
const NEXT_PUBLIC_DB_KEY = process.env["NEXT_PUBLIC_DB_KEY"] || "";

export const supabase = createClient(NEXT_PUBLIC_DB_URL, NEXT_PUBLIC_DB_KEY);
