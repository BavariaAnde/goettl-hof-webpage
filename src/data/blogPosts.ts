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
		slug: "hofchronik-2025",
		title: "Hofchronik 2025 – was sich alles getan hat",
		date: "12. Februar 2026",
		category: "Hofleben",
		readTime: "4 Min.",
		status: "Entwurf in Bearbeitung",
		summary: "Neue Silos, mehr Sensoren im Stall und warum wir auf Heu aus eigener Ernte setzen.",
		heroImage: "/images/blog/hofchronik-2025.webp",
		heroAlt: "Sommerlicher Blick über den Göttl Hof",
		content: [
			{
				paragraphs: [
					"2025 war für uns ein Jahr der ruhigen, aber spürbaren Veränderungen. Wir haben die Siloinfrastruktur erweitert, damit Heu und Maissilage sauber getrennt lagern können.",
					"Parallel dazu laufen jetzt an fast jedem Melkstand Sensoren mit, die Futteraufnahme und Aktivität überwachen. Weniger Rätselraten, mehr Klarheit, wenn eine Kuh ruhiger wird."
				]
			},
			{
				heading: "Was uns besonders geholfen hat",
				list: [
					"Heuernte wieder komplett in Eigenregie – kleine Chargen, kurze Wege",
					"Regelmäßige Abendrunden: Technik checken, Tiere beobachten, früh reagieren",
					"Offene Kommunikation im Team – jede Idee landet im gemeinsamen Notizbuch"
				],
				paragraphs: [
					"Es klingt banal, aber dieser Mix hat den Unterschied gemacht. Die Ruhe am Hof ist uns wichtiger als Rekorde, und 2025 war genau so ein Jahr."
				]
			},
			{
				heading: "Blick nach vorn",
				paragraphs: [
					"2026 steht im Zeichen der Ausbildung. Wir haben die Lehrbox im Stall modernisiert und ein paar alte Werkstattmaschinen ersetzt. Wer mit anpackt, soll funktionierendes Werkzeug vorfinden.",
					"Wenn dich das interessiert: unten verlinken wir den direkten Draht zu uns."
				]
			}
		],
		cta: {
			label: "Kontakt aufnehmen",
			href: "/#contact"
		}
	},
	{
		slug: "ausbildungsplaetze-2026-vergeben",
		title: "Ausbildungsplätze: 2026 vergeben, 2027 Warteliste",
		date: "28. Januar 2026",
		category: "Ausbildung",
		readTime: "3 Min.",
		status: "Veröffentlicht",
		summary: "Ein Blick hinter die Kulissen des Auswahlprozesses und was Bewerber erwarten können.",
		heroImage: "/images/blog/ausbildungsplaetze-2026.webp",
		heroAlt: "Auszubildende mit Kuh im Stall",
		content: [
			{
				paragraphs: [
					"Wir haben dieses Jahr wieder unzählige Mails und Gespräche geführt. Danke an alle, die sich vorgestellt haben – es freut uns, wie viel Motivation es in der Landwirtschaft gibt.",
					"Der Platz für 2026 ist vergeben. Wir haben uns für eine Person entschieden, die bereits ein Praktikum bei uns gemacht hat."
				]
			},
			{
				heading: "Wie geht’s weiter?",
				list: [
					"2027: Warteliste ist offen – kurze Mail mit Motivation reicht",
					"Schnuppern: Nach Absprache jederzeit möglich, am besten März–Mai",
					"Unterkunft: Wird individuell geklärt, wir haben einfache Zimmer am Hof"
				],
				paragraphs: [
					"Wir geben Rückmeldung, sobald wieder ein Platz frei ist. Wer auf die Liste möchte, meldet sich am besten direkt bei uns."
				]
			}
		],
		cta: {
			label: "Ausbildung anfragen",
			href: "/#ausbildung"
		}
	},

	{
		slug: "ausbildung-am-hof",
		title: "Ausbildung am Hof – Alltag & Perspektive",
		date: "02. März 2026",
		category: "Ausbildung",
		readTime: "4 Min.",
		status: "Live",
		summary: "Was Azubis bei uns lernen, wie der Wochenplan aussieht und warum wir auf einen Platz begrenzen.",
		heroImage: "/images/blog/ausbildung-alltag.webp",
		heroAlt: "Auszubildender prüft Sensoren im Stall",
		content: [
			{
				paragraphs: [
					"Ein Ausbildungsplatz, volle Aufmerksamkeit: Wer bei uns startet, läuft nicht einfach nebenher, sondern übernimmt feste Stall- und Feldaufgaben.",
					"Montag ist Technik-Check, Mittwoch Feldarbeit, am Wochenende Stallroutine – so bleibt genug Zeit zum Erklären und Ausprobieren."
				]
			},
			{
				heading: "Deine Stationen",
				list: [
					"Milchvieh: Fütterung, Gesundheits-Check, Sensor-Daten lesen",
					"Feld: Bodenbearbeitung, Drillkombi fahren, Silage begleiten",
					"Werkstatt: Winterservice & kleine Reparaturen"
				],
				paragraphs: [
					"Jede Station dokumentierst du – wir besprechen das wöchentlich und passen den Plan an."
				]
			}
		],
		cta: {
			label: "Ausbildung anfragen",
			href: "/#ausbildung"
		}
	},
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
			href: "/#maschinen"
		}
	},
];
