# 🔥 Embers — AI Marketing Assistant for Restaurants

A premium, production-ready SaaS built with **Next.js 15**, **React Three Fiber**, **Framer Motion**, and the **OpenAI API**. Embers gives restaurant operators four AI-powered marketing tools — captions, offers, review replies, and WhatsApp campaigns — delivered through a 3D-forward, glassmorphic dark-themed interface.

---

## ✨ Features

| Tool | What it does |
|---|---|
| **Caption Generator** | Platform-tuned Instagram / Facebook / TikTok / Google captions from a dish name |
| **Offer Generator** | Full promotional offer (headline, mechanics, caption, CTA) from a goal |
| **Review Reply Generator** | Star-rating-aware replies that sound like a real owner, not a template |
| **WhatsApp Marketing Generator** | Broadcast + automatic follow-up message pair |

### Design highlights
- Interactive **3D coffee cup** hero with lathe geometry, steam particles, and a contact shadow
- **Floating 3D food items** (pizza, donut, croissant, macaron) orbiting the scene
- **Mouse-based camera parallax** — the scene follows your cursor smoothly
- **Scroll-driven camera dolly** — the hero animates as you scroll past it
- **Framer Motion** scroll-triggered entrance animations across every section
- **Glassmorphism cards** with multi-layer backdrop blur
- **Kitchen-ticket motif** for AI output cards — complete with punched-hole top edge
- Animated number counters in the stats section
- **Live demo** on the landing page — try caption generation without signing up

---

## 📁 Folder Structure

```
embers-ai-restaurant-marketing/
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form handler
│   │   └── generate/
│   │       ├── caption/route.ts      # POST → OpenAI caption
│   │       ├── offer/route.ts        # POST → OpenAI offer
│   │       ├── review/route.ts       # POST → OpenAI review reply
│   │       └── whatsapp/route.ts     # POST → OpenAI WhatsApp message
│   ├── dashboard/
│   │   ├── layout.tsx                # Dashboard shell (sidebar + mobile nav)
│   │   ├── page.tsx                  # Overview / stats
│   │   ├── captions/page.tsx         # Caption generator UI
│   │   ├── offers/page.tsx           # Offer generator UI
│   │   ├── reviews/page.tsx          # Review reply generator UI
│   │   ├── whatsapp/page.tsx         # WhatsApp generator UI
│   │   └── settings/page.tsx         # Brand voice & plan settings
│   ├── pricing/page.tsx              # Pricing page (monthly/annual toggle)
│   ├── contact/page.tsx              # Contact form
│   ├── globals.css                   # Tailwind base + glass / ticket utilities
│   ├── layout.tsx                    # Root layout — fonts, navbar, footer
│   ├── page.tsx                      # Landing page
│   ├── not-found.tsx                 # 404 page
│   └── error.tsx                     # Global error boundary
│
├── components/
│   ├── animations/
│   │   ├── FadeIn.tsx                # whileInView fade-up wrapper
│   │   └── ScrollReveal.tsx          # Staggered group/item reveal
│   ├── dashboard/
│   │   ├── GeneratorPanel.tsx        # 2-col form + result shell
│   │   ├── ResultCard.tsx            # Ticket-styled AI output card
│   │   ├── Sidebar.tsx               # Sticky nav sidebar (desktop)
│   │   └── StatsCard.tsx             # Metric card for overview page
│   ├── layout/
│   │   ├── Navbar.tsx                # Scroll-aware glass navbar
│   │   └── Footer.tsx                # Site footer (hidden on dashboard)
│   ├── sections/
│   │   ├── Hero.tsx                  # Full-viewport 3D hero
│   │   ├── Stats.tsx                 # Animated counter stats band
│   │   ├── Features.tsx              # 4 feature cards
│   │   ├── HowItWorks.tsx            # 3-step process
│   │   ├── LiveDemo.tsx              # Inline caption generator demo
│   │   ├── Testimonials.tsx          # 3 quote cards
│   │   └── CTA.tsx                   # Final CTA band
│   ├── three/
│   │   ├── HeroScene.tsx             # R3F Canvas — scene composition
│   │   ├── CoffeeCup.tsx             # Lathe-geometry mug + steam particles
│   │   ├── FloatingFood.tsx          # Pizza / donut / croissant / macaron meshes
│   │   ├── ParticleField.tsx         # Ember particle field
│   │   └── CameraRig.tsx             # Mouse parallax + scroll dolly camera
│   └── ui/
│       ├── Badge.tsx                 # Eyebrow / tag pill
│       ├── Button.tsx                # primary / secondary / ghost variants
│       ├── GlassCard.tsx             # Glassmorphism surface
│       └── Loader.tsx                # Spinning border loader
│
├── hooks/
│   ├── useMousePosition.ts           # Normalised [-1,1] cursor position
│   └── useScrollProgress.ts          # Scroll progress (0-1) through element
│
├── lib/
│   ├── openai.ts                     # Lazy OpenAI client + complete() helper
│   ├── prompts.ts                    # All system + user prompt templates
│   └── utils.ts                      # cn(), generateId(), formatTime()
│
├── types/
│   └── index.ts                      # Shared TypeScript interfaces
│
├── public/
│   └── icon.svg                      # Ember flame favicon
│
├── .env.example                      # Environment variable template
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js ≥ 18.18** — [nodejs.org](https://nodejs.org)
- **npm ≥ 9** (or pnpm / yarn)
- An **OpenAI API key** — [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

### 1. Clone & install

```bash
git clone https://github.com/your-org/embers-ai.git
cd embers-ai
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Open `.env.local` and add your key:

```
OPENAI_API_KEY=sk-...your-key-here...
OPENAI_MODEL=gpt-4o-mini        # optional, defaults to gpt-4o-mini
```

> **Cost note:** `gpt-4o-mini` is the recommended default — fast, cheap (~$0.0001/generation), and high quality for marketing copy. Switch to `gpt-4o` in `.env.local` for higher-fidelity outputs.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel (recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

When prompted, add your environment variables. Or set them in the Vercel dashboard under **Project → Settings → Environment Variables**:

| Key | Value |
|---|---|
| `OPENAI_API_KEY` | `sk-...` |
| `OPENAI_MODEL` | `gpt-4o-mini` |

### Option B — GitHub import

1. Push the repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Add the environment variables above
4. Click **Deploy**

Vercel auto-detects Next.js and configures everything else.

---

## 🌐 Deploy to other platforms

### Railway / Render / Fly.io

```bash
# Build
npm run build

# Start (all platforms use this)
npm start
```

Set `OPENAI_API_KEY` in the platform's environment variables UI.

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Add `output: 'standalone'` to `next.config.js` when using Docker.

---

## 🔌 Wiring up the contact form

The `/api/contact` route currently logs submissions to the console. To send real emails, replace the `console.log` in `app/api/contact/route.ts` with your preferred provider:

**Resend (recommended):**
```bash
npm install resend
```
```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ from: "...", to: "...", subject: "...", text: body.message });
```

**Other options:** Postmark, SendGrid, Loops, Brevo — all work the same way.

---

## 🎨 Customising the brand

| What to change | Where |
|---|---|
| Colour palette | `tailwind.config.ts` → `colors` |
| Fonts | `app/layout.tsx` → `next/font/google` imports |
| Brand name / copy | `components/layout/Navbar.tsx`, `Footer.tsx`, section components |
| AI prompt style | `lib/prompts.ts` — tweak system prompts and tone guide |
| Default OpenAI model | `.env.local` → `OPENAI_MODEL` |
| 3D scene layout | `components/three/HeroScene.tsx` — adjust positions, scales, lights |

---

## 🧩 Adding a new generator

1. Add a new interface to `types/index.ts`
2. Add system + user prompt functions to `lib/prompts.ts`
3. Create `app/api/generate/<name>/route.ts` using the `complete()` helper from `lib/openai.ts`
4. Create `app/dashboard/<name>/page.tsx` using `GeneratorShell` + `ResultCard`
5. Add the route to `Sidebar.tsx` and `DashboardLayout`

---

## 📦 Key dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 15.x | App Router, RSC, API routes |
| `react` | 18.x | UI rendering |
| `three` | 0.169 | 3D geometry and rendering |
| `@react-three/fiber` | 8.x | React bindings for Three.js |
| `@react-three/drei` | 9.x | Helpers: Environment, Float, ContactShadows |
| `framer-motion` | 11.x | Page and scroll animations |
| `openai` | 4.x | OpenAI Chat Completions API |
| `lucide-react` | 0.453 | Icon set |
| `tailwindcss` | 3.4 | Utility-first CSS |
| `clsx` + `tailwind-merge` | latest | Conditional className merging |

---

## 🔒 Security notes

- `OPENAI_API_KEY` is **server-side only** — it's never sent to the browser
- All AI generation goes through Next.js API routes, so your key is never exposed
- Consider adding rate limiting to `/api/generate/*` routes in production (e.g. with [Upstash](https://upstash.com/))
- The contact form does basic field validation; add CAPTCHA (hCaptcha / Turnstile) for production

---

## 📄 Licence

MIT — use it, fork it, ship it.

---

> **Embers** — Built for kitchens, not boardrooms.
