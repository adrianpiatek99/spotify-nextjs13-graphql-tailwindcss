"use client";
import type { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

import ReduxProvider from "./ReduxProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: false
    }
  }
});

export default function RootProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider>{children}</ReduxProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
