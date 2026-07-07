# Amber Terminal × Designer Portfolio — Design Spec

**Date:** 2026-07-07
**Client:** Sheikh Ridwan
**Type:** Full redesign of personal portfolio
**Stack:** Pure HTML/CSS/JS

---

## Overview

A fusion of hacker/terminal aesthetics (Matrix-inspired) with polished graphic designer presentation. Amber neon (`#FFB800`) replaces the typical Matrix green, creating a warm, premium, cinematic feel.

---

## Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0a0a0a` | Page backgrounds |
| Primary accent | `#FFB800` | Headings, borders, glows, active states |
| Secondary | `#FF6B00` | Hover states, depth |
| Highlight | `#FFD700` | Special highlights, stars |
| Text | `#F5F5DC` | Body text |
| Muted | `#8B7D3C` | Secondary text, borders |
| Surface | `#111111` | Card backgrounds |
| Surface-hover | `#1a1a1a` | Card hover |

---

## Page Structure (8 pages)

### 1. HOME (`> ACCESS_GRANTED`)
- Amber Matrix rain canvas (CSS/JS, subtle opacity)
- Large name + tagline with amber glow
- Terminal-style typed subtitle
- Open-to-work banner
- CTA buttons as terminal commands
- Rotating stats line at bottom

### 2. ABOUT (`> whoami`)
- Terminal intro block (whoami, pwd, cat)
- Engaging narrative bio (BD → Japan journey)
- 4 core strengths as `./strengths.sh` output
- Profile image/GIF

### 3. EXPERIENCE (`> CAREER_LOG`)
- Timeline of all 5 roles styled as terminal processes
- Each: role name, company, duration, location, key metrics
- Verified Binance portfolio highlight

### 4. SKILLS (`> SKILLS.EXE`)
- 38 skills across 6 categories
- Styled as `$ skills --category=xxx` terminal blocks
- Language proficiency display

### 5. SHOWCASE (`> PORTFOLIO`)
- Amber-bordered visual grid gallery
- Design projects with hover glow effects
- Optional 3D carousel toggle

### 6. EDUCATION (`> EDUCATION`)
- Academic institutions table
- Certifications with credential links
- Current learning status

### 7. CONTACT (`> SEND_TRANSMISSION`)
- Terminal-prompt styled form
- Social links bar
- Animated thank-you message

### 8. SYSTEM LOG (`> SYSTEM_LOG`)
- Professional growth narrative
- Reflection on journey from BD → Japan

---

## Interactive Elements

- **Amber Matrix rain** — Canvas-based, low opacity background
- **Glitch effect** — CSS keyframes on main heading
- **Terminal cursor blink** — CSS animation on prompts
- **Neon glow** — Box-shadow and text-shadow on hover
- **Typewriter effect** — JS on hero subtitle
- **3D Carousel** — Preserved from current site for Showcase
- **Scanlines** — Optional subtle CRT overlay

---

## Navigation

- Horizontal top nav with amber hover underline
- Active page: `> [PAGE]` prefix style
- Mobile: amber slide-out menu (preserved from current)
- Font: monospace (JetBrains Mono or Space Mono) for headings, clean sans (Inter) for body

---

## SEO

- Meta title/description per page
- Open Graph tags (og:title, og:description, og:image)
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`)
- Heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Keywords: full-stack developer, graphic designer, logo specialist, Node.js, Japan, Bangladesh, API automation
