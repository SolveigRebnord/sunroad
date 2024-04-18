
import { Forum, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sunroad",
  description: "Personal Portfolio",
  icons: './sunroad_logo.svg',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <link rel="icon" href='./sunroad_logo.svg'/>
      <body className={`min-h-screen ${inter.className}`}>
      <Header/>
          {children}
          <Footer/>
          </body>
    </html>
  );
}

