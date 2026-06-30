# Findable

[🇧🇷 Leia em Português](README.pt.md)

A Claude Code skill that autonomously researches SEO and GEO best practices from the web and applies improvements to your project — automatically for safe changes, with a documented plan for sensitive ones.

---

## The Problem

Most projects are invisible. Good code, bad discoverability. No sitemap. No structured data. No `llms.txt`. Search engines and AI systems can't recommend what they can't understand.

Findable fixes this by running a continuous research loop: it searches GitHub, Google, forums, and docs for current best practices, then applies what's safe and documents what needs your review.

---

## What it does

1. **Searches** the web for SEO, GEO, llms.txt, and AI visibility best practices
2. **Reads** your project to understand the stack and current state
3. **Applies safe changes** automatically — new files, meta tags, structured data, llms.txt
4. **Documents sensitive changes** in `TODO SEO.md` — URL changes, structural edits, config touches
5. **Keeps going** — loops until you say stop

---

## Safe changes (applied automatically)

- `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`
- `<meta>` tags: title, description, `og:*`, `twitter:*`
- JSON-LD structured data blocks
- `<link rel="canonical">` tags
- `alt` text for images missing it

## Sensitive changes (documented in TODO SEO.md)

- URL structure or routing changes
- Existing HTML structure modifications
- Build configs, server configs, `.htaccess`
- Navigation or link hierarchy changes

Each entry in `TODO SEO.md` includes the source URL, what will be done, where it touches, and why.

---

## Coverage

| Area | Examples |
|------|---------|
| **SEO** | sitemaps, robots.txt, structured data, Core Web Vitals, canonical URLs |
| **GEO** | generative engine optimization, AI crawlability, content signals |
| **llms.txt** | AI-readable context files following the llmstxt.org standard |
| **AI visibility** | appearing in ChatGPT, Perplexity, Claude, Gemini recommendations |
| **Rich results** | Open Graph, Twitter Cards, JSON-LD, rich snippets |

---

## Installation

### Recommended — install as plugin (global, automatic)

```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

### Manual — invoke per session

Point Claude at this repo:
> "Read https://github.com/obrenoalvim/findable and follow the Findable skill."

Or copy `skills/findable/SKILL.md` into your skills directory.

---

## Usage

Once active, Findable runs autonomously. It will:

- Report what it searched and found (with source URLs)
- Show what was applied (with file paths)
- Show what was queued in `TODO SEO.md`
- Tell you what the next cycle will focus on

Say **"stop"** or **"pare"** to end the loop.

---

## Compatibility

Works with any project that has a web presence:

- Static sites (HTML, Jekyll, Hugo, Eleventy, Astro)
- Next.js, Nuxt, SvelteKit, Remix
- Backend apps with HTML output (Rails, Django, Laravel, Express)
- Documentation sites (Docusaurus, VitePress, GitBook)
- Any project that needs to be found
