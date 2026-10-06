<div align="center">

<img src=".github/logo.svg" alt="Findable logo" width="120" height="120">

# Findable

**SEO and GEO for your project, researched and applied by Claude Code.**<br>
It searches current best practices, applies the safe fixes, and queues the rest in `TODO SEO.md` for your review.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/obrenoalvim/findable?style=flat&logo=github&color=ffb020)](https://github.com/obrenoalvim/findable/stargazers)
[![Claude Code plugin](https://img.shields.io/badge/Claude_Code-plugin-5B5BD6)](#quick-start)

**English** · [Português](README.pt.md) · [Español](README.es.md)

[What it does](#what-it-does) · [Quick start](#quick-start) · [Example](#example) · [Coverage](#coverage) · [Install](#install) · [FAQ](#faq)

</div>

---

Findable is a Claude Code skill for SEO, GEO (generative engine optimization) and `llms.txt`. Point it at a project and it searches the web for what needs fixing, applies the safe changes, and queues the rest for you to review.

## What it does

Each cycle: searches GitHub, Google, forums, and docs for current SEO, GEO, and llms.txt best practices. Reads your project to understand the stack. Applies what it can, documents what it can't.

**Safe changes go in right away:** `robots.txt`, `sitemap.xml` and `llms.txt` (created only when they don't exist yet), meta tags, JSON-LD blocks, canonical links, missing alt text.

**Sensitive changes go into `TODO SEO.md`** with the source URL, the exact file to touch, and the reason. You decide when to apply them.

The skill stops when you ask, when there's nothing left to do, or when context runs out. If context fills mid-run, it updates `TODO SEO.md` so a new session can pick up from there.

## Quick start

```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Then tell Claude: "Run the Findable skill on this project."

## Example

A sensitive change lands in `TODO SEO.md` in this format:

```markdown
### Redirect www to the apex domain
- **Source:** https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **What:** Add a 301 redirect from `www.example.com` to `example.com`.
- **Where:** `nginx.conf`, server block on line 12.
- **Why:** Both hosts serve the same pages, so search engines split ranking signals between them.
- **Risk:** Confirm your TLS certificate covers both hosts before deploying.
- **Effort:** Low
```

After each cycle the skill reports what it searched, what it found (with URLs), what it applied, what it queued, and what the next cycle will cover.

---

## Coverage

- **SEO:** sitemaps, robots.txt, structured data, Core Web Vitals, canonical URLs
- **GEO:** how LLMs discover and recommend your content (Generative Engine Optimization)
- **llms.txt:** AI-readable context files following [llmstxt.org](https://llmstxt.org)
- **Rich results:** Open Graph, Twitter Cards, JSON-LD, schema.org

## Works best with last30days

Findable depends on [last30days](https://github.com/mvanhorn/last30days-skill) for the community and sentiment angle of research: what people are actually saying on Reddit, Hacker News, X, etc. Plain web search misses most of that. Installing findable as a plugin installs it automatically. Without it, findable still works, but skips straight to web search for that part.

## Install

**As a plugin (available in all sessions):**
```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Then invoke it: "Run the Findable skill on this project."

**No install needed:**
> "Read https://github.com/obrenoalvim/findable and follow the Findable skill."

**Copy the skill file:**
Copy `skills/findable/SKILL.md` into your skills directory and invoke through your skill system.

## Works with

Static sites, Next.js, Nuxt, SvelteKit, Remix, Rails, Django, Laravel, Express, Docusaurus, VitePress, or any project with a web presence.

---

## FAQ

**Does Findable change my files without asking?**
Only with additive changes: files that don't exist yet, new meta tags, JSON-LD blocks, canonical links and missing alt text. Anything that edits existing structure, routing, navigation or server configuration waits in `TODO SEO.md` until you apply it.

**Does it need an API key?**
No. Findable uses Claude Code's web search and, when installed, the `last30days` and `web` skills.

**Is this only for websites?**
It targets projects with a web presence, from static sites to Rails, Django and Next.js apps. See [Works with](#works-with).

## More Claude Code skills by the same author

- [**zero-drift**](https://github.com/obrenoalvim/zero-drift): keeps long sessions grounded with named replies and a living `TASK.md`.
- [**keep-improving**](https://github.com/obrenoalvim/keep-improving): an autonomous improvement loop with a ten-role review panel.
- [**unblock**](https://github.com/obrenoalvim/unblock): a 13-tool free fallback chain for web research that keeps trying.
- [**no-watermark**](https://github.com/obrenoalvim/no-watermark): detects and removes invisible Unicode watermarks from text.

## Contributing

Found a gap in the research scope or a change type the triage gets wrong? Open an issue or a PR. See [CONTRIBUTING.md](CONTRIBUTING.md) and the [changelog](CHANGELOG.md).

## License

[MIT](LICENSE)

---

<div align="center">

If Findable helps your project show up in search and AI answers, a ⭐ helps other people find it too.

<sub>**Topics:** seo · geo · llms-txt · ai-visibility · claude-code · claude-skill · claude-code-plugin · generative-engine-optimization · technical-seo · json-ld · structured-data</sub>

</div>
