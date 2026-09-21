# Antigravity Rules - Notes World

## Automatic Netlify Deployment
Whenever you make, modify, or enhance any code, styles, templates, data, or files in this project:
1. Verify the code correctness and ensure tests pass.
2. Automatically stage all modified files: `git add -A`.
3. Commit with a concise, descriptive message: `git commit -m "..."`.
4. Push directly to GitHub: `git push origin main`.
5. Netlify is connected to `SafuraPatel/notes-world` on branch `main` and automatically builds and deploys to production (https://mynotesworld.netlify.app).
Never ask the user to manually push or deploy; always complete the commit and push automatically before finishing your turn.

## Strict Data Preservation Rule (CRITICAL)
Whenever updating, refactoring, modifying, or enhancing code, styles, data structures, or portal features:
1. NEVER delete, purge, wipe, overwrite, or drop previous user data (Topics/Tricks, Notepad study points, Syllabus progress, PYQ answers, or Recycle Bin items).
2. All updates, data loading, and syncing MUST be strictly lossless and additive:
   - Always retain and merge previous data from all legacy storage keys (`v1`, `v2`, `v3`, `v4`, `v5`, and rolling backups).
   - Never replace existing user topics with default sets; merge new items additively while preserving user customizations.
   - Any deduplication must only assign missing IDs; never strip topics or cards.
   - Dual-persist safety snapshots (`_backup`) before writing to storage.
