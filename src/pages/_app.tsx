import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "./Providers";
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Providers>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </Providers>
      </SessionProvider>
    </>
  );
}
