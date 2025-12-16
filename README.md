---

## **1. Define the Unified Target Stack**

**All apps & shared libs should use:**

* **Next.js (latest stable)**
* **React 18 (latest supported by Next)**
* **TypeScript**
* **TSX/JSX** components
* **CSS Modules / TailwindCSS**
* **shadcn/ui** for components and primitives

---

## **2. Migration/Refactor Strategy (Step-by-Step)**

### **A. Langu (Currently Static HTML)**

**Goal:**
Turn static HTML pages into dynamic Next.js pages/components.

**Steps:**

* **1. Move legacy HTML to `/apps/langu/legacy_scrape/`** (already done).
* **2. Scaffold Next.js app** in `/apps/langu/` if not already.
* **3. For each old HTML page:**

  * Create a matching file in `/apps/langu/src/pages/` (`about.html` → `about.tsx`).
  * Use [html-to-jsx](https://magic.reactjs.net/htmltojsx.htm) or similar tools to quickly convert HTML to TSX.
  * Move reusable UI chunks to `/apps/langu/src/components/`.
* **4. Style using TailwindCSS and shadcn/ui**.
* **5. Set up routing, SEO, and basic config in `next.config.js` and `tsconfig.json`.**

---

### **B. Quicktrap (Currently Vite/React 19, Non-Next)**

**Goal:**
Port Vite/React app to Next.js.

**Steps:**

* **1. Scaffold a new Next.js app** in `/apps/quicktrap/`.
* **2. Move `src/` (components, pages) from Vite app into Next.js’ `/src/`.

  * Pages: Convert to `/src/pages/`.
  * Components: Move to `/src/components/`.
* **3. Refactor routing to Next.js conventions.**

  * E.g., `<Route />` becomes file-based routing.
* **4. Downgrade React to 18.3.1 for compatibility (use monorepo root lock).**
* **5. Install shadcn/ui and TailwindCSS as in other apps.**
* **6. Remove Vite-specific files/config.**
* **7. Test, tweak, and validate the migrated app.**

---

### **C. Blackstone (Already Next.js, Minor Fixes)**

**Goal:**

* Fix package names.
* Standardize React version.
* Refactor imports.

**Steps:**

* **1. Rename `@my/ui` → `@blackstone/core` in all imports and `package.json`.**
* **2. Standardize React version via root `overrides`.**
* **3. Check that all shared components import from the new package.**
* **4. Update package.json/scripts/config as needed.**

---

### **D. Shared Core Library**

**Goal:**
Ensure a single, well-named, properly shared UI/component library.

**Steps:**

* **1. Rename the package to `@blackstone/core` everywhere.**
* **2. Move generic UI to `/packages/core/src/components/` and hooks to `/packages/core/src/hooks/`.**
* **3. Use only React 18/TSX/shadcn/ui/Tailwind in this library.**
* **4. Export everything for app-level usage.**
* **5. Remove any Vite/React 19 specific code.**

---

## **3. Directory/Structure Reference**

```plaintext
/
├── apps/
│   ├── langu/
│   │   ├── legacy_scrape/
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   └── components/
│   ├── quicktrap/
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   └── components/
│   └── blackstone/
│       ├── src/
│       │   ├── pages/
│       │   └── components/
├── packages/
│   └── core/
│       ├── package.json
│       └── src/
│           ├── components/
│           └── hooks/
├── lib/
│   └── (optional, for extra shared stuff)
├── .gitignore
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── README.md
└── .vscode/
```

---

## **4. `package.json` / Dependency Guidance**

At the **root**, use:

```json
{
  "name": "your-monorepo-root",
  "private": true,
  "packageManager": "pnpm@8.0.0",
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "overrides": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "typescript": "latest",
    "turbo": "latest",
    "prettier": "latest"
  }
}
```

For **each app** (langu, quicktrap, blackstone):

* Use only `"react": "18.3.1"`, `"next": "latest"`, `"shadcn/ui": "latest"`, `"tailwindcss": "latest"`, etc.
* Import shared components from `@blackstone/core`.

For **core package**:

* `name`: `@blackstone/core`
* Use only `"react": "18.3.1"` as a peer dependency.

---

## **5. Scripted Find/Replace (If Needed)**

Here’s a bash command to bulk-replace all `@my/ui` → `@blackstone/core` in your repo:

```bash
find . -type f -name "*.ts*" -exec sed -i 's/@my\/ui/@blackstone\/core/g' {} +
```

---

## **6. Finalization Checklist**

* [ ] **All apps use Next.js, React 18, TypeScript, shadcn/ui, TailwindCSS.**
* [ ] **No legacy Vite or React 19 code.**
* [ ] **All shared UI/components in `@blackstone/core`.**
* [ ] **All imports use correct package names.**
* [ ] **Root `pnpm install` succeeds with zero peer dep errors.**
* [ ] **Each app builds and runs locally (`pnpm turbo run dev`).**

---

## **7. Summary for Agent or Future Self**

> **The goal is a fully normalized Next.js/React 18/TSX/Tailwind/shadcn monorepo, with all old content ported and no component/library left behind or duplicated. Use the above structure as your source of truth.**
>
> **For any unclear file or legacy folder, port its logic or UI into the proper Next.js app/page/component, then delete or archive the legacy file.**

---

**Ready for next steps? Want detailed per-app instructions, or an agent script for migration?**
