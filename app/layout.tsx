import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToastProvider from "./toast-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${GeistMono.variable} ${lora.variable} antialiased`}
      >
        <ToastProvider>
          <TooltipProvider>
            <Header />
            <main className="flex w-full h-min-screen max-w-[1380px] mx-auto flex-col items-center pb-16 px-8 bg-background sm:items-start font-sans">
              {children}
            </main>
            <Footer />
          </TooltipProvider>
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: "%s – Mads Borup Petersen",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/favicon.png" }],
  },
};
