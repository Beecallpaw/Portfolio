import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume",
  description: "My resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
	  <body className={`${inter.className} bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text`}>
				<Providers>{children}</Providers>
			</body>
    </html>
  );
}