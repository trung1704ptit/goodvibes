import type { Metadata } from "next";
import AOSProvider from "@/components/AOSProvider";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { Quicksand } from "next/font/google";
import { ConfigProvider } from "antd";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Good Vibes IT Solutions",
  description:
    "At Good Vibes IT Solutions, we specialize in providing comprehensive IT solutions designed to drive your business forward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#17a2b7",
            colorLink: "#17a2b7",
          },
        }}
      >
        <body className={`${quicksand.className} antialiased`}>
          <AOSProvider>
            <AppHeader />
            {children}
            <Footer />
          </AOSProvider>
        </body>
      </ConfigProvider>
    </html>
  );
}
