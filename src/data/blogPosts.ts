export type BlogPost = {
	slug: string;
	title: string;
	date: string;
	category: string;
	readTime: string;
	status: string;
	summary: string;
	heroImage: string;
	heroAlt: string;
	content: Array<{
		heading?: string;
		paragraphs: string[];
		list?: string[];
	}>;
	cta?: {
		label: string;
		href: string;
	};
};

export const blogPosts: BlogPost[] = [
	{
		slug: "smaxtec-system",
		title: "Smaxtec – Sensoren für gesunde Kühe",
		date: "05. März 2026",
		category: "Hofleben",
		readTime: "4 Min.",
		status: "Live",
		summary: "Seit Sommer 2024 messen Smaxtec-Bolus-Sensoren Temperatur & Aktivität – Gesundheits- und Brunstüberwachung laufen jetzt digital.",
		heroImage: "/images/blog/smaxtec-system.webp",
		heroAlt: "Smaxtec Sensoren und Dashboard",
		content: [
			{
				paragraphs: [
					"Wir haben Smaxtec im Sommer 2024 eingeführt. Jeder Bolus misst Körpertemperatur und Aktivität direkt im Pansen – 24/7, ohne Stress für die Kuh.",
					"Das Dashboard meldet jede Abweichung sofort. Wir sind früher im Stall und behandeln, bevor aus einer Unruhe eine Euter- oder Lungenentzündung wird."
				]
			},
			{
				heading: "Was sich spürbar verbessert hat",
				list: [
					"Weniger akute Krankheitsfälle – wir greifen früh ein",
					"Brunstüberwachung sitzt – kaum Fehlbesamungen",
					"Abkalbezeitpunkt wird punktgenau angezeigt – wir geben gezielt Calcium gegen Milchfieber",
					"Schwangerschaften werden eng begleitet – Fehlgeburten sind selten geworden"
				],
				paragraphs: [
					"Kurz: weniger Stress für die Herde, mehr Ruhe für uns."
				]
			}
		],
		cta: {
			label: "Mehr zur Stall-Digitalisierung",
			href: "/#hof"
		}
	},
	{
		slug: "fendt-516-vario-gen3",
		title: "Neuer Fendt 516 Vario Gen3 im Einsatz",
		date: "18. Februar 2026",
		category: "Maschinen",
		readTime: "3 Min.",
		status: "Live",
		summary: "Weshalb der neue 516 Gen3 Kunstdünger präziser streut, wie uns die Spurführung hilft und warum der alte 516 S4 gehen musste.",
		heroImage: "/images/blog/fendt-516-vario-gen3.webp",
		heroAlt: "Fendt 516 Vario Gen3 auf dem Grünland",
		content: [
			{
				paragraphs: [
					"Der 516 Gen3 löst unseren 516 S4 ab. Hauptgrund: Kunstdünger streuen wir jetzt mit Spurführung exakt und sparen Überlappungen.",
					"Auf dem Feld legt er dank VarioGuide perfekte Bahnen hin – wir kontrollieren nur noch Ausbringmenge und Streutabelle."
				]
			},
			{
				heading: "Erste Eindrücke",
				list: [
					"Spurführung spart Überlappungen – Dünger & Diesel bleiben im Soll",
					"Terminal merkt sich Flächen & Einstellungen – Streupläne schneller abgearbeitet",
					"Digitales Serviceheft zeigt Betriebsstunden & Wartungen – wir planen Werkstattzeiten besser"
				],
				paragraphs: [
					"Wer den 516 live sehen will: meldet euch, Mitfahren bei Dünge- oder Transportarbeiten ist nach Absprache möglich."
				]
			}
		],
		cta: {
			label: "Maschinen anfragen",
			href: "/#hof"
		}
	}
];
