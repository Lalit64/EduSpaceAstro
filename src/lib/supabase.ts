import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cxotiafrsivmqxydigdo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTc1NTMwMiwiZXhwIjoxOTUxMzMxMzAyfQ.oExNcHpYLK38Wo79Pa3awusqvakS8QMAepGWn-Y00To";

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

