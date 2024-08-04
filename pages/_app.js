import { createClient } from "@/utils/supabase/client";

function MyApp({ Component, pageProps }) {
  const supabase = createClient();

  return <Component {...pageProps} />;
}

export default MyApp;