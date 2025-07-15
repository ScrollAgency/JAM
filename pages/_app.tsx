import type { AppProps } from "next/app";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import CrispChat from "@/components/crispChat/CrispChat";
import WeglotScript from "@/components/weglot/WeglotScript";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
      <CrispChat/>
      <WeglotScript/>
		</>
	);
}

export default MyApp;
