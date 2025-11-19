import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Only1 Media PR - Strategic Public Relations & Brand Communications",
  description: "Elevate your brand with strategic PR. We craft compelling narratives, secure media coverage, and deliver measurable results for forward-thinking companies.",
  keywords: "public relations, PR agency, media relations, crisis management, brand strategy, digital PR, thought leadership, PR campaigns",
  authors: [{ name: "Only1 Media PR" }],
  openGraph: {
    title: "Only1 Media PR - Strategic Public Relations",
    description: "Elevate your brand with strategic PR. We craft compelling narratives, secure media coverage, and deliver measurable results.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Only1 Media PR - Strategic Public Relations",
    description: "Elevate your brand with strategic PR. We craft compelling narratives, secure media coverage, and deliver measurable results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      
        {}
      
        {/* PHOENIX_EDITOR_INJECTION_START */}
        {(process.env.NODE_ENV === 'development' ||
          process.env.NEXT_PUBLIC_ENABLE_PHOENIX_EDITOR === 'true') && (
          <>
            <link rel="stylesheet" href="/phoenix-editor/helper.css?v=1763542455922" />
            <script
              src="/phoenix-editor/sourceMapTracker.js?v=1763542455922"
              data-phoenix-sourcemap="true"
              defer
            />
            <script
              src="/phoenix-editor/helper.js?v=1763542455922"
              data-phoenix-enabled="true"
              defer
            />
            <script
              src="/phoenix-editor/visualEditExtension.js?v=1763542455922"
              data-phoenix-visual-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/contextIntegration.js?v=1763542455922"
              data-phoenix-context="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineTextEditor.js?v=1763542455922"
              data-phoenix-text-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineClassEditor.js?v=1763542455922"
              data-phoenix-class-edit="true"
              defer
            />
          </>
        )}
        {/* PHOENIX_EDITOR_INJECTION_END */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ZyloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                {children}
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </ThemeProvider>
          </ZyloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
