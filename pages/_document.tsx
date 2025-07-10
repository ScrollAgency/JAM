import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				{/* Script LocalizeJS avec la nouvelle clé et limitation aux langues français et anglais */}
				<script src="https://global.localizecdn.com/localize.js"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","getSourceLanguage","detectLanguage","getAvailableLanguages","setWidgetLanguages","hideLanguagesInWidget","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}})(window);
							Localize.initialize({
								key: 'lr6dZKfR5aBxR',
								rememberLanguage: true,
								languages: ['fr', 'en']
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
