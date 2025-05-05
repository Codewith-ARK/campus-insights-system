import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TopProgressBar from "@/components/ui/TopProgressBar";
import { Toaster, toast } from 'sonner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Campus Insights System",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${outfit.className}  antialiased`}
      >
        <Navbar />
        <Toaster 
        position="bottom-right"
        richColors={true}
        />
        <TopProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
