import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://ikybldishkkiyzlvmihu.supabase.co";
const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlreWJsZGlzaGtraXl6bHZtaWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NDQyMzMsImV4cCI6MjAwMjEyMDIzM30.vm8EIoEcBmGVeboyf91EVYfJ3SMjEDWkenhg5Er4YAA";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
