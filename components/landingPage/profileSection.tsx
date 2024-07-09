"use client";

import useLocale from "@/hooks/useLocale";
import { Box, Stack, Typography } from "@mui/material";
import { NextComponentType } from "next";
import IonicAvatar from "./ionicAvatar";
import Hexagons from "../shared/hexagons";

interface Props {}

const ProfileSection: NextComponentType<Props> = ({}) => {
    const { getDictLocales } = useLocale();
    const { blog } = getDictLocales();

    return (
        <Box
            component="section"
            width="100%"
            height={{ mobile: "100vh", laptop: "60vh" }}
            sx={{
                display: "grid",
                gridTemplateColumns: { mobile: "1fr", laptop: "2fr 1fr" },
                gridTemplateRows: { mobile: "1fr 1fr", laptop: "1fr" },
            }}
        >
            <Stack
                justifyContent="space-evenly"
                sx={{
                    height: "100%",
                }}
            >
                <Typography variant="h2">{blog.profile.name}</Typography>
                <Typography
                    variant="h5"
                    letterSpacing={3}
                    sx={{ opacity: 0.7 }}
                >
                    {blog.profile.role}
                </Typography>
                <Hexagons
                    hexagonSize={{
                        mobile: 30,
                        tablet: 40,
                        laptop: 80,
                        desktop: 90,
                    }}
                />
            </Stack>

            <IonicAvatar scale={0.9} />
        </Box>
    );
};

export default ProfileSection;
