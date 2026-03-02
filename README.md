# Göttl Hof Webpage

Ein minimalistischer, aber hochwertiger Astro-Auftritt für den Familienbetrieb Göttl Hof aus Niederbayern.
Die Seite ist aktuell mit Platzhalter-Texten und -Bildern befüllt und soll später um echte Inhalte, Fotos und
Blogbeiträge ergänzt werden. Ziel: freundlich, clean, modern – mit Fokus auf Kontaktmöglichkeiten.

## ✨ Features

- **Astro + Tailwind-ähnlicher Utility-Look** (rein mit CSS umgesetzt, keine externe Runtime)
- Hero-Sektion mit großem Claim und Call-to-Action
- Kennzahlen, Leistungs- und Galerie-Abschnitte
- Vorbereitete Blog-Karten (Dummy-Daten)
- Kontaktbereich inkl. Formular-Platzhalter und Highlight-Fläche
- Responsives Layout (ab ~320 px Breite getestet)

## 🗂 Projektstruktur

```text
/
├── public/           # statische Assets (Favicons etc.)
├── src/
│   ├── assets/       # Logos, Illustrationen
│   ├── components/   # (kann erweitert werden)
│   ├── layouts/      # Basis-Layout mit globaler Typo & Farben
│   └── pages/        # Aktuell nur index.astro
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## 🧞 Befehle

| Command         | Beschreibung                                  |
| --------------- | ---------------------------------------------- |
| `npm install`   | Dependencies installieren                      |
| `npm run dev`   | Lokaler Dev-Server (http://localhost:4321)     |
| `npm run build` | Produktion-Build nach `dist/`                  |
| `npm run preview` | Gebauten Stand lokal testen                  |

## 🚀 Deployment

Empfohlen für den kostenlosen Betrieb: **GitHub Pages**, **Cloudflare Pages** oder **Netlify**.
Der Build ist statisch (`astro build`), daher einfach den `dist`-Ordner veröffentlichen.

## 🔜 TODO / Nächste Schritte

- Echte Texte (Über uns, Leistungen, Blogposts) einpflegen
- Original-Fotos austauschen
- Kontaktformular mit gewünschtem Dienst (Formspree, Netlify, eigenes Backend) verbinden
- Domain `goettl-agrar.de` oder alternative Subdomain auf das Hosting zeigen

Happy farming 🌾🐄
