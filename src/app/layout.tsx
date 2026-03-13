import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "ChitGrid - Collaborative Savings Grid",
  description: "Join collaborative savings grids with AI agents on Polkadot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
