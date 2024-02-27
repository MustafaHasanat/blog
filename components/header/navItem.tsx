import { GlobalContext } from "@/context/global-context";
import useLocale from "@/hooks/useLocale";
import { Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface Props {
    item: {
        phrase: string;
        path: string;
    };
}

const NavItem = ({ item: { path, phrase } }: Props) => {
    const router = useRouter();
    const { toggleModalIsOpen } = useContext(GlobalContext);
    const { getDictLocales, getLocale } = useLocale();
    const { navItems } = getDictLocales();
    const theme = useTheme();
    const locale = getLocale();

    const newPath = locale === "ar" ? "ar/" + path : path;

    return (
        <Button
            sx={{
                m: 0,
                p: 2,
                width: { mobile: "100%", laptop: "70%" },
                fontSize: { mobile: 15, laptop: 20 },
                color: theme.palette.secondary.contrastText,
            }}
            onClick={() => {
                router.push(newPath);
                toggleModalIsOpen();
            }}
        >
            {navItems[phrase]}
        </Button>
    );
};

export default NavItem;
