import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://jpstmfgmlvflfknyxgst.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwc3RtZmdtbHZmbGZrbnl4Z3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1NDM1MDAsImV4cCI6MjAwMDExOTUwMH0.6yxMIooInFS9qGSoAm-p1xooMNZw6wpQh6L8w6Zoaao";
const SUPABASE_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwc3RtZmdtbHZmbGZrbnl4Z3N0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDU0MzUwMCwiZXhwIjoyMDAwMTE5NTAwfQ.TbavFePoJA_LNN0vDUF3Nx3tdU4L-2CPij73snVQ0tE"

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});

export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SECRET, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})


