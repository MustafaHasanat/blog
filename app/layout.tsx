import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export const metadata: Metadata = {
    title: "Mustafa Alhasanat",
    description: "Portfolio for Mustafa Alhasanat",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
