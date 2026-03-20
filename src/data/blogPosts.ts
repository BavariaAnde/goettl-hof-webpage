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
	}
];
