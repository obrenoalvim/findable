// Findable — SessionStart hook
// Injects the skill context into sessions where findable is active.
// Reads SKILL.md at runtime so the rules stay in sync with the source.
//
// Cross-platform: runs under Node on Windows, macOS, and Linux.
// Fails silent so a missing file never blocks session start.

const fs = require('fs');
const path = require('path');

const root = process.env.CLAUDE_PLUGIN_ROOT || path.join(__dirname, '..');

try {
  const skillPath = path.join(root, 'skills', 'findable', 'SKILL.md');
  const skill = fs.readFileSync(skillPath, 'utf8');

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext:
          'FINDABLE ACTIVE. You are running the Findable skill. ' +
          'Research SEO/GEO best practices from the web, apply safe changes automatically, ' +
          'document sensitive changes in TODO SEO.md, and keep looping until told to stop.\n\n' +
          skill,
      },
    })
  );
} catch (e) {
  // Never block session start — emit nothing on failure.
}
