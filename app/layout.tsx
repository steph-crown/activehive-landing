import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi-face",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ActiveHive — Nigeria's #1 Gym Management Platform",
    template: "%s | ActiveHive",
  },
  description:
    "ActiveHive is the all-in-one gym management platform built for Nigerian gym owners. Manage members, classes, staff, and payments from a single dashboard. Start your 14-day free trial today.",
  keywords: [
    "gym management software Nigeria",
    "gym management platform",
    "fitness business software",
    "gym member management",
    "gym class scheduling Nigeria",
    "gym owner software",
    "ActiveHive",
  ],
  authors: [{ name: "ActiveHive" }],
  creator: "ActiveHive",
  metadataBase: new URL("https://activehive.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/images/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://activehive.com",
    siteName: "ActiveHive",
    title: "ActiveHive — Nigeria's #1 Gym Management Platform",
    description:
      "The all-in-one platform for gym owners to manage members, classes, staff, and locations. Streamline your operations and grow your fitness business.",
    images: [
      {
        url: "/images/dashboard.png",
        width: 1200,
        height: 630,
        alt: "ActiveHive — Gym Management Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ActiveHive — Nigeria's #1 Gym Management Platform",
    description:
      "The all-in-one platform for gym owners to manage members, classes, staff, and locations.",
    images: ["/images/dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
