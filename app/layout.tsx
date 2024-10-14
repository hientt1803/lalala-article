import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import "@/styles/globals.scss";

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { cn } from "@/lib";
import { HOST_URL } from "@/utils";
import MainProvider from "./provider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const meta = {
  title: "LaLaLa - Inspiring Travel Blogs & Guides",
  description:
    "Discover inspiring travel stories, tips, and guides at LaLaLa Blog - Your source for travel ideas and advice.",
  image: `${HOST_URL}/assets/favicon/lalala-blog.svg`,
};

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL || "https://sb.lalala.travel/"),
  title: {
    template: "%s",
    default: meta.title,
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: HOST_URL,
    locale: "en-US",
    siteName: meta.title,
    type: "article",
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: `${HOST_URL}/`,
  },
  icons: {
    icon: [
      {
        url: meta.image,
        type: "image/png",
      },
      {
        url: meta.image,
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: meta.image,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: meta.image,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [meta.image],
    apple: [
      { url: meta.image },
      {
        url: meta.image,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: meta.image,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${HOST_URL}/manifest.json`,
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  appLinks: {
    web: {
      url: HOST_URL || "https://sb.lalala.travel/",
      should_fallback: true,
    },
  },
  archives: [HOST_URL || "https://sb.lalala.travel/"],
  assets: [`${HOST_URL}/assets` || "https://sb.lalala.travel//assets"],
  bookmarks: [HOST_URL || "https://sb.lalala.travel/"],
  category: "blogging",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "md:bg-white relative")}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
