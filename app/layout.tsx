import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://techwrizz.netlify.app"),

	title: "TechWrizz Portfolio",
	authors: {
		name: "TechWrzz",
	},

	description:
		"Based in Lagos, Nigeria I'm a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Daily Vote",
		description:
			"Based in Lagos, Nigeria I'm a Fullstack developer passionate about building a modern web application that users love.",
		url: "https://techwrizz.netlify.app",
		siteName: "Daily Vote",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};
;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space.className}>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
