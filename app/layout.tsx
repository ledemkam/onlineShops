import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";




export const metadata: Metadata = {
  title: "Mein Shop",
  description: "Coole Produkte kaufen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="flex min-h-full flex-col bg-white">
      <main className="flex-grow container mx-auto px-4 py-8">
         <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
