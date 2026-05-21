# NexusConnect Mobile

Employee corporate intranet app built with **Expo**, **React Navigation**, **Zustand**, and **NativeWind**. All data is local seed data (no backend API).

**Repository:** https://github.com/Sivasankar967/Nexus_Connect_Mobile_Application

---

## Demo login

| Field | Value |
|--------|--------|
| Email | `employee@nexus.com` |
| Password | `nexus123` |

On the login screen, tap **Demo credentials — tap to fill**, then **Sign In**.

---

## Install the app (Android APK)

1. Open **`releases/NexusConnect.apk`** (included in this repo).
2. Copy to an Android phone and open the file.
3. Tap **Install** (allow unknown apps if prompted).
4. Open **NexusConnect** and sign in with the credentials above.

| Detail | Value |
|--------|--------|
| Version | 1.0.0 |
| Platform | Android only |
| Expo Go required | No |

---

## Run for development

```bash
npm install
npx expo start
```

Scan the QR code with **Expo Go (SDK 52)** on the same Wi‑Fi, or run `npx expo start --tunnel`.

---

## Tech stack

- Expo SDK 52 · React Native · NativeWind v4  
- React Navigation v7 · Zustand · FlashList  
- Lucide icons · expo-secure-store  

---

## Features

- **Auth** — Splash, login, logout  
- **Home** — Greeting, notifications (bell), leadership message, XP, announcements (detail view), upcoming event  
- **People** — Search employees, view profiles, badges  
- **Recognition** — Feed, post appreciation with badges (+XP), toast on success  
- **Profile** — Stats, badges, quick links, sign out  

### Navigation

```
Splash → Login → Tabs (Home · People · Recognition · More)
Home → Notifications · Announcement detail
People → Employee profile
Recognition → Post recognition
```

---

## Project structure

```
├── App.js
├── src/
│   ├── data/seed.js
│   ├── store/          # authStore, notificationStore
│   ├── screens/
│   └── components/
├── releases/
│   └── NexusConnect.apk
└── AI-Workflow-Prompts.txt
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run build:android` | Build APK with EAS (requires Expo account) |

---

## Troubleshooting

| Issue | Fix |
|--------|-----|
| Expo Go SDK mismatch | Use [Expo Go for SDK 52](https://expo.dev/go?sdkVersion=52&platform=android&device=true) |
| Keyboard not opening on login | Tap **Demo credentials — tap to fill** |

---

## License

Academic / demo project — NexusConnect © Nexus Corporation (fictional).
