import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Blend Studios — Premium Digital Branding Agency",
  description:
    "TBS helps construction, architecture & product brands grow through motion graphics, CGI, websites and campaigns. Based in Pune, India.",
  keywords: [
    "digital branding agency Pune",
    "motion graphics India",
    "CGI branding",
    "social media agency",
    "construction brand marketing",
    "architecture branding",
    "Tech Blend Studios",
  ],
  openGraph: {
    title: "Tech Blend Studios — Premium Digital Branding Agency",
    description:
      "We build brands that drive Retention, Revenue & Conversions.",
    url: "https://techblendstudios.com",
    siteName: "Tech Blend Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blend Studios",
    description: "Premium digital branding for serious brands.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
