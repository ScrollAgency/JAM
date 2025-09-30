import React, { useEffect, useMemo, useState } from "react";

export interface WeglotSelectorProps {
	// Langues disponibles (codes ISO: ex 'fr', 'en')
	languages?: string[];
	// Libellés à afficher pour chaque langue; si absent, on affiche le code
	labels?: Record<string, string>;
	// Langue par défaut si Weglot n'est pas dispo
	defaultLanguage?: string;
	// Style simple
	className?: string;
	// Event: renvoie { code, label }
	onLanguageChange?: (lang: { code: string; label: string }) => void;
}

const FLAG_EMOJI: Record<string, string> = {
	fr: "🇫🇷",
	en: "🇬🇧",
	es: "🇪🇸",
	de: "🇩🇪",
	it: "🇮🇹",
	pt: "🇵🇹",
};

const WeglotSelector: React.FC<WeglotSelectorProps> = ({
	languages = ["fr", "en"],
	labels = { fr: "Français", en: "English" },
	defaultLanguage = "fr",
	className = "",
	onLanguageChange,
}) => {
	const weglot =
		(typeof window !== "undefined" && (window as any).Weglot) || null;

	const normalizedOptions = useMemo(() => {
		return languages.map((code) => ({
			code,
			label: labels[code] || code.toUpperCase(),
			flag: FLAG_EMOJI[code] || "",
		}));
	}, [languages, labels]);

	const getWeglotLanguage = (): string | null => {
		try {
			if (!weglot) return null;
			// Compat: certaines versions exposent getLanguage, d'autres _getCurrentLang
			return (
				weglot.getLanguage?.() ||
				weglot.getCurrentLang?.() ||
				weglot._getCurrentLang?.() ||
				null
			);
		} catch {
			return null;
		}
	};

	const [selected, setSelected] = useState<string>(defaultLanguage);

	// Synchronise l'état local avec Weglot au montage
	useEffect(() => {
		const current = getWeglotLanguage();
		if (current && current !== selected) setSelected(current);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Quand Weglot change en dehors (ex: widget natif), on écoute l'évènement si dispo
	useEffect(() => {
		if (!weglot?.on) return;
		const handler = () => {
			const current = getWeglotLanguage();
			if (current) setSelected(current);
		};
		try {
			weglot.on("languageChanged", handler);
			return () => weglot.off?.("languageChanged", handler);
		} catch {
			return;
		}
	}, [weglot]);

	const switchLanguage = (code: string) => {
		setSelected(code);
		// Notifie Plasmic
		onLanguageChange?.({ code, label: labels[code] || code.toUpperCase() });
		// Demande à Weglot si présent
		try {
			weglot?.switchTo?.(code);
			weglot?.setLanguage?.(code);
		} catch {}
	};

	return (
		<div className={className}>
			<select
				value={selected}
				onChange={(e) => switchLanguage(e.target.value)}
				style={{
					padding: "8px 12px",
					borderRadius: 8,
					border: "1px solid #e2e2e2",
					background: "#fff",
					fontSize: 14,
				}}
			>
				{normalizedOptions.map((opt) => (
					<option key={opt.code} value={opt.code}>
						{opt.flag ? `${opt.flag} ` : ""}
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default WeglotSelector;
