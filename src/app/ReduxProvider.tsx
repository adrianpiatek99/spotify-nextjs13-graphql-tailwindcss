"use client";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";

import { setSessionData } from "@/store/slices";
import { store } from "@/store/store";
import { useSession } from "next-auth/react";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  const { data, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    store.dispatch(setSessionData({ user: data?.user ?? null, loading, status }));
  }, [data?.user, loading, status]);

  return <Provider store={store}>{children}</Provider>;
}
