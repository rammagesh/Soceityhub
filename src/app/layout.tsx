import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientlayout/ClientLayout";

export const metadata: Metadata = {
  title: "SocietyHub - Smart Society Management",
  description: "Connect with neighbors, manage visitors, track deliveries, and stay updated with society announcements - all in one place.",
  manifest: "/manifest.json",
  themeColor: "#10B981",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SocietyHub",
  },
  icons: {
    icon: "/logo/icon-192x192.png",
    apple: "/logo/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
