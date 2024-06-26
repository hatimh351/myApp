import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBar from '@/app/ui/NavBar'
import { CookiesProvider } from 'next-client-cookies/server';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-white justify-between`}>
        
        <NavBar/>
    <CookiesProvider>
		{children}
	  </CookiesProvider>
      </body>
    </html>
  );
}
