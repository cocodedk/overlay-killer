# Contributing to Overlay Killer

## Local Setup
1. Install Google Chrome 116+ and/or Mozilla Firefox.
2. Clone the repository.
3. Load the extension from `chrome/` or `firefox/` via the browser's extension manager.

## Install Git Hooks
```sh
./scripts/install-hooks.sh
```

## Build and Test Commands
```sh
# Validate manifests
python3 -m json.tool chrome/manifest.json
python3 -m json.tool firefox/manifest.json

# Load unpacked in Chrome: chrome://extensions/ → Developer mode → Load unpacked → select chrome/
# Load in Firefox: about:debugging → This Firefox → Load Temporary Add-on → select firefox/manifest.json
```

## Local Git Setup
Run these once after cloning:
```bash
git config pull.rebase true
git config core.autocrlf input
git config push.autoSetupRemote true
git config init.defaultBranch main
```

## Coding Style
- Keep JavaScript files small and focused (200-line maximum per file).
- No external dependencies — the extension must work completely offline.
- Maintain separate but functionally equivalent implementations for Chrome and Firefox.

## Branch Naming
| Prefix | Type | Example |
|--------|------|---------|
| `feature/` | `feat:` | `feature/add-firefox-support` |
| `fix/` | `fix:` | `fix/scrollbar-not-restored` |
| `chore/` | `chore:` | `chore/update-dependencies` |
| `docs/` | `docs:` | `docs/update-contributing` |
| `refactor/` | `refactor:` | `refactor/shared-overlay-logic` |
| `ci/` | `ci:` | `ci/add-dependabot` |

## PR Checklist
- [ ] `chrome/manifest.json` and `firefox/manifest.json` are valid JSON.
- [ ] Manual test completed in Chrome and/or Firefox.
- [ ] Updated docs if behavior changed.
- [ ] Commit message follows Conventional Commits (`feat: ...`, `fix: ...`, etc.).
