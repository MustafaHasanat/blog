import { GlobalContext } from "@/context/global-context";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useRef } from "react";
import { Transition } from "react-transition-group";

interface WildLineProps {
    transform: {
        inProp: boolean;
        tIn: string;
        tOut: string;
    };
    specifications: {
        color: string;
        top: string;
        strokeColor: any;
    };
}

const WildLine = ({
    transform: { tIn, tOut, inProp },
    specifications: { color, top, strokeColor },
}: WildLineProps) => {
    const theme = useTheme()
    const tablet = useMediaQuery(theme.breakpoints.up("tablet"));
    const nodeRef = useRef(null);
    const length = tablet ? 35 : 30;
    const height = 3;
    const edgeLength = 6;
    const duration = 700;
    const rightEdge = length - edgeLength;
    const halfThickness = height / 2;

    const transitionStyles: any = {
        entering: { transform: tIn },
        entered: { transform: tIn },
        exiting: { transform: tOut },
        exited: { transform: tOut },
    };

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
            {(state) => (
                <svg
                    width={length}
                    height={height}
                    ref={nodeRef}
                    style={{
                        position: "absolute",
                        filter: `drop-shadow(0px 0px 2px ${color})`,
                        top,
                        transition: `transform ${duration}ms ease-out`,
                        transform: tOut,
                        ...transitionStyles[state],
                    }}
                >
                    <path
                        d={`
                    M ${edgeLength} 0 
                    L ${rightEdge} 0 
                    L ${length} ${halfThickness}
                    L ${rightEdge} ${height}
                    L ${edgeLength} ${height} 
                    L 0 ${halfThickness}
                    Z
                `}
                        strokeWidth="1"
                        stroke={strokeColor}
                        fill={strokeColor}
                    />
                </svg>
            )}
        </Transition>
    );
};

const Burger = () => {
    const theme = useTheme();
    const { modalIsOpen, toggleModalIsOpen } = useContext(GlobalContext);

    const shadowColor =
        theme.palette.mode === "dark"
            ? theme.palette.neutral.light
            : theme.palette.primary.main;
    const strokeColor =
        theme.palette.mode === "dark"
            ? theme.palette.neutral.light
            : theme.palette.primary.main;
    const burgerGap = "7px";

    return (
        <Button
            sx={{
                position: "relative",
                minWidth: { mobile: 50, tablet: 70 },
                aspectRatio: { mobile: "1 / 1.2", tablet: "1 / 1" },
                flexDirection: "column",
                gap: burgerGap,
                borderRadius: "10px",
                overflow: "hidden",
                transition: "0.3s ease-out",
                p: 0,
            }}
            onClick={toggleModalIsOpen}
        >
            <WildLine
                specifications={{
                    color: shadowColor,
                    strokeColor,
                    top: "33%",
                }}
                transform={{
                    tIn: "translateY(-50%) translateX(200%)",
                    tOut: "translateY(-50%) translateX(0%)",
                    inProp: modalIsOpen,
                }}
            />
            <WildLine
                specifications={{
                    color: shadowColor,
                    strokeColor,
                    top: "50%",
                }}
                transform={{
                    tIn: "translateY(-50%) rotate(-45deg)",
                    tOut: "translateY(-50%) rotate(0deg)",
                    inProp: modalIsOpen,
                }}
            />
            <WildLine
                specifications={{
                    color: shadowColor,
                    strokeColor,
                    top: "50%",
                }}
                transform={{
                    tIn: "translateY(-50%) rotate(45deg) translateX(0%)",
                    tOut: "translateY(-50%) rotate(45deg) translateX(-250%)",
                    inProp: modalIsOpen,
                }}
            />
            <WildLine
                specifications={{
                    color: shadowColor,
                    strokeColor,
                    top: "66%",
                }}
                transform={{
                    tIn: "translateY(-50%) translateX(-200%)",
                    tOut: "translateY(-50%) translateX(0%)",
                    inProp: modalIsOpen,
                }}
            />
        </Button>
    );
};

export default Burger;
