import { Inter } from "next/font/google";
import "./globals.css";
import Body from "@/components/Body";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cheruparambil Devasthanam",
  description: "Cheruparambil Devasthanam is located in kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Body children={children}/>
      </body>
    </html>
  );
}
