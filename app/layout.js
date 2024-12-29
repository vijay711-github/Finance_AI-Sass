import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "Wealth",
  description: "One stop shop for all your financial needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* {header} */}
        <main className="min-h-screen">
          <Header />
        {children}
        </main>
        {/* {footer} */}
        <footer className="bg-blue-50 text-black p-8">
          <div className="container mx-auto px-4 text-center">
            <p >Copyright 2024 Wealth</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
