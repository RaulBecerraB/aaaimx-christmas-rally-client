import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AAAIMX Christmas Rally",
  description: "aaaimx christmas rally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#165B33" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <main className="grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
