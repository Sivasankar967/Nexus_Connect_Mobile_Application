# Build Android APK with EAS

Run these commands in PowerShell from the project folder:

```powershell
cd "d:\NexusConnect mobile -app"
```

## Step 1 — Login (one time)

```powershell
eas login
```

- Opens browser or asks for email/password.
- Create a free account at https://expo.dev/signup if needed.

Check login:

```powershell
eas whoami
```

## Step 2 — Link project (one time)

```powershell
eas init
```

- Choose **Create a new project** (or link existing).
- Accept defaults. This adds `extra.eas.projectId` to `app.json`.

## Step 3 — Start Android build

```powershell
eas build --profile preview --platform android
```

Or use npm script:

```powershell
npm run build:android
```

## Step 4 — Install on phone

1. Wait ~10–20 minutes. Build runs on Expo servers.
2. Open https://expo.dev → **Projects** → **nexusconnect** → **Builds**.
3. Open the finished **preview** build → **Download** APK.
4. Copy APK to Android phone → open file → Install.
   - Settings → Security → allow install from unknown sources if asked.
5. Open **NexusConnect** → login: `employee@nexus.com` / `nexus123`

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Not logged in` | Run `eas login` |
| `Invalid project ID` | Run `eas init` |
| Build failed on Gradle | Run `npx expo install --fix` then rebuild |
| SDK mismatch on phone | This APK is standalone — Expo Go version does not matter |

## Optional — non-interactive CI build

Set `EXPO_TOKEN` from https://expo.dev/accounts/[account]/settings/access-tokens

```powershell
$env:EXPO_TOKEN="your-token-here"
eas build --profile preview --platform android --non-interactive
```
