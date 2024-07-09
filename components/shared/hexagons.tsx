import { Avatar, Box, Container, Link, Tooltip } from "@mui/material";
import { Fragment } from "react";
import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";
import constants from "@/libs/constants";
import useLocale from "@/hooks/useLocale";

interface Props {
    hexagonSize: {
        mobile: number;
        tablet: number;
        laptop: number;
        desktop: number;
    };
}

const Hexagons = ({ hexagonSize }: Props) => {
    const { getDictLocales } = useLocale();
    const { footer } = getDictLocales();

    const hexagonSizeConvertor = (value: number) => {
        const res: { [key: string]: number } = {};

        Object.entries(hexagonSize).forEach(([device, size]) => {
            res[device] = value * size;
        });

        return res;
    };

    const dimensions = (index: number = 1) => ({
        top: hexagonSizeConvertor(index),
        left: hexagonSizeConvertor(index),
        height: hexagonSizeConvertor(index),
    });

    return (
        <Container
            sx={{
                position: "relative",
                width: "100%",
                height: dimensions(2).height,
            }}
        >
            {constants.profiles.map(({ title, url, imagePath }, index) => {
                return (
                    <Fragment key={`profile item number: ${index}`}>
                        <Tooltip
                            title={
                                footer.profilesTitles[
                                    title as
                                        | "linkedin"
                                        | "calendly"
                                        | "coursera"
                                        | "github"
                                        | "leetcode"
                                        | "npm"
                                        | "udemy"
                                ]
                            }
                            arrow
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: dimensions(
                                        index % 2 === 0
                                            ? index % 2
                                            : (index % 2) - 0.55
                                    ).top,
                                    left: dimensions(
                                        index === 0 ? index : index * 0.8
                                    ).top,
                                    width: hexagonSize,
                                    height: hexagonSize,
                                    opacity: 0.7,
                                    transition: "0.3s ease",

                                    "&:hover": {
                                        opacity: 1,
                                        transform: "scale(1.2)",
                                    },
                                }}
                            >
                                <Link href={url} title={title} target="_blank">
                                    <HexagonRoundedIcon
                                        sx={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            color: "black",
                                            filter: `drop-shadow(-2px 2px 2px white)`,
                                        }}
                                    />

                                    <Avatar
                                        src={imagePath}
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform:
                                                "translateX(-50%) translateY(-50%)",
                                            width: "40%",
                                            height: "40%",
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Tooltip>
                    </Fragment>
                );
            })}
        </Container>
    );
};

export default Hexagons;
