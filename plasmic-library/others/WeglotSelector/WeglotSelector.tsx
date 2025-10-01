import React, { useEffect, useMemo, useState, useRef } from "react";

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

function persistLang(code: string) {
	try {
		window.localStorage.setItem("weglot_language", code);
		document.cookie = `weglot_language=${encodeURIComponent(
			code
		)}; path=/; max-age=${60 * 60 * 24 * 365}`;
	} catch {}
}

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
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const menuRef = useRef<HTMLDivElement | null>(null);

	// Synchronise l'état local avec Weglot au montage
	useEffect(() => {
		try {
			const ls = window.localStorage.getItem("weglot_language");
			if (ls) setSelected(ls);
		} catch {}
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

	// Fermer au clic extérieur
	useEffect(() => {
		if (!isOpen) return;
		const onDocClick = (e: MouseEvent | TouchEvent) => {
			const target = e.target as Node | null;
			if (!target) return;
			const inButton = buttonRef.current?.contains(target);
			const inMenu = menuRef.current?.contains(target);
			if (!inButton && !inMenu) setIsOpen(false);
		};
		document.addEventListener("mousedown", onDocClick);
		document.addEventListener("touchstart", onDocClick, { passive: true });
		return () => {
			document.removeEventListener("mousedown", onDocClick);
			document.removeEventListener("touchstart", onDocClick);
		};
	}, [isOpen]);

	// Fermer avec Échap
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [isOpen]);

	const switchLanguage = (code: string) => {
		setSelected(code);
		persistLang(code);
		// Notifie Plasmic
		onLanguageChange?.({ code, label: labels[code] || code.toUpperCase() });
		// Demande à Weglot si présent
		try {
			weglot?.switchTo?.(code);
			weglot?.setLanguage?.(code);
		} catch {}
		setIsOpen(false);
	};

	return (
		<div
			className={className}
			style={{ position: "relative", display: "inline-block" }}
		>
			<button
				ref={buttonRef}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				onClick={() => setIsOpen((v) => !v)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setIsOpen((v) => !v);
					}
				}}
				style={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					padding: "8px 12px",
					borderRadius: 8,
					border: "1px solid #e2e2e2",
					background: "#fff",
					fontSize: 14,
					cursor: "pointer",
					minWidth: 120,
				}}
			>
				<span style={{ fontSize: 16 }}>{FLAG_EMOJI[selected] || ""}</span>
				<span>{labels[selected] || selected.toUpperCase()}</span>
				<span aria-hidden style={{ marginLeft: "auto", opacity: 0.6 }}>
					▾
				</span>
			</button>
			{isOpen && (
				<div
					ref={menuRef}
					role="listbox"
					aria-activedescendant={`weglot-opt-${selected}`}
					style={{
						position: "absolute",
						top: "100%",
						left: 0,
						zIndex: 1000,
						marginTop: 6,
						minWidth: "100%",
						maxHeight: 240,
						overflowY: "auto",
						background: "#fff",
						border: "1px solid #e2e2e2",
						borderRadius: 8,
						boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
					}}
				>
					{normalizedOptions.map((opt) => {
						const isActive = opt.code === selected;
						return (
							<div
								id={`weglot-opt-${opt.code}`}
								key={opt.code}
								role="option"
								aria-selected={isActive}
								onClick={() => switchLanguage(opt.code)}
								onKeyDown={(e) => {
									if (e.key === "Enter") switchLanguage(opt.code);
								}}
								tabIndex={0}
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									padding: "8px 12px",
									fontSize: 14,
									background: isActive ? "#f5f5f5" : "#fff",
									cursor: "pointer",
								}}
							>
								<span style={{ fontSize: 16 }}>
									{opt.flag ? `${opt.flag}` : ""}
								</span>
								<span>{opt.label}</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default WeglotSelector;
