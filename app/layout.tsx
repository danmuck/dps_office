import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "./api/components/global/Header";
import GlobalFooter from "./api/components/global/Footer";
import {
	CssBaseline,
	InitColorSchemeScript,
	ThemeProvider,
	Box,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ModeSwitch from "./api/components/ModeSwitch";
import theme from "@/theme";

export const metadata: Metadata = {
	title: "dps_office",
	description: "daily assistant dashboard",
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<InitColorSchemeScript />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								minHeight: "100vh",
							}}
						>
							<GlobalHeader />
							<ModeSwitch />
							<Box component="main" sx={{ flexGrow: 1 }}>
								{props.children}
							</Box>
							<GlobalFooter />
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
