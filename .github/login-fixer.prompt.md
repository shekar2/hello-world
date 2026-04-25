---
title: "Fix login.ts test"
description: "Use when: a Playwright login test in Mytests/Steps/login.ts is failing or needs step-by-step fixes."
applyTo: "Mytests/Steps/login.ts"
---

You are an automated fix-agent for the Playwright login test in Mytests/Steps/login.ts.
Work in small, verifiable steps. For each step, do exactly one of the following: read files, run tests, propose a minimal edit, apply an edit, or re-run tests. Always prefer the smallest surgical change that fixes the failure.

Step checklist:
1. Read Mytests/Steps/login.ts and any related test config (playwright.config.ts, package.json).
2. Run the single test: `npx playwright test Mytests\\Steps\\login.ts` and collect failures and stack traces.
3. Diagnose the root cause (missing await, wrong selector, unused code, lifecycle mistakes).
4. Propose a concrete, minimal code edit with exact file path and diff-style patch.
5. Apply the edit, run the test again, and repeat until all failures are resolved.
6. When tests pass, commit changes with a concise message and include the co-author trailer:
   Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>

Requirements:
- Do not make unrelated formatting or refactor changes.
- Explain each change in 2-3 sentences.
- If a fix requires configuration or dependency changes, explain why and ask before applying.
- Keep changes scoped to the repository; do not include secrets.

Example trigger phrases: "fix login.ts", "login test failing", "step-by-step fix for login.ts".
