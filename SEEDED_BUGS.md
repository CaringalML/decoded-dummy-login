# Seeded bugs (for demo use)

This app was built deliberately buggy as a target for the AI App Tester demo.
Use this list to confirm the tester actually catches real issues.

## Broken (actual bugs)

1. **Sign-up ignores "Confirm password"** — the field exists and is required, but
   its value is never compared to the password field. Mismatched values still
   create the account.
2. **"Confirm password" is a plaintext field** — `type="text"` instead of
   `type="password"`, so the value is visible on screen.
3. **Firestore profile write isn't awaited on sign-up** — `setDoc(...)` is
   fired without `await` before the user is routed to the dashboard, so the
   dashboard can render before the profile document exists (name shows blank
   on first load, sometimes needs a refresh).
4. **"Edit profile" doesn't persist** — editing the bio and clicking Save
   updates local state only. Refresh the page and the change is gone; it was
   never written to Firestore.
5. **Sign-in form doesn't submit on Enter** — the sign-in fields aren't wrapped
   in a `<form>`, so pressing Enter in the password field does nothing; only
   clicking the button works. (Sign-up uses a real `<form>`, so the two flows
   behave inconsistently.)
6. **No submit-button disabling** — both sign-in and sign-up buttons stay
   clickable while a request is in flight, so rapid double-clicks can fire
   duplicate auth requests.
7. **Raw Firebase error strings shown to the user** — e.g.
   `Firebase: Error (auth/email-already-in-use).` is rendered directly instead
   of a friendly message.
8. **Email isn't trimmed/normalized** — a stray leading/trailing space in the
   email field on sign-in produces a confusing invalid-email/user-not-found
   error instead of just working.

## Improvements (not broken, but weak)

9. **No password strength guidance** — only Firebase's default 6-character
   minimum is enforced; no client-side feedback.
10. **No "forgot password" flow.**
11. **Inputs rely on placeholder text only** — no associated `<label>`
    elements, which is an accessibility gap for screen readers.
12. **Low-contrast error text** (`#ff8080` on white) — fails WCAG contrast
    guidelines.
13. **No "show password" toggle.**

Feel free to add/remove bugs here as you iterate — keep this file out of
anything you'd show as "the product," it's just a demo-prep checklist.
