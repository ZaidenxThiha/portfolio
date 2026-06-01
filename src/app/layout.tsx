import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiha Aung — Portfolio",
  description:
    "Thiha Aung — AI Engineer & Data Analyst and final-year Computer Science student in Ho Chi Minh City. Ask me anything about my work, skills, and projects.",
  icons: {
    icon: "/seo/favicon.svg",
    apple: "/seo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
