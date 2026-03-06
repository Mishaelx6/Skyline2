import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login - Skilline",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* nested layout must not render html/body since root layout already does */}
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}> 
        {children}
      </div>
    </>
  );
}
