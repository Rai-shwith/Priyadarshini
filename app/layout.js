import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { NotificationProvider } from "@/context/NotificationContext";
import Background from "@/components/Background";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Priyadarshini English Medium School",
  icons: {
    icon: "/images/logo.png",
  },
  description:
    "The mission of P.E.M.H.P.S is to create a better future for all children. We achieve this by maximizing opportunities for children through holistic, values-based education of the highest quality and through initiatives that promote unity and meaningful social action for development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <NotificationProvider>
            <Background>
              {children}
              <ScrollToTop />
            </Background>
          </NotificationProvider>
        </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}
