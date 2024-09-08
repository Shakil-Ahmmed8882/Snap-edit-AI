import type { Metadata } from "next";

import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'



const IBMFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "SnapEdit || AI",
  description: "AI-Powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
        appearance={
          
          { layout: {
            socialButtonsPlacement: 'bottom',
            socialButtonsVariant: 'iconButton',
            termsPageUrl: 'https://clerk.com/terms'
          },
          variables:{
            colorPrimary: "#000000"
          }
        }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased flex", IBMFont.variable)}>
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
