import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import { Providers } from "../../context/providers";
import Body from "@/components/main/body";
import Backlight from "@/components/main/backlight";
import { Locale, i18n } from "@/libs/configs/i18n.config";

export const metadata: Metadata = {
    title: "Mustafa Alhasanat",
    description: "Portfolio for Mustafa Alhasanat",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    return (
        <html lang={params.locale}>
            <Providers>
                <Body>
                    <Backlight />
                    <Header />
                    {children}
                    <Footer />
                </Body>
            </Providers>
        </html>
    );
}
