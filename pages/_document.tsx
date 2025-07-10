import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				{/* Script Weglot - français comme langue principale, anglais comme langues secondaires */}
				<script
					type="text/javascript"
					src="https://cdn.weglot.com/weglot.min.js"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							Weglot.initialize({
								api_key: 'wg_7a994a95d8a52ee847d1d76f13c919c67',
								originalLanguage: 'fr',
								destinationLanguages: ['en', 'es'],
								autoSwitch: false
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
