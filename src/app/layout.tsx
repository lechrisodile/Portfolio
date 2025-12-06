import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "../components/theme-provider";
import { Navigation } from "../components/navigation";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christan Tchayep",
  description: "Industrial computing engineer specialized in automation, embedded systems, and IoT solutions.",
  icons: {
    icon: "images/pc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} ${geistMono.className}`}>
      {/* AJOUT DE: suppressHydrationWarning 
        Cela empêche les erreurs causées par les extensions comme Grammarly, 
        Dark Reader ou les gestionnaires de mots de passe.
      */}
      <body 
        className="font-sans antialiased" 
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}