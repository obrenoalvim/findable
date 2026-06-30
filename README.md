# Findable

[🇧🇷 Leia em Português](README.pt.md)

A Claude Code skill for SEO and GEO research. Point it at a project and it searches the web for what needs fixing, applies the safe changes, and queues the rest for you to review.

---

## What it does

Each cycle: searches GitHub, Google, forums, and docs for current SEO, GEO, and llms.txt best practices. Reads your project to understand the stack. Applies what it can, documents what it can't.

**Safe changes go in right away:** `robots.txt`, `sitemap.xml`, `llms.txt`, meta tags, JSON-LD blocks, canonical links, missing alt text.

**Sensitive changes go into `TODO SEO.md`** with the source URL, the exact file to touch, and the reason. You decide when to apply them.

The skill stops when you ask, when there's nothing left to do, or when context runs out. If context fills mid-run, it updates `TODO SEO.md` so a new session can pick up from there.

---

## Coverage

- **SEO:** sitemaps, robots.txt, structured data, Core Web Vitals, canonical URLs
- **GEO:** how LLMs discover and recommend your content (Generative Engine Optimization)
- **llms.txt:** AI-readable context files following [llmstxt.org](https://llmstxt.org)
- **Rich results:** Open Graph, Twitter Cards, JSON-LD, schema.org

---

## Use it

**No install needed:**
> "Read https://github.com/obrenoalvim/findable and follow the Findable skill."

**As a plugin (available in all sessions):**
```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Then invoke it: "Run the Findable skill on this project."

**Copy the skill file:**
Copy `skills/findable/SKILL.md` into your skills directory and invoke through your skill system.

---

## Works with

Static sites, Next.js, Nuxt, SvelteKit, Remix, Rails, Django, Laravel, Express, Docusaurus, VitePress, or any project with a web presence.
