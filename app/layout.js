import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { NotificationProvider } from "@/context/NotificationContext";
import Background from "@/components/Background";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Baloo_Tamma_2 } from "next/font/google";

const balooTamma2 = Baloo_Tamma_2({
  subsets: ["kannada", "latin"],
  weight: ["400", "500", "600", "700", "800"], // Available font weights
  variable: "--font-baloo-tamma",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "600",
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
        className={`${inter.variable} ${balooTamma2.variable} font-sans`}
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
