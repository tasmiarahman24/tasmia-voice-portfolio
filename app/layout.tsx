import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasmia Rahman | Voice Artist",
  description:
    "Bilingual voice artist for TVC, OVC, Documentary, and IVR — delivering warm, confident, and brand-true performances in Bangla & English.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

