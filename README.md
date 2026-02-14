# Cuppino Link-in-Bio Page

Mobile-optimized link hub for Cuppino's social media profiles, designed to match the brand's authentic Italian artisan aesthetic.

**Live URLs:**
- 🇮🇹 Italian: `cuppino.it/pages/links`
- 🇸🇪 Swedish: `cuppino.se/pages/links`
- 🌍 English: `cuppino.it/en/pages/links`

## Project Overview

This React/TypeScript application provides a centralized landing page for all Cuppino social media links, optimized for Instagram/TikTok/Facebook bio links.

**Key Features:**
- Mobile-first responsive design
- Cuppino brand colors (Deep Olive, Terracotta, Cream)
- SEO-optimized for all three languages (IT/SE/EN)
- Fast loading with Vite build system
- Smooth animations and hover effects

## Quick Start

### Development

```bash
# Install dependencies
npm i

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Shopify

See **SHOPIFY_DEPLOYMENT.md** for complete instructions on integrating this with your Shopify store.

**Quick Deploy Options:**
1. **Netlify/Vercel** (Recommended): Host the built app and embed in Shopify page
2. **Shopify Pages**: Use custom Liquid template with inline HTML/CSS/JS
3. **Subdomain**: Deploy to `links.cuppino.it` with DNS configuration

## Brand Colors

```css
--deep-olive: #194C24;
--terracotta: #D94F30;
--cream: #FFF0D7;
--background: #D6CDBF;
--dark-olive: #4A5D3B;
--text: #2C2C2C;
```

## Links Configuration

Edit link URLs in `src/app/App.tsx`:

```typescript
const links = [
  { icon: "🛒", text: "Shop Our Collection", url: "https://cuppino.it" },
  // ... add more links
];
```

## Project Structure

```
cuppino-linktree/
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main component
│   │   └── components/       # UI components
│   ├── imports/
│   │   └── CuppinoLogo.tsx   # SVG logo component
│   └── main.tsx              # Entry point
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies
```

## SEO Metadata

The app includes optimized metadata for:
- Meta titles and descriptions (IT/SE/EN)
- Open Graph tags (social sharing)
- Structured data (Schema.org)
- Mobile viewport optimization
- Fast loading performance

## Original Figma Design

Based on: https://www.figma.com/design/A1XRYzEOHREta1PyjclnnO/Mobile-Link-in-Bio-Page

Customized for Cuppino brand identity with colors extracted from product photography.

## Support

For issues or questions about Shopify integration, see the deployment guide or contact the development team.
