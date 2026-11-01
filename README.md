# Gruhapravesam invitation – Jaya Sri

A static, animated Telugu house-warming invitation (no build step), ready for Vercel.

## Edit the details
Open `script.js` and change the `CONFIG` block at the top:
- `muhurtham` – date & time (`"YYYY-MM-DDTHH:MM"`), drives the date tiles, countdown and calendar file
- `lagnam`, `venueName`, `address`
- `whatsapp` – optional RSVP number with country code (e.g. `919876543210`)
- `rituals` – the day's schedule

The menu (`MENU`) and the banana-leaf layout (`LEAF`) are right below it.

## Preview locally
```
python3 -m http.server 5173
```
then open http://localhost:5173 (or just open index.html directly).

## Deploy to Vercel
- **Website:** push this folder to a GitHub repo → vercel.com → *Add New Project* → import it (Framework: *Other*, no build command).
- **CLI:** `npx vercel --prod` from this folder (needs Node.js).
