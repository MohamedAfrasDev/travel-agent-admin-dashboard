import { Outfit, Geist, Poppins } from 'next/font/google';
import './globals.css';
import "flatpickr/dist/flatpickr.css";
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { cn } from "@/lib/utils";
// src/app/layout.tsx or wherever Flatpickr is used
import 'flatpickr/dist/flatpickr.css';
import { Toaster } from 'sonner';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
          <Toaster />

        </ThemeProvider>
      </body>
    </html>
  );
}
