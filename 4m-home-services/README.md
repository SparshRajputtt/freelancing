# 4M Home Services — Premium Website

A premium, animated, conversion-focused website built for 4M Home Services
(Toronto & GTA cleaning company), built with React, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Netlify, Vercel,
Cloudflare Pages, your own host) — no backend required.

## Before you launch — please update:

1. **`src/App.jsx` → `BUSINESS` object** (top of file): real phone number,
   email address, and confirm the Instagram handle/link.
2. **`src/App.jsx` → `FOUNDER` object**: replace the placeholder name, role,
   photo URL, and bio with the real founder's story and a real photo.
3. **Images**: every photo currently points to a royalty-free Unsplash URL as
   a stand-in. Swap in real photos of the team, real homes you've cleaned,
   and real before/after shots for the strongest impact (the signature
   drag-to-reveal slider in the "Before & After" section is especially
   powerful with real transformation photos).
4. **Testimonials**: the six reviews are written to sound authentic to the
   GTA but are illustrative placeholders — replace with real customer quotes
   (with permission) as you collect them.
5. **The contact form** is frontend-only. Wire the `handleSubmit` function in
   the `Contact` component up to your email service / form backend of choice
   (e.g. Formspree, Resend, a serverless function, etc.) to actually receive
   submissions.

## Design notes

- **Palette**: deep ink navy, warm linen background, brushed brass accent,
  soft sage — built to feel like luxury hospitality rather than a generic
  cleaning template.
- **Typography**: Fraunces (display serif, used sparingly with italics for
  emphasis) paired with Inter (body/UI).
- **Signature element**: the hero "wipes" from a hazy blur into a sharp,
  spotless image on load, and the Before & After section uses a draggable
  reveal slider with a brass squeegee-style handle — both reinforce the
  brand's core promise literally, not just decoratively.
