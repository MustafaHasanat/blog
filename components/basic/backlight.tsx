"use client";

import { GlobalContext } from "@/libs/context/global-context";
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
                width: "100vw",
                height: "100vh",
                zIndex: modalIsOpen ? 100 : -100,
                backgroundColor: modalIsOpen
                    ? theme.palette.neutral.dark
                    : "transparent",
                top: "0",
                left: "translateX(-50%) translateY(-50%)",
                opacity: 0.7,
                border: "none",
            }}
        />
    );
};

export default Backlight;
