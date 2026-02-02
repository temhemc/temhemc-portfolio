import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "temhemc - Bitcoin & Ethereum Takip",
  description: "Bitcoin ve Ethereum fiyatlarını anlık olarak takip edin. Kripto para piyasa verileri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
