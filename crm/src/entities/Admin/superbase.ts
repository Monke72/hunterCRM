import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!, // твой URL проекта
  import.meta.env.VITE_SUPABASE_ANON_KEY! // anon key для фронтенда
);
