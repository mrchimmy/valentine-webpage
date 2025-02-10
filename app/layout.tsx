import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import ThemeToggle from "./components/theme";
import FallingHearts from "./components/falling-hearts";

const geistItim = Itim({
  variable: "--font-itim-sans",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Valentine for everyone.",
  description: "วันวาเลนไทน์ไม่ใช่แค่วันแห่งความรักต่อคู่รัก แต่ยังเป็นวันแห่งความรักต่อทุกๆคน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistItim.variable} antialiased text-white bg-light-valentine dark:dark-background`}
      >
          <FallingHearts />
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
