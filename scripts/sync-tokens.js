#!/usr/bin/env node
/**
 * sync-tokens.js
 * Læser Figma variable JSON-filer og opdaterer src/index.css med CSS custom properties.
 *
 * Brug:
 *   1. Eksportér variabler fra Figma med "Export/Import Variables" plugin
 *   2. Læg JSON-filerne i mappen: figma-tokens/
 *   3. Kør: node scripts/sync-tokens.js
 *
 * CSS-blokken mellem disse to kommentarer bliver erstattet automatisk:
 *   /* === FIGMA TOKENS START === *\/
 *   /* === FIGMA TOKENS END === *\/
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TOKENS_DIR = join(ROOT, 'figma-tokens');
const CSS_FILE = join(ROOT, 'src', 'index.css');

// Mode-navne → CSS data-theme attribut
const MODE_MAP = {
  'shadcn': null,        // default :root
  'shadcn-dark': 'dark',
  'KK Group': 'kk-orange',
};

// Figma variable-navn (lowercase) → shadcn CSS token-navn.
// Mapped variabler udskrives under det kanoniske navn (fx --primary),
// så de fødes ind i @theme inline og driver komponenterne.
// Umappede variabler beholder deres kebab-navn (fx --brand-shades-600).
const NAME_MAP = {
  'general/background': 'background',
  'general/foreground': 'foreground',
  'general/primary': 'primary',
  'general/primary foreground': 'primary-foreground',
  'general/secondary': 'secondary',
  'general/secondary foreground': 'secondary-foreground',
  'general/muted': 'muted',
  'general/muted foreground': 'muted-foreground',
  'general/accent': 'accent',
  'general/accent foreground': 'accent-foreground',
  'general/destructive': 'destructive',
  'general/destructive foreground': 'destructive-foreground',
  'general/border': 'border',
  'general/input': 'input',
  'focus/ring': 'ring',
  'card/card': 'card',
  'card/card foreground': 'card-foreground',
  'popover/popover': 'popover',
  'popover/popover foreground': 'popover-foreground',
};

// --- Hjælpefunktioner ---

function rgbToHex(r, g, b) {
  const toHex = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbaToString(r, g, b, a) {
  if (a >= 0.999) return rgbToHex(r, g, b);
  const rr = Math.round(r * 255);
  const gg = Math.round(g * 255);
  const bb = Math.round(b * 255);
  const aa = Math.round(a * 100) / 100;
  return `rgba(${rr}, ${gg}, ${bb}, ${aa})`;
}

function toKebab(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatValue(variable, modeId) {
  const val = variable.resolvedValuesByMode?.[modeId]?.resolvedValue;
  if (val === undefined || val === null) return null;

  if (variable.type === 'COLOR') {
    const { r, g, b, a } = val;
    return rgbaToString(r, g, b, a ?? 1);
  }

  if (variable.type === 'FLOAT') {
    const name = variable.name.toLowerCase();
    const isDimension = /radius|spacing|size|width|height|gap|padding|margin|blur|offset|spread/.test(name);
    if (isDimension || val > 0) {
      if (val === 9999) return '9999px';
      return `${val}px`;
    }
    return String(val);
  }

  if (variable.type === 'STRING') return val;

  return null;
}

// --- Indlæs alle JSON-filer ---

function loadAllTokenFiles() {
  if (!existsSync(TOKENS_DIR)) {
    console.error(`❌ Mappen "${TOKENS_DIR}" findes ikke.`);
    console.error('   Opret mappen og læg dine Figma JSON-filer i den.');
    process.exit(1);
  }

  const files = readdirSync(TOKENS_DIR).filter(f => f.endsWith('.json'));
  if (files.length === 0) {
    console.error(`❌ Ingen JSON-filer fundet i ${TOKENS_DIR}`);
    process.exit(1);
  }

  console.log(`📁 Fandt ${files.length} token-filer:`);
  return files.map(f => {
    console.log(`   - ${f}`);
    const content = readFileSync(join(TOKENS_DIR, f), 'utf-8');
    return JSON.parse(content);
  });
}

// --- Byg CSS-blokke ---

function buildCssBlocks(collections) {
  // Saml tokens per mode på tværs af alle collections
  const modeTokens = {}; // { modeName: { cssVar: value } }

  for (const collection of collections) {
    const { modes, variables } = collection;
    if (!variables || !modes) continue;

    for (const [modeId, modeName] of Object.entries(modes)) {
      if (!modeTokens[modeName]) modeTokens[modeName] = {};

      for (const variable of variables) {
        // Spring over skjulte/interne variabler
        if (variable.hiddenFromPublishing) continue;

        // Whitelist: only emit variables that map to a canonical shadcn token.
        // This keeps the generated block lean (no raw palette/alpha/spacing/
        // shadow/typography tokens polluting index.css).
        const mapped = NAME_MAP[variable.name.trim().toLowerCase()];
        if (!mapped) continue;
        const cssVar = `--${mapped}`;
        const value = formatValue(variable, modeId);
        if (value !== null) {
          modeTokens[modeName][cssVar] = value;
        }
      }
    }
  }

  const blocks = [];

  // :root (shadcn / light mode)
  const lightTokens = modeTokens['shadcn'] || {};
  if (Object.keys(lightTokens).length > 0) {
    const lines = Object.entries(lightTokens)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n');
    blocks.push(`:root {\n${lines}\n}`);
  }

  // Øvrige modes → [data-theme="..."]
  for (const [modeName, tokens] of Object.entries(modeTokens)) {
    const theme = MODE_MAP[modeName];
    if (theme === null || theme === undefined) continue; // allerede håndteret som :root
    if (!theme) continue;

    const lines = Object.entries(tokens)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n');
    blocks.push(`[data-theme="${theme}"] {\n${lines}\n}`);
  }

  return blocks.join('\n\n');
}

// --- Opdater index.css ---

const START_MARKER = '/* === FIGMA TOKENS START === */';
const END_MARKER = '/* === FIGMA TOKENS END === */';

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateCss(newTokenBlock) {
  if (!existsSync(CSS_FILE)) {
    console.error(`❌ Kan ikke finde ${CSS_FILE}`);
    process.exit(1);
  }

  let css = readFileSync(CSS_FILE, 'utf-8');

  const replacement = `${START_MARKER}\n/* Autogenereret — rediger ikke manuelt. Kør: node scripts/sync-tokens.js */\n\n${newTokenBlock}\n\n${END_MARKER}`;

  // 1) Strip any existing generated block (incl. surrounding blank lines), so
  //    re-runs are idempotent and placement is always recalculated.
  const blockRe = new RegExp(`\\n*${escapeRe(START_MARKER)}[\\s\\S]*?${escapeRe(END_MARKER)}\\n*`);
  css = css.replace(blockRe, '\n');

  // 2) Insert after the last top-of-file at-rule header (@import / @custom-variant
  //    / @charset). CSS requires @import to precede all style rules, so the
  //    generated :root block must come AFTER them — not before.
  const headerRe = /^@(import|custom-variant|charset)\b[^\n]*\n/gm;
  let insertAt = 0;
  for (const m of css.matchAll(headerRe)) insertAt = m.index + m[0].length;

  css = `${css.slice(0, insertAt)}\n${replacement}\n${css.slice(insertAt)}`;
  console.log('✅ Token-blok skrevet til src/index.css (efter @import-linjerne)');

  writeFileSync(CSS_FILE, css, 'utf-8');
}

// --- Main ---

const collections = loadAllTokenFiles();
const cssBlock = buildCssBlocks(collections);
updateCss(cssBlock);

const tokenCount = cssBlock.split('\n').filter(l => l.trim().startsWith('--')).length;
console.log(`\n🎨 ${tokenCount} CSS custom properties skrevet.`);
console.log('   Kør "npm run storybook" for at se ændringerne.');
