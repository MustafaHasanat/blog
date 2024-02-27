"use client";

import { AppBar, Container, Grid } from "@mui/material";
import { useContext } from "react";
import Burger from "../header/burger";
import { GlobalContext } from "@/context/global-context";
import ControlButtons from "../header/controlButtons";
import constants from "@/libs/constants";

import useLocale from "@/hooks/useLocale";
import NavItem from "../header/navItem";

const Header = () => {
    const transition = "0.5s ease-out";
    const { modalIsOpen } = useContext(GlobalContext);
    const { getDictLocales } = useLocale();
    const { navItems } = getDictLocales();

    return (
        <AppBar
            position="fixed"
            component="header"
            sx={{
                boxShadow: 0,
                bgcolor: "transparent",
                backgroundImage: "none",
                transition,
                top: modalIsOpen ? "10vh" : 20,
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",
                zIndex: 100,
                width: "fit-content",
            }}
        >
            <Container
                maxWidth="desktop"
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition,
                    width: modalIsOpen
                        ? { mobile: "70vw", desktop: "30vw" }
                        : "95vw",
                    height: modalIsOpen ? "80vh" : 75,
                    borderRadius: 5,
                    overflow: "hidden",
                    p: 3,
                    bgcolor:
                        theme.palette.mode === "light"
                            ? "#ffffff66"
                            : "#00000066",
                    backdropFilter: "blur(24px)",
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow:
                        theme.palette.mode === "light"
                            ? `0 0 1px #55a6f619, 1px 1.5px 2px -1px #55a6f626, 4px 4px 12px -2.5px #55a6f626`
                            : "0 0 1px #1d023bb2, 1px 1.5px 2px -1px #1d023bb2, 4px 4px 12px -2.5px #1d023bb2",
                })}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    overflow="hidden"
                    sx={{
                        transition,
                    }}
                >
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        height="10vh"
                    >
                        <Grid
                            container
                            item
                            direction="row"
                            alignItems="center"
                            width={modalIsOpen ? 0 : "70%"}
                            height="10vh"
                            gap={3}
                            sx={{
                                overflow: "hidden",
                                flexWrap: "nowrap",
                                transition,
                            }}
                        >
                            <ControlButtons />
                        </Grid>

                        <Burger />
                    </Grid>

                    <Grid
                        container
                        item
                        direction="column"
                        alignItems="center"
                        justifyContent="space-evenly"
                        sx={{
                            transition,
                            height: modalIsOpen ? "60vh" : "0vh",
                            width: "100%",
                            overflow: "hidden",
                            flexWrap: "nowrap",
                        }}
                    >
                        {constants.navItems.map((item, index) => (
                            <NavItem
                                item={item}
                                key={`${navItems[item.phrase]}+${index}`}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default Header;
