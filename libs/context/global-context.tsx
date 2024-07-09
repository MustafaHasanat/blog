"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import getDesignTokens from "@/libs/styles/theme";

export const GlobalContext = createContext({
    toggleColorMode: () => {},
    modalIsOpen: false,
    toggleModalIsOpen: () => {},
    headerIsVisible: false,
    toggleHeaderIsVisible: () => {},
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("dark");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [headerIsVisible, setHeaderIsVisible] = useState(false);

    const globalProvider = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
            modalIsOpen,
            toggleModalIsOpen: () => {
                setModalIsOpen(prev => !prev);
            },
            headerIsVisible,
            toggleHeaderIsVisible: () => {
                setHeaderIsVisible(prev => !prev);
            },
        }),
        [mode, setMode, modalIsOpen, headerIsVisible]
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <GlobalContext.Provider value={globalProvider}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </GlobalContext.Provider>
    );
}
