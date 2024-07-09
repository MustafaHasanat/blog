import { Avatar, Box, keyframes } from "@mui/material";
import constants from "@/libs/constants";

const IonicAvatar = ({ scale = 0.9 }: { scale?: number }) => {
    const hidden = keyframes`
        0% { z-index: 5; }
        50% { z-index: 15; }
        100% { z-index: 5; }
    `;

    const orbital = (scale: number) => keyframes`
        0% { transform: rotateZ(0) translateX(${
            12 * scale
        }rem) rotateZ(0) rotateY(-70deg) rotateZ(0deg); }
        20% {
        }
        100% {
        transform: rotateZ(360deg) translateX(${
            12 * scale
        }rem) rotateZ(-360deg) rotateY(-70deg) rotateZ(180deg);
        }
        `;

    return (
        <Box
            sx={{
                m: "auto",
                position: "relative",
                zIndex: 30,
            }}
        >
            <Avatar
                src="images/avatar.jpg"
                alt="avatar"
                sx={{
                    zIndex: 10,
                    width: `${12 * scale}rem`,
                    height: `${12 * scale}rem`,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    boxShadow: `0px 0px ${35}px white}`,
                }}
            />

            {constants.avatarIons.map(
                (
                    { logo, color, position: { delay, rotateY, rotateZ } },
                    index
                ) => {
                    return (
                        <Box
                            key={`avatar ion: ${index}`}
                            sx={{
                                width: `${24 * scale}rem`,
                                height: `${24 * scale}rem`,
                                borderRadius: "50%",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transformStyle: "preserve-3d",
                                transform: `translateX(-50%) translateY(-50%) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg)`,
                                animation: `${hidden} 6s ease-in ${delay}s infinite`,
                            }}
                        >
                            <Avatar
                                src={logo}
                                alt="ion-image"
                                sx={{
                                    margin: "auto",
                                    animation: `${orbital(
                                        scale
                                    )} 6s linear ${delay}s infinite`,
                                    position: "absolute",
                                    borderRadius: "50%",
                                    width: `${3 * scale}rem`,
                                    height: `${3 * scale}rem`,
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    boxShadow: `0px 0px ${25}px ${color}`,
                                }}
                            />
                        </Box>
                    );
                }
            )}
        </Box>
    );
};

export default IonicAvatar;
