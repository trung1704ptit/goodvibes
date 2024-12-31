import type { Metadata } from "next";
import { Karla } from "next/font/google";
// import "antd/dist/reset.css"; // Import Ant Design's reset styles
import "./globals.css";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";

// Load the Karla font
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"], // Specify subsets
  weight: ["400", "700"], // Include font weights you need
});

export const metadata: Metadata = {
  title: "Good Vibes IT Solutions",
  description: "Find your next career path",
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
        <body className={`${karla.variable} antialiased`}>
          <AppHeader />
          {children}
          <Footer />
        </body>
      </ConfigProvider>
    </html>
  );
}
