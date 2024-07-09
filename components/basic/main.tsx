"use client";

import { Container, Grid } from "@mui/material";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
    return (
        <Container
            component="main"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "100%",
                p: { mobile: "50px 0", laptop: "0 130px" },
                gap: 10,
            }}
        >
            {children}
        </Container>
    );
};

export default Main;
