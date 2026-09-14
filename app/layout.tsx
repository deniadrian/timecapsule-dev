import type { Metadata } from "next"
import { Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "TimeCapsule Dev",
  description: "Send messages to your future self.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}