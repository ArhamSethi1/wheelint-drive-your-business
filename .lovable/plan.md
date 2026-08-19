# Wheelint Website — Implementation Plan

A premium, modern, industrial marketing website for Wheelint, the automobile business management platform. Five routes, one unified design system, original content only.

## Design system

- Dark industrial base with a precision-engineering feel: deep graphite/near-black surfaces, cool steel greys, and a single confident accent (electric amber-orange) for CTAs and highlights. Light-surface sections used deliberately for contrast, not as the default.
- Typography: a tight geometric/technical sans for headings (large, confident, tightly tracked) paired with a highly legible neutral sans for body. Loaded via `<link>` in the root route head.
- Tokens (colors, gradients, glows, borders, elevation, section rhythm) defined in `src/styles.css` under `:root`/`.dark` + `@theme inline`. No hardcoded color utilities anywhere.
- Shared primitives: `Section`, `SectionHeading`, `FeatureCard`, `StatBadge`, `CtaBand`, button variants (`primary`, `outline`, `ghost`) — all reused across every page so pages feel like one product.
- Motion: subtle fade/slide reveals on scroll, gentle hover lift on cards, smooth nav and mobile-menu transitions, soft image drift. No parallax, no gimmicks. Respects `prefers-reduced-motion`.

## Routes

```text
/            Home
/features    Features & Solutions
/pricing     Pricing
/about       About
/contact     Contact
```

Shared chrome in `src/routes/__root.tsx`: sticky navigation (Home · Features · Pricing · About · Contact) with **Request a Demo** as the primary CTA, polished mobile sheet menu, and the single approved Wheelint footer on every route.

### Home (`src/routes/index.tsx` — replaces the placeholder)
Hero with original headline, supporting statement, dual CTAs and a premium dashboard visual → what Wheelint is / who it's for → product breadth overview (linking to Features for depth) → operational visibility / analytics moment → trust & clarity section → closing CTA band (Request a Demo, with Start Free Trial and Talk to Sales). Deliberately not exhaustive; depth lives on Features.

### Features & Solutions
Features hero with product visual → the six capability areas presented as large, scannable blocks (what it does → visibility it gives → why it matters) rather than dozens of small cards → four solution areas (workshop, dealership, multibrand, OEM/dealer network) → analytics & reporting section → CTA band.

### Pricing
Two purchasing paths side by side:
- **Standard Plan** — `₹XX,XXX / year` marked clearly as a placeholder price, concise coverage summary, CTA **Start Free Trial**, secondary **Request a Demo**.
- **Enterprise ERP** — **Custom Pricing**, for OEMs, dealer networks and multi-location businesses, CTA **Talk to Sales**.

Then "Which plan is right for you?" (Workshop/Dealership → Standard; OEM/Dealer Network/Multi-location → Enterprise ERP) as a simple visual decision block, a concise What's Included highlight comparison (no giant matrix), and the closing CTA row: Start Free Trial · Request a Demo · Talk to Sales.

### About
Purpose-led: making automobile business management simpler, clearer and more connected. Explains the design around real operational needs of workshops, dealerships and larger networks. Product philosophy section: practical technology, clear information, better operational visibility, scalable management, automobile-focused workflows. Ends with **See Wheelint in Action → Request a Demo**. No company history, no statistics, no customer counts, no mention of Exillien Softech.

### Contact
Conversion-first hero ("Let's talk about your automobile business") → enquiry form with exactly Name, Company, Phone, Email, Business Type (Workshop, Authorised Dealer, Multibrand Workshop, Dealership, OEM, Dealer Network, Other) and optional Other Details → contact details block (Tylect Technologies Pvt. Ltd., Jaipur address, +91 93580 02457, teams@wheelint.com) → Request a Demo / Talk to Sales CTAs.

Form behaviour: client-side validation with clear inline error, disabled/submitting and success states via toast. No backend is enabled, so submissions are validated and acknowledged in the UI only — say the word if you want enquiries stored and emailed and I'll add Lovable Cloud for that.

## Visual assets

Generated original visuals: a hero-scale automobile management dashboard mockup, two to three supporting product/module screens (billing/job card, inventory, analytics), and one or two industrial automotive workshop/service photographs used as texture behind sections. Professional automobile-management UI in look — no AutoGenius branding, no generic unrelated SaaS dashboards. All exported at sensible sizes with descriptive alt text and lazy loading below the fold.

## Quality, SEO & accessibility

- Per-route `head()` with unique title, meta description, og:title, og:description; og:type and twitter:card set; og:image only on leaf routes that have a real absolute hero image. Natural coverage of automobile billing, workshop management, dealership management, automobile ERP and automobile business software — no keyword stuffing.
- Semantic HTML, one H1 per page, ordered headings, visible focus rings, keyboard-operable nav/menu/form, accessible contrast in both surface modes.
- No horizontal scrolling at any breakpoint; layouts intentionally re-composed for tablet and mobile rather than compressed.

## Technical notes

- TanStack Start file-based routes under `src/routes/`; navigation via `<Link>`. Root layout holds nav + footer around `<Outlet />`.
- Tailwind v4 CSS-first tokens in `src/styles.css`; shadcn primitives for select, sheet, input, textarea, button, sonner toast (Toaster mounted once in `__root.tsx`).
- Reveal animations via a small reusable intersection-observer wrapper component; no heavy animation dependency unless a section genuinely needs it.
