import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";

import "./globals.css";
import { NavigationProvider } from "@/contexts/NavigationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export let pageInfo = {
  title: "Home",
};
// {inter.className} for body

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <html className="h-full bg-gray-100" lang="en">
        <body className="h-full">
          <div className="min-h-full">
            <Header />
            <main className="-mt-32">
              <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </body>
      </html>
    </NavigationProvider>
  );
}
