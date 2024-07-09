import "@/libs/styles/global.css";
import type { Metadata } from "next";
import Header from "@/components/basic/header";
import Footer from "@/components/basic/footer";
import { Providers } from "../../libs/context/providers";
import Body from "@/components/basic/body";
import Backlight from "@/components/basic/backlight";
import { Locale, i18n } from "@/libs/configs/i18n.config";
import Script from "next/script";

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

            <Script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></Script>
        </html>
    );
}
