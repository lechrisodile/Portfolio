import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ThemeProvider from "../components/theme-provider"
import "../styles/navigation.styles.ts"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Utilise la className retournée sur <html> ou <body>
export const fontClasses = `${_geist.className} ${_geistMono.className}`

export const metadata: Metadata = {
  title: "Industrial IT Portfolio - Christan T.",
  description: "Portfolio of a third-year Industrial IT student",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontClasses}>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
