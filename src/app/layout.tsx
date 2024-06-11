import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Synapsis Blogs",
  description: "Blog website with public api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-full">
          <div className="container mx-auto">
            <div className="w-full my-4">
              <Header />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
