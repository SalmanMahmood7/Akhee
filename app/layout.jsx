import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'], // Only load needed weights
});

export const metadata = {
  title: "Akhee",
  description: "Digital transformation and technology consulting services",
  icons: {
    icon: "/a-favicon.svg",
    shortcut: "/a-favicon.svg",
    apple: "/a-favicon.svg",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <TooltipProvider>
          <Providers>
            {children}
            <Toaster />
            <Sonner />
          </Providers>
        </TooltipProvider>
      </body>
    </html>
  );
}