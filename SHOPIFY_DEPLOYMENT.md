# Shopify Deployment Guide
## Cuppino Link-in-Bio Page

This guide covers deploying your link-in-bio page to Shopify. **Choose Method 1 for fastest deployment.**

---

## Method 1: Netlify + Shopify Page (Recommended ⚡)

### Why This Method?
- Deploy in 5 minutes
- No code modifications needed
- Easy updates (just push to GitHub)
- Free hosting
- Fast CDN delivery

### Step 1: Deploy to Netlify

1. **Push your code to GitHub** (if not already done):
   ```bash
   cd cuppino-linktree
   git init
   git add .
   git commit -m "Initial commit: Cuppino link-in-bio page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Netlify** (https://app.netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your `cuppino-linktree` repository

3. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Wait 2-3 minutes** for deployment to complete

5. **Copy your Netlify URL** (looks like `https://cuppino-links.netlify.app`)

### Step 2: Create Shopify Page

1. **Log into Shopify Admin** → `Online Store` → `Pages`

2. **Click "Add page"**

3. **Fill in page details:**
   - **Title:** `Links` (or `Collegamenti` for Italian, `Länkar` for Swedish)
   - **URL:** Will auto-generate as `/pages/links` (perfect!)

4. **Add the embed code:**

   Click the `<> Show HTML` button in the content editor, then paste:

   ```html
   <style>
     .cuppino-links-embed {
       width: 100%;
       min-height: 100vh;
       border: none;
       display: block;
     }
     .cuppino-links-container {
       margin: 0;
       padding: 0;
       max-width: 100%;
     }
   </style>

   <div class="cuppino-links-container">
     <iframe
       src="https://YOUR-NETLIFY-URL.netlify.app"
       class="cuppino-links-embed"
       title="Cuppino Links"
       loading="lazy"
     ></iframe>
   </div>

   <script>
     // Auto-resize iframe to content height
     window.addEventListener('message', function(e) {
       if (e.data.height) {
         document.querySelector('.cuppino-links-embed').style.height = e.data.height + 'px';
       }
     });
   </script>
   ```

   **Replace `YOUR-NETLIFY-URL` with your actual Netlify URL**

5. **Configure SEO:**
   - Scroll down to "Search engine listing preview"
   - Click "Edit website SEO"
   - **Page title:** `Cuppino Links | Authentic Italian Artisan Products from Abruzzo`
   - **Description:** `Discover extra virgin olive oil, artisan honey, and antipasti from Abruzzo. Directly from family farms in Italy to your table.`
   - **URL handle:** Keep as `links`

6. **Set visibility:**
   - Choose "Visible" (unless you want to test first)
   - Click "Save"

7. **Test it:**
   - Visit `https://cuppino.it/pages/links`
   - Check mobile and desktop views

### Step 3: Repeat for Swedish Site

1. In Shopify Admin, switch to Swedish market (if using Shopify Markets)
2. Go to `Online Store` → `Pages`
3. Find the "Links" page
4. Click "Manage translations" or duplicate the page
5. Update content for Swedish:
   - **Title:** `Länkar`
   - **SEO Title:** `Cuppino Länkar | Italienska Hantverksprodukter från Abruzzo`
   - **Description:** `Upptäck extra virgin olivolja, hantverkshonung och antipasti från Abruzzo.`

---

## Method 2: Direct Shopify Page (No External Hosting)

### Why This Method?
- Everything hosted on Shopify
- No external dependencies
- Better for SEO (all on your domain)

### Step 1: Build Your App

```bash
cd cuppino-linktree
npm install
npm run build
```

This creates a `dist/` folder with compiled files.

### Step 2: Extract Built Files

The `dist/` folder contains:
- `index.html` - Main HTML
- `assets/` folder - CSS, JS, images

### Step 3: Create Shopify Page Template

1. **Access your Shopify theme code:**
   - Shopify Admin → `Online Store` → `Themes`
   - Click `Actions` → `Edit code` on your active theme

2. **Create new template:**
   - In left sidebar, find `Templates` folder
   - Click `Add a new template`
   - Template type: `page`
   - Name: `links`
   - Click "Create template"

3. **Paste the template code:**

   ```liquid
   {% comment %}
   Template: page.links.liquid
   Cuppino Link-in-Bio Page
   {% endcomment %}

   <!DOCTYPE html>
   <html lang="{{ shop.locale }}">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>{{ page.title }} | {{ shop.name }}</title>

     {%- if page.metafields.custom.meta_description -%}
       <meta name="description" content="{{ page.metafields.custom.meta_description }}">
     {%- endif -%}

     <!-- Open Graph -->
     <meta property="og:title" content="{{ page.title }} | {{ shop.name }}">
     <meta property="og:type" content="website">
     <meta property="og:url" content="{{ shop.url }}{{ page.url }}">

     <!-- Styles will be added here after build -->
     <style>
       /* Copy CSS from dist/assets/*.css */
     </style>
   </head>
   <body>
     <!-- Copy HTML body content from dist/index.html -->

     <!-- Scripts will be added here after build -->
     <script>
       /* Copy JS from dist/assets/*.js */
     </script>
   </body>
   </html>
   ```

4. **Copy built assets:**
   - Open `dist/index.html`
   - Copy the CSS from the `<style>` tags → paste into the Liquid template `<style>` section
   - Copy the HTML from the `<body>` → paste into the Liquid template `<body>`
   - Copy the JS from the `<script>` tags → paste into the Liquid template `<script>` section

5. **Upload images:**
   - Go to `Content` → `Files` in Shopify Admin
   - Upload the hero image from `dist/assets/`
   - Copy the Shopify CDN URL
   - Replace image URLs in the template with the Shopify CDN URLs

6. **Save the template**

### Step 4: Create Page Using Template

1. **Create new page:**
   - `Online Store` → `Pages` → `Add page`
   - Title: `Links`
   - Content: (can leave empty, the template controls everything)

2. **Assign template:**
   - Scroll down to "Theme template" section
   - Select `page.links` from dropdown
   - Click "Save"

3. **Configure SEO** (same as Method 1)

4. **Test:** Visit `https://cuppino.it/pages/links`

---

## Method 3: Subdomain with Custom DNS

### Why This Method?
- Cleanest URL: `links.cuppino.it`
- Completely separate from main site
- Can use different hosting provider

### Prerequisites:
- Access to your domain DNS settings (where you registered cuppino.it)

### Step 1: Deploy to Netlify (Same as Method 1, Step 1)

### Step 2: Configure Custom Domain on Netlify

1. In your Netlify site dashboard:
   - Go to `Site settings` → `Domain management`
   - Click "Add custom domain"
   - Enter: `links.cuppino.it`
   - Click "Verify"

2. **Netlify will provide DNS instructions:**
   - You'll get a CNAME record to add

### Step 3: Add DNS Record

1. **Log into your domain registrar** (where you bought cuppino.it)

2. **Go to DNS settings**

3. **Add CNAME record:**
   ```
   Type: CNAME
   Host/Name: links
   Value: cuppino-links.netlify.app (or your Netlify domain)
   TTL: 3600 (or Auto)
   ```

4. **Save changes**

5. **Wait for propagation** (can take 5 minutes to 24 hours)

### Step 4: Enable HTTPS

1. Back in Netlify → `Domain management`
2. Wait for DNS to verify
3. Click "Verify DNS configuration"
4. Enable "HTTPS" (automatic via Let's Encrypt)

### Step 5: Update Social Media Bios

Now you can use the clean URL:
- Instagram bio: `🔗 links.cuppino.it`
- TikTok bio: `🔗 links.cuppino.it`
- Facebook: `🔗 links.cuppino.it`

---

## Recommended Workflow

**Phase 1: Quick Launch** (This weekend)
→ Use **Method 1** (Netlify + Shopify Page)
→ URL: `cuppino.it/pages/links`
→ Takes 10 minutes

**Phase 2: Optimize** (Next week)
→ Add subdomain via **Method 3**
→ URL: `links.cuppino.it` (redirect to page)
→ Takes 30 minutes

**Phase 3: Long-term** (Future)
→ Migrate to **Method 2** if you want everything on Shopify
→ Takes 1-2 hours

---

## Testing Checklist

Before announcing your link-in-bio page:

- [ ] Desktop view loads correctly
- [ ] Mobile view is responsive
- [ ] All link buttons work
- [ ] Social icons open correct profiles
- [ ] Hero image displays properly
- [ ] Page loads fast (< 3 seconds)
- [ ] SEO metadata is correct (check with View Source)
- [ ] Works on both `.it` and `.se` domains
- [ ] Footer links work (Privacy, Terms, Contact)

---

## Updating Content

### If using Method 1 (Netlify):
1. Edit `src/app/App.tsx`
2. Commit and push to GitHub
3. Netlify auto-deploys in 2-3 minutes
4. Changes appear automatically in Shopify page (via iframe)

### If using Method 2 (Direct Shopify):
1. Edit `src/app/App.tsx`
2. Run `npm run build`
3. Copy updated CSS/HTML/JS to Shopify template
4. Save template

---

## Social Media Bio Text

**Instagram:**
```
🍯 Italian Artisan Food from Abruzzo
🫒 Olive Oil | Honey | Antipasti
📦 Delivered to Sweden
🔗 links.cuppino.it
```

**TikTok:**
```
Authentic Italian Food 🇮🇹
Family Farms → Your Table
Shop: links.cuppino.it 🔗
```

**Facebook:**
```
Cuppino - Authentic Italian artisan products from Abruzzo family farms.
Extra virgin olive oil, artisanal honey, sun-ripened antipasti.
🔗 links.cuppino.it
```

---

## Troubleshooting

**Issue:** Iframe is too tall/short
- **Fix:** Adjust the `min-height` in the embed style

**Issue:** Page not showing on `.se` domain
- **Fix:** Check Shopify Markets settings, ensure page is visible in Swedish market

**Issue:** Links don't work
- **Fix:** Check that URLs in `App.tsx` are correct and complete (include `https://`)

**Issue:** Netlify build fails
- **Fix:** Check that `package.json` has correct scripts and dependencies

---

## Support

Need help?
- Check Netlify deploy logs for build errors
- Test locally first with `npm run dev`
- Verify DNS propagation with https://dnschecker.org

---

**Ready to deploy? Start with Method 1 and go live in 10 minutes!** 🚀
