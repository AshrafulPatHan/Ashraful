import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Providers from "@/redux/Provider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashraful Pathan | MERN Stack & React Developer",
  description:
    "Hi, I am Ashraful Pathan — a MERN Stack Developer skilled in React.js, Node.js, Express.js, and MongoDB. I build dynamic and responsive web applications.",
  keywords: [
    "Ashraful Pathan",
    "MERN Stack Developer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Web Developer Bangladesh",
    "Portfolio of Ashraful",
    "Next.js Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Ashraful Pathan", url: "https://ashraful.top" }],
  openGraph: {
    title: "Ashraful Pathan | MERN Stack Developer",
    description:
      "MERN Stack developer portfolio of Ashraful Pathan — specialized in React, Node.js, Express, MongoDB, and TypeScript. Clean, functional, and professional web development.",
    url: "https://ashraful.top",
    siteName: "Ashraful Pathan",
    images: [
      {
        url: "https://i.ibb.co/k6DbSRLN/web.png",
        width: 1200,
        height: 630,
        alt: "Ashraful Pathan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ashraful.top",
  },
  robots: "index, follow",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
      <Script 
      async 
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XN9FM8RRQ3');
        `}
      </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <Theme>
            <Toaster position="top-center" />
            {children}
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
