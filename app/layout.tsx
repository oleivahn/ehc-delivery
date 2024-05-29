import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { dark } from "@clerk/themes";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "EHC Delivery",
  description: "Service you can trust",
  icons: {
    icon: ["/favicon.ico?=4"],
    apple: ["/apple-touch-icon.png?=4"],
    shortcut: ["/apple-touch-icon.png?=4"],
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { userId, orgId, sessionClaims } = auth();
  // This is the server
  console.log("📗 LOG [ user ]:", userId);
  console.log("📗 LOG [ orgId ]:", orgId);
  console.log("📗 LOG [ sessionClaims ]:", sessionClaims);

  const theme = process.env.DEFAULT_THEME === "dark" ? dark : undefined;

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme,
      }}
    >
      {/* <SyncActiveOrganization/> */}

      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme={
              process.env.DEFAULT_THEME ? process.env.DEFAULT_THEME : "light"
            }
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />

              <div className="min-h-screen bg-darker pb-10 dark:bg-background">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
