---
name: findable
description: Autonomous SEO/GEO research and optimization skill — searches the web for best practices, applies safe improvements automatically, and documents sensitive changes in TODO SEO.md
when_to_use: when you want to improve a project's visibility in search engines and AI recommendations
version: 1.0.0
languages: all
---

# Findable

> Research deep. Apply safe. Document sensitive. Never stop.

---

## What it does

When invoked, Findable runs an autonomous loop:

1. Searches GitHub, GitLab, Google, forums, and docs for current SEO/GEO best practices
2. Reads the project to understand its stack and context
3. Applies **safe changes** immediately (new files, additions, metadata)
4. For **sensitive changes**, creates or updates `TODO SEO.md` with full details
5. Reports what was found, what was applied, what was queued
6. Repeats — keeps researching and improving until the user says to stop

---

## Search scope

Every research cycle covers:

- **SEO** — technical SEO, on-page optimization, structured data (JSON-LD), Core Web Vitals, sitemaps, robots.txt, canonical URLs
- **GEO** (Generative Engine Optimization) — how AI systems discover, crawl, and recommend content
- **llms.txt** — the emerging standard for AI-readable site context ([llmstxt.org](https://llmstxt.org))
- **AI visibility** — appearing in ChatGPT, Perplexity, Claude, Gemini, and other LLM recommendations
- **Rich results** — Open Graph, Twitter Cards, structured data, rich snippets
- **Crawlability** — robots.txt, sitemap.xml, internal linking, page speed

Sources to search: GitHub repos, GitLab projects, Google Search, Hacker News, dev.to, Reddit (r/SEO, r/webdev), Stack Overflow, official docs (Google Search Central, schema.org, llmstxt.org, web.dev)

---

## Reading before touching

**Never modify a file without reading it first.**

For every file the skill might touch:
1. Read it completely
2. Understand the project stack and what the file does
3. Decide: safe change (apply) or sensitive change (document in TODO SEO.md)

---

## Safe changes — apply automatically

Apply without asking when the change is purely additive and cannot break existing behavior:

- Creating `robots.txt` (when it does not exist)
- Creating `sitemap.xml` (when it does not exist)
- Creating `llms.txt` (when it does not exist)
- Adding `<meta>` tags: title, description, `og:*`, `twitter:*`
- Adding JSON-LD structured data blocks
- Adding `<link rel="canonical">` tags
- Creating `humans.txt`
- Adding `alt` text to images that have none
- Creating documentation files: `SEO.md`, `FINDABLE.md`

---

## Sensitive changes — document in TODO SEO.md

For anything that modifies existing structure, configuration, or behavior — create or update `TODO SEO.md` in the project root.

Sensitive change examples:
- Changing URL structure or routing
- Modifying existing HTML structure or layout
- Changing navigation, menus, or link hierarchy
- Modifying build configs, server configs, `.htaccess`, `nginx.conf`
- Changing meta tags that were deliberately set
- Restructuring content or pages
- Any change where the right answer depends on the specific stack

### TODO SEO.md format

```markdown
# TODO SEO

> Last updated: YYYY-MM-DD

## Pending Changes

### [Change title]
- **Source:** [URL of the best practice, repo, or article found]
- **What:** [Exactly what will be done]
- **Where:** [Which file(s) will be touched, with line numbers when possible]
- **Why:** [Why this improves SEO / GEO / AI visibility]
- **Risk:** [What could break or needs verification before applying]
- **Effort:** Low / Medium / High
```

---

## Research queries

Use web search with queries like:

```
SEO best practices 2024 site:github.com
llms.txt specification
GEO generative engine optimization guide
how LLMs crawl and recommend websites
structured data JSON-LD best practices schema.org
robots.txt best practices 2024
sitemap.xml optimization tips
Core Web Vitals optimization 2024
Open Graph meta tags complete guide
AI visibility SEO recommendations site:reddit.com OR site:hn.algolia.com
technical SEO checklist site:dev.to
```

---

## Research loop

After each cycle:
1. Search for new SEO/GEO sources and updates
2. Read the project state (files, stack, existing SEO setup)
3. Apply safe changes or add to `TODO SEO.md`
4. Report: what was searched, what was found (with URLs), what was applied, what was queued
5. **Repeat** — do not stop until the user says to stop

The loop is continuous. If context fills, update `TODO SEO.md` with current state so a new session can resume from `TODO SEO.md`.

---

## Reporting format

After each cycle, output:

```
## Findable — Cycle N

**Searched:** [queries used]
**Found:** [source URLs with one-line summary each]
**Applied:** [files created or changed, with reason]
**Queued in TODO SEO.md:** [changes documented, not yet applied]
**Next:** [what the next cycle will focus on]
```

---

## Compatibility

Works in any project with web presence:
- Static sites (HTML, Jekyll, Hugo, Eleventy, Astro)
- Next.js, Nuxt, SvelteKit, Remix
- Backend apps with HTML output (Rails, Django, Laravel, Express)
- Documentation sites (Docusaurus, VitePress, GitBook)
- Any project that needs to be found
