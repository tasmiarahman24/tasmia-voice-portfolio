import "./globals.css";

export const metadata = {
  title: "Tasmia Rahman – Voice Artist",
  description:
    "Bilingual voice artist delivering warm, confident, and brand-true performances in Bangla and English.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
