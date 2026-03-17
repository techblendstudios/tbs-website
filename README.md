# TBS Website — Tech Blend Studios

> **Retention. Revenue. Conversions.**  
> Premium digital branding agency website built in Next.js 14.

---

## TBS Website — Setup Guide

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Fill in your values (see Environment Variables below)

# 3. Start dev server
npm run dev
# → Open http://localhost:3000
```

```bash
# Build for production
npm run build
npm run start
```

---

### Environment Variables (`.env.local`)

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

**Where to find these:**
- **Supabase:** Dashboard → Project Settings → API → Project URL & anon key
- **Cloudinary:** Dashboard → top-right cloud name (e.g. `dxyz1234`)

---

### Adding Your Videos (Portfolio Section)

1. Upload your videos to [Cloudinary](https://cloudinary.com) (Video → Upload)
2. Copy the **Secure URL** from the asset details panel
3. Open `components/sections/Portfolio.tsx`
4. Replace each `cloudinaryUrl` in the `PORTFOLIO_ITEMS` array:

```ts
{
  title: "Brand Reveal — Architecture Studio",
  category: "motion-graphics",
  cloudinaryUrl: "https://res.cloudinary.com/YOUR_CLOUD/video/upload/v1/tbs/brand-reveal.mp4",
  thumbnailUrl:  "https://res.cloudinary.com/YOUR_CLOUD/video/upload/so_0,w_800,f_jpg/tbs/brand-reveal.jpg",
  tags: ["brand", "architecture"],
}
```

**Auto-thumbnail format:**
```
https://res.cloudinary.com/YOUR_CLOUD/video/upload/so_0,w_800,f_jpg/YOUR_VIDEO_ID.jpg
```
- `so_0` = capture frame at 0 seconds
- `w_800` = resize to 800px wide
- `f_jpg` = output as JPEG

**Hero reel video:**  
Replace `/videos/hero-reel.mp4` in `components/sections/Hero.tsx` with your Cloudinary URL.

---

### Adding Team Photos

**Option A — Cloudinary (Recommended):**
1. Upload to Cloudinary (Image → Upload), folder: `team/`
2. Open `components/sections/Team.tsx`
3. Replace `imageUrl` values:
```ts
imageUrl: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_800,f_auto,q_auto/team/name.jpg"
```

**Option B — Local `/public` folder:**
1. Place photos in `/public/team/`
2. Reference as `imageUrl: "/team/name.jpg"`

**Photo specifications for best results:**
| Property | Value |
|----------|-------|
| Dimensions | 800 × 1067px |
| Aspect ratio | 3:4 (portrait) |
| Background | White or light gray studio backdrop |
| Format | JPG, quality 85+ |
| Filters | None — keep editorial and clean |

---

### Replace Placeholder Names

Search the codebase for these placeholders and replace with real names:

| Placeholder | File | Replace with |
|-------------|------|--------------|
| `[Co-founder Name 1]` | `components/sections/Team.tsx` | Actual name |
| `[Co-founder Name 2]` | `components/sections/Team.tsx` | Actual name |
| `[Name]` (×4) | `components/sections/Team.tsx` | Team member names |
| `91XXXXXXXXXX` | `components/sections/Contact.tsx` | WhatsApp number |
| `hello@techblendstudios.com` | `components/sections/Contact.tsx` | Real email |
| Social URLs | `components/sections/Footer.tsx` | Real social profile URLs |
| Social URLs | `components/ui/TeamCard.tsx` data | Real LinkedIn / Instagram links |

---

### Connecting Supabase (Portfolio — Production)

Once you have real videos, migrate from hardcoded data to Supabase:

**1. Create the table:**
```sql
CREATE TABLE portfolio_items (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title          text NOT NULL,
  category       text NOT NULL,
  cloudinary_url text NOT NULL,
  thumbnail_url  text NOT NULL,
  tags           text[],
  featured       boolean DEFAULT false,
  created_at     timestamptz DEFAULT now()
);
```

**2. Enable Row Level Security (RLS) — public read:**
```sql
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON portfolio_items FOR SELECT USING (true);
```

**3. Initialize Supabase client** — create `lib/supabase.ts`:
```ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

**4. Convert Portfolio to a Server Component** for SEO — remove `'use client'` from `Portfolio.tsx`, extract the filter UI to a separate client component, and fetch server-side:
```ts
const { data: items } = await supabase
  .from('portfolio_items')
  .select('*')
  .order('created_at', { ascending: false })
```

---

### Project Structure

```
/app
  layout.tsx          ← Root layout: fonts, metadata, CustomCursor
  page.tsx            ← Homepage: all sections assembled
  globals.css         ← CSS variables, reset, cursor, utilities

/components
  /nav
    Navbar.tsx        ← Fixed nav, scroll hide/show, mobile overlay
  /sections
    Hero.tsx          ← Full-viewport hero, video reel, stats strip
    Services.tsx      ← 7 services in editorial list format
    Portfolio.tsx     ← Filterable video grid with Cloudinary
    Plans.tsx         ← 3 pricing plans with invert-on-hover
    Philosophy.tsx    ← 6 ideology cards in 2-col grid
    Team.tsx          ← Co-founders + team in portrait grid
    Contact.tsx       ← Large CTA with WhatsApp + email links
    Footer.tsx        ← 3-col footer with nav, socials, copyright
  /ui
    CustomCursor.tsx  ← 10px cursor, mix-blend-mode: difference
    ScrollReveal.tsx  ← Framer Motion useInView fade-up wrapper
    VideoCard.tsx     ← Hover-to-play Cloudinary video card
    PlanCard.tsx      ← Pricing card with full invert on hover
    TeamCard.tsx      ← Editorial portrait card with next/image
```

---

### Design System Reference

| Token | Value |
|-------|-------|
| `--black` | `#0A0A0A` |
| `--white` | `#FFFFFF` |
| `--gray-100` | `#F5F5F3` |
| `--gray-400` | `#999999` |
| `--gray-600` | `#555555` |
| Display font | Cormorant Garamond 300 / 600 |
| Body font | DM Sans 300 / 400 |
| Content max-width | 1140px |
| Section padding | 120px top/bottom (80px mobile) |

---

### Deployment (Vercel)

```bash
# 1. Push project to GitHub
git init && git add . && git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/tbs-website.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Add environment variables in **Project Settings → Environment Variables:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
5. Click **Deploy**

> Auto-deploys on every `git push` to `main` — no manual action needed.

---

### Performance Notes

- **Videos**: use `preload="none"` on all VideoCards — video only loads on hover
- **Images**: all team photos use `next/image` with automatic WebP conversion
- **Fonts**: loaded via `next/font/google` with `display: swap` — no layout shift
- **Animations**: Framer Motion `useInView` with `once: true` — fires once, no re-renders
- **Cursor**: uses CSS custom properties `--x / --y` updated via `mousemove` — no React state, no re-render on mouse move

---

*Built for Tech Blend Studios, Pune, India.*  
*Stack: Next.js 14 · Tailwind CSS · Framer Motion · Supabase · Cloudinary · Vercel*
