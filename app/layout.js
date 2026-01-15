import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/newl.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          {/* Main theme provider for the entire application */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark" // Changed to ensure dark mode is the default
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* Footer Section */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                {" "}
                {/* Improved text color */}
                <p>Made by Yash Malik</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
