import type { Metadata } from "next";
import {
  Manrope,
  Inter,
  Archivo,
  Montserrat,
  Jost,
  Lato,
} from "next/font/google";
import "./globals.css";
import { Header, Sidebar, MarginWidthWrapper, PageWrapper } from "@/components";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ZFreelance",
  description: "Manage your team without the hassle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <Sidebar />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
