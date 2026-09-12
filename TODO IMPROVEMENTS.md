# TODO IMPROVEMENTS

> Last updated: 2026-09-12

## Pending Changes

### Guard against hallucinated alt text
- **Category:** Bug
- **What:** `SKILL.md`'s safe-change list includes "Adding alt text to images that have none," applied automatically with no guidance on sourcing the description. An LLM asked to add alt text with no surrounding context (filename, caption, nearby copy) can only guess at what the image shows, and a confidently wrong description is worse for accessibility and SEO than none.
- **Where:** `skills/findable/SKILL.md` (Safe changes section, "Adding alt text to images that have none")
- **Why:** Alt text is read by screen readers and indexed by search engines — a fabricated description actively misinforms both audiences instead of just leaving a gap.
- **Risk:** Changes actual skill behavior/policy (adds a constraint or downgrades this item to sensitive-when-context-is-thin), so it needs a deliberate decision rather than a silent edit.
- **Effort:** Low

### Clarify "documentation files" safe-change scope
- **Category:** UI-UX (skill instructions)
- **What:** The safe-change list allows creating `SEO.md` and `FINDABLE.md` freely, but gives no content guidance (unlike the detailed template given for `TODO SEO.md`), and doesn't say what to do if one already exists.
- **Where:** `skills/findable/SKILL.md` (Safe changes section, line ~80)
- **Why:** Without a content shape or an existing-file rule, cycles could produce inconsistent docs or silently overwrite something a user wrote by hand.
- **Risk:** Adding a template/rule here is a small policy addition, not a pure wording fix — flagging rather than deciding the shape unilaterally.
- **Effort:** Low

### Bump `version` fields for this pass's changes
- **Category:** Refactor
- **What:** `skills/findable/SKILL.md` frontmatter and `.claude-plugin/plugin.json` both carry `version: 1.1.0`. This pass changed `SKILL.md` content (clarifications, stale-date fix, `web` skill fallback doc) without bumping either version.
- **Where:** `skills/findable/SKILL.md` (frontmatter), `.claude-plugin/plugin.json`
- **Why:** Keeping the two version fields in sync is this repo's existing convention (both were bumped together 1.0.0 → 1.1.0 previously); leaving them stale makes it harder to tell installed plugin versions apart later.
- **Risk:** Low risk, but it's a release decision (what the next version number should be) rather than a content fix, so it's left for the maintainer.
- **Effort:** Low
