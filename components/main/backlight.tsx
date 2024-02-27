"use client";

import { GlobalContext } from "@/context/global-context";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";

const Backlight = () => {
    const { modalIsOpen, toggleModalIsOpen } = useContext(GlobalContext);
    const theme = useTheme();

    return (
        <Box
            component="button"
            onClick={toggleModalIsOpen}
            sx={{
                position: "fixed",
                height: "100vh",
                zIndex: modalIsOpen ? 100 : -100,
                backgroundColor: modalIsOpen
                    ? theme.palette.neutral.dark
                    : "transparent",
                top: 0,
                width: "100vw",
                opacity: 0.7,
                left: "translateX(-50%)",
                border: "none",
            }}
        />
    );
};

export default Backlight;
