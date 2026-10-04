# Activity 20 — Deploy Ready

> **🛠️ Stack for this lesson** — Expo SDK 54 / React Native 0.79 + EAS Build · runs in Expo Go on a real phone before the production build.
> 📥 Template: [/learn/m1/template/activity-20-deploy-ready](/learn/m1/template/activity-20-deploy-ready)

A deployment-shaped scaffold: working demo app, complete `eas.json` build profiles, deployment + checklist + privacy-policy docs. Your job is to make it *yours* — replace template assets, fill in identity fields in `app.json`, then build and (optionally) submit.

**Time:** ~150 minutes (asset design dominates) · **Concept:** Concept 20 — Production Builds and Distribution

---

## What You'll Build

| # | TODO | File |
|---|------|------|
| 1 | Replace `assets/icon.png` (1024×1024), `assets/splash.png` (2048×2732), and `assets/adaptive-icon.png` with your own designs | `assets/` |
| 2 | Customize `app.json` — `name`, `slug`, version, description, splash background, iOS bundle ID, iOS permission strings, Android package, Android adaptive-icon background | `app.json` |
| 3 | Run an EAS production build for both platforms and open the resulting artifact on a device | (CLI) |

`scripts/generate-assets.sh` will derive the three asset sizes from a single source PNG. `eas.json` already defines `development`, `preview`, and `production` profiles.

## Run It

```bash
npm install --legacy-peer-deps
npm install -g eas-cli
eas login
eas build:configure
```

For a smoke run with your customized app.json before TODO #3:

```bash
npx expo start
```

For TODO #3 itself:

```bash
eas build --profile production --platform all
```

The build runs on EAS servers (~15–30 minutes) and the resulting `.ipa` and `.aab` URLs land in the EAS dashboard.

## Verify

Your activity is done when:

- [ ] `assets/icon.png`, `assets/splash.png`, and `assets/adaptive-icon.png` are your designs (no template stripes left).
- [ ] `app.json` `name` / `slug` / iOS bundle ID / Android package match your real product, not `My Mobile App` / `com.yourcompany.mymobileapp`.
- [ ] iOS permission strings (`NSCameraUsageDescription`, etc.) name a real reason your app needs that permission, not the placeholder text.
- [ ] Splash background and adaptive-icon background are colors you picked — not `#4A90E2`.
- [ ] `eas build --profile production --platform all` completes without error and produces both an `.ipa` and an `.aab`.
- [ ] You install and open the production build on a real device, and the app launches.

## Stretch

Pick one and write what you tried in your reflection:
- Add `expo-updates` and ship a small text change as an OTA update without re-building.
- Run `eas submit --platform ios` (or Android) all the way to TestFlight / internal testing.
- Add a GitHub Actions workflow that triggers `eas build --profile preview` on push to `main`.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a way the simulator and real device differ.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a test you ran, a screenshot you took, a behavior you watched on the device.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/m1/certification](/learn/m1/certification)** and submit your activity link. Include a screenshot of the EAS build dashboard with your finished `.ipa` and `.aab`, plus 1 screenshot of your app launching on a real device with your real icon.

<!-- claude-template-fix: readme-v3 -->
