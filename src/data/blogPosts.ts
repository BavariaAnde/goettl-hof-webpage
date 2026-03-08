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
		heroImage: "/images/hof-panorama-sommer.webp",
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
		heroImage: "/images/kuh-mit-kalb.jpg",
		heroAlt: "Auszubildende mit Kuh im Stall",
		content: [
			{
				paragraphs: [
					"Wir haben dieses Jahr wieder unzählige Mails und Gespräche geführt. Danke an alle, die sich vorgestellt haben – es freut uns, wie viel Motivation es in der Landwirtschaft gibt.",
					"Die Plätze für 2026 sind vergeben. Wir haben uns für zwei Personen entschieden, die schon Praktika bei uns gemacht haben."
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
		slug: "neue-technik-felder",
		title: "Neue Technik für die Felder",
		date: "05. Dezember 2025",
		category: "Maschinen",
		readTime: "2 Min.",
		status: "Live",
		summary: "Warum der neue Schwader & die Drillkombi unseren Alltag erleichtern.",
		heroImage: "/images/fendt-grubern.webp",
		heroAlt: "Fendt beim Grubbern auf dem Feld",
		content: [
			{
				paragraphs: [
					"Wir haben investiert: ein moderner Schwader und eine Gaspardo Drillkombi sind eingezogen. Beide Geräte haben wir ausgiebig getestet und direkt bei Nachbarn eingesetzt.",
					"Die breiteren Arbeitsbreiten sparen uns Fahrzeit, schonen den Boden und liefern sauberere Schwadhaufen – weniger Futterverlust, mehr Ruhe im Ablauf."
				]
			},
			{
				heading: "Wichtig war uns",
				list: [
					"Einfache Wartung, weil wir vieles selbst schrauben",
					"Passend für unsere Hanglagen",
					"Schnell umrüstbar, wenn ein Nachbar spontan Hilfe braucht"
				],
				paragraphs: [
					"Wer mitfahren will oder Maschinenunterstützung braucht – meldet euch."
				]
			}
		]
	}
];
