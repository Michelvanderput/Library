# Stack-library van Michel van der Put

Bijgewerkt: 2026-10-02 · 392 tools · bron: Groundwork-portaal · machineleesbaar: https://library-beta-ruby.vercel.app/stack/stack.json

## Opdracht voor de agent

Je krijgt een app- of website-idee. Stel daarvoor een stack samen **uitsluitend uit deze library**. Werk zo:

1. **Soort project bepalen:** website (`site`), webapp (`app`) of mobiele app (`mobile`).
2. **Functies herkennen:** zet het idee om naar de functies uit "Functies → tools" en neem die tools over (per soort project als dat zo staat).
3. **Basis toevoegen:** neem de must-haves "Voor elk project" mee, plus die voor het soort project.
4. **Per rol één keuze:** bij "Kies er één" maximaal één tool uit elke groep.
5. **Controleren:** elke tool met "vereist één van" moet zijn vereiste in de stack hebben. Los conflicten op of benoem ze. Mobiel (Expo) alleen tools met "werkt in React Native".
6. **Kijk naar bewezen combinaties en projecttemplates** als het idee daarop lijkt.
7. **Geef terug** in het uitvoerformaat onderaan. Gebruik de keys tussen backticks, verzin geen tools die hier niet staan; mist er iets, zet het onder "Buiten de library".

Voorkeuren van Michel: gratis of met gratis tier, Vercel als host, TypeScript, toegankelijk (WCAG), Nederlandstalige klanten (AVG).

## Functies → tools

| Functie | Key | Tools | Uren (indicatie) |
|---|---|---|---|
| Contactformulier | `contact` | Website: Formspree (`formspree`) · Webapp: Zod (`zod`), Resend (`resend`) · Mobiele app: Zod (`zod`) | 3 |
| Inloggen en accounts | `login` | Supabase (`supabase`), Supabase Row Level Security (`rls`), Supabase MCP (`supamcp`), Zod (`zod`) · vereist een React-basis | 10 |
| Betalen / webshop | `pay` | Stripe (`stripe`), Stripe MCP (`stripemcp`), Zod (`zod`) · vereist een React-basis | 14 |
| Klant beheert zelf content | `cms` | Keystatic (`keystatic`) | 10 |
| Meertalig | `i18n` | i18next (`i18next`) | 8 |
| Afspraken / boekingen | `booking` | React DayPicker (`daypicker`), date-fns (`datefns`), Resend (`resend`), Supabase (`supabase`), Supabase Row Level Security (`rls`) · vereist een React-basis | 14 |
| Nieuwsbrief | `newsletter` | Resend (`resend`) | 3 |
| Zoekfunctie | `search` | cmdk (`cmdk`) · vereist een React-basis | 6 |
| Dashboard en data | `dash` | Tremor (`tremor`), TanStack Table (`tanstacktable`) · vereist een React-basis | 16 |
| Opvallende animaties | `motion` | Website: GSAP (`gsap`), Lenis (`lenis`) · Webapp: Motion (`motion`) · Mobiele app: Reanimated (`reanimated`), Moti (`moti`) · Desktop-app: Motion (`motion`) | 8 |
| 3D / WebGL | `3d` | Website: Spline (`spline`) · Webapp: Spline (`spline`) | 16 |
| Kaart en locaties | `map` | Website: Leaflet (`leaflet`) · Webapp: Leaflet (`leaflet`) | 5 |
| Chat / realtime | `chat` | Supabase (`supabase`), Supabase Realtime (`suprealtime`), Supabase Row Level Security (`rls`) · vereist een React-basis | 16 |
| Bestanden uploaden | `upload` | UploadThing (`uploadthing`) · vereist een React-basis | 6 |
| Meldingen | `notif` | Website: Sonner (`sonner`) · Webapp: Sonner (`sonner`), Push API (MDN) (`webpush`) · Mobiele app: Expo push notifications (`expopush`) | 6 |
| AI-functie | `ai` | AI SDK (`aisdk`), Zod (`zod`), Upstash (`upstash`) · vereist een React-basis | 12 |
| Teams en rollen | `team` | Supabase (`supabase`), Supabase Row Level Security (`rls`), Resend (`resend`) · vereist een React-basis | 12 |
| Installeerbaar en offline | `pwa` | Webapp: Vite PWA (`vitepwa`) · Website: Vite PWA (`vitepwa`) | 6 |

## Must-haves

### Voor elk project
De basis die Claude beter laat bouwen en zijn eigen werk laat controleren.

- andrej-karpathy-skills (`karpathy`): Regels tegen overbodige en gegokte code
- Frontend Design skill (Anthropic) (`fedesign`): Voorkomt de standaard AI-look
- Context7 (`context7`): Claude gebruikt de actuele docs
- Playwright MCP (`pwmcp`): Claude test zijn werk in een echte browser
- Next.js (`nextjs`): Eén basis die alles aankan
- Tailwind CSS (`tailwind`): Styling waar bijna alle componenten op draaien
- shadcn/ui (`shadcn`): Componenten die je zelf bezit
- TypeScript (`ts`): Vangt fouten voordat je gebruiker ze ziet
- Biome (`biome`): Nette code zonder discussie
- Lucide (`lucide`): Eén consistente iconenset
- Vercel (`vercel`): Live in een paar minuten
- Vercel MCP (`vercelmcp`): Deployen met één zin

### Zodra je data of login hebt
Hier gaat het in AI-gebouwde apps het vaakst mis.

- Supabase (`supabase`): Database, login en opslag in één
- Supabase Row Level Security (`rls`): Iedereen ziet alleen zijn eigen data
- Supabase MCP (`supamcp`): Claude beheert de database zelf
- Zod (`zod`): Input valideren op client en server
- Sentry (`sentry`): Fouten zien voordat gebruikers klagen

### Voor webapps
Wat een app nodig heeft om betrouwbaar te voelen.

- TanStack Query (`tanstack`): Server-data ophalen en cachen
- Zustand (`zustand`): Simpele UI-state
- React Hook Form (`rhf`): Formulieren zonder gedoe
- react-error-boundary (`errorboundary`): Eén fout breekt niet de hele app
- Vitest (`vitest`): Tests voor je logica
- GitHub Actions (`ghactions`): Automatisch testen bij elke push

### Voor mobiele apps
React Native werkt anders dan het web. Deze tools passen erbij.

- Expo (`expo`): De makkelijkste start
- Expo Router (`exporouter`): Navigatie tussen schermen
- NativeWind (`nativewind`): Tailwind in je app
- Reanimated (`reanimated`): Vloeiende animaties
- React Native Reusables (`rnr`): Componenten in shadcn-stijl
- Apple Human Interface Guidelines (`hig`): Hoe iOS-apps horen te voelen

### Altijd checken voor je live gaat
Geen installatie nodig: open de site en test je pagina.

- PageSpeed Insights (`psi`): Is de site snel genoeg?
- WAVE (`wave`): Zitten er toegankelijkheidsfouten in?
- WebAIM Contrast Checker (`webaim`): Is de tekst leesbaar?
- Security Headers (`secheaders`): Staan de security headers goed?
- Open Graph (`ogp`): Ziet je link er goed uit als hij gedeeld wordt?

## Kies er één (per groep maximaal één)

- GSAP (`gsap`), Motion (`motion`), Anime.js (`animejs`), React Spring (`reactspring`). Kies één animatie-engine. Twee naast elkaar maakt je bundel groter en de code rommelig.
- Next.js (`nextjs`), Vite + React (`vite`), Astro (`astro`), Webflow (`webflow`), Framer (`framer`), SvelteKit (`sveltekit`), Nuxt (`nuxt`), React Router (`reactrouter`), TanStack Start (`tsstart`), Expo (`expo`). Kies één basis voor je project.
- shadcn/ui (`shadcn`), HeroUI (`heroui`), Mantine (`mantine`), Chakra UI (`chakra`), daisyUI (`daisyui`), Flowbite (`flowbite`), Preline (`preline`). Kies één componentsysteem als basis. Twee door elkaar geven botsende stijlen.
- Stripe (`stripe`), Lemon Squeezy (`lemonsqueezy`). Kies één betaalprovider.
- Clerk (`clerk`), Auth.js (`authjs`), Better Auth (`betterauth`). Kies één login-oplossing.
- Drizzle ORM (`drizzle`), Prisma (`prisma`). Kies één ORM.
- Barba.js (`barba`), Taxi.js (`taxi`), Swup (`swup`). Kies één library voor paginatransities.
- Lenis (`lenis`), Locomotive Scroll (`locomotive`), ScrollSmoother (GSAP) (`gsapsmoother`). Kies één smooth-scroll-library. Twee tegelijk vechten om de scroll.
- Zustand (`zustand`), Jotai (`jotai`). Kies één state-library.
- Tiptap (`tiptap`), Lexical (`lexical`). Kies één editor.
- date-fns (`datefns`), Day.js (`dayjs`). Eén datumlibrary is genoeg.
- Trigger.dev (`triggerdev`), Inngest (`inngest`). Kies één dienst voor achtergrondtaken.
- Tauri (`tauri`), Electron (`electron`). Kies Tauri óf Electron voor je desktop-app.
- React Native Reusables (`rnr`), Tamagui (`tamagui`), gluestack UI (`gluestack`). Kies één UI-systeem voor React Native.
- Vite PWA (`vitepwa`), Serwist (`serwist`). Kies de PWA-tool die bij je framework past.
- SplitText (GSAP) (`gsapsplit`), Splitting.js (`splitting`). Twee manieren om tekst te splitsen. Kies er één.
- Swiper (`swiper`), Embla Carousel (`embla`). Kies één carrousel.
- Three.js (`threejs`), Babylon.js (`babylon`). Kies één 3D-engine.
- Figma (`figma`), Penpot (`penpot`). Kies één ontwerptool, anders raakt je ontwerp verspreid.
- Umami (`umami`), PostHog (`posthog`). Eén analytics-tool is genoeg.
- Recharts (`recharts`), nivo (`nivo`), Chart.js (`chartjs`), Apache ECharts (`echarts`), Tremor (`tremor`). Eén chartlibrary houdt je grafieken consistent en je bundel klein.
- Vercel (`vercel`), Netlify (`netlify`), Cloudflare Pages (`cfpages`), Render (`render`). Kies één host.
- Supabase (`supabase`), Convex (`convex`), Firebase (`firebase`), PocketBase (`pocketbase`), Appwrite (`appwrite`), Neon (`neon`), Turso (`turso`). Kies één backend of database.
- Frontend Design skill (Anthropic) (`fedesign`), Taste Skill (`taste`), Impeccable (`impeccable`). Meerdere smaak-skills geven Claude tegenstrijdige designregels. Kies er één (UI UX Pro Max mag er wel naast).
- Sanity (`sanity`), Payload (`payload`), Keystatic (`keystatic`), Decap CMS (`decap`), TinaCMS (`tinacms`), Outstatic (`outstatic`), Pages CMS (`pagescms`), Directus (`directus`), Strapi (`strapi`). Kies één CMS per project, twee CMS'en naast elkaar geeft dubbel beheer.
- Lucide (`lucide`), Phosphor Icons (`phosphor`), Tabler Icons (`tabler`), Heroicons (`heroicons`), Iconoir (`iconoir`), Remix Icon (`remixicon`), Hugeicons (`hugeicons`), Radix Icons (`radixicons`). Eén iconenset houdt je UI consistent.
- v0 (`v0`), Bolt (`bolt`), Lovable (`lovable`). Kies één AI-builder als startpunt en werk daarna verder in Claude Code.

## Conflicten

- Three.js + Shaders (vermijden): Three.js en Shaders zijn allebei zwaar op de GPU. Gebruik Shaders voor een achtergrondeffect en Three.js alleen voor echte 3D.
- Auth.js + Supabase (let op): Supabase heeft zelf al login. Een aparte auth-library erbij maakt het dubbel. Kies bewust.
- Better Auth + Supabase (let op): Supabase heeft zelf al login. Een aparte auth-library erbij maakt het dubbel. Kies bewust.
- Firebase + Vercel (let op): Firebase heeft zelf ook hosting. Kan prima samen, maar kies bewust waar je site draait.
- Clerk + Supabase (let op): Supabase heeft zelf al login. Clerk erbij kan, maar dan moet je gebruikers in twee systemen koppelen. Kies bewust.
- Graphify + Understand Anything (let op): Graphify en Understand Anything maken allebei een kaart van je codebase. Samen kan, maar begin met één.

## Bewezen combinaties

- GSAP (`gsap`), Lenis (`lenis`). Standaardduo voor scroll-animaties: Lenis maakt het scrollen vloeiend, ScrollTrigger hangt er animaties aan.
- shadcn/ui (`shadcn`), tweakcn (`tweakcn`), Magic UI (`magicui`). shadcn als basis, tweakcn voor je thema, Magic UI voor de effecten. Alles spreekt dezelfde taal.
- Motion (`motion`), Kokonut UI (`kokonut`). Kokonut UI is gebouwd op Motion, dus je eigen animaties sluiten er naadloos op aan.
- Supabase (`supabase`), Supabase MCP (`supamcp`), Supabase Row Level Security (`rls`). Laat Claude de database bouwen via MCP, maar altijd met RLS aan.
- Vercel MCP (`vercelmcp`), Playwright MCP (`pwmcp`), Context7 (`context7`). Deployen, testen en actuele docs: Claude kan zelf controleren of het werkt.
- Figma MCP (`figmamcp`), shadcn MCP (`shadcnmcp`). Ontwerp in Figma, Claude bouwt het met echte shadcn-componenten in plaats van zelfgemaakte.
- Refero Styles (`refero`), RandomA11y (`randoma11y`). Eerst een stijlrichting kiezen, dan kleuren die ook toegankelijk zijn.
- Logo Design Skill (`logoskill`), Jitter (`jitter`). Logo als SVG uit de skill, direct animeren in Jitter voor een intro of social post.
- Caveman (`caveman`), Ponytail (`ponytail`). Caveman maakt de antwoorden korter, Ponytail de code. Samen pakken ze allebei de helften van je tokenrekening aan.
- Matt Pocock Skills (`mattpocock`), Agent Skills (Addy Osmani) (`agentskills`). Eerst laat Matt Pocock's /grill-me Claude de opdracht echt begrijpen, daarna bewaken Addy Osmani's /spec, /review en /ship de kwaliteit.
- andrej-karpathy-skills (`karpathy`), Ponytail (`ponytail`). Allebei tegen overbodige code: samen houden ze Claude klein en precies.
- GSAP (`gsap`), ScrollTrigger (GSAP) (`gsapst`), SplitText (GSAP) (`gsapsplit`). GSAP met ScrollTrigger en SplitText: koppen die per woord binnenkomen terwijl je scrollt. Alles gratis.
- **Vermijden:** GSAP (`gsap`), Motion (`motion`). Kies één animatie-engine per project. Twee naast elkaar maakt je bundel groot en je code rommelig.
- **Vermijden:** Frontend Design skill (Anthropic) (`fedesign`), Taste Skill (`taste`). Allebei sturen ze de visuele smaak van Claude, met eigen regels die elkaar tegenspreken.
- **Vermijden:** Three.js (`threejs`), Shaders (`shaders`). Allebei zwaar op de GPU. Voor één achtergrondeffect is Shaders genoeg; Three.js alleen voor echte 3D.
- **Vermijden:** Webflow (`webflow`), shadcn/ui (`shadcn`). Webflow draait geen React-componenten. Kies Webflow óf een code-stack.
- **Vermijden:** daisyUI (`daisyui`), shadcn/ui (`shadcn`). Twee componentsystemen door elkaar geven botsende stijlen. Kies er één.

## Installatie: wie doet wat

- `code`: npm-pakket: Claude installeert het zelf
- `skill`: skill: Claude zet het in .claude/skills/
- `file`: regels: in CLAUDE.md
- `mcp`: MCP: Michel voegt toe en keurt goed in /mcp (staat in .mcp.json)
- `plugin`: plugin: Michel installeert met /plugin, daarna herstart
- `service`: dienst: account maken en API-key in .env.local
- `web`: website: geen installatie

## Alle tools per rol

Kolommen: key · naam · wat · installatie · prijs · vereist · extra.

### Achtergrondtaken (`jobs`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `triggerdev` | [Trigger.dev](https://trigger.dev) | achtergrondtaken en cronjobs in TypeScript | service | gratis tier | – | – |
| `inngest` | [Inngest](https://www.inngest.com) | betrouwbare workflows en achtergrondtaken | service | gratis tier | – | – |

### AI-builders (`aibuilder`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `manus` | [Manus](https://manus.im) | AI-agent die taken en workflows uitvoert | service | gratis tier | – | – |
| `v0` | [v0](https://v0.app) | UI genereren uit een prompt (Vercel) | service | gratis tier | – | – |
| `bolt` | [Bolt](https://bolt.new) | complete apps genereren in de browser | service | gratis tier | – | – |
| `lovable` | [Lovable](https://lovable.dev) | apps bouwen met een chat | service | gratis tier | – | – |

### AI-functies (`ai`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `aisdk` | [AI SDK](https://ai-sdk.dev) | AI-chat en streaming in je app, met elk model (ook Claude) | code: `npm i ai` | AI-model betaal je apart | – | env: `ANTHROPIC_API_KEY` |

### Animatie (`animation`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `gsap` | [GSAP](https://gsap.com) | de standaard voor timelines en scroll; sinds 2025 100% gratis, ook alle plugins | code: `npm i gsap` | gratis / open source | – | – |
| `animejs` | [Anime.js](https://animejs.com) | lichte, flexibele JS-animatie-engine | code: `npm i animejs` | gratis / open source | – | – |
| `motion` | [Motion](https://motion.dev) | animatielibrary voor React, JS en Vue (voorheen Framer Motion) | code: `npm i motion` | gratis / open source | – | – |
| `reactspring` | [React Spring](https://www.react-spring.dev) | natuurlijke physics-animaties | code: `npm i @react-spring/web` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `reanimated` | [Reanimated](https://docs.swmansion.com/react-native-reanimated/) | vloeiende 60fps-animaties in React Native | code | gratis / open source | `expo` | werkt in React Native |

### API-laag (`api`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `trpc` | [tRPC](https://trpc.io) | type-veilige API's zonder schema | code | gratis / open source | – | – |
| `hono` | [Hono](https://hono.dev) | kleine, snelle API-server voor elke runtime | code: `npm create hono@latest` | gratis / open source | – | – |

### Backend & data (`backend`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `supabase` | [Supabase](https://supabase.com) | Postgres-database, auth en storage | service | gratis tier | – | env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY # alleen op de server` |
| `convex` | [Convex](https://www.convex.dev) | realtime backend in TypeScript | service | gratis tier | – | env: `CONVEX_DEPLOYMENT` |
| `neon` | [Neon](https://neon.com) | serverless Postgres met branches | service | gratis tier | – | – |
| `turso` | [Turso](https://turso.tech) | SQLite aan de edge | service | gratis tier | – | – |
| `firebase` | [Firebase](https://firebase.google.com) | backend van Google: database, auth, hosting | service | gratis tier | – | – |
| `pocketbase` | [PocketBase](https://pocketbase.io) | complete backend in één bestand | service | gratis / open source | – | – |
| `appwrite` | [Appwrite](https://appwrite.io) | open-source backend-platform | service | gratis tier | – | – |

### Basis (`framework`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `nextjs` | [Next.js](https://nextjs.org) | React-framework met routing en server-rendering | code: `npx create-next-app@latest` | gratis / open source | – | – |
| `vite` | [Vite + React](https://vite.dev) | snelle, simpele React-setup | code: `npm create vite@latest` | gratis / open source | – | – |
| `astro` | [Astro](https://astro.build) | snelle content-sites, React waar nodig | code: `npm create astro@latest` | gratis / open source | – | – |
| `webflow` | [Webflow](https://webflow.com) | visuele websitebouwer met CMS en hosting | service | gratis tier | – | – |
| `framer` | [Framer](https://www.framer.com) | visuele websitebouwer met animaties en hosting | service | gratis tier | – | – |
| `sveltekit` | [SvelteKit](https://svelte.dev) | Svelte-framework: weinig code, heel snel | code: `npx sv create` | gratis / open source | – | – |
| `nuxt` | [Nuxt](https://nuxt.com) | Vue-framework met routing en server-rendering | code | gratis / open source | – | – |
| `reactrouter` | [React Router](https://reactrouter.com) | React-framework (voorheen Remix) | code | gratis / open source | – | – |
| `tsstart` | [TanStack Start](https://tanstack.com/start) | full-stack React-framework van TanStack | code | gratis / open source | – | – |
| `expo` | [Expo](https://expo.dev) | mobiele apps bouwen met React Native | code | gratis tier | – | werkt in React Native |

### Beeld (`images`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `undraw` | [unDraw](https://undraw.co) | gratis illustraties in je eigen kleur | web | gratis / open source | – | – |
| `storyset` | [Storyset](https://storyset.com) | geanimeerde illustraties | web | gratis / open source | – | – |
| `unsplash` | [Unsplash](https://unsplash.com) | gratis foto's | web | gratis / open source | – | – |
| `squoosh` | [Squoosh](https://squoosh.app) | afbeeldingen comprimeren | web | gratis / open source | – | – |
| `blush` | [Blush](https://blush.design) | illustraties die je zelf samenstelt | web | gratis tier | – | – |
| `pexels` | [Pexels](https://www.pexels.com) | gratis foto's en video's | web | gratis / open source | – | – |
| `icons3d` | [3dicons](https://3dicons.co) | gratis 3D-iconen | web | gratis / open source | – | – |
| `tinypng` | [TinyPNG](https://tinypng.com) | PNG en JPG kleiner maken | web | gratis tier | – | – |
| `svgomg` | [SVGOMG](https://jakearchibald.github.io/svgomg/) | SVG-bestanden opschonen en verkleinen | web | gratis / open source | – | – |
| `removebg` | [remove.bg](https://www.remove.bg) | achtergrond van een foto verwijderen | web | gratis tier | – | – |
| `boring` | [Boring Avatars](https://boringavatars.com) | gratis open-source avatars voor React | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |

### Best practices & naslag (`practice`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `ccbp` | [Claude Code best practices (Anthropic)](https://www.anthropic.com/engineering/claude-code-best-practices) | hoe je het meeste uit Claude Code haalt | web | gratis / open source | – | – |
| `ccdocs` | [Claude Code docs](https://code.claude.com/docs/en/overview) | officiële documentatie | web | gratis / open source | – | – |
| `ccmemory` | [CLAUDE.md & geheugen (docs)](https://code.claude.com/docs/en/memory) | hoe Claude projectregels onthoudt | web | gratis / open source | – | – |
| `ccskills` | [Skills (docs)](https://code.claude.com/docs/en/skills) | skills maken, installeren en delen | web | gratis / open source | – | – |
| `ccplugins` | [Plugins (docs)](https://code.claude.com/docs/en/plugins) | plugins en marketplaces | web | gratis / open source | – | – |
| `ccmcp` | [MCP (docs)](https://code.claude.com/docs/en/mcp) | MCP-servers toevoegen en inloggen | web | gratis / open source | – | – |
| `wcag` | [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) | de officiële toegankelijkheidsrichtlijnen | web | gratis / open source | – | – |
| `a11yproj` | [A11Y Project checklist](https://www.a11yproject.com/checklist/) | toegankelijkheid als afvinklijst | web | gratis / open source | – | – |
| `webaim` | [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | check of je tekst leesbaar genoeg is | web | gratis / open source | – | – |
| `wave` | [WAVE](https://wave.webaim.org) | scan een pagina op toegankelijkheidsfouten | web | gratis / open source | – | – |
| `learna11y` | [Learn Accessibility (web.dev)](https://web.dev/learn/accessibility) | gratis cursus toegankelijkheid | web | gratis / open source | – | – |
| `reducedmotion` | [prefers-reduced-motion (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | animaties uitzetten voor wie dat wil | web | gratis / open source | – | – |
| `cwv` | [Core Web Vitals](https://web.dev/articles/vitals) | de drie cijfers die snelheid meten | web | gratis / open source | – | – |
| `psi` | [PageSpeed Insights](https://pagespeed.web.dev) | meet de snelheid van je live site | web | gratis / open source | – | – |
| `utopia` | [Utopia](https://utopia.fyi) | vloeiende type- en spacing-schalen met clamp() | web | gratis / open source | – | – |
| `moderncss` | [Modern CSS Solutions](https://moderncss.dev) | moderne oplossingen voor oude CSS-problemen | web | gratis / open source | – | – |
| `learncss` | [Learn CSS (web.dev)](https://web.dev/learn/css) | gratis cursus CSS van begin tot eind | web | gratis / open source | – | – |
| `lawsofux` | [Laws of UX](https://lawsofux.com) | psychologische principes achter goede UX | web | gratis / open source | – | – |
| `practypo` | [Practical Typography](https://practicaltypography.com) | typografie-regels die werken | web | gratis / open source | – | – |
| `checklistdesign` | [Checklist Design](https://www.checklist.design) | checklists per pagina en component | web | gratis / open source | – | – |
| `uxpatterns` | [UX Patterns for Devs](https://uxpatterns.dev) | wanneer je welk UI-patroon gebruikt | web | gratis / open source | – | – |
| `patternsdev` | [Patterns.dev](https://www.patterns.dev) | design- en renderpatronen voor moderne web-apps | web | gratis / open source | – | – |
| `owasp` | [OWASP Top 10](https://owasp.org/www-project-top-ten/) | de tien grootste beveiligingsrisico's | web | gratis / open source | – | – |
| `owaspcs` | [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org) | korte beveiligingsgidsen per onderwerp | web | gratis / open source | – | – |
| `secheaders` | [Security Headers](https://securityheaders.com) | scan de beveiligingsheaders van je site | web | gratis / open source | – | – |
| `convcommits` | [Conventional Commits](https://www.conventionalcommits.org) | duidelijke commit-berichten | web | gratis / open source | – | – |
| `gsearch` | [Google Search Central](https://developers.google.com/search/docs) | officiële SEO-documentatie | web | gratis / open source | – | – |
| `ogp` | [Open Graph](https://ogp.me) | hoe je link eruitziet als hij gedeeld wordt | web | gratis / open source | – | – |
| `favicon` | [RealFaviconGenerator](https://realfavicongenerator.net) | favicons voor elk apparaat | web | gratis / open source | – | – |
| `reactdocs` | [react.dev](https://react.dev) | officiële React-docs | web | gratis / open source | – | – |
| `smashing` | [Smashing Magazine](https://www.smashingmagazine.com) | diepgaande artikelen over frontend en UX | web | gratis / open source | – | – |
| `csstricks` | [CSS-Tricks](https://css-tricks.com) | CSS-gidsen en naslag | web | gratis / open source | – | – |
| `viewtrans` | [View Transitions API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) | native overgangen tussen pagina's en states | web | gratis / open source | – | – |
| `scrolldriven` | [Scroll-driven Animations](https://scroll-driven-animations.style) | native CSS scroll-animaties, zonder JavaScript | web | gratis / open source | – | – |
| `animguide` | [Animations guide (web.dev)](https://web.dev/articles/animations-guide) | welke CSS-eigenschappen soepel animeren | web | gratis / open source | – | – |
| `animtier` | [Animation performance tier list (Motion)](https://motion.dev/magazine/web-animation-performance-tier-list) | wat is snel en wat hapert | web | gratis / open source | – | – |
| `animfps` | [Animatie en framerate (MDN)](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate) | waarom sommige animaties haperen | web | gratis / open source | – | – |
| `reducedsm` | [Ontwerpen voor minder beweging (Smashing)](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/) | animaties voor mensen die gevoelig zijn voor beweging | web | gratis / open source | – | – |
| `sdchrome` | [Scroll-driven animations (Chrome)](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) | officiële uitleg en demo's | web | gratis / open source | – | – |
| `vtchrome` | [View Transitions (Chrome)](https://developer.chrome.com/docs/web-platform/view-transitions) | officiële uitleg en demo's | web | gratis / open source | – | – |
| `ccworkflows` | [Veelgebruikte workflows (Claude Code docs)](https://code.claude.com/docs/en/common-workflows) | stap-voor-stap recepten voor dagelijks werk | web | gratis / open source | – | – |
| `promptguide` | [Prompt engineering (Anthropic)](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) | hoe je Claude duidelijke instructies geeft | web | gratis / open source | – | – |
| `noeffect` | [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) | de meest gemaakte React-fout voorkomen | web | gratis / open source | – | – |
| `thinkreact` | [Thinking in React](https://react.dev/learn/thinking-in-react) | een UI opdelen in componenten en state | web | gratis / open source | – | – |
| `supaprod` | [Supabase production checklist](https://supabase.com/docs/guides/deployment/going-into-prod) | alles checken voordat je live gaat | web | gratis / open source | – | – |
| `vercelprod` | [Vercel production checklist](https://vercel.com/docs/production-checklist) | prestaties, beveiliging en betrouwbaarheid | web | gratis / open source | – | – |
| `learnperf` | [Learn Performance (web.dev)](https://web.dev/learn/performance) | gratis cursus webperformance | web | gratis / open source | – | – |
| `learnforms` | [Learn Forms (web.dev)](https://web.dev/learn/forms) | gratis cursus goede formulieren | web | gratis / open source | – | – |
| `learnimages` | [Learn Images (web.dev)](https://web.dev/learn/images) | afbeeldingen snel en scherp laden | web | gratis / open source | – | – |
| `learnhtml` | [Learn HTML (web.dev)](https://web.dev/learn/html) | semantische HTML vanaf de basis | web | gratis / open source | – | – |
| `pwaguide` | [Progressive Web Apps (web.dev)](https://web.dev/explore/progressive-web-apps) | installeerbaar, offline, betrouwbaar | web | gratis / open source | – | – |
| `webpush` | [Push API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) | pushmeldingen vanuit een webapp | web | gratis / open source | – | – |
| `expopush` | [Expo push notifications](https://docs.expo.dev/push-notifications/overview/) | pushmeldingen in je mobiele app | web | gratis / open source | – | – |
| `hig` | [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) | hoe iOS-apps horen te voelen | web | gratis / open source | – | – |
| `m3` | [Material Design 3](https://m3.material.io) | de ontwerprichtlijnen van Android | web | gratis / open source | – | – |
| `skillscli` | [skills CLI (npx skills add)](https://skills.sh) | installeert een skill-repo in Claude Code en 70+ andere agents met één commando | web | gratis / open source | – | – |

### Betalingen (`payments`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `stripe` | [Stripe](https://stripe.com) | betalingen en abonnementen | service | transactiekosten | – | env: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET` |
| `lemonsqueezy` | [Lemon Squeezy](https://www.lemonsqueezy.com) | betalingen inclusief btw-afhandeling | service | transactiekosten | – | – |

### Beveiliging (`security`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `rls` | [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) | zorgt dat gebruikers alleen hun eigen data zien | file | gratis / open source | `supabase` | – |

### Claude-plugins (`plugin`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `ponytail` | [Ponytail](https://github.com/DietrichGebert/ponytail) | laat Claude ~54% minder code schrijven: eerst vragen of code überhaupt nodig is | plugin: `/plugin marketplace add DietrichGebert/ponytail` | gratis / open source | – | – |
| `omniroute` | [OmniRoute](https://github.com/diegosouzapw/OmniRoute) | valt automatisch terug op een ander model als je limiet op is | service | gratis / open source | – | – |
| `graphify` | [Graphify](https://github.com/Graphify-Labs/graphify) | kennisgraaf van je codebase (lokaal, zonder AI), zodat Claude niet steeds bestanden herleest | skill: `uv tool install graphifyy && graphify install` | gratis / open source | – | – |
| `omc` | [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 19 agents via één /team-commando | plugin: `/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode` | gratis / open source | – | – |
| `claudemem` | [claude-mem](https://github.com/thedotmack/claude-mem) | geheugen over sessies heen | plugin | gratis / open source | – | – |
| `cctemplates` | [Claude Code Templates](https://github.com/davila7/claude-code-templates) | 900+ agents, commands, hooks en MCP's om te installeren | code | gratis / open source | – | – |
| `understand` | [Understand Anything](https://github.com/Egonex-AI/Understand-Anything) | interactieve kaart van een onbekende codebase, met uitleg en een chat | plugin: `/plugin marketplace add Egonex-AI/Understand-Anything` | gratis / open source | – | – |

### CMS (`cms`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `sanity` | [Sanity](https://www.sanity.io) | headless CMS met live samenwerken | service | gratis tier | – | env: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` |
| `payload` | [Payload](https://payloadcms.com) | open-source CMS dat in Next.js draait | service | gratis / open source | – | – |
| `keystatic` | [Keystatic](https://keystatic.com) | gratis CMS dat content als bestanden in je Git-repo zet; Astro en Next.js, draait op Vercel | service: `npm create @keystatic@latest` | gratis / open source | `astro` / `nextjs` | – |
| `decap` | [Decap CMS](https://decapcms.org) | gratis open-source Git-CMS, werkt met elke statische site | service | gratis / open source | – | – |
| `tinacms` | [TinaCMS](https://tina.io) | open-source Git-CMS met visueel bewerken op de pagina; gratis tier voor kleine teams | service | gratis tier | – | – |
| `outstatic` | [Outstatic](https://outstatic.com) | gratis CMS voor Next.js, content in je GitHub-repo, geen database nodig | service | gratis / open source | `nextjs` | – |
| `pagescms` | [Pages CMS](https://pagescms.org) | gratis CMS bovenop je GitHub-repo, handig voor klanten die alleen tekst aanpassen | service | gratis / open source | – | – |
| `directus` | [Directus](https://directus.io) | open-source headless CMS bovenop je eigen database (zelf hosten) | service | gratis / open source | – | – |
| `strapi` | [Strapi](https://strapi.io) | open-source headless CMS met API, zelf hosten | service | gratis / open source | – | – |

### Codekwaliteit (`quality`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `ts` | [TypeScript](https://www.typescriptlang.org) | types vangen fouten voordat je gebruiker ze ziet | code | gratis / open source | – | – |
| `biome` | [Biome](https://biomejs.dev) | linter en formatter in één, razendsnel | code: `npm i -D @biomejs/biome` | gratis / open source | – | – |
| `eslint` | [ESLint](https://eslint.org) | de klassieke JavaScript-linter | code | gratis / open source | – | – |
| `prettier` | [Prettier](https://prettier.io) | automatische code-opmaak | code: `npm i -D prettier` | gratis / open source | – | – |
| `storybook` | [Storybook](https://storybook.js.org) | componenten los bouwen en documenteren | code | gratis / open source | – | – |
| `errorboundary` | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | één kapot onderdeel breekt niet de hele app | code: `npm i react-error-boundary` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` / `expo` | – |

### Creative coding (`creative`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `r3f` | [React Three Fiber](https://r3f.docs.pmnd.rs) | Three.js schrijven als React-componenten | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `threejs` | – |
| `babylon` | [Babylon.js](https://www.babylonjs.com) | complete 3D- en game-engine | code | gratis / open source | – | – |
| `pixi` | [PixiJS](https://pixijs.com) | supersnelle 2D-graphics en games | code | gratis / open source | – | – |
| `p5` | [p5.js](https://p5js.org) | creative coding voor beginners | code | gratis / open source | – | – |
| `matter` | [Matter.js](https://brm.io/matter-js) | 2D-physics in de browser | code | gratis / open source | – | – |
| `zdog` | [Zdog](https://zzz.dog) | vrolijke pseudo-3D-illustraties | code | gratis / open source | – | – |

### Data & API's (`data`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `publicapis` | [Public APIs](https://github.com/public-apis/public-apis) | gratis API's voor projecten | web | gratis / open source | – | – |
| `places` | [Google Places API](https://developers.google.com/maps/documentation/places/web-service) | plekken en cafés met echte data | service | gratis tier | – | – |
| `elevenlabs` | [ElevenLabs API](https://elevenlabs.io/docs) | spraak genereren en herkennen | service | gratis tier | – | – |
| `pandas` | [pandas](https://pandas.pydata.org) | data-analyse in Python | code | gratis / open source | – | – |

### Data ophalen (`datalib`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `tanstack` | [TanStack Query](https://tanstack.com/query) | data ophalen, cachen en verversen | code: `npm i @tanstack/react-query` | gratis / open source | – | – |
| `nuqs` | [nuqs](https://nuqs.dev) | filters en zoekopdrachten in de URL bewaren | code: `npm i nuqs` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |

### Database-toegang (`orm`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `drizzle` | [Drizzle ORM](https://orm.drizzle.team) | type-veilige SQL in TypeScript | code: `npm i drizzle-orm` | gratis / open source | – | – |
| `prisma` | [Prisma](https://www.prisma.io) | populaire ORM met schema-bestand | code | gratis / open source | – | – |

### Design-smaak voor Claude (`taste`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `fedesign` | [Frontend Design skill (Anthropic)](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) | officiële skill voor onderscheidende UI in plaats van standaard-look | plugin | gratis / open source | – | – |
| `taste` | [Taste Skill](https://github.com/Leonxlnx/taste-skill) | anti-"AI slop" regels met instelbare variatie, motion en dichtheid | skill: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` | gratis / open source | – | – |
| `anthskills` | [Anthropic Skills](https://github.com/anthropics/skills) | officiële voorbeeld-skills om te installeren of te forken | skill | gratis / open source | – | – |
| `impeccable` | [Impeccable](https://impeccable.style) | designtaal met commando's als polish, audit en bolder, plus een checker voor AI-look | skill: `npx impeccable install` | gratis / open source | – | – |

### Design-tools (`design`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `cubic` | [cubic-bezier.com](https://cubic-bezier.com) | eigen easing-curves maken | web | gratis / open source | – | – |
| `easings` | [Easings.net](https://easings.net) | overzicht van easing-functies | web | gratis / open source | – | – |
| `figma` | [Figma](https://www.figma.com) | ontwerpen en schetsen | web | gratis tier | – | – |
| `tweakcn` | [tweakcn](https://tweakcn.com) | visuele thema-editor voor shadcn/ui | web | gratis / open source | `shadcn` | – |
| `shadows` | [Smooth Shadows](https://shadows.brumm.af) | zachte, gelaagde CSS-schaduwen | web | gratis / open source | – | – |
| `typescale` | [Typescale](https://typescale.com) | typografische schaal berekenen | web | gratis / open source | – | – |
| `penpot` | [Penpot](https://penpot.app) | open-source alternatief voor Figma | web | gratis / open source | – | – |
| `excalidraw` | [Excalidraw](https://excalidraw.com) | snelle schetsen en wireframes | web | gratis / open source | – | – |
| `tldraw` | [tldraw](https://www.tldraw.com) | oneindig whiteboard | web | gratis / open source | – | – |
| `relume` | [Relume](https://www.relume.io) | sitemaps en wireframes met AI, 1.000+ secties | web | gratis tier | – | – |

### Dev-tools (`devtool`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `ccusage` | [ccusage](https://github.com/ryoppippi/ccusage) | zie hoeveel je Claude Code gebruikt | code | gratis / open source | – | – |
| `caniuse` | [Can I use](https://caniuse.com) | welke browsers ondersteunen deze feature? | web | gratis / open source | – | – |
| `bundlephobia` | [Bundlephobia](https://bundlephobia.com) | hoe zwaar is dit npm-pakket? | web | gratis / open source | – | – |
| `regex101` | [regex101](https://regex101.com) | regex testen met uitleg | web | gratis / open source | – | – |
| `transform` | [transform.tools](https://transform.tools) | JSON naar TypeScript, SVG naar JSX en meer | web | gratis / open source | – | – |
| `responsively` | [Responsively](https://responsively.app) | je site op alle schermformaten tegelijk | web | gratis / open source | – | – |
| `clippy` | [Clippy](https://bennettfeely.com/clippy) | CSS clip-path vormen maken | web | gratis / open source | – | – |
| `carbon` | [Carbon](https://carbon.now.sh) | mooie screenshots van code | web | gratis / open source | – | – |
| `rayso` | [ray.so](https://ray.so) | code-afbeeldingen voor social media | web | gratis / open source | – | – |
| `ghactions` | [GitHub Actions](https://docs.github.com/en/actions) | automatisch testen en deployen bij elke push | web | gratis tier | – | – |

### E-mail (`email`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `resend` | [Resend](https://resend.com) | e-mails versturen vanuit je app | service | gratis tier | – | env: `RESEND_API_KEY` |

### Editors (`editor`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `tiptap` | [Tiptap](https://tiptap.dev) | rich text editor, open-source kern | code: `npm i @tiptap/react @tiptap/starter-kit` | gratis / open source | – | – |
| `lexical` | [Lexical](https://lexical.dev) | snelle, uitbreidbare editor van Meta | code | gratis / open source | – | – |

### Fonts (`fonts`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `gfonts` | [Google Fonts](https://fonts.google.com) | gratis webfonts | code | gratis / open source | – | – |
| `fontshare` | [Fontshare](https://www.fontshare.com) | gratis fonts van hoge kwaliteit | code | gratis / open source | – | – |
| `uncut` | [Uncut](https://uncut.wtf) | gratis contemporaine fonts | code | gratis / open source | – | – |
| `fontpair` | [Fontpair](https://www.fontpair.co) | font-combinaties die werken | code | gratis / open source | – | – |
| `fontsource` | [Fontsource](https://fontsource.org) | fonts self-hosten via npm | code | gratis / open source | – | – |
| `collletttivo` | [Collletttivo](https://www.collletttivo.it) | gratis experimentele open-source fonts | web | gratis / open source | – | – |

### Formulier-diensten (`formsvc`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `formspree` | [Formspree](https://formspree.io) | formulieren versturen zonder backend | service | gratis tier | – | env: `NEXT_PUBLIC_FORMSPREE_ID` |
| `tally` | [Tally](https://tally.so) | mooie gratis formulieren om te embedden | service | gratis tier | – | – |

### Formulieren & validatie (`forms`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `zod` | [Zod](https://zod.dev) | input valideren met één schema | code: `npm i zod` | gratis / open source | – | – |
| `rhf` | [React Hook Form](https://react-hook-form.com) | snelle formulieren in React en React Native | code: `npm i react-hook-form` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` / `expo` | – |

### Grafieken & tabellen (`charts`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `tremor` | [Tremor](https://tremor.so) | dashboard-componenten en charts | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind` | – |
| `recharts` | [Recharts](https://recharts.org) | de standaard chartlibrary voor React | code: `npm i recharts` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `nivo` | [nivo](https://nivo.rocks) | rijke, geanimeerde datavisualisaties | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `chartjs` | [Chart.js](https://www.chartjs.org) | simpele charts in elk project | code: `npm i chart.js` | gratis / open source | – | – |
| `echarts` | [Apache ECharts](https://echarts.apache.org) | krachtige charts voor grote datasets | code: `npm i echarts` | gratis / open source | – | – |
| `tanstacktable` | [TanStack Table](https://tanstack.com/table/latest) | tabellen met sorteren, filteren en pagineren | code: `npm i @tanstack/react-table` | gratis / open source | – | – |
| `reactflow` | [React Flow](https://reactflow.dev) | diagrammen en node-editors | code: `npm i @xyflow/react` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |

### Hosting (`hosting`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `vercel` | [Vercel](https://vercel.com) | hosting voor Next.js en frontends | service | gratis tier | – | – |
| `netlify` | [Netlify](https://www.netlify.com) | hosting voor statische sites en frontends | service | gratis tier | – | – |
| `cfpages` | [Cloudflare Pages](https://pages.cloudflare.com) | gratis hosting op het Cloudflare-netwerk | service | gratis tier | – | – |
| `render` | [Render](https://render.com) | hosting voor web-apps, API's en databases | service | gratis tier | – | – |

### Hulpmiddelen (`utility`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `tsvirtual` | [TanStack Virtual](https://tanstack.com/virtual/latest) | lange lijsten zonder te haperen | code: `npm i @tanstack/react-virtual` | gratis / open source | – | – |
| `datefns` | [date-fns](https://date-fns.org) | datums rekenen en formatteren | code: `npm i date-fns` | gratis / open source | – | – |
| `dayjs` | [Day.js](https://day.js.org) | piepkleine datumlibrary | code: `npm i dayjs` | gratis / open source | – | – |

### Iconen (`icons`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `lucide` | [Lucide](https://lucide.dev) | strakke open-source iconen | code: `npm i lucide-react` | gratis / open source | – | werkt in React Native |
| `phosphor` | [Phosphor Icons](https://phosphoricons.com) | flexibele iconenfamilie in 6 gewichten | code: `npm i @phosphor-icons/react` | gratis / open source | – | werkt in React Native |
| `tabler` | [Tabler Icons](https://tabler.io/icons) | 5.000+ gratis iconen | code | gratis / open source | – | – |
| `heroicons` | [Heroicons](https://heroicons.com) | iconen van de makers van Tailwind | code | gratis / open source | – | – |
| `iconoir` | [Iconoir](https://iconoir.com) | 1.600+ gratis lijn-iconen | code | gratis / open source | – | – |
| `remixicon` | [Remix Icon](https://remixicon.com) | neutrale iconen in lijn en vlak | code | gratis / open source | – | – |
| `hugeicons` | [Hugeicons](https://hugeicons.com) | grote iconenset in meerdere stijlen | code | gratis tier | – | – |
| `radixicons` | [Radix Icons](https://www.radix-ui.com/icons) | strakke 15×15 iconen | code | gratis / open source | – | – |

### Iconen (extra) (`iconsx`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `iconify` | [Iconify](https://iconify.design) | zoeken in 200.000+ iconen uit alle sets | web | gratis / open source | – | – |
| `svgl` | [SVGL](https://svgl.app) | SVG-logo's van bekende merken | web | gratis / open source | – | – |
| `simpleicons` | [Simple Icons](https://simpleicons.org) | 3.000+ SVG-logo's van merken | web | gratis / open source | – | – |

### Inspiratie (`inspiration`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `ripplix` | [Ripplix](https://www.ripplix.com) | 7.000+ voorbeelden van UI-animaties | web | gratis tier | – | – |
| `bentogrids` | [Bento Grids](https://bentogrids.com) | voorbeelden van bento-layouts | web | gratis / open source | – | – |
| `refero` | [Refero Styles](https://styles.refero.design) | websitestijlen met een DESIGN.md voor Claude | web | gratis / open source | – | – |
| `godly` | [Godly](https://godly.website) | galerij met opvallend webdesign | web | gratis / open source | – | – |
| `awwwards` | [Awwwards](https://www.awwwards.com) | prijswinnende websites | web | gratis / open source | – | – |
| `landbook` | [Land-book](https://land-book.com) | landingspagina-inspiratie | web | gratis / open source | – | – |
| `siteinspire` | [SiteInspire](https://www.siteinspire.com) | webdesign op stijl en type | web | gratis / open source | – | – |
| `minimal` | [Minimal Gallery](https://minimal.gallery) | minimalistische websites | web | gratis / open source | – | – |
| `supahero` | [Supahero](https://supahero.io) | alleen hero-secties | web | gratis / open source | – | – |
| `lapa` | [Lapa Ninja](https://www.lapa.ninja) | landingspagina's per categorie | web | gratis / open source | – | – |
| `typewolf` | [Typewolf](https://www.typewolf.com) | welke fonts echte sites gebruiken | web | gratis / open source | – | – |
| `fontsinuse` | [Fonts In Use](https://fontsinuse.com) | archief van typografie in de praktijk | web | gratis / open source | – | – |
| `dribbble` | [Dribbble](https://dribbble.com) | UI-shots van designers | web | gratis / open source | – | – |
| `behance` | [Behance](https://www.behance.net) | complete design-cases | web | gratis / open source | – | – |
| `onepagelove` | [One Page Love](https://onepagelove.com) | websites van één pagina | web | gratis / open source | – | – |
| `saaslp` | [SaaS Landing Page](https://saaslandingpage.com) | landingspagina's van SaaS-producten | web | gratis / open source | – | – |
| `landingfolio` | [Landingfolio](https://www.landingfolio.com) | landingspagina's en componenten | web | gratis / open source | – | – |
| `darkmode` | [Dark Mode Design](https://www.darkmodedesign.com) | alleen websites in dark mode | web | gratis / open source | – | – |
| `collectui` | [Collect UI](https://collectui.com) | UI-ontwerpen per type scherm | web | gratis / open source | – | – |
| `navbar` | [Navbar Gallery](https://www.navbar.gallery) | alleen navigatiebalken | web | gratis / open source | – | – |
| `cssda` | [CSS Design Awards](https://www.cssdesignawards.com) | prijswinnende webdesigns | web | gratis / open source | – | – |
| `codrops` | [Codrops](https://tympanus.net/codrops) | creatieve tutorials en demo's | web | gratis / open source | – | – |
| `codepen` | [CodePen](https://codepen.io) | front-end experimenten om van te leren | web | gratis tier | – | – |

### Kaarten (`maps`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `leaflet` | [Leaflet](https://leafletjs.com) | simpele interactieve kaarten | code: `npm i leaflet` | gratis / open source | – | – |
| `maplibre` | [MapLibre](https://maplibre.org) | snelle vector-kaarten, open source | code: `npm i maplibre-gl` | gratis / open source | – | – |

### Kleur & achtergronden (`color`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `randoma11y` | [RandomA11y](https://randoma11y.com) | toegankelijke kleurcombinaties | web | gratis / open source | – | – |
| `coolors` | [Coolors](https://coolors.co) | kleurenpaletten genereren | web | gratis tier | – | – |
| `realtime` | [Realtime Colors](https://www.realtimecolors.com) | kleuren en fonts live op een voorbeeldsite testen | web | gratis / open source | – | – |
| `uicolors` | [UI Colors](https://uicolors.app) | Tailwind-kleurschalen uit één kleur | web | gratis / open source | – | – |
| `radixcolors` | [Radix Colors](https://www.radix-ui.com/colors) | 12-staps kleurschalen met light en dark mode, contrast al uitgerekend | web | gratis / open source | – | – |
| `haikei` | [Haikei](https://haikei.app) | SVG-vormen, golven en blobs | web | gratis / open source | – | – |
| `fffuel` | [fffuel](https://www.fffuel.co) | gratis SVG-generators voor achtergronden | web | gratis / open source | – | – |
| `patterncraft` | [Pattern Craft](https://patterncraft.fun) | achtergrondpatronen voor Tailwind | web | gratis / open source | – | – |
| `cssgradient` | [CSS Gradient](https://cssgradient.io) | gradients maken en kopiëren | web | gratis / open source | – | – |
| `huemint` | [Huemint](https://huemint.com) | AI-kleurenpaletten op een echte layout | web | gratis / open source | – | – |
| `colorhunt` | [Color Hunt](https://colorhunt.co) | populaire paletten van vier kleuren | web | gratis / open source | – | – |
| `adobecolor` | [Adobe Color](https://color.adobe.com) | kleurharmonieën en contrast-check | web | gratis / open source | – | – |
| `oklch` | [OKLCH Color Picker](https://oklch.com) | moderne CSS-kleuren kiezen | web | gratis / open source | – | – |
| `happyhues` | [Happy Hues](https://www.happyhues.co) | paletten met voorbeeld van hoe je ze toepast | web | gratis / open source | – | – |

### Leren (`learn`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `awesomecc` | [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | de bekendste lijst met Claude Code-tools | web | gratis / open source | – | – |
| `cctoolkit` | [awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) | agents, skills, hooks en plugins in één repo | web | gratis / open source | – | – |
| `fetoolkit` | [Claude Code Frontend Design Toolkit](https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit) | alles voor mooiere frontends uit Claude Code | web | gratis / open source | – | – |
| `skillssh` | [skills.sh](https://skills.sh) | zoekmachine voor agent skills | web | gratis / open source | – | – |
| `gittrend` | [gittrend.io](https://gittrend.io) | populaire nieuwe GitHub-repos | web | gratis / open source | – | – |
| `byox` | [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x) | bouw bekende technologie zelf na | web | gratis / open source | – | – |
| `awesome` | [Awesome](https://github.com/sindresorhus/awesome) | lijsten over elk onderwerp | web | gratis / open source | – | – |
| `fcc` | [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | gestructureerd leren programmeren | web | gratis / open source | – | – |
| `fpb` | [Free Programming Books](https://github.com/EbookFoundation/free-programming-books) | duizenden gratis boeken | web | gratis / open source | – | – |
| `sdp` | [System Design Primer](https://github.com/donnemartin/system-design-primer) | schaalbare architectuur leren | web | gratis / open source | – | – |
| `roadmap` | [Developer Roadmap](https://roadmap.sh) | visuele leerpaden per rol | web | gratis / open source | – | – |
| `ciu` | [Coding Interview University](https://github.com/jwasham/coding-interview-university) | algoritmes en datastructuren | web | gratis / open source | – | – |
| `awesomepy` | [Awesome Python](https://github.com/vinta/awesome-python) | Python-libraries en tools | web | gratis / open source | – | – |
| `pbl` | [Project Based Learning](https://github.com/practical-tutorials/project-based-learning) | leren door te bouwen | web | gratis / open source | – | – |
| `codedex` | [Codédex](https://www.codedex.io) | leren coderen met projecten | web | gratis tier | – | – |
| `josh` | [Josh W. Comeau](https://www.joshwcomeau.com) | de beste uitleg over CSS en React | web | gratis / open source | – | – |
| `mdn` | [MDN Web Docs](https://developer.mozilla.org) | naslagwerk voor HTML, CSS en JS | web | gratis / open source | – | – |
| `webdev` | [web.dev](https://web.dev) | performance en toegankelijkheid (Google) | web | gratis / open source | – | – |
| `fementor` | [Frontend Mentor](https://www.frontendmentor.io) | oefenen met echte designs | web | gratis tier | – | – |
| `odin` | [The Odin Project](https://www.theodinproject.com) | gratis full-stack curriculum | web | gratis / open source | – | – |
| `scrimba` | [Scrimba](https://scrimba.com) | interactieve codeer-video's | web | gratis tier | – | – |
| `cssbattle` | [CSS Battle](https://cssbattle.dev) | CSS-puzzels op tijd | web | gratis / open source | – | – |
| `froggy` | [Flexbox Froggy](https://flexboxfroggy.com) | flexbox leren met een spel | web | gratis / open source | – | – |
| `gridgarden` | [Grid Garden](https://cssgridgarden.com) | CSS grid leren met een spel | web | gratis / open source | – | – |
| `jsinfo` | [javascript.info](https://javascript.info) | moderne JavaScript-tutorial | web | gratis / open source | – | – |
| `tshandbook` | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) | officiële TypeScript-gids | web | gratis / open source | – | – |
| `kevinpowell` | [Kevin Powell (YouTube)](https://www.youtube.com/@KevinPowell) | de beste CSS-uitleg op YouTube | web | gratis / open source | – | – |
| `nextlearn` | [Next.js Learn](https://nextjs.org/learn) | officiële gratis cursus | web | gratis / open source | – | – |
| `mdnlearn` | [MDN: leer webdevelopment](https://developer.mozilla.org/en-US/docs/Learn_web_development) | complete gratis leerroute | web | gratis / open source | – | – |
| `expodocs` | [Expo docs](https://docs.expo.dev) | officiële handleiding voor Expo | web | gratis / open source | – | – |
| `rndocs` | [React Native docs](https://reactnative.dev) | de basis van React Native | web | gratis / open source | – | – |
| `awesomeskills` | [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills) | de grote lijst met skills per onderwerp | web | gratis / open source | – | – |

### Login (`auth`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `clerk` | [Clerk](https://clerk.com) | kant-en-klare login en accounts | service | gratis tier | – | env: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` |
| `authjs` | [Auth.js](https://authjs.dev) | open-source login voor elk framework | service | gratis / open source | – | – |
| `betterauth` | [Better Auth](https://www.better-auth.com) | moderne TypeScript-auth die je zelf host | service | gratis / open source | – | – |

### Logo & branding (`logo`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `iplogo` | [IP-as-logo skill](https://github.com/s1dashu/ip-as-logo-skill) | schattige mascottelogo's | skill | gratis / open source | – | – |
| `logoskill` | [Logo Design Skill](https://github.com/kaankiziltug/logo-design-skill) | van briefing tot SVG, favicon-set en brand guidelines | skill | gratis / open source | – | – |

### MCP-koppelingen (`mcp`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `supamcp` | [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) | Claude praat direct met je database | mcp | gratis tier | `supabase` | env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY # alleen op de server` · MCP-naam: supabase |
| `vercelmcp` | [Vercel MCP](https://vercel.com/docs/mcp/vercel-mcp) | "deploy my app" en het staat live | mcp: `claude mcp add --transport http vercel https://mcp.vercel.com` | gratis tier | `vercel` | MCP-naam: vercel |
| `figmamcp` | [Figma MCP](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) | Claude leest je Figma-ontwerp: lagen, maten, tokens | mcp | gratis tier | `figma` | MCP-naam: figma |
| `context7` | [Context7](https://github.com/upstash/context7) | actuele, versie-specifieke docs van libraries in je prompt | mcp: `claude mcp add context7 -- npx -y @upstash/context7-mcp` | gratis tier | – | MCP-naam: context7 |
| `shadcnmcp` | [shadcn MCP](https://ui.shadcn.com/docs/mcp) | componenten zoeken en installeren uit shadcn-registries | mcp | gratis / open source | `shadcn` | MCP-naam: shadcn |
| `githubmcp` | [GitHub MCP](https://github.com/github/github-mcp-server) | issues, PR's en Actions vanuit Claude | mcp | gratis tier | – | env: `GITHUB_PAT` · MCP-naam: github |
| `magicmcp` | [21st MCP (Magic)](https://21st.dev/mcp) | zoek 10.000+ React/Tailwind-componenten vanuit Claude | mcp | gratis tier | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind` | – |
| `serena` | [Serena](https://github.com/oraios/serena) | IDE-achtige code-navigatie voor je agent | mcp | gratis / open source | – | – |
| `firecrawl` | [Firecrawl MCP](https://github.com/firecrawl/firecrawl-mcp-server) | websites scrapen en doorzoeken vanuit Claude | mcp | gratis tier | – | env: `FIRECRAWL_API_KEY` · MCP-naam: firecrawl |
| `stripemcp` | [Stripe MCP](https://docs.stripe.com/mcp) | Stripe-producten en betalingen beheren vanuit Claude | mcp | transactiekosten | `stripe` | env: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET` · MCP-naam: stripe |

### Meertaligheid (`i18n`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `i18next` | [i18next](https://www.i18next.com) | meertalige apps, web en native | code: `npm i i18next react-i18next` | gratis / open source | – | – |
| `nextintl` | [next-intl](https://github.com/amannn/next-intl) | meertaligheid voor Next.js | code: `npm i next-intl` | gratis / open source | `nextjs` | – |

### Mobiel & desktop (`native`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `capacitor` | [Capacitor](https://capacitorjs.com) | je bestaande webapp als iOS- en Android-app | code | gratis / open source | – | – |
| `tauri` | [Tauri](https://tauri.app) | kleine, veilige desktop-apps met webtechniek | code | gratis / open source | – | – |
| `electron` | [Electron](https://www.electronjs.org) | desktop-apps met web, zoals VS Code | code | gratis / open source | – | – |
| `exporouter` | [Expo Router](https://docs.expo.dev/router/introduction/) | navigatie op basis van bestanden in je Expo-app | code | gratis / open source | `expo` | werkt in React Native |

### Monitoring (`monitor`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `sentry` | [Sentry](https://sentry.io) | fouten in productie zien voordat gebruikers klagen | service | gratis tier | – | env: `NEXT_PUBLIC_SENTRY_DSN` |
| `posthog` | [PostHog](https://posthog.com) | analytics, session replays en feature flags | service | gratis tier | – | – |
| `umami` | [Umami](https://umami.is) | simpele, privacyvriendelijke analytics | service | gratis tier | – | env: `NEXT_PUBLIC_UMAMI_WEBSITE_ID` |

### Motion, 3D & effecten (`motionx`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `lenis` | [Lenis](https://lenis.darkroom.engineering) | smooth scrolling | code: `npm i lenis` | gratis / open source | – | – |
| `threejs` | [Three.js](https://threejs.org) | 3D in de browser | code: `npm i three` | gratis / open source | – | – |
| `rive` | [Rive](https://rive.app) | interactieve motion graphics | service | gratis tier | – | – |
| `taxi` | [Taxi.js](https://taxi.js.org) | paginatransities | code | gratis / open source | – | – |
| `spline` | [Spline](https://spline.design) | 3D-scènes ontwerpen en embedden zonder code | service | gratis tier | – | – |
| `unicorn` | [Unicorn Studio](https://unicorn.studio) | WebGL-effecten en achtergronden zonder code | service | gratis tier | – | – |
| `lottie` | [LottieFiles](https://lottiefiles.com) | lichte vector-animaties (Lottie) | code | gratis tier | – | – |
| `theatre` | [Theatre.js](https://www.theatrejs.com) | timeline-editor voor web- en 3D-animatie | code | gratis / open source | – | – |
| `autoanimate` | [AutoAnimate](https://auto-animate.formkit.com) | één regel code voor lijst- en layout-animaties | code | gratis / open source | – | – |
| `dotmatrix` | [Dot Matrix](https://dotmatrix.zzzzshawn.cloud) | moderne loading-animaties | web | gratis / open source | – | – |
| `shaders` | [Shaders](https://shaders.com) | WebGPU-shadereffecten voor React, Vue, Svelte | code | gratis / open source | – | – |
| `barba` | [Barba.js](https://barba.js.org) | vloeiende paginatransities | code | gratis / open source | – | – |
| `vanta` | [Vanta.js](https://www.vantajs.com) | geanimeerde 3D-achtergronden met één regel | code | gratis / open source | – | – |
| `tsparticles` | [tsParticles](https://particles.js.org) | deeltjes-effecten, confetti en vuurwerk | code | gratis / open source | – | – |
| `gsapst` | [ScrollTrigger (GSAP)](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | animaties koppelen aan de scrollpositie | code | gratis / open source | `gsap` | – |
| `gsapsplit` | [SplitText (GSAP)](https://gsap.com/docs/v3/Plugins/SplitText/) | tekst per letter, woord of regel animeren | code | gratis / open source | `gsap` | – |
| `gsapflip` | [Flip (GSAP)](https://gsap.com/docs/v3/Plugins/Flip/) | vloeiende layout-wissels, bijv. bij filteren | code | gratis / open source | `gsap` | – |
| `gsapmorph` | [MorphSVG (GSAP)](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) | de ene SVG-vorm in de andere laten overvloeien | code | gratis / open source | `gsap` | – |
| `gsapdraw` | [DrawSVG (GSAP)](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) | SVG-lijnen laten tekenen | code | gratis / open source | `gsap` | – |
| `gsapsmoother` | [ScrollSmoother (GSAP)](https://gsap.com/docs/v3/Plugins/ScrollSmoother/) | smooth scrolling van GSAP zelf | code | gratis / open source | `gsap` | – |
| `gsapreact` | [useGSAP (@gsap/react)](https://gsap.com/resources/React/) | GSAP netjes gebruiken in React, met automatische cleanup | code: `npm i @gsap/react` | gratis / open source | `gsap`; `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `mojs` | [mo.js](https://mojs.github.io) | speelse motion graphics: bursts, vormen, confetti | code | gratis / open source | – | – |
| `tweenjs` | [Tween.js](https://tweenjs.github.io/tween.js/) | minimale tween-engine, vaak met Three.js | code | gratis / open source | – | – |
| `locomotive` | [Locomotive Scroll](https://scroll.locomotive.ca) | smooth scroll met parallax, gebouwd op Lenis | code | gratis / open source | – | – |
| `aos` | [AOS](https://michalsnik.github.io/aos/) | simpele animaties als elementen in beeld scrollen | code | gratis / open source | – | – |
| `swup` | [Swup](https://swup.js.org) | paginatransities voor server-gerenderde sites | code | gratis / open source | – | – |
| `splitting` | [Splitting.js](https://splitting.js.org) | tekst splitsen voor CSS-animaties | code | gratis / open source | – | – |
| `typedjs` | [Typed.js](https://mattboldt.com/demos/typed-js/) | typemachine-effect | code | gratis / open source | – | – |
| `vivus` | [Vivus](https://maxwellito.github.io/vivus/) | SVG's die zichzelf tekenen | code | gratis / open source | – | – |
| `animatecss` | [Animate.css](https://animate.style) | kant-en-klare CSS-animaties | code | gratis / open source | – | – |
| `twmotion` | [Tailwind Motion](https://rombo.co/tailwind/) | animaties als Tailwind-klassen | code | gratis / open source | `tailwind` | – |
| `moti` | [Moti](https://moti.fyi) | simpele animatie-API bovenop Reanimated | code | gratis / open source | `reanimated` | werkt in React Native |

### Opslag & media (`storage`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `upstash` | [Upstash](https://upstash.com) | serverless Redis en queues | service | gratis tier | – | env: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` |
| `uploadthing` | [UploadThing](https://uploadthing.com) | bestands-uploads voor TypeScript-apps | service | gratis tier | – | env: `UPLOADTHING_TOKEN` |
| `cloudinary` | [Cloudinary](https://cloudinary.com) | afbeeldingen en video automatisch optimaliseren | service | gratis tier | – | – |

### PWA & offline (`pwa`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `vitepwa` | [Vite PWA](https://vite-pwa-org.netlify.app) | maak van een Vite-app een installeerbare, offline PWA | code: `npm i -D vite-plugin-pwa` | gratis / open source | `vite` / `astro` / `sveltekit` / `nuxt` | – |
| `serwist` | [Serwist](https://serwist.pages.dev) | offline en installeerbaar voor Next.js | code | gratis / open source | `nextjs` | – |

### Realtime (`realtime`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `suprealtime` | [Supabase Realtime](https://supabase.com/docs/guides/realtime) | live updates, presence en chat | code | gratis / open source | `supabase` | – |
| `liveblocks` | [Liveblocks](https://liveblocks.io) | samenwerken in realtime: cursors, comments, sync | service | gratis tier | – | – |

### Regels & skills voor Claude (`rules`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `agentskills` | [Agent Skills (Addy Osmani)](https://github.com/addyosmani/agent-skills) | 25 skills en commando's als /spec, /plan, /build, /review en /ship | skill: `npx skills add addyosmani/agent-skills` | gratis / open source | – | – |
| `superpowers` | [Superpowers](https://github.com/obra/superpowers) | skills-framework: plannen, TDD, debuggen | plugin | gratis / open source | – | – |
| `karpathy` | [andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | één CLAUDE.md met vier regels tegen gretige AI-code | file | gratis / open source | – | – |
| `uiuxpro` | [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | doorzoekbare database met stijlen, paletten en font-paren | plugin: `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` | gratis / open source | – | – |
| `vercelskills` | [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | React/Next.js best practices en web-design-review | skill | gratis / open source | – | – |
| `wig` | [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) | checklist voor toegankelijke, snelle interfaces | skill | gratis / open source | – | – |
| `mattpocock` | [Matt Pocock Skills](https://github.com/mattpocock/skills) | kleine skills tegen de bekende fouten: /grill-me laat Claude je eerst interviewen, plus /tdd en debuggen | skill: `npx skills@latest add mattpocock/skills` | gratis / open source | – | – |
| `caveman` | [Caveman](https://github.com/JuliusBrussee/caveman) | korte antwoorden zonder omhaal, tot ~65% minder tokens; code blijft intact | skill: `npx skills add JuliusBrussee/caveman -g` | gratis / open source | – | – |
| `archify` | [Archify](https://github.com/tt-a1i/archify) | architectuurdiagrammen als los HTML-bestand, vanuit een zin of een repo | skill: `npx skills add tt-a1i/archify -g` | gratis / open source | – | – |

### State management (`state`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `zustand` | [Zustand](https://zustand.docs.pmnd.rs) | simpele, kleine state management voor React en React Native | code: `npm i zustand` | gratis / open source | – | – |
| `jotai` | [Jotai](https://jotai.org) | state in kleine losse 'atoms' | code: `npm i jotai` | gratis / open source | – | – |

### Styling (`styling`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `tailwind` | [Tailwind CSS](https://tailwindcss.com) | utility-first styling | code | gratis / open source | – | – |
| `nativewind` | [NativeWind](https://www.nativewind.dev) | Tailwind-klassen in React Native | code | gratis / open source | `expo` | werkt in React Native |

### Testen (`test`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `cdtmcp` | [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Claude kijkt mee in een echte browser | mcp: `claude mcp add chrome-devtools npx chrome-devtools-mcp@latest` | gratis / open source | – | MCP-naam: chrome-devtools |
| `pwmcp` | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Claude klikt en test in een echte browser | mcp: `claude mcp add playwright npx @playwright/mcp@latest` | gratis / open source | – | MCP-naam: playwright |
| `playwright` | [Playwright](https://playwright.dev) | end-to-end tests in echte browsers | code | gratis / open source | – | – |
| `vitest` | [Vitest](https://vitest.dev) | snelle unit tests | code: `npm i -D vitest` | gratis / open source | – | – |
| `testinglib` | [Testing Library](https://testing-library.com) | componenten testen zoals een gebruiker | code | gratis / open source | – | – |

### UI-componenten (`uikit`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `kokonut` | [Kokonut UI](https://kokonutui.com) | 100+ gratis componenten (React, Tailwind, Motion) | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind`; `motion` | – |
| `bklit` | [Bklit UI](https://bklit.com) | charts en datavisualisatie op shadcn/ui | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind`; `shadcn` | – |
| `aceternity` | [Aceternity UI](https://ui.aceternity.com) | 200+ geanimeerde componenten voor landingspagina's | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind`; `motion` | – |
| `magicui` | [Magic UI](https://magicui.design) | 150+ geanimeerde componenten voor shadcn-projecten | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind`; `shadcn`; `motion` | – |
| `reactbits` | [React Bits](https://reactbits.dev) | geanimeerde tekst, achtergronden en componenten | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `c21st` | [21st.dev](https://21st.dev) | community-registry met React-componenten | code | gratis tier | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind` | – |
| `motionprim` | [Motion Primitives](https://motion-primitives.com) | animatiebouwstenen voor React | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind`; `motion` | – |
| `animata` | [Animata](https://animata.design) | handgemaakte animaties en interacties | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind` | – |
| `cultui` | [Cult UI](https://cult-ui.com) | opvallende shadcn-componenten | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind`; `shadcn` | – |
| `shadcn` | [shadcn/ui](https://ui.shadcn.com) | basiscomponenten die je zelf bezit en aanpast | code: `npx shadcn@latest init` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind` | – |
| `daisyui` | [daisyUI](https://daisyui.com) | componentklassen als Tailwind-plugin, ook zonder React | code | gratis / open source | `tailwind` | – |
| `uiverse` | [Uiverse](https://uiverse.io) | gratis HTML/CSS-elementen om te kopiëren | web | gratis / open source | – | – |
| `radix` | [Radix UI](https://www.radix-ui.com) | toegankelijke primitives zonder styling | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `baseui` | [Base UI](https://base-ui.com) | toegankelijke primitives, de nieuwe basis onder shadcn | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `heroui` | [HeroUI](https://www.heroui.com) | mooie complete componentset op Tailwind | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart`; `tailwind` | – |
| `mantine` | [Mantine](https://mantine.dev) | 100+ componenten en hooks, alles erin | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `chakra` | [Chakra UI](https://chakra-ui.com) | toegankelijke componenten met thema-systeem | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `ark` | [Ark UI](https://ark-ui.com) | headless componenten voor React, Vue, Svelte | code | gratis / open source | – | – |
| `flowbite` | [Flowbite](https://flowbite.com) | Tailwind-componenten, ook zonder framework | code | gratis / open source | `tailwind` | – |
| `preline` | [Preline](https://preline.co) | gratis Tailwind-componenten en secties | code | gratis / open source | `tailwind` | – |
| `sonner` | [Sonner](https://sonner.emilkowal.ski) | de mooiste toast-meldingen voor React | code: `npm i sonner` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `vaul` | [Vaul](https://vaul.emilkowal.ski) | drawers die aanvoelen als een native app | code: `npm i vaul` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `cmdk` | [cmdk](https://cmdk.paco.me) | command-menu (⌘K) voor React | code: `npm i cmdk` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `headlessui` | [Headless UI](https://headlessui.com) | toegankelijke componenten van het Tailwind-team | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `floatingui` | [Floating UI](https://floating-ui.com) | tooltips en popovers die goed positioneren | code | gratis / open source | – | – |
| `dndkit` | [dnd kit](https://dndkit.com) | drag-and-drop voor React | code | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `swiper` | [Swiper](https://swiperjs.com) | sliders en carrousels | code: `npm i swiper` | gratis / open source | – | – |
| `embla` | [Embla Carousel](https://www.embla-carousel.com) | lichte, vloeiende carrousel | code | gratis / open source | – | – |
| `daypicker` | [React DayPicker](https://daypicker.dev) | toegankelijke datumkiezer (basis van shadcn Calendar) | code: `npm i react-day-picker` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `schedulex` | [Schedule-X](https://schedule-x.dev) | agenda-weergaves: dag, week, maand | code | gratis / open source | – | – |
| `uppy` | [Uppy](https://uppy.io) | complete upload-interface met voortgang | code | gratis / open source | – | – |
| `dropzone` | [react-dropzone](https://react-dropzone.js.org) | drag-and-drop uploadvlak | code: `npm i react-dropzone` | gratis / open source | `nextjs` / `vite` / `astro` / `reactrouter` / `tsstart` | – |
| `rnr` | [React Native Reusables](https://reactnativereusables.com) | shadcn/ui-stijl componenten voor React Native | code | gratis / open source | `nativewind` | werkt in React Native |
| `tamagui` | [Tamagui](https://tamagui.dev) | UI-kit en styling voor web én native | code | gratis / open source | `expo` | werkt in React Native |
| `gluestack` | [gluestack UI](https://gluestack.io) | toegankelijke componenten voor React Native | code | gratis / open source | `expo` | werkt in React Native |

### Video & content (`video`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `jitter` | [Jitter](https://jitter.video) | motion design in de browser | web | gratis tier | – | – |
| `flow` | [Google Flow](https://labs.google/flow) | animaties en preloaders maken met AI, zonder code | web | gratis tier | – | – |
| `shots` | [Shots](https://shots.so) | mooie mockups van screenshots | web | gratis tier | – | – |
| `remotion` | [Remotion](https://www.remotion.dev) | video's maken met React-code | web | gratis voor particulieren | – | – |
| `motioncanvas` | [Motion Canvas](https://motioncanvas.io) | uitlegvideo's en animaties met TypeScript | web | gratis / open source | – | – |

### Zoeken (`search`)

| Key | Tool | Wat | Install | Prijs | Vereist één van | Extra |
|---|---|---|---|---|---|---|
| `meilisearch` | [Meilisearch](https://www.meilisearch.com) | razendsnelle zoekfunctie, open source | service | gratis self-hosted | – | – |

## Projecttemplates

### Compound: habits-app die blijft werken (Webapp, Gevorderd)
Een webapp voor routines, discipline en gewoontes, gebouwd op gedragswetenschap: één gewoonte tegelijk, een mini-versie die altijd lukt, als-dan-plannen, nooit twee keer missen, en gewoontes die 'afstuderen' zodra ze vanzelf gaan.

Stack: `nextjs`, `ts`, `tailwind`, `shadcn`, `lucide`, `motion`, `supabase`, `rls`, `rhf`, `zod`, `tanstack`, `datefns`, `serwist`, `webpush`, `inngest`, `resend`, `recharts`, `aisdk`, `posthog`, `sentry`, `vitest`, `playwright`, `biome`, `vercel`, `supamcp`, `vercelmcp`, `context7`, `pwmcp`, `karpathy`, `fedesign`

1. Fundament: Next.js, Supabase-schema met RLS, magic-link login, PWA-basis
2. Onboarding: identiteit → één gewoonte → mini-versie → als-dan-plan
3. Vandaag: check-in in één tik, viering en stemmen, offline
4. Voortgang: heatmap, consistentie, nooit-twee-keer-missen en herontwerp
5. Ritme: push-herinneringen op lokale tijd en de weekreview
6. Blijvend: automatisme-check en afstuderen naar Fundament
7. Lancering: maatje, optionele AI-coach, analytics en privacy

### Portfolio met een bento-hero (Website, Starter)
Een persoonlijke site waar je werk in modulaire kaarten staat, met subtiele animaties bij hover.

Stack: `nextjs`, `tailwind`, `shadcn`, `kokonut`, `motion`, `refero`, `fontshare`, `lucide`, `karpathy`, `fedesign`, `vercel`, `vercelmcp`, `pwmcp`

1. Kies een stijl op Refero Styles en geef de DESIGN.md aan Claude
2. Schets de bento-hero in Figma of op papier
3. Laat Claude het bouwen met Kokonut UI-componenten
4. Deploy met de Vercel MCP

### Claude Code starterkit (Website, Starter)
Eén template-repo die je voor elk nieuw project kloont, met al je regels en plugins klaar.

Stack: `karpathy`, `mattpocock`, `ponytail`, `caveman`, `agentskills`, `context7`, `graphify`, `pwmcp`

1. Zet de vier CLAUDE.md-regels in de root
2. Voeg de /docs-map met SECURITY.md, CODE_STYLE.md, DATABASE.md en API.md toe
3. Installeer Ponytail en Agent Skills
4. Draai Graphify zodra het project groeit

### Merk in een weekend (Website, Starter)
Logo, kleuren en een geanimeerde logo-intro voor een fictief (of echt) merk.

Stack: `logoskill`, `randoma11y`, `fontshare`, `jitter`, `refero`

1. Laat de logo-skill een briefing en drie concepten maken
2. Kies een toegankelijk kleurenpaar met RandomA11y
3. Animeer het logo in Jitter
4. Leg alles vast in een DESIGN_SYSTEM.md

### Launch-video voor je app (Website, Starter)
Een korte promo: je app in een mooie mockup met strakke motion.

Stack: `shots`, `jitter`, `remotion`, `rayso`

1. Maak screenshots van je app en zet ze in een mockup met Shots
2. Voeg titels en overgangen toe in Jitter
3. Of bouw de hele video met React-code in Remotion
4. Maak code-afbeeldingen voor social met ray.so

### Sfeervolle weer-site (Website, Starter)
De achtergrond verandert mee met het weer: rustig bij zon, onrustig bij storm.

Stack: `vite`, `tailwind`, `publicapis`, `shaders`, `motion`, `dotmatrix`, `phosphor`, `netlify`

1. Zoek een gratis weer-API in Public APIs
2. Koppel het weertype aan shader-instellingen
3. Gebruik een Dot Matrix-loader tijdens het ophalen
4. Animeer de temperatuur met Motion

### Linkpagina met micro-animaties (Website, Starter)
Je eigen "link in bio"-pagina met één opvallend effect en je eigen iconen.

Stack: `astro`, `tailwind`, `reactbits`, `svgl`, `uncut`, `haikei`, `netlify`

1. Kies één achtergrond-effect uit React Bits
2. Maak een SVG-achtergrond met Haikei
3. Gebruik merk-logo's van SVGL voor je socials
4. Publiceer op Netlify

### Café-finder met favorieten (Webapp, Gemiddeld)
Vind cafés in de buurt en sla je favorieten op in je eigen account.

Stack: `nextjs`, `tailwind`, `shadcn`, `places`, `supabase`, `supamcp`, `rls`, `lucide`, `vercel`, `pwmcp`

1. Haal cafés op met de Places API
2. Laat Claude een favorieten-tabel maken via de Supabase MCP
3. Zet RLS aan zodat ieder alleen zijn eigen favorieten ziet
4. Deploy via Vercel en test met Playwright MCP

### Persoonlijk habit-dashboard (Webapp, Gemiddeld)
Houd gewoontes bij (sporten, lezen, water) en zie je voortgang in grafieken.

Stack: `nextjs`, `tailwind`, `shadcn`, `bklit`, `motion`, `supabase`, `supamcp`, `rls`, `cdtmcp`, `vercel`

1. Ontwerp datakaarten met Bklit UI-charts
2. Sla check-ins op in Supabase
3. Voeg micro-animaties toe met Motion
4. Laat Claude de UI testen via de Chrome DevTools MCP

### Sign-up flow met een mascotte (Website, Gemiddeld)
Een registratiepagina waar een mascotte meekijkt terwijl je typt en blij wordt als het lukt.

Stack: `nextjs`, `tailwind`, `iplogo`, `boring`, `motion`, `haikei`, `supabase`, `rls`, `resend`, `vercel`

1. Maak een mascotte met de IP-as-logo skill (of start met Boring Avatars)
2. Laat de mascotte reageren op focus en typen met Motion
3. Maak een hero-achtergrond met Haikei
4. Koppel echte auth via Supabase en stuur een welkomstmail met Resend

### Scrollverhaal over data (Website, Gemiddeld)
Een data-verhaal dat zich ontvouwt terwijl je scrolt, bijvoorbeeld over bestsellers.

Stack: `astro`, `tailwind`, `pandas`, `gsap`, `lenis`, `gfonts`, `netlify`

1. Analyseer de dataset met pandas en exporteer JSON
2. Teken de grafieken als SVG
3. Laat grafieken in beeld animeren met ScrollTrigger
4. Maak het scrollen vloeiend met Lenis

### Landingspagina uit Figma (Website, Gemiddeld)
Ontwerp eerst in Figma, laat Claude het daarna pixel-precies bouwen.

Stack: `figma`, `figmamcp`, `nextjs`, `tailwind`, `shadcn`, `aceternity`, `motion`, `context7`, `pwmcp`, `vercel`

1. Ontwerp de pagina in Figma met auto-layout
2. Koppel de Figma MCP en laat Claude sectie voor sectie bouwen
3. Voeg één wow-effect toe uit Aceternity UI
4. Vergelijk het resultaat in de browser met Playwright MCP

### Browsergame met leaderboard (Webapp, Gemiddeld)
Een klein 3D-spelletje met een online topscorelijst.

Stack: `vite`, `threejs`, `animejs`, `supabase`, `rls`, `netlify`

1. Bouw een simpele scène met Three.js
2. Gebruik Anime.js voor UI-animaties en score-pop-ups
3. Sla scores op in Supabase
4. Voorkom valsspelen met RLS en server-side checks

### Kanban-bord met drag-and-drop (Webapp, Gemiddeld)
Je eigen Trello: kolommen, kaartjes slepen en alles opgeslagen per gebruiker.

Stack: `nextjs`, `tailwind`, `shadcn`, `dndkit`, `sonner`, `supabase`, `supamcp`, `rls`, `zod`, `vercel`, `pwmcp`

1. Maak tabellen voor borden, kolommen en kaarten met RLS
2. Bouw slepen met dnd kit
3. Geef feedback met Sonner-toasts
4. Test het slepen met Playwright MCP

### Receptensite met CMS (Website, Gemiddeld)
Een mooie receptensite waar je nieuwe recepten toevoegt zonder code aan te raken.

Stack: `nextjs`, `tailwind`, `sanity`, `gfonts`, `phosphor`, `cloudinary`, `vercel`, `ogp`

1. Maak een recept-schema in Sanity
2. Laat Claude de pagina's genereren uit de CMS-data
3. Optimaliseer foto's met Cloudinary
4. Zorg voor mooie Open Graph-afbeeldingen per recept

### Kleine webshop (Website, Gevorderd)
Verkoop een paar producten (prints, stickers) met echte betalingen.

Stack: `nextjs`, `tailwind`, `shadcn`, `stripe`, `stripemcp`, `supabase`, `rls`, `resend`, `zod`, `vercel`, `sentry`, `pwmcp`

1. Zet producten in Stripe via de Stripe MCP
2. Gebruik Stripe Checkout en verwerk betalingen via webhooks
3. Stuur orderbevestigingen met Resend
4. Test de hele koopflow met Playwright MCP

### Mobiele habit-app (Mobiele app, Gevorderd)
Een echte app voor je telefoon, gebouwd met React Native.

Stack: `expo`, `exporouter`, `nativewind`, `reanimated`, `rnr`, `supabase`, `rls`, `zod`, `rhf`, `zustand`, `sentry`

1. Start een Expo-project en test op je eigen telefoon
2. Sla gewoontes op in Supabase met RLS
3. Valideer invoer met Zod
4. Zet Sentry aan voordat je de app deelt

### Notities-app met rich text (Webapp, Gemiddeld)
Je eigen Notion-light: notities met opmaak, mappen en zoeken.

Stack: `nextjs`, `tailwind`, `shadcn`, `tiptap`, `zustand`, `tanstack`, `supabase`, `supamcp`, `rls`, `zod`, `cmdk`, `vercel`, `pwmcp`

1. Maak tabellen voor notities en mappen met RLS
2. Bouw de editor met Tiptap
3. Zoek en spring met een ⌘K-menu
4. Sla automatisch op met een optimistic update

### Realtime chat-app (Webapp, Gemiddeld)
Chatten met vrienden, met 'aan het typen…' en wie er online is.

Stack: `nextjs`, `tailwind`, `shadcn`, `supabase`, `suprealtime`, `rls`, `zod`, `sonner`, `tsvirtual`, `vercel`

1. Tabellen voor kanalen en berichten met RLS
2. Live berichten en presence via Supabase Realtime
3. Lange gesprekken soepel met TanStack Virtual
4. Meldingen met Sonner

### Boekingsapp voor afspraken (Webapp, Gemiddeld)
Laat klanten een tijdslot kiezen en stuur automatisch een bevestiging.

Stack: `nextjs`, `tailwind`, `shadcn`, `daypicker`, `datefns`, `supabase`, `rls`, `zod`, `rhf`, `resend`, `vercel`, `sentry`

1. Beschikbaarheid opslaan in Supabase
2. Datum en tijdslot kiezen met React DayPicker
3. Valideer de boeking op de server met Zod
4. Bevestiging per mail met Resend

### AI-assistent voor je eigen notities (Webapp, Gevorderd)
Stel vragen over je eigen teksten en krijg streaming antwoorden.

Stack: `nextjs`, `tailwind`, `shadcn`, `aisdk`, `zod`, `supabase`, `rls`, `upstash`, `vercel`, `sentry`

1. Streaming chat met de AI SDK
2. API-key alleen op de server
3. Rate limit per gebruiker met Upstash
4. Log fouten in Sentry, nooit de inhoud van gebruikers

### Offline boodschappenlijst (PWA) (Webapp, Starter)
Een lijstje dat op je telefoon staat en ook zonder internet werkt.

Stack: `vite`, `tailwind`, `vitepwa`, `zustand`, `dndkit`, `netlify`

1. Start met Vite en Tailwind
2. Bewaar de lijst lokaal met Zustand
3. Maak hem installeerbaar en offline met Vite PWA
4. Sorteer items met slepen

### Desktop-notitie-app (Desktop-app, Gevorderd)
Een snelle notitie-app voor je computer, met sneltoetsen.

Stack: `tauri`, `vite`, `tailwind`, `zustand`, `lexical`, `cmdk`

1. Start een Tauri-project met Vite
2. Bewaar notities lokaal
3. Bouw de editor met Lexical
4. Voeg sneltoetsen en een ⌘K-menu toe

### Filmische fanpagina (Website, Gevorderd)
Een landingspagina voor je favoriete sporter, band of film, in de stijl van de Lando Norris-site.

Stack: `astro`, `gsap`, `lenis`, `threejs`, `rive`, `taxi`, `fontshare`, `netlify`, `awwwards`

1. Begin met Lenis en één ScrollTrigger-sectie
2. Voeg een 3D-object toe met Three.js
3. Maak een interactieve animatie in Rive
4. Verbind pagina's met Taxi.js-overgangen

### Stemassistent met een gezicht (Webapp, Gevorderd)
Een assistent die praat en een geanimeerd gezicht heeft dat meebeweegt met de stem.

Stack: `vite`, `tailwind`, `elevenlabs`, `rive`, `omniroute`

1. Zet spraak om met de ElevenLabs API
2. Maak een mondanimatie in Rive
3. Stuur de animatie aan met het volume van de audio
4. Gebruik OmniRoute zodat het model nooit stilvalt

### Mini-SaaS met login en e-mail (Webapp, Gevorderd)
Een klein betaald-product-idee: accounts, een dashboard en e-mails. Goede oefening in veilig bouwen.

Stack: `nextjs`, `tailwind`, `shadcn`, `magicui`, `motion`, `supabase`, `supamcp`, `rls`, `resend`, `vercel`, `vercelmcp`, `pwmcp`, `karpathy`, `vercelskills`, `context7`

1. Schrijf eerst SECURITY.md en DATABASE.md
2. Bouw auth en tabellen met RLS via de Supabase MCP
3. Maak het dashboard met shadcn/ui en Magic UI
4. Test de flows met Playwright MCP en deploy via Vercel

## UI-patronen (met tools)

- **Hero-basis: zo bouw je een sterke hero**: Geen fancy effecten nodig: een simpele structuur, een heldere boodschap en een layout die meteen indruk maakt. Schets hem eerst in Figma. Tools: `figma`, `supahero`, `landbook`, `godly`.
- **Hero-variant: Bento box**: Modulaire kaarten in een strak grid. Organiseert veel informatie zonder te overweldigen. Sterk voor portfolio's en SaaS met meerdere features. Tools: `magicui`, `aceternity`, `bentogrids`, `motion`.
- **Hero-variant: Brutalist billboard**: 90% van het scherm is je naam. Pure dominantie en direct herkenbaar. Werkt met een opvallend display-font en bijna geen andere elementen. Tools: `fontshare`, `uncut`, `gsapsplit`, `typescale`.
- **Hero-variant: Swiss editorial**: Strakke gridlijnen, gedempte kleuren, veel orde. Leest premium en intellectueel. Ideaal voor designers en schrijvers. Tools: `gfonts`, `utopia`, `minimal`, `typewolf`.
- **Hero-variant: Floating node**: Dark mode, enorme type en interactieve tags die rondzweven. Straalt technische kennis uit. Tools: `motion`, `matter`, `reactbits`, `gsap`.
- **Hero-variant: Architectural split**: Asymmetrische kolommen en blueprint-achtige spacing. Laat zien dat je negatieve ruimte begrijpt, zonder animatie. Tools: `moderncss`, `relume`, `siteinspire`, `utopia`.
- **Navigatie**: De eerste plek waar mensen zoeken. Maximaal 5–7 items, de huidige pagina duidelijk gemarkeerd. Tools: `navbar`, `shadcn`, `cmdk`, `motion`, `headlessui`. Varianten: Sticky topbar met blur, Zwevende pill-nav, Mega menu, Sidebar-navigatie, Bottom tab bar, Command menu (⌘K).
- **Footer**: Het vangnet onderaan: links, contact en een laatste kans om actie te nemen. Tools: `landbook`, `shadcn`, `uncut`, `simpleicons`. Varianten: Minimal, Mega footer, Big type footer, CTA-footer.
- **Features-sectie**: Laat zien wat het product doet. Toon, vertel niet alleen. Tools: `magicui`, `aceternity`, `lucide`, `gsapst`, `motion`. Varianten: Bento grid, Zigzag, Icon grid, Tabs met screenshot, Sticky scroll.
- **Social proof & testimonials**: Vertrouwen wint conversies. Echte namen en gezichten werken het best. Tools: `magicui`, `reactbits`, `simpleicons`, `motion`. Varianten: Logo marquee, Testimonial wall, Eén grote quote, Cijfers, Case-kaartjes.
- **Pricing**: Maak de keuze makkelijk: markeer het aanbevolen plan en vermijd kleine lettertjes. Tools: `shadcn`, `tanstacktable`, `motion`, `stripe`. Varianten: Drie kolommen, Maand/jaar-toggle, Vergelijkingstabel, Usage-slider.
- **FAQ**: Beantwoord bezwaren voordat ze ontstaan. Tools: `shadcn`, `radix`, `headlessui`. Varianten: Accordion, Twee kolommen, Zoekbare FAQ, Chat-stijl.
- **CTA-sectie**: Eén duidelijke actie per sectie. Herhaal de belangrijkste CTA onderaan de pagina. Tools: `magicui`, `resend`, `tally`. Varianten: Gradient banner, Split met beeld, Nieuwsbrief inline, Sticky CTA-balk.
- **Login & sign-up**: Zo min mogelijk velden. Laat zien wat er gebeurt en waarom je iets vraagt. Tools: `supabase`, `clerk`, `betterauth`, `zod`, `rhf`. Varianten: Gecentreerde kaart, Split screen, Magic link, Social login eerst, Multi-step sign-up.
- **Formulieren**: Labels boven het veld, foutmeldingen bij het veld, in gewone taal. Tools: `rhf`, `zod`, `tally`, `learnforms`. Varianten: Eén kolom, Multi-step met voortgang, Inline validatie, Conversational.
- **Kaarten**: Eén kaart, één onderwerp. Houd padding, hoeken en schaduwen overal gelijk. Tools: `aceternity`, `magicui`, `shadcn`, `reactbits`. Varianten: Product card, Profile card, Stat card, Spotlight card, 3D tilt card.
- **Dashboard-layout**: Samenvatting bovenaan, details daaronder. Wat aandacht nodig heeft, valt meteen op. Tools: `shadcn`, `tremor`, `bklit`, `tanstacktable`. Varianten: Sidebar + content, Top nav + tabs, Bento dashboard, List-detail.
- **Tabellen & lijsten**: Maak data scanbaar: uitgelijnde cijfers, sorteren en filteren. Tools: `tanstacktable`, `dndkit`, `shadcn`. Varianten: Datatabel, Kaarten op mobiel, Kanban, Virtuele lijst.
- **Modals, drawers & popovers**: Gebruik ze spaarzaam. Focus moet erin blijven en Escape sluit altijd. Tools: `radix`, `vaul`, `shadcn`, `floatingui`. Varianten: Dialog, Sheet, Bottom drawer, Popover, Bevestigen op de plek.
- **Feedback & meldingen**: Laat altijd zien wat er gebeurde: gelukt, bezig of fout, en wat je nu kunt doen. Tools: `sonner`, `shadcn`, `dotmatrix`. Varianten: Toast, Inline alert, Banner, Skeleton loader, Progress.
- **Empty states & 404**: Een lege pagina is een kans: leg uit wat hier komt en geef één actie. Tools: `undraw`, `storyset`, `icons3d`, `lottie`. Varianten: Illustratie + actie, Voorbeelddata, Speelse 404, Onboarding-checklist.
- **Onboarding**: Laat mensen zo snel mogelijk iets bereiken. Vraag alleen wat je echt nodig hebt. Tools: `motion`, `shadcn`, `lottie`. Varianten: Product tour, Checklist, Welkomst-modal, Progressive disclosure.
- **Zoeken & filteren**: Toon resultaten terwijl iemand typt, en maak filters zichtbaar en makkelijk te wissen. Tools: `cmdk`, `shadcn`, `nuqs`. Varianten: Command palette, Instant search, Filter-sidebar, Zoeken met suggesties.
- **Galerij & carrousel**: Laat beeld groot zien en zorg dat het ook met toetsenbord en swipe werkt. Tools: `embla`, `swiper`, `gsapst`. Varianten: Masonry, Carrousel met snap, Lightbox, Horizontale scroll-sectie.
- **Contact**: Maak contact opnemen zo makkelijk mogelijk en zeg hoe snel je reageert. Tools: `formspree`, `tally`, `leaflet`. Varianten: Formulier + kaart, E-mail met kopieerknop, Kanalen-kaarten.
- **Blog & artikel**: Lezen moet prettig zijn: rustige typografie en niets dat afleidt. Tools: `practypo`, `utopia`, `typescale`, `gfonts`. Varianten: Leeskolom, Sticky inhoudsopgave, Leesvoortgang.
- **Laden & preloaders**: Laat zien dat er iets gebeurt, maar laat mensen nooit onnodig wachten. Tools: `dotmatrix`, `flow`, `lottie`. Varianten: Skeleton, Dot matrix loader, Page preloader, Topbar-progress.
- **Knoppen & micro-interacties**: Een knop moet eruitzien als een knop en direct reageren. Tools: `magicui`, `uiverse`, `motion`, `reactbits`. Varianten: Primair / secundair / ghost, Magnetische knop, Shimmer border, Laadstatus in de knop.
- **Instellingen**: Groepeer instellingen logisch en sla wijzigingen direct op, of maak duidelijk wanneer niet. Tools: `shadcn`, `radix`, `rhf`, `zod`. Varianten: Gegroepeerde lijst, Sidebar met tabs, Toggle-lijst, Gevarenzone.
- **Profiel & account**: Laat mensen zien wie ze zijn en snel aanpassen wat ze willen. Tools: `shadcn`, `boring`, `uploadthing`. Varianten: Profielkop, Bewerkbaar profiel, Accountmenu, Account wisselen.
- **Notificaties**: Stuur alleen wat nuttig is, en laat mensen zelf kiezen. Tools: `shadcn`, `sonner`, `webpush`, `expopush`. Varianten: Bel met dropdown, Notificatiecentrum, Badge op icoon, Toestemming op het juiste moment.
- **Chat & berichten**: Snel, duidelijk wie wat zegt, en zichtbaar of een bericht is aangekomen. Tools: `suprealtime`, `liveblocks`, `aisdk`, `tsvirtual`. Varianten: Gesprekken + chat, Chatbubbels, Typ-indicator en bijlagen, AI-chat met streaming.
- **Bestanden uploaden**: Laat zien wat er gebeurt: voortgang, succes en duidelijke fouten. Tools: `dropzone`, `uppy`, `uploadthing`, `dndkit`. Varianten: Dropzone, Uploadlijst met voortgang, Avatar met bijsnijden, Galerij sorteren.
- **Datum & agenda**: Toon datums in de notatie van de gebruiker en houd rekening met tijdzones. Tools: `daypicker`, `schedulex`, `datefns`. Varianten: Datumkiezer, Periode kiezen, Weekagenda, Tijdslot boeken.
- **Keuzes & invoer**: Kies het juiste invoerelement: dat scheelt uitleg. Tools: `shadcn`, `radix`, `cmdk`, `headlessui`. Varianten: Combobox met zoeken, Multi-select met chips, Segmented control, Schakelaar, Schuifregelaar.
- **Team & rechten**: Maak duidelijk wie wat mag, en voorkom dat iemand per ongeluk te veel rechten krijgt. Tools: `shadcn`, `tanstacktable`, `clerk`, `resend`. Varianten: Ledenlijst met rollen, Uitnodigen, Rollenmatrix, Workspace-wisselaar.
- **Activiteit & tijdlijn**: Laat zien wat er gebeurd is, door wie en wanneer. Tools: `shadcn`, `datefns`, `tanstacktable`, `liveblocks`. Varianten: Activiteitenfeed, Verticale tijdlijn, Auditlog, Reactie-thread.
- **Abonnement & facturatie**: Wees transparant over wat iemand betaalt en maak opzeggen makkelijk. Tools: `stripe`, `lemonsqueezy`, `shadcn`, `tanstacktable`. Varianten: Huidig plan, Gebruiksmeter, Facturen, Plan wijzigen.
- **Editor & canvas**: Voor apps waar mensen iets maken: tekst, notities of diagrammen. Tools: `tiptap`, `lexical`, `tldraw`, `reactflow`. Varianten: Rich text met werkbalk, Slash-commando's, Blokken-editor, Canvas.
- **Mobiele app-patronen**: Gebaren en patronen die mensen van hun telefoon kennen. Tools: `expo`, `exporouter`, `reanimated`, `nativewind`. Varianten: Pull to refresh, Swipe-acties, Floating action button, Stapelnavigatie, Tabs bovenaan.
- **Fout- & offline-states**: Er gaat altijd iets mis. Zeg wat er aan de hand is en wat iemand kan doen. Tools: `errorboundary`, `sonner`, `tanstack`, `vitepwa`. Varianten: Offline-banner, Fout met opnieuw proberen, Optimistic update met undo, Geen toegang.
- **Sneltoetsen & bulkacties**: Maak vaste gebruikers sneller zonder nieuwe gebruikers in de weg te zitten. Tools: `cmdk`, `shadcn`, `tanstacktable`. Varianten: Sneltoetsen-overzicht, Toets-hints in menu's, Bulkacties.

## Best practices

### Werken met Claude Code
De gewoontes die het grootste verschil maken in kwaliteit.
- Laat Claude eerst een plan maken (plan mode) en keur dat goed
- Geef één duidelijke taak per keer, met succescriteria
- Geef context: screenshots, bestanden, voorbeelden die je mooi vindt
- Laat Claude zijn werk verifiëren: tests draaien of in de browser kijken
- Begin met /clear aan een nieuwe taak, zo blijft de context schoon
- Commit na elke werkende stap, dan kun je altijd terug
Tools: `ccbp`, `ccworkflows`, `promptguide`, `ccdocs`, `ccmemory`

### Skills, plugins en MCP: wat is wat?
Skill = instructies die Claude laadt als ze relevant zijn (een map met SKILL.md). Plugin = een pakket van skills, agents, hooks en/of MCP-servers. MCP-server = een koppeling die Claude nieuwe tools geeft, zoals je database of browser.
- Skills: Claude kan ze zelf in .claude/skills/ zetten
- Plugins: jij installeert ze met /plugin in Claude Code
- MCP: jij voegt ze één keer toe en keurt ze goed; log in via /mcp
Tools: `ccskills`, `ccplugins`, `ccmcp`

### Skills veilig installeren
Een skill is een map met een SKILL.md: instructies die Claude met jouw rechten uitvoert. Claude ziet eerst alleen naam en beschrijving (~100 tokens) en laadt de rest pas als het nodig is.
- Lees de SKILL.md voordat je installeert, het is gewone Markdown
- Sommige skills draaien hooks of scripts (zoals Ponytail en Impeccable): kijk wat ze doen voordat je ze goedkeurt
- Kies één installatiemanier per repo: plugin óf npx skills, niet allebei
- Begin met één of twee skills; overlappende design-skills spreken elkaar tegen
Tools: `skillscli`, `ccskills`, `ccplugins`, `awesomeskills`

### Toegankelijkheid
Een toegankelijke site is voor iedereen prettiger en scoort beter in zoekmachines.
- Gebruik echte HTML-elementen: button, nav, main, label
- Geef elke afbeelding een beschrijvende alt-tekst
- Zorg dat alles met het toetsenbord werkt en de focus zichtbaar is
- Houd tekstcontrast minimaal op WCAG AA (4,5:1)
- Respecteer prefers-reduced-motion bij animaties
Tools: `wcag`, `a11yproj`, `webaim`, `wave`, `learna11y`, `reducedmotion`

### Snelheid
Een trage site verliest bezoekers. Meet eerst, verbeter daarna.
- Comprimeer afbeeldingen en geef ze vaste afmetingen
- Maximaal twee fontfamilies, met font-display: swap
- Laad zware onderdelen (3D, video) pas als ze in beeld komen
- Houd JavaScript klein: niet elke library is nodig
- Meet met PageSpeed Insights op je live site
Tools: `cwv`, `psi`, `learnperf`, `learnimages`, `squoosh`

### Responsive en moderne CSS
Layouts die op elk scherm werken zonder tientallen breakpoints.
- Ontwerp mobile first
- Gebruik clamp() voor vloeiende tekst en spacing
- Gebruik gap in flex en grid in plaats van losse margins
- Container queries voor componenten die zich aanpassen aan hun plek
Tools: `utopia`, `moderncss`, `learncss`, `learnhtml`, `josh`

### Design-principes
De regels die een pagina er meteen professioneler uit laten zien.
- Maak hiërarchie met grootte, gewicht en kleur, niet alleen met grootte
- Gebruik een vaste spacing-schaal (bijv. 4, 8, 16, 24, 32)
- Maximaal twee fonts en één accentkleur
- Geef elementen ruimte: witruimte is geen verspilling
- Ontwerp ook de lege, laad- en foutstatus
Tools: `lawsofux`, `practypo`, `typescale`, `checklistdesign`

### UX-patronen en formulieren
Kleine details die bepalen of iemand je formulier afmaakt.
- Labels altijd zichtbaar, niet alleen als placeholder
- Toon foutmeldingen bij het veld, in gewone taal
- Bevestig elke actie ("Opgeslagen")
- Valideer op de client voor snelheid én op de server voor veiligheid
Tools: `uxpatterns`, `learnforms`, `checklistdesign`, `wig`, `zod`, `rhf`

### Beveiliging voor vibe coders
De meeste lekken in AI-gebouwde apps zijn dezelfde paar fouten.
- Secrets in .env, nooit in client-side code of in git
- Valideer alle input op de server
- Row Level Security aan op elke tabel
- Controleer sessies en rechten op de server
- Houd dependencies up-to-date
- Check je security headers na het deployen
Tools: `owasp`, `owaspcs`, `secheaders`, `rls`, `supaprod`

### Codekwaliteit
Afspraken die je code leesbaar houden, ook voor Claude.
- TypeScript in strict mode
- Eén linter + formatter (Biome, of ESLint + Prettier)
- Kleine componenten met één taak
- Leg naamgeving en structuur vast in CODE_STYLE.md
Tools: `ts`, `biome`, `eslint`, `prettier`, `patternsdev`

### Testen
Tests zijn het vangnet waarmee Claude zelf kan controleren of iets werkt.
- Test logica met unit tests
- Test belangrijke flows (inloggen, betalen) end-to-end
- Laat Claude na elke wijziging de tests draaien
Tools: `vitest`, `testinglib`, `playwright`, `pwmcp`

### Data en state in React
De meeste React-bugs komen van data die op de verkeerde plek staat.
- Server-data via TanStack Query, niet via fetch in useEffect
- Formulier-state in React Hook Form, validatie met Zod
- Filters en tabs in de URL, zodat je kunt delen en terugkomen
- Bouw eerst toegankelijke primitives, style daarna
Tools: `noeffect`, `thinkreact`, `tanstack`, `zod`, `rhf`, `reactdocs`, `radix`, `baseui`

### SEO en delen
Zorg dat je site gevonden wordt en er goed uitziet als hij gedeeld wordt.
- Unieke title en description per pagina
- Een Open Graph-afbeelding voor social media
- Favicons voor alle apparaten
- Eén h1 per pagina, logische koppen daaronder
Tools: `gsearch`, `ogp`, `favicon`

### Git, deployen en monitoren
Van je laptop naar live, zonder stress.
- Kleine commits met duidelijke berichten
- Eén branch per feature, preview-deploy per branch
- Foutmonitoring aan vanaf dag één
- Meet bezoekers zonder cookies
Tools: `convcommits`, `vercelprod`, `vercel`, `sentry`, `umami`

### Componenten bouwen
Bouw een eigen set componenten die je in elk project hergebruikt.
Tools: `radix`, `baseui`, `shadcn`, `storybook`

### Bij blijven
Waar frontend-developers hun kennis bijhouden.
Tools: `smashing`, `csstricks`, `josh`, `patternsdev`, `webdev`

### Apps die goed voelen
Een app gebruik je elke dag. Kleine details maken het verschil.
- Ontwerp elke status: laden, leeg, fout, succes en offline
- Optimistic updates: toon het resultaat meteen, met 'Ongedaan maken'
- Touch targets minimaal 44×44 punten
- Sneltoetsen en een command menu voor vaste gebruikers
- Error boundaries zodat één fout niet de hele app breekt
- Volg de richtlijnen van iOS en Android op mobiel
Tools: `hig`, `m3`, `pwaguide`, `noeffect`, `errorboundary`

### Gratis CMS kiezen (ook op Vercel)
Laat klanten zelf teksten en foto's aanpassen zonder maandkosten. Kies één CMS per project.
- Kleine site, klant past alleen teksten aan: Keystatic (Astro/Next.js) of Pages CMS. Content staat in Git, dus geen database en gratis op Vercel
- Statische site zonder framework-voorkeur: Decap CMS, inloggen via GitHub of Netlify Identity
- Klant wil op de pagina zelf bewerken: TinaCMS
- Next.js-site met blog: Outstatic
- Eigen CMS op maat: Payload in je Next.js-app op Vercel, met een gratis Postgres van Neon of Supabase
- Veel content, meerdere redacteuren: Sanity (gratis tier) of zelf gehost Directus/Strapi (niet op Vercel, wel op Render/Railway)
Tools: `keystatic`, `pagescms`, `decap`, `tinacms`, `outstatic`, `payload`, `sanity`, `directus`, `strapi`

### Animatie die goed voelt
Beweging moet helpen, niet afleiden, en mag nooit haperen.
- Animeer alleen transform en opacity; width, height en top laten de pagina haperen
- 150–300 ms voor UI-feedback, 300–500 ms voor grotere overgangen
- Ease-out voor dingen die binnenkomen, ease-in voor dingen die weggaan
- Respecteer prefers-reduced-motion: zet grote bewegingen dan uit
- Content moet ook zonder animatie zichtbaar zijn
- Eén opvallend moment per pagina werkt beter dan overal effecten
Tools: `animguide`, `animtier`, `animfps`, `reducedmotion`, `reducedsm`, `sdchrome`, `vtchrome`

## Uitvoerformaat

```md
## Stack voor: <naam idee>
Soort: site | app | mobile
Functies: <keys uit Functies → tools>

| Rol | Tool (key) | Waarom | Installatie |
|---|---|---|---|

### Wie installeert wat
- Claude zelf (npm/skills): …
- Michel (plugins, MCP's goedkeuren, accounts + keys in .env.local): …

### Gecontroleerd
- Kies-er-één: ok / …
- Vereisten: ok / …
- Conflicten: geen / …

### Buiten de library (alleen als echt nodig)
- …

### Startprompt voor Claude Code
<één alinea: wat te bouwen als eerste mijlpaal, met deze stack>
```
