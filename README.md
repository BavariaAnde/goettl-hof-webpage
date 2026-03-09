# Göttl Hof Webpage

Astro-basierter Webauftritt für den Familienbetrieb Göttl Hof (Oberbubach/Roßbach). Fokus: klare Vorstellung des Hofes, Ansprechpartner, Ausbildung sowie dezente Blog-/News-Beiträge.

## ✨ Features

- Vollflächiger Hero mit CTA, Dark-Mode-Toggle (Desktop & Mobile sichtbar)
- Sektionen für Kennzahlen, Leistungen/Maschinen, Jahreszeiten, Ausbildung, FAQ und Besuch
- Galerie mit optimierten Bildern (sharp-pipeline)
- Blog-Karten auf der Startseite **plus eigene Detailseiten** unter `/blog/<slug>/`
- Blog-Übersicht unter `/blog` als öffentlich durchklickbare Liste
- Manifest + Favicons (SVG, PNG, ICO, Apple-Touch) für einheitliches Branding
- Reines Static-Site-Setup (Astro, kein Client-JS außer Dark-Mode-Helper)
- Optionales Self-Hosted Analytics-Setup über `ops/umami/` (Umami + Cloudflare Tunnel)

## 🗂 Projektstruktur

```text
/
├── public/
│   ├── favicon.* / apple-touch-icon.png / icon-*.png /
│   └── images/ …
├── src/
│   ├── data/blogPosts.ts   # zentrale Blog-Daten
│   ├── layouts/Layout.astro
│   └── pages/
│       ├── index.astro     # Landingpage
│       ├── blog/index.astro
│       └── blog/[slug].astro
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## 📝 Blog pflegen

1. `src/data/blogPosts.ts` anpassen – jeder Eintrag enthält Meta-Daten, heroImage, Textabschnitte und optionalen CTA.
2. Bilder liegen in `public/images/…` (SVG/PNG/WebP), bitte dort referenzieren (z.B. `/images/fendt-grubern.webp`).
3. Die Startseite und die Blog-Übersicht lesen automatisch alle Posts aus der Datei; „Mehr lesen“ zeigt auf `/blog/<slug>/`.

## 🧞 Befehle

| Command           | Beschreibung                                  |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Dependencies installieren                      |
| `npm run dev`     | Dev-Server (http://localhost:4321)             |
| `npm run build`   | Produktion-Build nach `dist/`                  |
| `npm run preview` | Build lokal testen                             |

## 🚀 Deployment

Ideal für GitHub Pages / Cloudflare Pages / Netlify. Build ist statisch (`astro build`) → fertigen `dist`-Ordner ausliefern. Domain `www.goettl-oberbubach.de` zeigt aufs GitHub Pages Repo.

Happy farming 🌾🐄


