import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderComponent from "components/templates/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}
