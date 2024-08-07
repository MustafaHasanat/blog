"use client";

import useLocale from "@/hooks/useLocale";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const Body = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    const { getLocale } = useLocale();
    const locale = getLocale();

    return (
        <Box
            component="body"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundImage: `linear-gradient(${
                    theme.palette.primary.main +
                    (theme.palette.mode === "dark"
                        ? " -300px, #0d0910 500px"
                        : " -300px, #fdf9ff 500px")
                })`,
                minHeight: "100vh",
                p: "150px 0 0 0",
                m: 0,
                direction: locale === "en" ? "ltr" : "rtl",
            }}
        >
            {children}
        </Box>
    );
};

export default Body;
