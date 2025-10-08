// app/layout.tsx
import "./globals.css";

import { Manrope } from "next/font/google";
export const metadata = {
  title: "My App",
  description: "Next.js App with Admin Dashboard & Frontend",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust weights as needed
  variable: "--font-manrope", // optional
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
