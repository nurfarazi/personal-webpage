# Design System Documentation

This document provides a complete reference for the unified design system used across the personal portfolio website.

**Last Updated:** December 7, 2025
**Status:** Active & Maintained
**File Location:** `src/design-system.css`

---

## Quick Start

The entire design system is centralized in `src/design-system.css` and imported first in `src/main.tsx`. This ensures all design tokens are available globally before any component-specific styles are applied.

**Import order in main.tsx:**
1. `design-system.css` (design tokens & global styles)
2. `index.css` (Vite boilerplate, legacy typography)
3. `App.tsx` (component-specific styles imported per component)

---

## 1. Color Tokens

### Accent Colors (Dynamic)

The accent color system is dynamically controlled by `ThemeContext.tsx` and supports 5 palettes:

| Palette | Hex | Use Case |
|---------|-----|----------|
| Cyan (default) | `#00d9ff` | Primary accent, buttons, links, highlights |
| Gold | `#f59e0b` | Alternative warm accent |
| Emerald | `#10b981` | Natural/eco themes |
| Coral | `#f97316` | Energetic, warm feel |
| Violet | `#8b5cf6` | Premium, creative feel |

**CSS Variables:**
```css
--accent-color: #00d9ff;        /* Primary accent */
--accent-hover: #33e1ff;         /* Hover state */
--accent-rgb: 0, 217, 255;       /* RGB for rgba() */
--accent-secondary: #ffa500;     /* Fixed secondary orange */
```

### Accent Opacity Scale

Full opacity range from 5% to 95% for layering and subtlety:

```css
--accent-5: rgba(var(--accent-rgb), 0.05);    /* Very subtle backgrounds */
--accent-8: rgba(var(--accent-rgb), 0.08);    /* Subtle hover states */
--accent-10 through --accent-95:               /* Full range available */
```

### Semantic Accent Tokens

High-level tokens for consistent usage:

```css
--accent-subtle:  var(--accent-8);    /* Subtle backgrounds, very light */
--accent-muted:   var(--accent-15);   /* Muted accents, borders */
--accent-soft:    var(--accent-25);   /* Soft backgrounds, hover */
--accent-medium:  var(--accent-50);   /* Medium opacity, overlays */
--accent-strong:  var(--accent-85);   /* Strong, nearly opaque */
```

### Glow & Shadow Effects

Pre-calculated shadow effects based on accent color:

```css
--accent-glow-sm: 0 4px 12px var(--accent-15);    /* Subtle glow */
--accent-glow-md: 0 8px 24px var(--accent-25);    /* Medium glow */
--accent-glow-lg: 0 16px 48px var(--accent-30);   /* Large glow */
```

### Gradients

Ready-to-use gradient templates:

```css
--accent-gradient:        linear-gradient(135deg, var(--accent-color), var(--accent-hover));
--accent-gradient-subtle: linear-gradient(135deg, var(--accent-15), var(--accent-5));
```

### Theme-Specific Colors

#### Light Theme (default)
```css
--bg-primary:   #f8f7f6;              /* Page background */
--bg-secondary: rgba(248, 247, 246, 0.95);  /* Secondary background */
--bg-card:      rgba(255, 255, 255, 0.98);  /* Card/container background */
--surface:      rgba(255, 255, 255, 0.99);  /* Highest surface */

--text-primary:   #1a1918;            /* Main text */
--text-secondary: #5a5854;            /* Secondary text */
--text-muted:     #8b8580;            /* Disabled/muted text */

--border-color:   rgba(0, 0, 0, 0.08);      /* Borders and dividers */
--shadow:         rgba(0, 0, 0, 0.08);      /* Subtle shadows */
--shadow-md:      rgba(0, 0, 0, 0.12);      /* Medium shadows */
```

#### Dark Theme ([data-theme="dark"])
```css
--bg-primary:   #0d0c0a;              /* Page background */
--bg-secondary: rgba(13, 12, 10, 0.95);   /* Secondary background */
--bg-card:      rgba(25, 24, 20, 0.9);    /* Card/container background */
--surface:      rgba(35, 34, 30, 0.95);   /* Highest surface */

--text-primary:   #f5f4f2;            /* Main text */
--text-secondary: rgba(245, 244, 242, 0.85);  /* Secondary text */
--text-muted:     rgba(245, 244, 242, 0.65);  /* Disabled/muted text */

--border-color:   rgba(255, 255, 255, 0.08);  /* Borders and dividers */
--shadow:         rgba(0, 0, 0, 0.4);         /* Strong shadows */
--shadow-md:      rgba(0, 0, 0, 0.5);         /* Darker shadows */
```

### Semantic Content Colors

```css
--meta-color:          #6b6560;   /* Metadata text (date, company, etc.) */
--description-color:   #2a2825;   /* Body text in cards */
--duration-bg:         var(--accent-8);  /* Duration badge background */
```

---

## 2. Typography System

### Font Families

```css
--font-family-sans:    "Sohne", "Helvetica Neue", system-ui, -apple-system, "Segoe UI", sans-serif;
--font-family-display: "Poppins", "Space Grotesk", system-ui, sans-serif;
--font-family-mono:    "JetBrains Mono", "Fira Code", "Source Code Pro", monospace;
```

### Font Weights

```css
--font-weight-light:     300;
--font-weight-regular:   400;
--font-weight-medium:    500;
--font-weight-semibold:  600;
--font-weight-bold:      700;
```

### Font Sizes

All heading sizes use `clamp()` for fluid scaling:

```css
--font-size-display: clamp(2.5rem, 6vw, 3.5rem);
--font-size-h1:      clamp(2.1rem, 5vw, 3rem);
--font-size-h2:      clamp(1.75rem, 4vw, 2.2rem);
--font-size-h3:      clamp(1.5rem, 3.5vw, 1.875rem);
--font-size-h4:      clamp(1.25rem, 3vw, 1.5rem);
--font-size-h5:      clamp(1.1rem, 2.5vw, 1.35rem);
--font-size-h6:      clamp(1rem, 2vw, 1.1rem);

--font-size-body-lg: 1.125rem;
--font-size-body:    1rem;
--font-size-body-sm: 0.9375rem;
--font-size-caption: 0.8125rem;
--font-size-eyebrow: 0.75rem;
```

**Aliases for clarity:**
```css
--font-size-xl: var(--font-size-h4);
--font-size-lg: var(--font-size-body-lg);
--font-size-base: var(--font-size-body);
--font-size-sm: var(--font-size-body-sm);
--font-size-xs: var(--font-size-caption);
```

### Line Heights

```css
--line-height-tight:   1.2;     /* Headings */
--line-height-snug:    1.35;    /* Secondary headings */
--line-height-base:    1.6;     /* Body text (default) */
--line-height-relaxed: 1.75;    /* Lead/large text */
```

### Letter Spacing

```css
--tracking-tight:       -0.01em;  /* Display & headings */
--tracking-body:        0em;      /* Default body text */
--tracking-wide:        0.08em;   /* Eyebrows, captions */
--tracking-ultra-wide:  0.25em;   /* All caps text */
```

### Typography Scale Reference

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| Display | h1 (responsive) | semibold | tight | Hero text |
| H1 | 2.1rem-3rem | semibold | tight | Page titles |
| H2 | 1.75rem-2.2rem | semibold | snug | Section titles |
| H3 | 1.5rem-1.875rem | semibold | snug | Subsections |
| H4 | 1.25rem-1.5rem | semibold | snug | Cards/blocks |
| H5 | 1.1rem-1.35rem | medium | snug | Small headings |
| Body | 1rem | regular | base | Default text |
| Body-LG | 1.125rem | regular | relaxed | Introductory paragraphs |
| Caption | 0.8125rem | regular | snug | Metadata, dates |
| Eyebrow | 0.75rem | semibold | snug | Labels, tags |

---

## 3. Spacing Scale

All spacing is based on a 0.25rem base unit (4px at 16px font):

```css
--spacing-xs:   0.25rem;  /* 4px - Tight spacing */
--spacing-sm:   0.5rem;   /* 8px - Small spacing */
--spacing-md:   1rem;     /* 16px - Default spacing */
--spacing-lg:   1.5rem;   /* 24px - Large spacing */
--spacing-xl:   2rem;     /* 32px - Extra large spacing */
--spacing-xxl:  3rem;     /* 48px - XXL spacing */
```

**Usage Examples:**
```css
padding: var(--spacing-md);           /* Standard padding */
margin-bottom: var(--spacing-lg);     /* Large margin */
gap: var(--spacing-sm);               /* Flex/grid gap */
```

---

## 4. Border Radius

Rounded corners scale from minimal to full circle:

```css
--radius-sm:    0.25rem;  /* 4px - Minimal rounding */
--radius-md:    0.5rem;   /* 8px - Buttons, inputs */
--radius-lg:    0.75rem;  /* 12px - Cards */
--radius-xl:    1rem;     /* 16px - Large cards */
--radius-2xl:   1.5rem;   /* 24px - Extra large cards */
--radius-pill:  999px;    /* Pill shapes */
--radius-full:  9999px;   /* Perfect circles */
```

**Component-specific aliases:**
```css
--radius-button: var(--radius-md);
--radius-card:   var(--radius-lg);
--radius-input:  var(--radius-md);
--radius-badge:  var(--radius-sm);
```

---

## 5. Animation & Motion

### Easing Functions

```css
--ease-smooth:  cubic-bezier(0.4, 0, 0.2, 1);  /* Standard easing */
--ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);  /* Bouncy easing */
--ease-ease:    ease;                           /* CSS ease keyword */
```

### Duration Tokens

```css
--duration-instant:  0.15s;  /* Quick feedback (tooltips, dropdowns) */
--duration-fast:     0.2s;   /* Normal interactions (hovers, transitions) */
--duration-normal:   0.3s;   /* Standard transitions */
--duration-slow:     0.4s;   /* Slower animations (page loads) */
--duration-slower:   0.6s;   /* Very slow (emphasis animations) */
```

**Typical usage:**
```css
transition: all var(--duration-normal) var(--ease-smooth);
```

---

## 6. Backdrop & Blur Effects

```css
--blur-sm:  blur(5px);    /* Subtle glass effect */
--blur-md:  blur(8px);    /* Standard glass morphism */
--blur-lg:  blur(12px);   /* Strong blur */
--blur-xl:  blur(16px);   /* Maximum blur */
```

**Usage:**
```css
backdrop-filter: var(--blur-md);
```

---

## 7. Component Patterns

### Card Pattern

All card-like elements (sections, experience items, project cards) follow this pattern:

```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-card);
  padding: var(--spacing-xl);
  backdrop-filter: var(--blur-sm);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.card:hover {
  border-color: var(--accent-muted);
  box-shadow: var(--accent-glow-sm);
}
```

### Button Pattern

```css
.btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--accent-color);
  color: white;
  border-radius: var(--radius-button);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-normal) var(--ease-smooth);
}

.btn:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--accent-glow-md);
}
```

### Badge/Tag Pattern

```css
.badge {
  display: inline-flex;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--duration-bg);
  color: var(--accent-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-badge);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-medium);
}
```

### Bento Card Pattern

Premium card with icon + content layout:

```css
.bento-card {
  display: flex;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-xl);
  transition: all var(--duration-fast) var(--ease-bounce);
}

.bento-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 28px var(--shadow-md);
}
```

### List Item Pattern

```css
.list-item {
  padding: var(--spacing-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.list-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--accent-glow-sm);
  border-color: var(--accent-muted);
}
```

---

## 8. Layout Standards

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md);
}
```

### Header Section

```css
.header {
  padding: var(--spacing-xl) var(--spacing-md);
  text-align: center;
}
```

### Navigation

Fixed navbar with consistent styling:

```css
.navbar {
  position: fixed;
  backdrop-filter: var(--blur-sm);
  border-bottom: 1px solid var(--border-color);
}
```

---

## 9. Responsive Breakpoints

The design system is mobile-first with these key breakpoints:

| Breakpoint | Usage |
|-----------|-------|
| 768px | Tablet/iPad portrait |
| 600px | Large mobile |
| 480px | Small mobile/landscape |

**Mobile-first approach:**
```css
/* Default: mobile styles */
.card { padding: var(--spacing-md); }

/* Tablet and up */
@media (min-width: 768px) {
  .card { padding: var(--spacing-xl); }
}
```

---

## 10. Accessibility Features

### Reduced Motion

Automatically disables animations for users with motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Enhanced Contrast

Automatically enhances borders for users preferring contrast:

```css
@media (prefers-contrast: more) {
  :root {
    --border-color: rgba(0, 0, 0, 0.2);
  }
}
```

### Focus Visible

All interactive elements have clear focus outlines:

```css
:focus-visible {
  outline: 3px solid var(--accent-color);
  outline-offset: 2px;
}
```

---

## 11. Utility Classes

Quick utility classes for common patterns:

### Text Colors
```css
.text-primary    { color: var(--text-primary); }
.text-secondary  { color: var(--text-secondary); }
.text-muted      { color: var(--text-muted); }
.text-accent     { color: var(--accent-color); }
```

### Background Colors
```css
.bg-primary  { background-color: var(--bg-primary); }
.bg-secondary { background-color: var(--bg-secondary); }
.bg-card     { background-color: var(--bg-card); }
.surface     { background-color: var(--surface); }
```

### Margin Utilities
```css
.mt-sm, .mt-md, .mt-lg, .mt-xl  /* margin-top */
.mb-sm, .mb-md, .mb-lg, .mb-xl  /* margin-bottom */
```

### Padding Utilities
```css
.p-sm, .p-md, .p-lg, .p-xl  /* padding */
```

---

## 12. Implementation Guide

### Creating New Components

1. **Use design tokens, never hardcoded values:**
   ```css
   /* ✅ Good */
   padding: var(--spacing-lg);
   color: var(--text-primary);
   border-radius: var(--radius-card);

   /* ❌ Bad */
   padding: 24px;
   color: #1a1918;
   border-radius: 12px;
   ```

2. **Follow established patterns:**
   - Use `.card` pattern for container elements
   - Use `.btn` pattern for buttons
   - Use `.list-item` pattern for list elements

3. **Leverage semantic tokens:**
   ```css
   .my-component {
     background: var(--bg-card);
     border-color: var(--accent-muted);
     box-shadow: var(--accent-glow-sm);
   }
   ```

4. **Apply responsive utilities consistently:**
   ```css
   padding: var(--spacing-md);

   @media (min-width: 768px) {
     padding: var(--spacing-xl);
   }
   ```

### Updating Colors

Colors are dynamically managed by `ThemeContext.tsx`. To change the accent color:

1. User selects a color in the color picker
2. ThemeContext updates `--accent-color`, `--accent-hover`, and `--accent-rgb` on `:root`
3. All dependent tokens automatically recalculate
4. All components use the new color

No component CSS changes needed.

### Adding New Tokens

If you need a new design decision:

1. Add the token to `design-system.css` `:root`
2. Follow naming convention: `--[category]-[variant]-[property]`
   - Example: `--shadow-card-lg`, `--transition-fast-smooth`
3. Document in this file
4. Use in components

---

## 13. Color Palette Reference

### Default Cyan Palette

| Context | Color | CSS Variable | Usage |
|---------|-------|--------------|-------|
| Primary | #00d9ff | `--accent-color` | Main accent |
| Hover | #33e1ff | `--accent-hover` | Interactive states |
| Subtle | rgba(0,217,255,0.08) | `--accent-subtle` | Light backgrounds |
| Muted | rgba(0,217,255,0.15) | `--accent-muted` | Borders, dividers |
| Soft | rgba(0,217,255,0.25) | `--accent-soft` | Hover backgrounds |
| Glow | 0 4px 12px rgba(...) | `--accent-glow-sm` | Shadows |

### Alternative Palettes

Users can switch to:
- **Gold:** #f59e0b
- **Emerald:** #10b981
- **Coral:** #f97316
- **Violet:** #8b5cf6

All dependent tokens recalculate automatically.

---

## 14. Migration Checklist

If refactoring existing components to use this system:

- [ ] Replace hardcoded colors with `--accent-*` tokens
- [ ] Replace hardcoded sizes with `--font-size-*` tokens
- [ ] Replace hardcoded spacing with `--spacing-*` tokens
- [ ] Replace hardcoded border-radius with `--radius-*` tokens
- [ ] Replace hardcoded shadows with `--accent-glow-*` tokens
- [ ] Replace hardcoded transitions with `--duration-*` and `--ease-*` tokens
- [ ] Ensure hover states use semantic tokens
- [ ] Test in light and dark themes
- [ ] Test with prefers-reduced-motion
- [ ] Verify responsive breakpoints

---

## 15. Testing & Validation

### Visual Regression Testing

- [ ] Light theme appears correct
- [ ] Dark theme appears correct
- [ ] All 5 accent palettes work correctly
- [ ] Hover/focus states visible and consistent
- [ ] No color contrast issues (WCAG AA minimum)

### Responsive Testing

- [ ] 480px (small mobile)
- [ ] 600px (mobile)
- [ ] 768px (tablet)
- [ ] 1024px+ (desktop)

### Accessibility Testing

- [ ] Tab navigation works
- [ ] Focus visible on all interactive elements
- [ ] Animations disabled with prefers-reduced-motion
- [ ] Enhanced contrast applied with prefers-contrast: more
- [ ] Color is not the only method of differentiation

---

## 16. Maintenance

### Regular Audits

Quarterly checks:
1. Verify all hardcoded values in CSS have been tokenized
2. Check for duplicate token definitions
3. Ensure new components use design system
4. Update this documentation with new patterns

### Updates & Changes

When making changes:
1. Update `design-system.css`
2. Regenerate all dependent components (if applicable)
3. Test in all themes
4. Update this documentation
5. Create commit with scope: `docs(design-system): ...`

---

## 17. Quick Reference

### Most Used Variables

```css
/* Colors */
--accent-color          /* Primary brand color */
--text-primary          /* Main text */
--bg-card               /* Card backgrounds */
--border-color          /* Borders */

/* Typography */
--font-size-h1          /* Large headings */
--font-size-h2          /* Section headings */
--font-size-body        /* Body text */
--font-weight-semibold  /* Emphasis */

/* Spacing */
--spacing-md            /* Standard spacing */
--spacing-lg            /* Larger spacing */

/* Effects */
--duration-normal       /* Standard transition */
--ease-smooth           /* Standard easing */
--blur-md               /* Glass morphism */
```

---

## Support

For questions or to propose changes to the design system:

1. Review this documentation thoroughly
2. Check existing usage patterns in component files
3. Propose changes in a pull request
4. Update documentation alongside code changes

**Design System Champion:** Keep this file and `src/design-system.css` in sync.
