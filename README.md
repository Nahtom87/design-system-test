# KK Group Design System

A React component library and design system built on [shadcn/ui](https://ui.shadcn.com), documented in Storybook. It provides 40 accessible, themeable UI components whose visual tokens are synced from Figma Variables.

- **Live Storybook (Chromatic):** https://main--6a1fdca3af8ac3873958cded.chromatic.com
- **GitHub repository:** https://github.com/Nahtom87/design-system-test

## What it is

The design system packages the building blocks of the KK Group product UI — buttons, forms, overlays, navigation, data display, and feedback components — as a single, consistent React library. Every component:

- is built on shadcn/ui primitives (Radix UI under the hood where appropriate),
- styles itself through semantic CSS design tokens, so it adapts to all themes automatically,
- ships with a documentation page in Storybook (description, when-to-use guidance, do/don't rules, props table, and accessibility notes).

## Tech stack

| Layer | Tool |
|-------|------|
| Framework | React 19 |
| Components | shadcn/ui (`radix-ui` primitives, `class-variance-authority`) |
| Styling | Tailwind CSS 4 with CSS-variable design tokens |
| Documentation | Storybook 10 (`@storybook/react-vite`) |
| Icons | lucide-react |
| Build tooling | Vite |
| Testing | Vitest + Playwright (browser), `@storybook/addon-a11y` |
| Visual regression | Chromatic |

## Running locally

Requires Node.js 20+ (developed on Node 24).

```bash
# Install dependencies
npm install

# Start Storybook (primary dev experience) at http://localhost:6006
npm run storybook
```

Other useful scripts:

```bash
npm run dev              # Run the Vite demo app
npm run build            # Production build of the app
npm run build-storybook  # Static Storybook build
npm run lint             # ESLint
npm run chromatic        # Publish to Chromatic and run visual regression tests
```

## Themes

The system ships three themes. In Storybook, switch between them with the **Tema** toolbar control; in application code, set the `data-theme` attribute on a container element.

| Theme | `data-theme` | Notes |
|-------|--------------|-------|
| Light | _(none / `:root` default)_ | Default shadcn neutral palette |
| Dark | `data-theme="dark"` | Dark neutral palette |
| KK Group | `data-theme="kk-group"` | KK Group brand theme (orange primary) |

```html
<div data-theme="dark">
  <!-- components here render in the dark theme -->
</div>
```

Themes are driven entirely by semantic CSS custom properties (`--primary`, `--background`, `--card`, etc.), so components need no per-theme logic.

## Updating design tokens from Figma

Color tokens originate in Figma Variables and are synced into `src/index.css` rather than edited by hand.

1. In Figma, export the variable collections to JSON (e.g. with the **Export/Import Variables** plugin).
2. Place the exported `.json` files in a local `figma-tokens/` directory (gitignored).
3. Run the sync:

   ```bash
   npm run sync-tokens
   ```

This reads the JSON, maps the Figma variable names to canonical shadcn token names, and rewrites the auto-generated block between the `/* === FIGMA TOKENS START === */` and `/* === FIGMA TOKENS END === */` markers in `src/index.css`.

**How Figma modes map to themes** (`MODE_MAP` in `scripts/sync-tokens.js`):

| Figma mode | CSS output |
|------------|------------|
| `shadcn` | `:root` (Light) |
| `shadcn-dark` | `[data-theme="dark"]` |
| `KK Group` | `[data-theme="kk-group"]` |

Only variables that map to a canonical shadcn token are emitted, keeping `index.css` lean. Tokens that don't exist in Figma (e.g. `success`/`warning`, `chart-*`, `sidebar-*`) and a small set of documented overrides for known-bad Figma values live in the hand-authored section below the generated block.

## Project structure

```
src/
  components/ui/   40 shadcn/ui components
  stories/         Storybook stories + MDX documentation pages
  index.css        Design tokens (generated + hand-authored) and Tailwind setup
scripts/
  sync-tokens.js   Figma Variables -> CSS custom properties
.storybook/        Storybook configuration
```
