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

## Download the app

### Option 1 — From GitHub (recommended)

1. Open the repository:  
   https://github.com/Sivasankar967/Nexus_Connect_Mobile_Application

2. Go to the **`releases`** folder:  
   https://github.com/Sivasankar967/Nexus_Connect_Mobile_Application/tree/main/releases

3. Click **`NexusConnect.apk`** → click the **Download** button (top right on the file page).

4. Copy the APK to your Android phone, open it, and tap **Install**.

**Direct download link:**  
https://github.com/Sivasankar967/Nexus_Connect_Mobile_Application/raw/main/releases/NexusConnect.apk

### Option 2 — From Expo (online install)

1. Open this link **on your Android phone** (Chrome):  
   https://expo.dev/accounts/sivasanka30/projects/nexusconnect/builds/40a6b297-ce02-469b-bc7d-ecd02de27d2b

2. Tap **Install** and follow the prompts.

---

## App details

| Item | Details |
|------|---------|
| **App name** | NexusConnect |
| **Version** | 1.0.0 (build 1) |
| **Platform** | Android only |
| **Package ID** | `com.nexus.connect` |
| **APK file** | `releases/NexusConnect.apk` (~79 MB) |
| **Build type** | EAS preview (internal distribution) |
| **Expo SDK** | 52 |
| **Internet required** | No (offline demo data) |
| **Expo Go required** | No |

### How to check details on your phone (after install)

1. Open **NexusConnect** and sign in.
2. Go to the **More** tab (bottom right) to see your profile, XP, badges, and role.
3. On the device: **Settings → Apps → NexusConnect** to see app version and storage info.

### What’s inside the app

| Tab | What you can do |
|-----|------------------|
| **Home** | Leadership message, XP, announcements, events, notifications (bell) |
| **People** | Search and view employee profiles |
| **Recognition** | View and post colleague appreciation |
| **More** | Your stats, badges, quick links, logout |

---

## Install steps (Android)

1. Download **`NexusConnect.apk`** (see above).
2. Open the file on your phone → tap **Install**.
3. If Android asks, allow **Install unknown apps** for your browser or Files app.
4. Open **NexusConnect** from the app drawer.
5. Login: `employee@nexus.com` / `nexus123` (or tap **Demo credentials — tap to fill**).

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
