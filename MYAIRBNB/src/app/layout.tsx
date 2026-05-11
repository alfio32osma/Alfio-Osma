import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";
import AppBottomNavigation from "@/components/layout/AppBottomNavigation";
import AppFooter from "@/components/layout/AppFooter";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Explorar | Airbnb Clone",
  description: "Interfaz de exploracion inspirada en Airbnb construida con Next.js"
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="es">
      <body className={`${nunitoSans.variable} antialiased pb-20`}>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <AppFooter />
        </div>
        <AppBottomNavigation />
      </body>
    </html>
  );
};

export default RootLayout;