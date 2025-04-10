import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "./_components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Manager",
  description:
    "O Stock Manager é um sistema de gestão de estoque que permite cadastrar produtos, registrar vendas e acompanhar tudo em um dashboard intuitivo com dados de receita, quantidade em estoque e produtos mais vendidos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <div className="relative flex">
          <Sidebar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
