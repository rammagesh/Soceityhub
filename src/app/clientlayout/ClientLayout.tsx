"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hidePaths = ["/user", "/admin", "/auth", "super-admin" , "/demo"];
  const shouldHide = pathname ? hidePaths.some((path) => pathname.startsWith(path)) : false;

  return (
    <ThemeProvider>
      <LanguageProvider>
        {!shouldHide && <Header />}
        {children}
        {!shouldHide && <Footer />}
        <PWAInstallPrompt />
      </LanguageProvider>
    </ThemeProvider>
  );
}
