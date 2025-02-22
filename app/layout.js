import "./globals.css";
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
    "Priyadarshini English Medium School empowers children with holistic, values-based education, fostering unity and social action for a brighter future.",
  alternates: {
    canonical: "https://www.priyadarshini.ashwithrai.me/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={`${inter.variable} ${balooTamma2.variable} font-sans`}
      >
          <NotificationProvider>
            <Background>
              {children}
              <ScrollToTop />
            </Background>
          </NotificationProvider>
        <Footer />
      </body>
    </html>
  );
}
