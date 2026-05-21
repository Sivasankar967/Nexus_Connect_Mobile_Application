# NexusConnect — Hosting Guide

Step-by-step instructions to publish the app.

---

## Prerequisites

- Node.js 18+
- Git + GitHub account (for Vercel/Netlify)
- [Expo account](https://expo.dev/signup) (for EAS mobile builds)

---

## 1. Web hosting (recommended for demos)

### Local test

```bash
npm install
npm run build:web
npx serve dist
```

Visit the URL shown in the terminal.

### Vercel (automatic from GitHub)

1. Push this folder to a GitHub repository.
2. Sign in at https://vercel.com with GitHub.
3. **New Project** → select the repo → **Deploy** (no settings changes needed).
4. Every `git push` redeploys the site.

### Netlify

1. Sign in at https://app.netlify.com
2. **Add new site** → **Import an existing project** → GitHub → select repo.
3. Build settings are read from `netlify.toml`.
4. **Deploy site**.

---

## 2. Android APK (install on device)

```bash
npm install -g eas-cli
eas login
cd "d:\NexusConnect mobile -app"
eas init
eas build --profile preview --platform android
```

- Wait ~10–20 minutes for the cloud build.
- Download APK from the Expo dashboard.
- Install on Android and open **NexusConnect**.

---

## 3. Share without hosting (development)

```bash
npx expo start --tunnel
```

Share the QR code — requires **Expo Go SDK 52** on the phone. Not suitable for final submission.

---

## Files added for hosting

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel build + SPA rewrite |
| `netlify.toml` | Netlify build + redirects |
| `eas.json` | EAS Build profiles (preview APK, production) |
| `package.json` scripts | `build:web`, `build:android`, etc. |

---

## After deploy

- **Web URL:** share with reviewers (login: `employee@nexus.com` / `nexus123`).
- **APK:** send file or Expo build install link.
- Update `README.md` with your live URL in the project submission.
