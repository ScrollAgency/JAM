import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				{/* Script LocalizeJS avec configuration complète */}
				<script src="https://global.localizecdn.com/localize.js"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","getSourceLanguage","detectLanguage","getAvailableLanguages","setWidgetLanguages","hideLanguagesInWidget","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}})(window);
							Localize.initialize({
								key: 'svsjYf6tVXtrw',
								rememberLanguage: true,
							});
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
