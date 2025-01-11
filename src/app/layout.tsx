import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";

const quicksand = Quicksand({
  subsets: ['latin'], // You can add more subsets if needed.
  weight: ['400', '500', '600', '700'], // Select specific font weights.
});


export const metadata: Metadata = {
  title: "Good Vibes IT Solutions",
  description: "At Good Vibes IT Solutions, we specialize in providing comprehensive IT solutions designed to drive your business forward",
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
          <AppHeader />
          {children}
          <Footer />
        </body>
      </ConfigProvider>
    </html>
  );
}
