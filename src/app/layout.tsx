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
            <div className="container mx-auto mb-4">
              <div className="w-full sticky top-0 py-4 z-50 px-2 lg:px-0 bg-primary">
                <Header />
              </div>
              <div className="z-10 px-2 lg:px-0">{children}</div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
