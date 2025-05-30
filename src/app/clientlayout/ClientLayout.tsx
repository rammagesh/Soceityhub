"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hidePaths = ["/user", "/admin"];
  const shouldHide = hidePaths.some((path) => pathname.startsWith(path));

  return (
    <>
      {!shouldHide && <Header />}
      <main>{children}</main>
      {!shouldHide && <Footer />}
    </>
  );
}
