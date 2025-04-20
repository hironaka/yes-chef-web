import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
// Removed ThemeProvider and SessionProvider imports
import { Providers } from "@/components/Providers"; // Import the new Providers component
import ScrollToTop from "@/components/ScrollToTop";
import LayoutWrapper from "@/components/Layout/LayoutWrapper"

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Providers> {/* Use the Providers component */}
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
