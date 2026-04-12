# Overlay Killer

Overlay Killer removes annoying overlays and restores scrollbars on websites that try to force you to accept their policies before you can view their content. Available for both Google Chrome and Mozilla Firefox.

## Website
- [English](https://cocodedk.github.io/overlay-killer/)
- [فارسی (Persian)](https://cocodedk.github.io/overlay-killer/fa/)

## Features
- Automatically removes cookie consent overlays and privacy banners
- Restores scrollbars blocked by overlay scripts
- Works on Chrome (Manifest V3) and Firefox
- No configuration required — installs and works immediately
- No data collection — fully private and offline

## Download
- [**Download for Chrome**](https://github.com/cocodedk/overlay-killer/releases/latest/download/overlay-killer-chrome.zip)
- [**Download for Firefox**](https://github.com/cocodedk/overlay-killer/releases/latest/download/overlay-killer-firefox.zip)

## Build from Source
**Prerequisites:** Google Chrome 116+ or Mozilla Firefox.

```bash
git clone https://github.com/cocodedk/overlay-killer.git
cd overlay-killer
./scripts/install-hooks.sh
```

**Chrome:** Open `chrome://extensions/` → Developer mode → Load unpacked → select `chrome/`

**Firefox:** Open `about:debugging` → This Firefox → Load Temporary Add-on → select `firefox/manifest.json`

No build step required — the extension runs directly from source.

## Architecture

```
overlay-killer-chrome-extension/
├── chrome/          ← Chrome MV3 extension source
│   ├── manifest.json
│   ├── content.js   ← Removes overlays, restores scrollbars
│   ├── popup.html
│   └── images/
├── firefox/         ← Firefox WebExtensions source
│   ├── manifest.json
│   └── ...
└── website/         ← GitHub Pages site
```

| Component | Technology |
|-----------|-----------|
| Chrome runtime | Manifest V3 |
| Firefox runtime | WebExtensions API |
| Language | JavaScript (ES2020+) |
| Build | None required |

## Author

**Babak Bandpey** — [cocode.dk](https://cocode.dk) | [LinkedIn](https://linkedin.com/in/babakbandpey) | [GitHub](https://github.com/cocodedk)

## License

Apache-2.0 | © 2026 [Cocode](https://cocode.dk) | Created by [Babak Bandpey](https://linkedin.com/in/babakbandpey)
