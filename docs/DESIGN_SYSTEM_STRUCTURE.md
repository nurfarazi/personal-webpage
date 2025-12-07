# Design System Structure & Hierarchy

This document explains the layered architecture of the design system and how tokens flow through the application.

---

## Layer 1: Design Tokens (Foundation)

**File:** `src/design-system.css`

These are the atomic building blocks. They define "the what" (values).

### Token Categories

```
DESIGN TOKENS
├── Color Tokens
│   ├── Accent Colors (dynamic: --accent-color, --accent-hover)
│   ├── Accent Opacity Range (--accent-5 to --accent-95)
│   ├── Semantic Tokens (--accent-subtle, --accent-muted, --accent-soft)
│   ├── Glow/Shadow Effects (--accent-glow-sm/md/lg)
│   ├── Gradients (--accent-gradient, --accent-gradient-subtle)
│   ├── Theme Colors - Light (--bg-primary, --text-primary, etc.)
│   ├── Theme Colors - Dark ([data-theme="dark"] variants)
│   └── Semantic Content Colors (--meta-color, --description-color)
│
├── Typography Tokens
│   ├── Font Families (--font-family-sans, --display, --mono)
│   ├── Font Weights (--font-weight-light through --bold)
│   ├── Font Sizes (--font-size-display, --h1 through h6, --body variants)
│   ├── Line Heights (--line-height-tight, --snug, --base, --relaxed)
│   └── Letter Spacing (--tracking-tight through --ultra-wide)
│
├── Spacing Tokens
│   └── Scale (--spacing-xs: 4px through --spacing-xxl: 48px)
│
├── Radius Tokens
│   ├── Incremental (--radius-sm through --radius-2xl)
│   ├── Special (--radius-pill, --radius-full)
│   └── Component-Specific (--radius-button, --radius-card, etc.)
│
└── Motion Tokens
    ├── Easing (--ease-smooth, --ease-bounce, --ease-ease)
    └── Duration (--duration-instant through --duration-slower)
```

---

## Layer 2: Global Styles (Reset & Foundation)

**Still in:** `src/design-system.css`

Applies tokens to base HTML elements.

```css
body {
  background-color: var(--bg-primary);     /* Uses color token */
  color: var(--text-primary);              /* Uses color token */
  font-family: var(--font-family-sans);    /* Uses typography token */
  font-size: var(--font-size-body);        /* Uses typography token */
}

h1, h2, h3, etc. {
  font-family: var(--font-family-display); /* Uses typography token */
  font-size: var(--font-size-hX);          /* Uses typography token */
  line-height: var(--line-height-tight);   /* Uses typography token */
}
```

**Result:** All HTML elements have consistent styling out of the box.

---

## Layer 3: Component Patterns (Repeatable Styles)

**Still in:** `src/design-system.css`

Pre-styled component classes that combine tokens into reusable patterns.

### Established Patterns

```
COMPONENT PATTERNS
├── .card / .section
│   └── Combines: bg-card, border-color, border-radius, padding, blur, transition
│
├── .btn / button.btn / .contact-btn
│   └── Combines: accent-color, padding, border-radius, font-weight, transition, glow on hover
│
├── .badge / .tag / .duration
│   └── Combines: accent opacity, border, border-radius, font-size, font-weight
│
├── .experience-item / .list-item
│   └── Combines: bg-card, border, border-radius, padding, transition, shadow on hover
│
├── .bento-card
│   └── Combines: Flex layout, border, border-radius, shadow, bounce easing on hover
│
└── Navigation / Color Picker / etc.
    └── Specialized patterns for specific components
```

**Why patterns?** They ensure consistency by locking together related tokens.

**Example:**
```css
.btn {
  background: var(--accent-color);              /* Token: color */
  padding: var(--spacing-sm) var(--spacing-lg); /* Tokens: spacing */
  border-radius: var(--radius-md);              /* Token: border-radius */
  transition: all var(--duration-normal) var(--ease-smooth);  /* Tokens: motion */
}

.btn:hover {
  box-shadow: var(--accent-glow-md);            /* Token: glow */
  transform: translateY(-2px);                  /* Fixed, works with all accents */
}
```

**When to use:** Whenever you need that component's look.

---

## Layer 4: Component-Specific Styles (Customizations)

**Files:** `src/pages/HomePage.css`, `src/components/Navbar.css`, etc.

Build on top of global patterns with component-specific overrides and customizations.

```css
/* HomePage.css */
.home-page {
  /* Uses base styles from design system */
}

.home-hero {
  padding: var(--spacing-xxl);              /* Design token */
  background: var(--bg-primary);            /* Design token */
}

.home-hero h1 {
  color: var(--accent-color);               /* Design token */
  /* Inherits size from <h1> in design system */
}

.home-feature-card {
  /* Extends .card pattern */
  padding: var(--spacing-xl);
  border: 2px solid var(--accent-muted);    /* Design token */
}

.home-feature-card:hover {
  /* Extends .card:hover pattern */
  border-color: var(--accent-soft);         /* Design token */
  box-shadow: var(--accent-glow-lg);        /* Design token */
}
```

**Key rule:** No hardcoded values. Always reference tokens or patterns.

---

## Flow Diagram

```
┌─────────────────────────────────────────────┐
│   User Changes Theme/Accent Color           │
│   (Color Picker in Navbar)                  │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│   ThemeContext.tsx Updates                  │
│   --accent-color, --accent-hover,           │
│   --accent-rgb on :root                     │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│   All Dependent Tokens Recalculate          │
│   --accent-5 through --accent-95            │
│   --accent-subtle, --muted, --soft          │
│   --accent-glow-sm/md/lg                    │
│   --accent-gradient                         │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│   Component Patterns Updated                │
│   .btn, .card, .badge, etc.                 │
│   (all reference updated tokens)            │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│   Component-Specific Styles Updated         │
│   HomePage.css, Navbar.css, etc.            │
│   (all reference updated tokens)            │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│   👁️  Visual Change on Page                 │
│   (no component JS changes needed!)         │
└─────────────────────────────────────────────┘
```

---

## Token Dependency Tree

### How Tokens Build on Each Other

```
LEVEL 0: Primitive Values
├── 0, 217, 255              (RGB values)
├── 400, 500, 600            (Font weights)
└── "Sohne", "Poppins", etc. (Font names)

        ↓

LEVEL 1: Base Tokens
├── --accent-rgb: 0, 217, 255
├── --font-weight-regular: 400
├── --font-family-sans: "Sohne", ...
└── --spacing-md: 1rem

        ↓

LEVEL 2: Derived Tokens (use Level 1)
├── --accent-8: rgba(var(--accent-rgb), 0.08)    [uses --accent-rgb]
├── --accent-subtle: var(--accent-8)             [uses --accent-8]
├── --accent-glow-sm: 0 4px 12px var(--accent-15) [uses --accent-15]
├── --font-size-h1: clamp(2.1rem, 5vw, 3rem)
└── --radius-button: var(--radius-md)            [uses --radius-md]

        ↓

LEVEL 3: Component Patterns (use Level 1-2)
├── .btn { background: var(--accent-color); }
├── .card { padding: var(--spacing-lg); }
└── .badge { color: var(--accent-color); }

        ↓

LEVEL 4: Component CSS (uses Levels 1-3)
├── .home-page .hero { ... }
├── .contact-page .form { ... }
└── .projects-page .grid { ... }
```

---

## Usage Rules

### ✅ DO Use Tokens
```css
/* ✅ Good - Uses tokens from all layers */
.my-component {
  background: var(--bg-card);               /* Level 1-2 */
  padding: var(--spacing-lg);               /* Level 1 */
  border: 1px solid var(--border-color);    /* Level 1 */
  border-radius: var(--radius-lg);          /* Level 1 */
  transition: all var(--duration-normal);   /* Level 1 */
}

.my-component:hover {
  box-shadow: var(--accent-glow-sm);        /* Level 2 */
}
```

### ❌ DON'T Hardcode Values
```css
/* ❌ Bad - Hardcoded values break design system */
.my-component {
  background: rgba(255, 255, 255, 0.98);   /* Don't hardcode! Use --bg-card */
  padding: 24px;                           /* Don't hardcode! Use --spacing-xl */
  border: 1px solid #00000014;             /* Don't hardcode! Use --border-color */
  border-radius: 12px;                     /* Don't hardcode! Use --radius-lg */
  transition: all 0.3s ease;               /* Don't hardcode! Use --duration-normal etc. */
}
```

---

## When to Add New Tokens

Add a token to `design-system.css` when:

1. **It's used in 2+ places**
   ```css
   /* If .btn and .card both need this color */
   --custom-hover: var(--accent-20);
   ```

2. **It's a design decision** that should be consistent
   ```css
   /* If we decide borders should be 2px everywhere */
   --border-width-thick: 2px;
   ```

3. **It varies with theme** (light/dark)
   ```css
   /* If it needs different values in dark mode */
   --meta-text-color: #6b6560;  /* light */
   [data-theme="dark"] { --meta-text-color: #c5bdb5; }
   ```

### Don't add if:
- It's only used once
- It's a specific override for one component
- It's a micro-interaction detail (use hardcoded values here)

---

## Organization in Design System File

The `src/design-system.css` file is organized in this order:

```
1. :root { ... }
   ├── Color Tokens
   ├── Typography Tokens
   ├── Spacing Tokens
   ├── Border Radius Tokens
   ├── Animation Tokens
   ├── Backdrop Effects
   └── Layout Navigation Height

2. [data-theme="dark"] { ... }
   └── Dark theme token overrides

3. Global Reset & Defaults
   ├── *, html, body
   ├── Heading styles (h1-h6)
   ├── Body text styles (p, li, code)
   └── Image/form defaults

4. Link Styles
   ├── a, a:hover

5. Layout Patterns
   ├── .container, .header, .header-row

6. Card/Section Patterns
   ├── .card, .section

7. Button Patterns
   ├── .btn, .contact-btn

8. Badge/Tag Patterns
   ├── .badge, .tag

9. Component Patterns
   ├── Experience, Bento, Navigation, Color Picker

10. Keyframe Animations
    └── @keyframes fadeInScale, logo-spin

11. Responsive Breakpoints
    └── @media (max-width: 768px), 480px

12. Accessibility
    └── prefers-reduced-motion, prefers-contrast

13. Utility Classes
    ├── .text-*, .bg-*, spacing utilities

14. Footer & Misc
    └── .footer, #tsparticles
```

---

## Customizing Components

### Pattern: Extend a Pattern
```css
/* Extend .card pattern for special use */
.featured-card {
  /* Inherits .card base styles */
  border: 2px solid var(--accent-color);    /* Override border */
  padding: var(--spacing-xxl);              /* Override spacing */
}

.featured-card:hover {
  /* Extends .card:hover */
  box-shadow: var(--accent-glow-lg);        /* Stronger shadow */
}
```

### Pattern: Create a New Pattern
Only if no existing pattern fits:

```css
/* Checkbox pattern (if not already defined) */
.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);    /* Token */
  border-radius: var(--radius-md);          /* Token */
  background: var(--bg-card);               /* Token */
  cursor: pointer;
}

.checkbox:checked {
  background: var(--accent-color);          /* Token */
  border-color: var(--accent-color);        /* Token */
}
```

Then reference this pattern in component CSS:
```css
.my-form .form-checkbox {
  /* Extends .checkbox pattern */
}
```

---

## Light Theme vs Dark Theme

### How it works:

```css
/* Light theme (default) */
:root {
  --bg-primary: #f8f7f6;
  --text-primary: #1a1918;
}

/* Dark theme */
[data-theme="dark"] {
  --bg-primary: #0d0c0a;
  --text-primary: #f5f4f2;
}
```

### In components:

```css
/* Single rule works in both themes! */
.card {
  background: var(--bg-primary);   /* Light: #f8f7f6, Dark: #0d0c0a */
  color: var(--text-primary);      /* Light: #1a1918, Dark: #f5f4f2 */
}
```

### No component changes needed:
ThemeContext.tsx sets `data-theme="dark"` on `<html>` and all variables automatically swap.

---

## Real Example: Building a Component

### Step 1: Use Pattern
```css
.my-card {
  /* Inherit all .card styles */
}
```

### Step 2: Add Tokens
```css
.my-card {
  padding: var(--spacing-lg);         /* Token */
  background: var(--bg-card);         /* Token */
  border: 1px solid var(--border-color); /* Token */
  border-radius: var(--radius-lg);    /* Token */
  transition: all var(--duration-normal) var(--ease-smooth); /* Tokens */
}
```

### Step 3: Add Hover with Token
```css
.my-card:hover {
  border-color: var(--accent-muted);  /* Token */
  box-shadow: var(--accent-glow-sm);  /* Token */
}
```

### Step 4: Test
- Light theme ✓
- Dark theme ✓
- All 5 accent colors ✓
- Mobile responsive ✓

**Done!** No hardcoded values, works everywhere, automatically theme-aware.

---

## Maintenance & Updates

### Adding a new token
1. Add to `:root` in `design-system.css`
2. Add dark theme override in `[data-theme="dark"]` if needed
3. Document in `DESIGN_SYSTEM.md`
4. Document in `DESIGN_SYSTEM_QUICK_REF.md`

### Updating token values
1. Update in `design-system.css`
2. All dependent components automatically update
3. No component CSS changes needed

### Adding a new pattern
1. Define in `design-system.css` (after global styles)
2. Document usage in `DESIGN_SYSTEM.md`
3. Show example in `DESIGN_SYSTEM_QUICK_REF.md`
4. Use in new components

---

**Last Updated:** December 7, 2025
