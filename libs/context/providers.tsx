/* eslint-disable react-hooks/exhaustive-deps */

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { GlobalProvider } from "./global-context";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <GlobalProvider>{children}</GlobalProvider>
        </AppRouterCacheProvider>
    );
}
