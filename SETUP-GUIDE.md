# Sådan sætter du projektet op

## Hvad du skal gøre

Du skal åbne **Terminal** (find den i Programmer → Hjælpeprogrammer, eller søg efter "Terminal" med Spotlight).

Kopier og kør disse kommandoer **én ad gangen** — vent på at hver er færdig, inden du kører den næste.

---

## Trin 1 — Gå til projektmappen

```
cd ~/nyt-storybook
```

## Trin 2 — Installer Tailwind CSS

```
npm install tailwindcss @tailwindcss/vite
```

## Trin 3 — Installer shadcn/ui og lucide ikoner

```
npm install lucide-react class-variance-authority clsx tailwind-merge
```

## Trin 4 — Installer alle komponenter

Kopier hele blokken og kør den på én gang:

```
npx shadcn@latest add accordion alert alert-dialog avatar badge breadcrumb button card carousel checkbox command dialog drawer input label popover scroll-area select separator sheet skeleton slider switch table tabs textarea toast toggle tooltip
```

> Det kan godt tage et minut eller to. Svar "yes" hvis terminalen spørger om noget.

## Trin 5 — Start Storybook og tjek alt virker

```
npm run storybook
```

Åbn http://localhost:6006 i din browser.

---

## Hvis noget går galt

Skriv til Claude hvad fejlmeddelelsen siger — så fikser vi det.
