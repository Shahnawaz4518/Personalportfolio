import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahnawaz Khan - MERN Stack Developer",
  description: "Personal portfolio of Shahnawaz Khan, a final-year Computer Engineering student passionate about MERN stack development, coding, and innovation.",
  keywords: ["MERN Stack", "React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Computer Engineering", "Web Developer"],
  authors: [{ name: "Shahnawaz Khan" }],
  openGraph: {
    title: "Shahnawaz Khan - MERN Stack Developer",
    description: "Personal portfolio showcasing projects and skills in MERN stack development and computer engineering",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahnawaz Khan - MERN Stack Developer",
    description: "Personal portfolio showcasing projects and skills in MERN stack development and computer engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
