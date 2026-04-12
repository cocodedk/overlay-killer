# CLAUDE.md — Overlay Killer

## Project Overview

Overlay Killer is a browser extension for Chrome and Firefox that removes annoying overlays (cookie consent banners, newsletter popups, etc.) and restores scrollbars on websites that block content access. It operates passively and requires no user configuration.

- **Language / Runtime**: JavaScript (ES2020+), Chrome Extension APIs (MV3) / Firefox WebExtensions API
- **Framework**: Vanilla JS, no build step required
- **Architecture**: Browser Extension (content scripts + popup UI) for Chrome (MV3) and Firefox

---

## Required Skills — ALWAYS Invoke These

These skills **must** be invoked when the relevant situation arises. Never skip them.

| Situation | Skill |
|-----------|-------|
| Before any new feature or screen | `superpowers:brainstorming` |
| Planning multi-step changes | `superpowers:writing-plans` |
| Writing or fixing core logic | `superpowers:test-driven-development` |
| First sign of a bug or failure | `superpowers:systematic-debugging` |
| Before completing a feature branch | `superpowers:requesting-code-review` |
| Before claiming any task done | `superpowers:verification-before-completion` |
| Working on UI / frontend | `frontend-design:frontend-design` |
| After implementing — reviewing quality | `simplify` |

---

## Architecture

```
overlay-killer-chrome-extension/
├── chrome/                  ← Chrome MV3 extension source
│   ├── manifest.json        ← MV3 manifest
│   ├── content.js           ← Content script — removes overlays
│   ├── popup.html/js        ← Toolbar popup
│   └── images/              ← Extension icons
├── firefox/                 ← Firefox WebExtensions source
│   ├── manifest.json        ← Firefox manifest
│   └── ...                  ← Firefox-specific files
├── .githooks/               ← Pre-commit and commit-msg hooks
├── scripts/                 ← Repo management scripts
└── website/                 ← GitHub Pages site (English + Persian)
```

### Layer Rules
- Chrome and Firefox implementations must remain functionally equivalent
- Content scripts must be defensive — never break the host page's functionality
- No external network requests — fully offline operation

---

## Coding Conventions

- [ ] Content scripts are **non-destructive** — gracefully handle missing elements
- [ ] No external dependencies — offline operation only
- [ ] 200-line maximum per file — extract helpers when approaching the limit
- [ ] Test on multiple sites before committing

---

## Engineering Principles

### File Size
- **200-line maximum per file** — extract a function or module when approaching the limit

### DRY · SOLID · KISS · YAGNI
- Extract shared logic into named utilities; never copy-paste
- Single Responsibility: one file does one thing
- Don't add features not yet needed
- Delete dead code immediately

### TDD
- Write the failing test first, make it pass, then refactor
- Test names describe behaviour: `"should remove overlay on page load"`
- One assertion per test — keep tests focused and readable

### Commit hygiene
- Follow Conventional Commits: `feat: ...` / `fix: ...` / `chore: ...`
- The `commit-msg` hook enforces this automatically

---

## Build Commands

```bash
python3 -m json.tool chrome/manifest.json    # Validate Chrome manifest
python3 -m json.tool firefox/manifest.json   # Validate Firefox manifest
# No build step required — extension runs directly from source
```

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project conventions and session startup |
| `version.txt` | Semantic version (MAJOR.MINOR.PATCH) |
| `chrome/manifest.json` | Chrome extension manifest |
| `firefox/manifest.json` | Firefox extension manifest |
| `.github/workflows/` | CI, release, and Pages automation |
| `.githooks/` | Pre-commit and commit-msg hooks |
| `scripts/install-hooks.sh` | One-time hook installer |

---

## Starting a New Session

1. Read this file
2. Run `python3 -m json.tool chrome/manifest.json` to confirm manifest is valid
3. Invoke `superpowers:brainstorming` before touching any feature
4. Follow the Required Skills table — every skill is mandatory, not optional
