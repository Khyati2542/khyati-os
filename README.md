# KHYATI.OS — Portfolio (v2 Neo-brutalist)

Personal portfolio of Khyati Verma, AI/ML Engineer. Built with Next.js 16, TypeScript and Tailwind CSS v4.

> ⚠️ **Repo rule:** Do not create a GitHub repository on my behalf. I create repos myself on my personal GitHub account (**Khyati2542**), only when needed. Anyone helping should prepare code and instructions only.

The site is one long scrolling page: ticker → nav → hero → "Interrogate my agent" terminal → Things I Shipped → Periodic Table of Me → The Route So Far → Field Notes → lime contact footer.

---

## 1. What you need

| Tool | Why | Get it |
| --- | --- | --- |
| Node.js (LTS) | Runs the project | https://nodejs.org |
| Git | Saves and uploads code | https://git-scm.com |
| VS Code (optional) | Code editor | https://code.visualstudio.com |
| GitHub account | Hosts the code (my personal one: Khyati2542) | https://github.com |

Check they are installed:

```bash
node -v
npm -v
git --version
```

## 2. Run it on your computer

The project is already created. From the `khyati-os` folder:

```bash
npm install     # only the first time, or after pulling new dependencies
npm run dev
```

Open http://localhost:3000. Changes show up instantly when you save a file.

## 3. Folder structure

```
khyati-os/
├── assets/fonts/            ← font files used to draw the LinkedIn preview image
├── public/
│   ├── resume.pdf           ← my CV (add it — linked from nav + footer)
│   └── projects/            ← screenshots / demo GIFs (optional)
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← fonts, page title, SEO, analytics
│   │   ├── page.tsx         ← puts all sections in order
│   │   ├── globals.css      ← DESIGN TOKENS (colors, shadows, animations), dot grid, outline text
│   │   ├── opengraph-image.tsx ← generates the 1200×630 LinkedIn/WhatsApp preview
│   │   ├── icon.svg         ← favicon
│   │   ├── sitemap.ts / robots.ts
│   ├── components/          ← one file per section (Hero, AskAgent, Shipped…)
│   │   └── tiles/           ← the little visual inside each project tile
│   ├── data/                ← ALL text content lives here
│   └── lib/                 ← site URL, nav links, color "tones"
```

> **Tailwind v4 note:** there is no `tailwind.config.ts`. Colors, shadows and animations live in the `@theme` block at the top of `src/app/globals.css`. Change a hex value there and it updates everywhere.

## 4. Edit my content

You never need to touch the layout to update the site. Just edit the files in `src/data/`:

| File | What to change |
| --- | --- |
| `profile.ts` | Name, tagline, intro, email, links, hero stats, ticker words, stickers |
| `projects.ts` | Project tiles (add `href` to link a tile to GitHub / a case study) |
| `skills.ts` | Periodic table elements + category colors |
| `career.ts` | Career metro stops (last one stays the dashed "Next stop") |
| `prompts.ts` | "Interrogate my agent" questions and answers |
| `articles.ts` | My articles (title, platform, date, link) + achievement pills |

Handy rules built into the components:

- `linkedin: ''` (empty) hides the LinkedIn button until you fill it in.
- An article without a `url` shows a "Drafting… / Soon" card instead of a link.
- A project whose `id` has no visual in `src/components/tiles/index.ts` just shows text — adding a project never breaks the grid.
- "Projects shipped" and "Elements in my stack" count themselves from `projects.ts` and `skills.ts`.

To swap my résumé, replace `public/resume.pdf` with the new file (keep the same name).

### Before launch — fill in the TODOs

Search the project for `TODO` (VS Code: **Ctrl+Shift+F**). The main ones:

- [ ] `public/resume.pdf` — add the file (the CV links 404 until it exists)
- [ ] `profile.ts` → `linkedin` URL, and hero stats if I want different numbers
- [ ] `career.ts` → stops 1–4 (years, roles, companies)
- [ ] `articles.ts` → real articles + links, real achievements
- [ ] `projects.ts` → check every description, add GitHub links (GitSage, LinkedIn automation)
- [ ] `skills.ts` and `prompts.ts` → check they match my résumé and sound like me

## 5. Test before uploading

```bash
npm run lint
npm run build
```

If the build finishes with no red errors, the site is ready to go online. To click around the production version locally, run `npm start` afterwards and open http://localhost:3000.

> On Windows PowerShell, run commands one per line (PowerShell 5 doesn't support `&&`).

## 6. Put the code on GitHub (I do this myself)

1. Log in to github.com with my personal account (**Khyati2542**).
2. Click **+ → New repository**.
3. Name it `khyati-os`.
4. Keep it **empty** (don't add a README, .gitignore or license). Click **Create repository**.
5. In the `khyati-os` folder, run:

```bash
git init
git add .
git commit -m "feat: KHYATI.OS v2 portfolio"
git branch -M main
git remote add origin https://github.com/Khyati2542/khyati-os.git
git push -u origin main
```

> Before the first commit, check `git config user.email` shows my **personal** email — otherwise the commits get attributed to whatever account is configured on this machine. Set it for this repo only with `git config user.email "khyativerma942@gmail.com"`.

## 7. Host on Vercel (free, with preview links)

My site will be live at `https://khyati-verma.vercel.app` (or similar).

1. Go to [vercel.com](https://vercel.com) → **Sign up / Log in with GitHub** (use Khyati2542). The Hobby plan is free.
2. Click **Add New → Project**.
3. Find the `khyati-os` repo and click **Import**.
4. Don't change any settings (Framework: Next.js). Click **Deploy**.
5. Wait about 1 minute. Vercel shows the live link. 🎉
6. (Optional) **Settings → General** → rename the project to `khyati-verma` for a nicer URL, then redeploy.
7. **Visitor stats:** open the **Analytics** tab → **Enable**. The `<Analytics />` component is already in `layout.tsx`, nothing else to install.

The site URL used for SEO, the sitemap and the share image is picked up from Vercel automatically (`src/lib/site.ts`), so renaming the project or adding a domain needs no code change — just redeploy.

## 8. Update the site later

Edit files → then:

```bash
git add .
git commit -m "update: new article"
git push
```

Vercel redeploys automatically on every push to `main`.

> **Tip:** push to a different branch first (`git checkout -b new-section`) — Vercel gives you a private preview link to check before merging into `main`.

## 9. Custom domain (optional)

Bought a domain like `khyativerma.dev`?

On Vercel: project **Settings → Domains** → add it, then copy the DNS records Vercel shows into your domain provider. Redeploy once so the share links use the new domain.

## 10. Quick fixes

| Problem | Fix |
| --- | --- |
| `npm run build` fails | Read the first red error; it names the file and line |
| Vercel build fails | Open the deployment → **Build Logs**; the first red error names the file |
| Vercel can't see my repo | Vercel → Settings → Git → **Adjust GitHub App permissions** and allow `khyati-os` |
| Site didn't update after push | Check you pushed to `main`, then look at the **Deployments** tab |
| LinkedIn preview shows old image | Paste the URL into [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh |
| Want a hand-designed share image | Delete `src/app/opengraph-image.tsx`, add `public/og.png` (1200×630) and `images: ['/og.png']` under `openGraph` in `layout.tsx` |
| Animations feel like too much | They already switch off for visitors with "reduce motion" turned on in their OS |

## Later upgrades (phase 5)

- Case-study page per project at `/work/[slug]`
- Blog section using MDX
- Make AskAgent real: an API route that answers from my résumé + articles with RAG
- Hidden easter egg that opens the v3 KHYATI.OS retro desktop

---

## Contact

📧 khyativerma942@gmail.com · 🐙 [github.com/Khyati2542](https://github.com/Khyati2542) · 💼 LinkedIn
