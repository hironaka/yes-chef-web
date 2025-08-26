"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { RecipeProvider } from "@/context/RecipeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="light"
      >
        <RecipeProvider>{children}</RecipeProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}