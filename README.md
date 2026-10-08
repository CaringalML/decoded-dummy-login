# decoded-dummy-login

A small, deliberately buggy React sign-up / sign-in app, built as a demo
target for an AI App Tester prototype. Uses Firebase Authentication
(email/password) and Firestore (per-user profile doc).

See [SEEDED_BUGS.md](./SEEDED_BUGS.md) for the list of intentional bugs and
UX gaps seeded into this app.

## Local development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
firebase deploy --only hosting,firestore:rules
```
