# Rule: Auto-Deploy to Netlify on Every Change

Whenever any code, styling, HTML, JavaScript, data, or configuration is changed or requested:
1. Always test and verify the changes locally first.
2. Automatically run:
   - `git add -A`
   - `git commit -m "<Clear description of change>"`
   - `git push origin main`
3. Netlify automatically deploys from `main` to `https://mynotesworld.netlify.app`.
4. Always push automatically so the user's live Netlify site updates immediately without requiring manual deployment steps.
