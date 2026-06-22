This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Global Design System & Guidelines

This project strictly follows a cohesive, modern UI design system across all pages and sections:

### 1. Typography
- **Font Family:** `Poppins` custom font mapped to `font-[family-name:var(--font-poppins-custom)]` for all text.
- **Headings:** Premium styling using `font-bold` to `font-extrabold`. Use tight letter-spacing (`tracking-[-0.02em]` to `tracking-[-0.03em]`) and tight line-heights (`leading-[1.1]`). Main section titles should range from `40px` to `64px` depending on breakpoints.
- **Paragraphs/Body Text:** Sleek `font-light` weights with large, readable text sizes (`16px` to `20px`) and spacious line-heights (`leading-[1.6]`). Use soft grays (like `text-gray-300` or `text-gray-600`) to contrast with the background.

### 2. Spacing & Responsiveness
- **Containers:** Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (or up to `lg:px-16`) to constrain all content width uniformly.
- **Vertical Rhythm:** Standardized padding across sections is `py-16 md:py-24`.
- **Grids:** Use `grid-cols-1 md:grid-cols-2` (and up to `lg:grid-cols-4`) for complex layouts to ensure smooth stacking on mobile and spreading out on 4k screens.

### 3. Theme & UI Elements
- **Color Palette:** A deeply modern blue/teal theme. Dark backgrounds use `bg-[#161a1d]`, primary interactive elements use `bg-blue-600`, and secondary/accent elements use mint/teal (`bg-[#99f2d1]`).
- **Modern Effects:** 
  - Apply smooth text gradients (e.g., `text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#99f2d1]`) for keyword emphasis.
  - Utilize **Glassmorphism** (`bg-white/10 backdrop-blur-md border border-white/20`) on secondary elements against dark backgrounds.
  - Button hovers must feel premium: lifting (`hover:-translate-y-1`), transition smoothing (`transition-all duration-300`), and glowing drop-shadows.
