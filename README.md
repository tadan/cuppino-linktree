# Cuppino Link-in-Bio Page

Mobile-first link hub for Cuppino's social profiles, used as the bio link on Instagram,
TikTok and Facebook.

**Live:** <https://links.cuppino.it>

## Stack

React 18 + TypeScript, built with Vite 6 and Tailwind CSS v4. No router, no data layer —
it is a single page that renders one list of links.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built output locally
npm run typecheck  # tsc --noEmit
```

## Deployment

Vercel is connected to this GitHub repo and builds automatically:

- push to `main` → production deploy to <https://links.cuppino.it>
- push to any other branch, or open a PR → preview deploy on its own URL

There is nothing to run by hand. Vercel uses `npm run build` and serves `dist/`.

## Editing the links

All links live in one array at the top of [src/app/App.tsx](src/app/App.tsx):

```typescript
const links: { icon: string; text: string; url: string; badge?: string }[] = [
    {
        icon: '🍯',
        text: 'Last Jars of Honey',
        url: 'https://cuppino.it/collections/honey-from-abruzzo',
        badge: 'Sale',
    },
    // ...
]
```

`badge` is optional — set it on a link to show a terracotta sticker on the pill (used to
flag a sale). Omit it for a normal link. Social icons and footer links are further down
the same file.

## Brand colors

```css
--deep-olive: #194C24;  /* borders, logo, shadows */
--terracotta: #D94F30;  /* sale badge, accents */
--cream:      #FFF0D7;  /* button fill */
--background: #D6CDBF;  /* page background */
--dark-olive: #4A5D3B;  /* button label */
--text:       #2C2C2C;  /* body copy */
```

Fonts are loaded from Google Fonts in [src/styles/fonts.css](src/styles/fonts.css):
Cormorant Garamond, Jost and Barlow.

## Project structure

```
cuppino-linktree/
├── index.html                 # HTML shell, title and social meta tags
├── public/og-image.jpg        # 1200x630 social share image
├── src/
│   ├── main.tsx               # entry point
│   ├── app/App.tsx            # the entire page
│   ├── imports/CuppinoLogo.tsx  # logo, exported from Figma
│   ├── assets/hero-gift-box.webp
│   └── styles/                # fonts, tailwind, theme tokens
├── tsconfig.json
└── vite.config.ts
```

## Social preview

Title, description and Open Graph tags are in [index.html](index.html). The share image
is `public/og-image.jpg`, served at `/og-image.jpg`. If you change either, re-scrape the
URL in the Facebook Sharing Debugger so the cached preview updates.

## Origin

Generated from a Figma Make export of
[this design](https://www.figma.com/design/A1XRYzEOHREta1PyjclnnO/Mobile-Link-in-Bio-Page),
then stripped down: the export shipped 48 unused shadcn/ui components and ~55 unused
dependencies, none of which the page ever imported. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
