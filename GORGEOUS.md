# ✨ GORGEOUS Site Standards

> Modern, premium, tactile, and intentional design system for all UI components.

## 💎 Core Visual Philosophy

**Modern, premium, tactile, and intentional.**

- ✨ **Clean layout**: Ample spacing, no visual clutter
- 🖤 **Dark & light modes**: Each as first-class citizens
- 🌀 **Subtle motion**: Animate with purpose (not noise)
- 🧊 **Glassmorphism accents**: Apply sparingly (cards, modals)
- 🖋️ **Font pairing**: Elegant serif (Lora) for headings, clean sans (Geist) for body

## 🎨 Color System

```typescript
// Primary colors
Primary: #2563EB (blue-600)
Secondary: soft purple or teal
Base Dark: #0D0D0D on black
Base Light: #F9FAFB on white

// Usage
<div className="bg-blue-600 text-white">Primary Action</div>
<div className="bg-zinc-900 dark:bg-zinc-50">Base Background</div>
```

## 🧱 Component System Standards

**Reusable, headless-first, motion-enhanced, accessible.**

### Button

```typescript
// Rules: Rounded full, hover glow, tailwind group interactions
<button className="rounded-full px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all group">
  <span className="group-hover:scale-105 transition-transform">Click Me</span>
</button>
```

### Card

```typescript
// Rules: backdrop-blur-sm, shadow-lg, transition, animate on hover
<div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 shadow-lg rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-2xl">
  {children}
</div>
```

### Section

```typescript
// Rules: Use MotionSection, with scroll reveal and fade-slide transition
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
>
  {children}
</motion.section>
```

### Navbar

```typescript
// Rules: Transparent with blur, auto-collapse on scroll
<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg dark:bg-black/80">
  <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Navigation items */}
  </nav>
</header>
```

### Footer

```typescript
// Rules: Minimal, social-first, darkened background
<footer className="bg-zinc-100 dark:bg-zinc-900">
  <div className="container mx-auto px-4 py-12 lg:px-8">
    {/* Footer content */}
  </div>
</footer>
```

### Testimonial

```typescript
// Rules: Use Card, display StarRating, animate quote on hover
<Card className="group">
  <StarRating rating={5} />
  <blockquote className="mt-4 group-hover:text-blue-600 transition-colors">
    "Amazing experience!"
  </blockquote>
  <p className="mt-4 font-semibold">John Doe</p>
</Card>
```

### Hero

```typescript
// Rules: 2-column, with animated text reveal + circular video placeholder
<section className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="font-serif text-5xl font-bold">Your Heading</h1>
    <p className="mt-4 text-lg text-zinc-600">Your description</p>
  </motion.div>
  <div className="flex justify-center">
    <div className="h-80 w-80 rounded-full bg-zinc-200 dark:bg-zinc-800">
      {/* Video/Image placeholder */}
    </div>
  </div>
</section>
```

## 🖼️ Motion Rules (Framer Motion)

### Core Principles

- Use `motion.div` for sections
- Add scroll animation with `initial`, `whileInView`, `viewport`
- Animate hero: `opacity`, `y`
- Animate cards: `scale`, `shadow`, `blur`
- **Never animate layout shift**

### Standard Animations

```typescript
// Fade in from bottom
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
>
  {children}
</motion.div>

// Scale on hover
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  {children}
</motion.div>

// Stagger children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {children.map((child) => (
    <motion.div
      key={child.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {child}
    </motion.div>
  ))}
</motion.div>
```

## 📐 Layout Rules

### Container & Spacing

```typescript
// Max width
<div className="max-w-7xl mx-auto">

// Grid spacing
<div className="grid gap-6 md:gap-8 lg:gap-12">

// Consistent padding
<div className="px-4 sm:px-6 lg:px-8">

// Section spacing
<section className="py-24 sm:py-32">
```

### Breakpoints

```typescript
// Tailwind breakpoints (mobile-first)
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
2xl: 1536px // 2X Extra large devices

// Usage
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## ✏️ Typography

### Font Configuration

```typescript
// tailwind.config.ts
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
};
```

### Font Usage

```typescript
// Headings - Serif (Lora)
<h1 className="font-serif text-5xl font-bold tracking-tight">
  Your Heading
</h1>

// Body - Sans (Geist)
<p className="font-sans text-base text-zinc-500 dark:text-zinc-400">
  Body copy
</p>

// Scale
text-xs    // 0.75rem (12px)
text-sm    // 0.875rem (14px)
text-base  // 1rem (16px)
text-lg    // 1.125rem (18px)
text-xl    // 1.25rem (20px)
text-2xl   // 1.5rem (24px)
text-3xl   // 1.875rem (30px)
text-4xl   // 2.25rem (36px)
text-5xl   // 3rem (48px)
text-6xl   // 3.75rem (60px)
```

## 🔍 SEO + Performance Directives

### Every Page Must Have

```typescript
// Metadata
export const metadata: Metadata = {
  title: "Page Title | Site Name",
  description: "Clear, concise description under 160 characters",
  openGraph: {
    title: "Page Title",
    description: "Description for social sharing",
    images: ["/og-image.jpg"],
  },
};
```

### Image Optimization

```typescript
// Always use next/image
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority // For above-the-fold images
  placeholder="blur" // Optional blur placeholder
/>
```

### Font Loading

```typescript
// Use next/font for local fonts
import { GeistSans } from "geist/font/sans";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

// Apply in layout
<html className={`${GeistSans.variable} ${lora.variable}`}>
```

## 🔌 Tech Enhancements

| Feature            | Directive                                                               |
| ------------------ | ----------------------------------------------------------------------- |
| **Fonts**          | Geist, Lora from `next/font/google` with variable declarations          |
| **Icons**          | `lucide-react`, size `h-5 w-5` with consistent color usage              |
| **Animations**     | Use `framer-motion`, don't use `setTimeout`, no autoplay                |
| **Themes**         | Tailwind `darkMode: 'class'`, stored in `localStorage` or `next-themes` |
| **Responsiveness** | Mobile-first, collapse nav into hamburger at `md:`                      |
| **Shared UI**      | All components exported from `packages/ui` with TS support              |

## 🧪 UX Checks Before Deploy

| UX Element             | Status |
| ---------------------- | ------ |
| Smooth scroll anchors  | ✅     |
| Mobile nav menu        | ✅     |
| Hover/Focus states     | ✅     |
| Color contrast (WCAG)  | ✅     |
| Light/Dark toggle      | ✅     |
| Favicon & SEO metadata | ✅     |
| Hero CTA click works   | ✅     |
| Loading states         | ✅     |
| Error states           | ✅     |
| Empty states           | ✅     |

## 🎯 Component Checklist

Before creating any component, ensure:

- [ ] **Accessible**: Proper ARIA labels, keyboard navigation
- [ ] **Responsive**: Works on mobile, tablet, desktop
- [ ] **Themed**: Supports both light and dark modes
- [ ] **Animated**: Subtle, purposeful motion
- [ ] **Typed**: Full TypeScript support
- [ ] **Documented**: Clear props and usage examples
- [ ] **Tested**: Works in all scenarios

## 🚀 Implementation Guide

### 1. Store This Directive

Save as `GORGEOUS.md` in your root repo.

### 2. Use Shared UI

Build components in `packages/ui` that follow these rules:

```typescript
// packages/ui/components/button.tsx
export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className="rounded-full px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all"
    {...props}
  >
    {children}
  </button>
);
```

### 3. Apply to Every Section

Treat every section like a product — polish it like it's a landing page.

### 4. AI Generation

When generating with AI, paste this directive as system instructions.

## 📚 Examples

### Complete Card Component

```typescript
import { motion } from "framer-motion";

export const Card = ({ children, className = "" }: CardProps) => (
  <motion.div
    className={`
      backdrop-blur-sm bg-white/50 dark:bg-black/50
      shadow-lg rounded-2xl p-6
      border border-black/10 dark:border-white/10
      transition-all
      hover:-translate-y-2 hover:shadow-2xl
      ${className}
    `}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
```

### Complete Hero Section

```typescript
export const Hero = () => (
  <section className="relative overflow-hidden bg-white dark:bg-zinc-900">
    <div className="container mx-auto grid min-h-screen items-center px-4 py-20 md:grid-cols-2 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="font-serif text-5xl font-bold tracking-tight text-zinc-900 dark:text-white lg:text-6xl">
          Your Amazing Headline
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 md:text-xl">
          Your compelling description that makes people want to learn more.
        </p>
        <Button>Get Started</Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          {/* Video/Image content */}
        </div>
      </motion.div>
    </div>
  </section>
);
```

---

## 💡 Remember

> **"Modern, premium, tactile, and intentional."**

Every component, every animation, every color choice should feel deliberate and polished. This isn't just a website — it's an experience.
