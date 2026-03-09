# Umami Analytics – Göttl Hof

Self-hosted Analytics für www.goettl-oberbubach.de via Docker Compose + Cloudflare Tunnel.

## Setup (einmalig)

### 1. Cloudflare Tunnel anlegen
1. → [dash.cloudflare.com](https://dash.cloudflare.com) → Zero Trust → Networks → Tunnels → „Create tunnel"
2. Name: `umami-goettl`
3. Token kopieren → ins `.env` eintragen
4. Im Tunnel-Editor eine Public Hostname anlegen:
   - Subdomain: `stats` (ergibt z.B. `stats.goettl-oberbubach.de`)
   - Service: `http://umami:3000`

### 2. .env erstellen
```bash
cp .env.example .env
# Werte ausfüllen:
openssl rand -hex 24   # → POSTGRES_PASSWORD
openssl rand -hex 32   # → APP_SECRET
# CF_TUNNEL_TOKEN aus Schritt 1 eintragen
```

### 3. Stack starten
```bash
docker compose up -d
docker compose logs -f umami   # warten bis "ready"
```

### 4. Umami einrichten
1. Browser → `http://localhost:3000` (oder deine Subdomain)
2. Login: `admin` / `umami` → **Passwort sofort ändern!**
3. Settings → Websites → „Add website" → URL: `www.goettl-oberbubach.de`
4. Tracking-Script kopieren (sieht so aus):
   ```html
   <script async src="https://stats.goettl-oberbubach.de/script.js"
           data-website-id="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"></script>
   ```

### 5. Script in die Website einbauen
In `goettl-hof-webpage/src/layouts/Layout.astro` im `<head>`:
```html
<!-- Umami Analytics -->
<script async src="https://stats.goettl-oberbubach.de/script.js"
        data-website-id="DEINE-WEBSITE-ID"></script>
```
→ committen & pushen.

## Betrieb

```bash
docker compose pull && docker compose up -d   # Update
docker compose down                            # Stoppen
docker compose logs umami                      # Logs
```

Daten liegen in Docker Volume `umami-db-data` – bei Bedarf mit `pg_dump` sichern.
