import { NextAppProvider } from "@toolpad/core/nextjs";
import { AppProps } from "next/app";

export function AppSandbox({ Component, pageProps }: AppProps) {
	return (
		<NextAppProvider
		// navigation={NAVIGATION}
		// theme={theme}
		// branding={BRANDING}
		// router={router}
		// authentication={AUTHENTICATION}
		// session={session}
		>
			<Component {...pageProps} />
		</NextAppProvider>
	);
}
