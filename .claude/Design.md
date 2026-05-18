# Design System — CHINNI MALLIKARJUNA & COMPANY Website

## Stack
- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS v3 + custom utilities in `app/globals.css`
- **Animation:** Framer Motion
- **Fonts:** Outfit (headings/CTAs) · Inter (body/form text)
- **Icons:** Lucide React

---

## Colour Tokens

Defined in `tailwind.config.ts` and mirrored as CSS variables in `app/globals.css`.

| Token | Hex | Usage |
|---|---|---|
| `brand-dark-green` | `#094c00` | Headings, body text, primary brand |
| `brand-green` | `#55b947` | Accent, CTA backgrounds, highlights |
| `brand-accent-green` | `#6ac25e` | Gradient end-points |
| `brand-border-green` | `#73c668` | Card & input borders |
| `brand-footer-dark` | `#041d00` | Footer background |
| `surface-light-gray` | `#efefef` | Section backgrounds |
| `surface-card-border` | `#f3f4f6` | Subtle card borders |
| `surface-input-border` | `#e5e7eb` | Form input borders |
| `text-secondary` | `#4a5565` | Secondary body copy |
| `text-muted` | `#99a1af` | Muted / disabled text |
| `text-placeholder` | `rgba(16,24,40,0.5)` | Input placeholder |

---

## Gradients

Defined in `tailwind.config.ts` under `backgroundImage`.

| Class | Usage |
|---|---|
| `bg-gradient-primary` | Dark sections, icon boxes |
| `bg-gradient-btn-hero` | Hero page CTA |
| `bg-gradient-btn-services` | Service page CTAs, primary buttons |
| `bg-gradient-btn-blog` | Blog button |
| `bg-gradient-btn-submit` | Form submit buttons |
| `bg-gradient-contact` | Contact section left panel |
| `bg-gradient-footer-logo` | Footer logo mark |

---

## Typography

### Font Families
```
font-outfit   → Headings (H1–H4), CTAs, labels, breadcrumbs
font-inter    → Body text, descriptions, form fields, dates, metadata
```

### Mobile-first Typography Scale (CSS variables in `globals.css :root`)

| Variable | Size | Line Height | Usage |
|---|---|---|---|
| `--mobile-hero-display` | 30px | 36px | H1 heroes |
| `--mobile-section-title` | 24px | 30px | H2 section titles |
| `--mobile-card-title` | 20px | 26px | H3 card headings |
| `--mobile-body` | 16px | 24px | Body text |
| `--mobile-secondary` | 14px | 20px | Labels, metadata |
| `--mobile-caption` | 12px | 16px | Breadcrumbs, badges |
| `--mobile-button` | 14px | 20px | Button text |

### Responsive Text Pattern Used Across Site
```
H1 hero:      text-[30px] sm:text-[42–56px] lg:text-[64–96px]
H2 section:   text-[24px] sm:text-[32–40px] lg:text-[40–50px]
H3 card:      text-[20px] sm:text-[24px]    lg:text-[28–32px]
Body:         text-[14px] sm:text-[16px]    (leading-[22px] sm:leading-[24px])
Label:        text-[14px] (static)
Caption:      text-[12px] (static)
```

### Design System Typography Classes (`globals.css`)
Use these in new components instead of inline responsive text classes:
```
.ds-hero-display   → H1 heroes (30→42→64px, Outfit bold)
.ds-section-title  → H2 sections (24→32→40px, Outfit bold)
.ds-card-title     → H3 cards (20→24→28px, Outfit semibold)
.ds-body           → Body paragraphs (14→16px, Inter normal)
.ds-label          → Form/UI labels (14px static, Outfit medium)
.ds-caption        → Breadcrumbs, small text (12px static, Inter normal)
.ds-badge          → Uppercase tracking badge (12px, Inter semibold, text-brand-green)
```

---

## Buttons

All buttons defined as utility classes in `app/globals.css` under `@layer utilities`.
Every button includes `mobile-tap-target` (min 44px touch target), `inline-flex`, `gap-2`, and responsive padding/height.

| Class | Background | Text | Border | Use Case |
|---|---|---|---|---|
| `.btn-primary` | `gradient-btn-services` (dark→green) | white | — | Primary CTAs, form submits |
| `.btn-secondary` | white | `brand-dark-green` | `brand-green` | Secondary CTAs |
| `.btn-outline` | transparent | `brand-dark-green` | `brand-dark-green` | Tertiary / neutral actions |
| `.btn-glass` | `white/50` + backdrop-blur | `brand-dark-green` | `brand-green` | Hero secondary CTAs (glassmorphism) |

### Button Sizing
```
Height:  h-11 (44px mobile) → sm:h-12 (48px desktop)
Padding: px-5 (mobile)      → sm:px-6 (desktop)
Radius:  rounded-[8px]
```

### Patterns for Full-Width Mobile Buttons
```jsx
// Full-width on mobile, auto on desktop
<a className="btn-primary w-full sm:w-auto">Label</a>

// Always inline (hero anchors)
<a className="btn-primary min-w-[160px]">Label</a>

// Full-width form submits
<button className="btn-primary w-full">Submit</button>
```

---

## Cards

### Border Radius Utilities
```
.mobile-card-base      → rounded-[20px] sm:rounded-[24px] lg:rounded-[30px]
.mobile-card-featured  → rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]
```

### Standard Card Pattern
```jsx
<div className="bg-white border border-brand-border-green mobile-card-base
                overflow-hidden h-full min-h-[236px]
                flex flex-col items-center justify-start
                pt-6 pb-5 px-4 sm:px-6 text-center
                transition-shadow duration-300 hover:shadow-card">
```

### Card Shadows
```
shadow-card       → Standard card hover shadow
shadow-contact    → Contact/form card (elevated)
shadow-strategic  → Strategy/approach cards
shadow-mission    → Mission section card
```

### Icon Box Sizes
```
.mobile-icon-box          → w-12 h-12 sm:w-14 sm:h-14 (standard)
.mobile-icon-box-featured → w-14 h-14 sm:w-16 sm:h-16 (hero cards)
```

---

## Layout

### Section Shells
```
.page-main           → pt-[56px] md:pt-[87px] (accounts for fixed navbar)
.section-shell       → mt-[40px] sm:mt-[55px] lg:mt-[70px] + px-4 sm:px-6 lg:px-8
.section-shell-fluid → same margins, no justify-center
.section-shell-bottom → section-shell + bottom margin
```

### Standard Section Padding
```
py-[40px] sm:py-[60px] md:py-[80px]
px-4 sm:px-6 lg:px-[5%]
```

### Max Widths
```
max-w-[1232px]  → Contact, standard content
max-w-[1318px]  → What We Do section
max-w-[1380px]  → Meet the Experts
max-w-[1440px]  → Full-bleed sections
max-w-[1000px]  → Service description prose
max-w-[800px]   → FAQ / narrow content
```

### Grid Pattern (always include grid-cols-1 base)
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

---

## Form Inputs

### Standard Input
```jsx
className="w-full h-[44px] border border-surface-input-border rounded-[8px]
           px-4 font-inter text-[14px] leading-[20px] text-brand-dark-green
           placeholder:text-text-placeholder
           focus:border-brand-green focus:ring-1 focus:ring-brand-green
           outline-none transition-colors"
```

### Textarea
```jsx
className="w-full min-h-[140px] sm:min-h-[160px] border border-surface-input-border
           rounded-[8px] p-4 font-inter text-[14px] leading-[20px] text-brand-dark-green
           placeholder:text-text-placeholder resize-none
           focus:border-brand-green focus:ring-1 focus:ring-brand-green
           outline-none transition-colors"
```

### Label
```jsx
className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
```

---

## Spacing Tokens (`tailwind.config.ts`)

| Token | Value | Usage |
|---|---|---|
| `mobile-page` | 16px | Base horizontal page margin |
| `mobile-section` | 40px | Base vertical section spacing |
| `mobile-gap` | 16px | Card grid gap |
| `tap` | 44px | Minimum touch target |
| `faq-row` | 56px | FAQ accordion row height |
| `drawer-row` | 52px | Mobile drawer row height |
| `icon-inline` | 20px | Inline icon size |
| `icon-md` | 24px | Medium icon size |
| `icon-box` | 48px | Icon box container |
| `icon-box-lg` | 56px | Large icon box container |

---

## Responsive Breakpoints

Tailwind defaults used throughout:
```
sm:  640px   (small tablets, large phones)
md:  768px   (tablets)
lg:  1024px  (small laptops)
xl:  1280px  (desktops — navbar switches here)
```

**Mobile-first baseline:** All sizes default to mobile (≤375px iPhone SE). Scale up with sm/md/lg/xl prefixes.

---

## Key Files Reference

| File | Purpose |
|---|---|
| `app/globals.css` | CSS variables, base resets, all utility classes |
| `tailwind.config.ts` | Theme tokens (colours, fonts, shadows, radii) |
| `app/layout.tsx` | Root font declarations (Outfit + Inter via next/font) |
| `app/components/ServicePageTemplate.tsx` | Shared template for all service pages |
| `app/components/GetFreeQuote.tsx` | Reusable quote form with EmailJS |
| `app/sections/GetInTouchSection.tsx` | Homepage contact form section |
| `app/connect/ContactFormSection.tsx` | Dedicated contact page form |
