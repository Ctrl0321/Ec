# EC Markets-style Next.js UI project

Independent design demonstration, not an official EC Markets website.

## Run as standard Next.js

The download ZIP contains a standard Next.js App Router project. Run `npm install`, then `npm run dev`. Build with `npm run build`; run production with `npm start`.

## Included

- Responsive homepage and 31 secondary routes derived from the global reference navigation.
- Dropdown navigation, mobile menu, market tabs, FAQ accordions, account comparison and local-only contact form validation.
- Responsive CSS at phone, tablet and desktop widths, keyboard focus states, reduced-motion support.
- CSS hero orbit motion, phone illustration and hover effects.
- Local-font slots for licensed Aeonik files. No commercial font binaries bundled; default Arial fallback.

## Scope and limitations

This is a reference-inspired frontend project, not a verified pixel-exact clone. The live reference redirects this environment to a different UK site. The global navigation was retrieved through indexed official content. Interior routes use shared page templates with explicit client-content placeholders. All 31 interiors still need approved page-specific content/design. No articles, translations, CMS, authentication, payments, brokerage, live prices or economic calendar integration are included. Contact validation does not send messages. No brokerage regulatory claims are made.

## Files

app/page.tsx — homepage
app/[slug]/page.tsx — interior route template
components/ec-ui.tsx — UI components and interactions
lib/pages.ts — page inventory
app/globals.css — styles and responsive motion
public/fonts/README.txt — font setup

## Production handoff

Replace brand identity and demo content with client-approved materials. Supply appropriately licensed fonts and imagery, add required data/backend integrations, verify each page against client-approved screenshots and run physical-device and accessibility testing. The downloadable project uses standard Next.js; the hosted preview uses a Next-compatible Vinext runtime for this hosting environment.
