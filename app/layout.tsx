import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const empiraFont = localFont({
  src: './fonts/empiralight.woff2',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={empiraFont.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
