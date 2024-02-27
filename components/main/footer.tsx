"use client";

import {
    Box,
    Button,
    Container,
    Divider,
    Link,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import Hexagons from "../shared/hexagons";
import useLocale from "@/hooks/useLocale";
import constants from "@/libs/constants";
import Image from "next/image";

const Footer = ({}) => {
    const { getDictLocales } = useLocale();
    const { footer } = getDictLocales();
    const theme = useTheme();

    const footerTitle = (text: string) => (
        <Typography variant="h3" mb={7}>
            {text}
        </Typography>
    );

    return (
        <Box
            component="footer"
            sx={{
                minWidth: "100%",
                mt: 3,
            }}
        >
            <Divider />
            <Container
                sx={{
                    mt: 3,
                    p: 5,
                }}
            >
                <Box
                    display="grid"
                    gridTemplateColumns={{ mobile: "1fr", tablet: "1fr 1fr" }}
                    gridTemplateRows={{ mobile: "3fr", tablet: "1fr 1fr" }}
                    columnGap={5}
                    rowGap={{mobile: 10, tablet: 5}}
                    sx={{
                        width: "100%",
                    }}
                >
                    <Container>
                        {footerTitle(footer.profiles)}
                        <Hexagons
                            hexagonSize={{
                                mobile: 30,
                                tablet: 40,
                                laptop: 80,
                                desktop: 80,
                            }}
                        />
                    </Container>

                    <Container>
                        {footerTitle(footer.quickLinks)}

                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="start"
                            alignItems="start"
                            gap={2}
                        >
                            {constants.footerQuickLinks.map(
                                ({ title, url }, index) => (
                                    <Link
                                        href={url}
                                        key={`footer quick link number: ${index}`}
                                    >
                                        <Button
                                            sx={{
                                                fontSize: {
                                                    mobile: 10,
                                                    tablet: 15,
                                                    laptop: 20,
                                                },
                                                p: {
                                                    mobile: "10px 50px",
                                                    tablet: "10px 50px",
                                                    laptop: "10px 10px",
                                                },
                                            }}
                                        >
                                            <Typography letterSpacing={2}>
                                                {footer.quickLinksTitles[title]}
                                            </Typography>
                                        </Button>
                                    </Link>
                                )
                            )}
                        </Stack>
                    </Container>

                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            gridColumn: { mobile: "span 1", tablet: "span 2" },
                        }}
                    >
                        <Typography letterSpacing={2} variant="h5">
                            {footer.quote}
                        </Typography>

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
                                width: { mobile: "50%", tablet: "15%" },
                                aspectRatio: "3 / 1",
                                margin: 3,
                                transition: "0.3 ease",

                                "&:hover": {
                                    transform: "scale(1.2)",
                                },
                            }}
                        >
                            <Image
                                src="/icons/bmc-slogan-logo.png"
                                alt="bmc-icon"
                                fill={true}
                                style={{
                                    padding: "0 30px",
                                    borderRadius: "10px",
                                    objectFit: "contain",
                                    backgroundColor:
                                        theme.palette.neutral.light,
                                }}
                            />
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
