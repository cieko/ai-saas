import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";

import { ModalProvider } from "@/components/modal-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next | AI saas",
    description: "AI Platform by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
