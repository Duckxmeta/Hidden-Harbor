import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import SchemaOrg from "@/components/SchemaOrg";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiddenharbormarina.stellarims.com'),
  title: {
    default: "Hidden Harbor Marina | Center Hill Lake Boat Rentals, Cabins & Slips",
    template: "%s | Hidden Harbor Marina - Center Hill Lake"
  },
  description: "Hidden Harbor Marina on Center Hill Lake in Smithville, TN offers pontoon, houseboat, deck boat, and fishing boat rentals, cabins, camping, covered boat slips, and marine fuel.",
  keywords: ["Hidden Harbor Marina", "Center Hill Lake boat rentals", "Smithville TN marina", "Center Hill Lake cabins", "houseboat rentals Center Hill Lake", "pontoon rentals Smithville TN"],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  authors: [{ name: "Hidden Harbor Marina" }],
  creator: "Hidden Harbor Marina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiddenharbormarina.stellarims.com",
    title: "Hidden Harbor Marina | Center Hill Lake Boat Rentals, Cabins & Slips",
    description: "Your quiet cove on Center Hill Lake. Pontoon, houseboat, and fishing boat rentals, cabins, campsites, and covered slips in Smithville, TN.",
    siteName: "Hidden Harbor Marina",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Hidden Harbor Marina on Center Hill Lake in Smithville, Tennessee",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="font-sans bg-cream-100 text-lake-900 antialiased min-h-screen flex flex-col selection:bg-sand-300 selection:text-lake-950">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
