import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MindDocs | Smarter Notes, Smarter Thinking",
  description:
    "MindDocs combines AI and powerful PDF tools to help you take notes, highlight key ideas, and stay focused on what matters most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: "#6366F1",
          colorBackground: "#F0F4FF",
          colorInputBackground: "#FFFFFF",
          colorInputText: "#1E3A8A",
        },
        elements: {
          formButtonPrimary:
            "bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white",
          card: "bg-white shadow-md rounded-lg border border-blue-100",
          headerTitle: "text-indigo-600 font-semibold",
          headerSubtitle: "text-blue-500",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
              {children}
          </ConvexClientProvider>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
