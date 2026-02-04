import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import ErrorReporter from "../components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Aaditya Saxena | DevOps & Cloud Engineer",
  description: "Personal portfolio of Aaditya Saxena - Pre final year B.Tech Computer Science student specializing in Cloud Computing and Automation. DevOps and Cloud enthusiast with expertise in AWS, Azure, GCP, Docker, Kubernetes, and Terraform.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Portfolio"],
  authors: [{ name: "Aaditya Saxena" }],
  openGraph: {
    title: "Aaditya Saxena | DevOps & Cloud Engineer",
    description: "Pre final year B.Tech CS student specializing in Cloud Computing and Automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="95f49123-6a25-42cd-9cda-59246cc4572c"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
