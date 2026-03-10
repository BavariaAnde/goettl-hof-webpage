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
		summary: "Seit Sommer 2024 messen Smaxtec-Bolus-Sensoren Temperatur und Aktivität. So erkennen wir früher, wenn etwas nicht passt, und handeln rechtzeitig.",
		heroImage: "/images/blog/smaxtec-system.webp",
		heroAlt: "Smaxtec Sensoren und Dashboard",
		content: [
			{
				paragraphs: [
					"Wir haben Smaxtec im Sommer 2024 eingeführt. Jeder Bolus misst Körpertemperatur und Aktivität direkt im Pansen – rund um die Uhr, ohne Stress für die Kuh.",
					"Das Dashboard meldet Abweichungen früh. So sind wir schneller im Stall und behandeln, bevor es zu einer Euter- oder Lungenentzündung kommt."
				]
			},
			{
				heading: "Was sich für uns verbessert hat",
				list: [
					"Weniger akute Fälle, weil wir früher reagieren",
					"Brunst erkennen wir zuverlässiger",
					"Der Abkalbezeitpunkt ist besser planbar",
					"Schwangerschaften begleiten wir enger"
				],
				paragraphs: [
					"Kurz: weniger Stress für die Herde und mehr Ruhe im Ablauf."
				]
			}
		]
	},
	{
		slug: "fendt-516-vario-gen3",
		title: "Neuer Fendt 516 Vario Gen3 im Einsatz",
		date: "18. Februar 2026",
		category: "Maschinen",
		readTime: "3 Min.",
		status: "Live",
		summary: "Der neue 516 Gen3 streut präziser, fährt saubere Spuren und spart Überlappungen. So arbeiten wir effizienter auf dem Feld.",
		heroImage: "/images/blog/fendt-516-vario-gen3.webp",
		heroAlt: "Fendt 516 Vario Gen3 auf dem Grünland",
		content: [
			{
				paragraphs: [
					"Der 516 Gen3 löst unseren 516 S4 ab. Hauptgrund: Kunstdünger streuen wir jetzt mit Spurführung exakt und vermeiden Überlappungen.",
					"Auf dem Feld hält er die Spur automatisch. Wir konzentrieren uns auf Ausbringmenge und Streutabellen."
				]
			},
			{
				heading: "Erste Eindrücke im Alltag",
				list: [
					"Spurführung spart Dünger und Diesel",
					"Terminal merkt sich Flächen und Einstellungen",
					"Serviceheft zeigt Stunden und Wartungen übersichtlich"
				],
				paragraphs: [
					"Mitfahren bei Dünge- oder Transportarbeiten ist nach Absprache möglich."
				]
			}
		]
	}
];
