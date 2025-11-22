import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthContext";
import { RecipeProvider } from "@/context/RecipeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="light"
      >
        <RecipeProvider>{children}</RecipeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}