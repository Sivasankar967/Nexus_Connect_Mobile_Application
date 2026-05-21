# NexusConnect Mobile

Employee-only corporate intranet app for Nexus. Built with **Expo**, **React Navigation**, **Zustand**, and **NativeWind** — fully offline with local seed data (no backend API).

---

## Demo login

| Field | Value |
|--------|--------|
| Email | `employee@nexus.com` |
| Password | `nexus123` |

Logged-in user: **Priya Sharma** (Product). On Login, tap **“Demo credentials — tap to fill”** to auto-fill both fields.

---

## Install from APK (attach with submission)

A ready-to-install **Android APK** is included (or attached separately) for reviewers who do not use Expo Go.

### Where is the APK?

| Location | Notes |
|----------|--------|
| **`releases/NexusConnect.apk`** | Included — EAS build `40a6b297-ce02-469b-bc7d-ecd02de27d2b` (~70 MB) |
| **Expo build page** | [Open build on expo.dev](https://expo.dev/accounts/sivasanka30/projects/nexusconnect/builds/40a6b297-ce02-469b-bc7d-ecd02de27d2b) → **Install** or **⋮** → **Download** |

The APK is already in **`releases/NexusConnect.apk`** (from `application-40a6b297-ce02-469b-bc7d-ecd02de27d2b.apk`).

### Install steps (any Android user)

1. Transfer `NexusConnect.apk` to the phone (WhatsApp, Google Drive, USB, or email).
2. Open the file → tap **Install**.
3. If Android asks, allow **Install unknown apps** for Chrome / Files / Drive.
4. Open **NexusConnect** from the app drawer.
5. Login: `employee@nexus.com` / `nexus123` (or tap **Demo credentials — tap to fill**).

### APK details

| Item | Value |
|------|--------|
| App | NexusConnect v1.0.0 |
| Platform | **Android only** (not for iPhone) |
| Build | EAS preview (internal distribution) |
| Expo Go required? | **No** |
| Internet required? | No (demo uses local seed data) |

### Share with someone

- **Send the APK file** (`releases/NexusConnect.apk`), or  
- **Send the Expo install link** (works on Android browsers; see `releases/README.md`).

More detail: see **`releases/README.md`**.

---

## Push to GitHub

Code is committed locally. Create a repo on GitHub, then run (replace `YOUR_USERNAME`):

```bash
cd "d:\NexusConnect mobile -app"
git remote add origin https://github.com/YOUR_USERNAME/nexusconnect.git
git push -u origin main
```

**Note:** `releases/NexusConnect.apk` is ~79 MB. GitHub allows files under 100 MB; upload may take several minutes. If push fails, use [Git LFS](https://git-lfs.github.com/) or share the APK via Google Drive and link it in `releases/README.md`.

---

## Quick start (developers — Expo Go)

```bash
cd "d:\NexusConnect mobile -app"
npm install
npx expo start
```

- Scan the QR code with **Expo Go (SDK 52)** on the same Wi‑Fi, or use `npx expo start --tunnel` if the device cannot reach your PC.
- Press **`r`** to reload after code changes.
- Press **`a`** only if Android Studio / `adb` is installed; otherwise use the phone + QR code.

---

## Tech stack

| Layer | Technology |
|--------|------------|
| Runtime | Expo SDK 52 (managed workflow) |
| UI | React Native 0.76 + NativeWind v4 (Tailwind) |
| Navigation | React Navigation v7 (native stack + bottom tabs) |
| State | Zustand (`authStore`, `notificationStore`) |
| Lists | Shopify FlashList (People, Recognition) |
| Icons | Lucide React Native |
| Session | `expo-secure-store` (mock JWT + user id) |
| Safe areas | `react-native-safe-area-context` |

---

## Features

### Authentication

- **Splash** — NexusConnect logo, animated fade-in / scale (2s), then routes to Login or Main if session exists.
- **Login** — Email/password validation against seed credentials; demo tap-to-fill; session persisted in SecureStore.
- **Logout** — Profile → Sign Out clears session and returns to Login.

### Home

- Personalized greeting (morning / afternoon / evening).
- **Bell icon** → Notifications screen with unread badge count.
- Leadership message card (executive quote).
- **XP widget** — points, level, progress bar, streak label.
- **Announcements** — pinned sorting, tap → full **Announcement Detail** (title, category, date, author avatar, full body).
- **Upcoming event** — date badge, location, RSVP count, description.
- Pull-to-refresh (refreshes user XP from seed).

### Notifications

- Grouped **Today** / **This Week**.
- Types: recognition received, new announcement, event reminder (icon + color per type).
- **Unread** — teal dot + highlighted row; badge on Home bell.
- Tap → mark as read; announcement notifications open detail screen.

### People

- Search by name, role, or department (instant filter).
- **FlashList** directory with avatars.
- Tap employee → **Profile** (department, location, join date, bio, badges, recent recognitions).
- Loading skeleton on first load (~650ms).
- Empty state when search has no results.

### Recognition

- Feed of appreciation posts (from → to, badge, message, likes, relative time).
- **FAB (+)** → Post Recognition (pick colleague, badge, message).
- **XP on post:** +50 recipient, +10 sender.
- Success **toast:** `🎉 Recognition sent! +10 XP`.
- Pull-to-refresh; loading skeleton; empty state with CTA to post.

### Profile (More tab)

- Avatar, name, role, department, location.
- Stats: XP, badge count, recognitions received.
- Horizontal badge grid.
- Quick links: Benefits, IT Support, Policies, Feedback (`Linking`).
- Sign out.

---

## Navigation structure

```
Splash → Login → Main (tabs)
                    ├── Home stack
                    │     ├── Home
                    │     ├── Notifications
                    │     └── Announcement Detail
                    ├── People stack
                    │     ├── People list
                    │     └── Employee profile
                    ├── Recognition stack
                    │     ├── Feed
                    │     └── Post recognition
                    └── Profile (More)
```

---

## Seed data (local only)

| Data | Count / notes |
|------|----------------|
| Employees | 10 |
| Badges | 6 types |
| Announcements | 5 (with full body + author) |
| Recognition posts | 8 (+ new posts from user) |
| Notifications | 8 |
| Leadership message | 1 |
| Upcoming event | 1 (Innovation Day) |

All reads/writes (XP updates, new recognition posts, read notifications) happen in memory against `src/data/seed.js`.

---

## Optimizations & UX polish

### Performance

- **FlashList** on People and Recognition for efficient scrolling (`estimatedItemSize` tuned).
- **Zustand** selectors to avoid unnecessary re-renders (e.g. unread count from `readIds`).
- Seed helpers (`searchEmployees`, `groupNotificationsByPeriod`) keep screens thin.
- No network calls — instant UI, works offline.

### Responsive layout

- **`useResponsive` hook** — padding and font sizes adapt for **375px** and **414px** widths (and between).
- **`ScreenWrapper`** caps content width to device width.
- Home header and cards use scalable typography.

### Loading & empty states

- **Skeleton loaders** on People list and Recognition feed (pulsing placeholders).
- **EmptyState** component on lists: icon ring, title, subtitle, optional action button.
- Home: empty announcements / events; Profile: empty badges; People: no search results.

### Animations & feedback

- **`FadeInView`** — subtle fade + slide on screen content (Home sections, lists, login).
- **Splash** — logo scale/spring + text fade (2s before navigate).
- **Toast** — global provider for recognition success (no blocking alert).
- **Tab bar** — active teal pill behind icon, thicker stroke when focused, Heart fill on Recognition tab.

### Android / input fixes

- **TextInput uses `StyleSheet`** (not NativeWind `className`) so keyboard opens reliably on Android.
- Email field uses default keyboard on Android for easier `@` typing.
- `keyboardShouldPersistTaps="always"` on Login scroll.
- `softwareKeyboardLayoutMode: "resize"` in `app.json` for Android.
- **`SafeAreaProvider`** at app root for toast and safe areas.

### Navigation UX

- Native stack **slide_from_right** for detail screens; **fade** for splash/auth.
- Header styling: navy background, light tint, no shadow.
- `headerBackTitle` on stack screens (Back / Home).

### Security (demo)

- Credentials validated in `authStore` against `DEMO_CREDENTIALS`.
- Mock token stored in **SecureStore** (not plain AsyncStorage).

---

## Project structure

```
├── App.js                 # Root navigation + providers
├── index.js
├── src/
│   ├── data/seed.js       # All mock data + helpers
│   ├── store/
│   │   ├── authStore.js
│   │   └── notificationStore.js
│   ├── screens/           # 10 screens
│   ├── components/        # UI + feature components
│   └── hooks/useResponsive.js
├── assets/
├── releases/
│   ├── README.md            # APK install guide for reviewers
│   └── NexusConnect.apk     # Attach your EAS build here (see below)
├── AI-Workflow-Prompts.txt  # AI prompt log (first 3 prompts)
├── HOSTING.md
└── README.md
```

---

## Color system

| Token | Hex | Usage |
|--------|-----|--------|
| Navy | `#0F172A` | App background, tab bar |
| Navy 800 | `#1E293B` | Cards |
| Teal | `#0EA5E9` | Primary actions, links, XP accent |
| Amber | `#F59E0B` | Badges, events, unread badge |
| Navy 50 | `#F8FAFC` | Primary text |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run android` | Open on Android (requires SDK/adb) |
| `npm run ios` | Open on iOS simulator (macOS) |
| `npm run web` | Run in browser |

---

## Hosting the app

You can host NexusConnect in three ways:

### Option A — Web (fastest, free)

Host the web build on **Vercel** or **Netlify** (good for demos and sharing a link).

**1. Build locally (test):**
```bash
npm run build:web
npm run preview:web
```
Open `http://localhost:3000` (or the port `serve` prints).

**2. Deploy to Vercel:**
1. Push the project to **GitHub**.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel reads `vercel.json` automatically (`build:web` → `dist` folder).
4. Deploy — you get a URL like `https://nexusconnect.vercel.app`.

**3. Deploy to Netlify:**
1. Push to GitHub.
2. [netlify.com](https://netlify.com) → **Add site** → import repo.
3. `netlify.toml` sets build command and `dist` publish folder.
4. Deploy.

**CLI (Vercel):**
```bash
npm i -g vercel
npm run build:web
vercel --prod
```

---

### Option B — Android APK (install on phones)

Use **Expo Application Services (EAS)** to build an installable APK.

**1. One-time setup:**
```bash
npm install -g eas-cli
eas login
eas init
```
(Create a free account at [expo.dev](https://expo.dev) if needed.)

**2. Login and link project (first time only):**
```bash
eas login
eas init
```

**3. Build APK (preview profile):**
```bash
npm run build:android
```
Or:
```bash
eas build --profile preview --platform android
```

See **`scripts/build-android-eas.md`** for full PowerShell steps.

**3. When the build finishes:**
- Open the link in the terminal or at [expo.dev](https://expo.dev) → your project → **Builds**.
- Download the **APK** and install on Android (enable “Install unknown apps” if prompted).
- Share the Expo build page link so others can install without the Play Store.

---

### Option C — iOS + production stores

```bash
eas build --profile preview --platform ios    # internal TestFlight-style (needs Apple dev account)
eas build --profile production --platform all # Play Store / App Store (review process)
```

---

### Hosting comparison

| Method | Best for | Cost |
|--------|----------|------|
| **Vercel / Netlify (web)** | Browser demo, portfolio, quick share | Free tier |
| **EAS APK (Android)** | Real mobile install, no browser | Free tier (limited builds/month) |
| **Expo Go + `expo start --tunnel`** | Dev only, not real hosting | Free |

**Note:** `expo-secure-store` on web uses a fallback; login still works for this demo. For production, use a real backend and EAS production builds.

---

## Troubleshooting

| Issue | Fix |
|--------|-----|
| Expo Go SDK mismatch (52 vs 54/55) | Install [Expo Go for SDK 52](https://expo.dev/go?sdkVersion=52&platform=android&device=true) or upgrade project SDK |
| `adb` / Android SDK not found | Use QR + Expo Go on phone; or install Android Studio and set `ANDROID_HOME` |
| Keyboard not opening | Reload app; use demo tap-to-fill; ensure latest `Input.js` (StyleSheet-based) |
| Safe area / toast error | Ensure `SafeAreaProvider` wraps app in `App.js` |

---

## License

Internal demo / academic project — NexusConnect © Nexus Corporation (fictional).
