import "./globals.css";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
});

export const metadata = {
  title: "Kitty The Mechanic | Solana",
  description: "Kity is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable}`}>{children}</body>
    </html>
  );
}
