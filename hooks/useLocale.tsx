"use client";

import { Locale } from "@/libs/configs/i18n.config";
import ar from "@/libs/locales/ar";
import en from "@/libs/locales/en";
import { usePathname, useRouter } from "next/navigation";

const redirectedPathName = (locale: string, pathname: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
};

const getLocale = (pathname: string): Locale => {
    if (!pathname) return "en";
    const segments = pathname.split("/");
    return segments[1] as Locale;
};

const getDictLocales = (locale: Locale): typeof ar | typeof en =>
    locale === "ar" ? ar : en;

export default function useLocale() {
    const pathName = usePathname();
    const router = useRouter();

    return {
        getLocale: () => getLocale(pathName),
        getDictLocales: () => getDictLocales(getLocale(pathName)),
        toggleLocale: (locale?: Locale) => {
            const newPath = redirectedPathName(
                locale ? locale : getLocale(pathName) === "en" ? "ar" : "en",
                pathName
            );

            router.push(newPath);
        },
    };
}
