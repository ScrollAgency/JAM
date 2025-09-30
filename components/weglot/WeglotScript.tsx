"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

function readPreferredLang(): string | null {
	try {
		const ls = window.localStorage.getItem("weglot_language");
		if (ls) return ls;
		const m = document.cookie.match(/(?:^|; )weglot_language=([^;]+)/);
		return m ? decodeURIComponent(m[1]) : null;
	} catch {
		return null;
	}
}

export default function WeglotScript() {
	const router = useRouter();

	useEffect(() => {
		// Evite d'injecter plusieurs fois
		if (document.getElementById("weglot-sdk")) return;

		const apiKey =
			process.env.NEXT_PUBLIC_WEGLOT_API_KEY ||
			"wg_d329a44473da57760d76b809239d58082";

		const script = document.createElement("script");
		script.id = "weglot-sdk";
		script.src = "https://cdn.weglot.com/weglot.min.js";
		script.async = true;
		script.onload = () => {
			// @ts-ignore
			if (typeof Weglot !== "undefined") {
				// @ts-ignore
				Weglot.initialize({
					api_key: apiKey,
					originalLanguage: "fr",
					destinationLanguages: ["en"],
					autoSwitch: false,
				});
				// Applique la langue préférée si présente
				try {
					const preferred = readPreferredLang();
					// @ts-ignore
					const current = Weglot.getLanguage?.() || Weglot.getCurrentLang?.();
					// @ts-ignore
					if (preferred && preferred !== current) Weglot.switchTo?.(preferred);
				} catch {}
			}
		};
		document.head.appendChild(script);
	}, []);

	useEffect(() => {
		const handleRoute = () => {
			try {
				// @ts-ignore
				const current =
					typeof Weglot !== "undefined" &&
					(Weglot.getLanguage?.() || Weglot.getCurrentLang?.());
				// @ts-ignore
				if (typeof Weglot !== "undefined" && current)
					Weglot.switchTo?.(current);
			} catch {}
		};

		router.events.on("routeChangeComplete", handleRoute);
		return () => {
			router.events.off("routeChangeComplete", handleRoute);
		};
	}, [router.events]);

	return null;
}
