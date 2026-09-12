# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

- Clarify that editing an existing `robots.txt`, `sitemap.xml`, or `llms.txt` is a sensitive change, not a safe one
- Drop hardcoded years from example research queries so they don't go stale
- Document optional fallback to the `web` skill when a research source is blocked, paywalled, or empty

## [1.1.0] - 2026-07-03

- Declare `last30days` as a plugin dependency (auto-installed alongside findable)
- Prioritize `last30days` for community/sentiment research before falling back to plain web search

## [1.0.0] - 2026-06-30

- Initial release: autonomous SEO/GEO research and optimization skill
- Remove SessionStart hook — skill is invoked on demand, not auto-injected
- Rewrite READMEs and fix skill stop condition
