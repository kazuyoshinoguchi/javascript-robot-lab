# 🤖 JavaScript Robot Lab — Stage 1–30

Japanese interactive educational robot game. `index.html` is the main page.

## Start

- For all exercises, publish the **entire contents** of this repository on GitHub Pages: Settings → Pages → Deploy from branch → `main` / `(root)`.
- Local preview: `python3 -m http.server 8000` then open `http://localhost:8000/`. (The API stages require HTTP, not `file://`.)
- iPhone / iPad: access the GitHub Pages URL in Safari.
- Existing Stage 1–20 progress: local storage key `robot-lab-v2` is retained on the same browser/origin. You can also use export/import of `Robot_Lab_Save.json`.

## Stage 21–30 topics

| Stages | Beginner | Advanced |
|---|---|---|
| 21 / 22 | JSON gem position | JSON walls and maze |
| 23 / 24 | Real `fetch` GET | async/await and HTTP error |
| 25 / 26 | Debug `collect()` | Debug loop off-by-one |
| 27 / 28 | Real TypeScript type check | Interface + function types |
| 29 / 30 | GitHub Issue + Branch | Pull Request + Actions |

**Important**: JSON/API/TypeScript tasks use a guided editor. The game validates the code or data and performs the animation in its own engine; it does not run arbitrary user JavaScript. Stages 27–28 load TypeScript compiler from `vendor/typescript.js` for genuine semantic type checking. Stage 29–30 real GitHub tasks must be done on GitHub and are self-confirmed, not externally verified. The YAML lesson validation is a simplified tutorial check; the real GitHub Actions result is authoritative.

## Development / real CI

- `npm install`
- `npm run typecheck` — real TypeScript compiler checks `typescript/*.ts`
- `npm test` — Node.js test runner validates map JSON files
- `.github/workflows/check.yml` runs these on every push to `main` and pull request.

See `STAGE_21_30_GUIDE.md` for a Japanese step-by-step guide.
