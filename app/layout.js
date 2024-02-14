import { Sofia } from "next/font/google";
import "./globals.css";

const sofia = Sofia({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Valentine",
  description: "Congratulation Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofia.className}>{children}</body>
    </html>
  );
}
