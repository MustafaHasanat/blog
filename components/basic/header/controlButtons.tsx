import { GlobalContext } from "@/libs/context/global-context";
import useLocale from "@/hooks/useLocale";
import constants from "@/libs/constants";
import { Button, Tooltip, useTheme } from "@mui/material";
import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import Image from "next/image";

const ControlButtons = () => {
    const transition = "0.3s ease-in";
    const theme = useTheme();
    const { toggleLocale, getLocale } = useLocale();
    const { toggleColorMode, modalIsOpen } = useContext(GlobalContext);

    return (
        <>
            <Tooltip title="Buy Me a Coffee" arrow>
                <Button
                    onClick={() =>
                        window.open(constants.links.bmcLink, "_blank")
                    }
                    sx={{
                        position: "relative",
                        p: {
                            mobile: "0",
                            tablet: "0 15px",
                        },
                        minWidth: { mobile: 30, tablet: 40 },
                        aspectRatio: "1 / 1",
                    }}
                >
                    <Image
                        src="/icons/bmc-logo.png"
                        alt="bmc-icon"
                        fill={true}
                        style={{
                            borderRadius: "10px",
                            backgroundColor: theme.palette.neutral.light,
                        }}
                    />
                </Button>
            </Tooltip>

            <Tooltip title={getLocale() === "en" ? "عربي" : "English"} arrow>
                <Button
                    onClick={() => {
                        toggleLocale();
                    }}
                    sx={{
                        width: {
                            mobile: 20,
                            tablet: 50,
                        },
                        minWidth: {
                            mobile: 20,
                            tablet: 50,
                        },
                        height: {
                            mobile: 40,
                            tablet: 50,
                        },
                        p: 0,
                    }}
                >
                    <TranslateIcon
                        sx={{
                            transition: "color " + transition,
                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.neutral.light
                                    : theme.palette.primary.main,
                        }}
                    />
                </Button>
            </Tooltip>

            <Tooltip
                title={
                    theme.palette.mode === "dark" ? "light theme" : "dark theme"
                }
                arrow
            >
                <Button
                    onClick={toggleColorMode}
                    sx={{
                        transition,
                        width: { mobile: 20, tablet: 50 },
                        minWidth: { mobile: 20, tablet: 50 },
                        height: { mobile: 40, tablet: 50 },
                        p: 0,
                    }}
                >
                    {theme.palette.mode === "dark" ? (
                        <LightModeIcon
                            sx={{
                                color: theme.palette.neutral.light,
                                transition,
                            }}
                        />
                    ) : (
                        <DarkModeIcon
                            sx={{
                                color: theme.palette.primary.main,
                                transition,
                            }}
                        />
                    )}
                </Button>
            </Tooltip>
        </>
    );
};

export default ControlButtons;
