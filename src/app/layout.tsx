import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import StoreProvider from "./StoreProvider";

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
        <StoreProvider>
          <div className="w-full">
            <div className="container mx-auto">
              <div className="w-full my-4 sticky top-4 z-50">
                <Header />
              </div>
              <div className="z-10">{children}</div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
