import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className=" bg-[#0b0b0f] text-white text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
