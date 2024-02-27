"use client";

import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const Body = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();

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
                p: "100px 0 0 0",
                m: 0,
            }}
        >
            {children}
        </Box>
    );
};

export default Body;
