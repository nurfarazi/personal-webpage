# Design System - Quick Reference

**TL;DR:** Use CSS variables from `src/design-system.css` for all styling. Never hardcode colors, sizes, or spacing.

## Essential Variables

### Colors

```css
/* Accent (dynamically set by theme picker) */
--accent-color        #00d9ff or user selected
--accent-hover        Lighter shade for hover
--accent-subtle       Very light (8%)
--accent-muted        Light (15%)
--accent-soft         Medium (25%)
--accent-glow-sm      Soft shadow effect

/* Theme dependent */
--text-primary        Main text color (light/dark aware)
--bg-card             Card backgrounds
--border-color        Borders and dividers
```

### Typography

```css
--font-size-h1        Page titles (responsive)
--font-size-h2        Section titles
--font-size-h3        Subsection titles
--font-size-h4        Card titles
--font-size-body      Regular text (1rem)
--font-size-body-sm   Small text
--font-size-caption   Extra small labels

--font-weight-semibold    Headings (600)
--font-weight-medium      Secondary (500)
--font-weight-regular     Body (400)

--line-height-tight   Headings (1.2)
--line-height-base    Body text (1.6)
```

### Spacing

```css
--spacing-sm      8px   Small gaps
--spacing-md      16px  Standard spacing
--spacing-lg      24px  Large sections
--spacing-xl      32px  Very large gaps
--spacing-xxl     48px  Huge gaps
```

### Borders & Effects

```css
--radius-md       8px   Standard border radius
--radius-lg       12px  Card radius
--radius-xl       16px  Larger cards
--radius-2xl      24px  Extra large

--blur-md         Glass effect
--duration-normal 0.3s  Standard transition
--ease-smooth     cubic-bezier(0.4, 0, 0.2, 1)
```

## Common Patterns

### Card
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--duration-normal) var(--ease-smooth);
}

.card:hover {
  border-color: var(--accent-muted);
  box-shadow: var(--accent-glow-sm);
}
```

### Button
```css
.btn {
  background: var(--accent-color);
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-smooth);
}

.btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--accent-glow-md);
}
```

### List Item
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

### Badge
```css
.badge {
  background: var(--accent-subtle);
  color: var(--accent-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-medium);
}
```

### Text Color
```css
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-muted { color: var(--text-muted); }
.text-accent { color: var(--accent-color); }
```

## Responsive Pattern

```css
/* Mobile first */
.card {
  padding: var(--spacing-md);
}

/* Tablet and up */
@media (min-width: 768px) {
  .card {
    padding: var(--spacing-lg);
  }
}

/* Large desktop */
@media (min-width: 1024px) {
  .card {
    padding: var(--spacing-xl);
  }
}
```

## Dark Theme

Automatically handled. Just use the variables and they adapt:

```css
/* Light theme (default) */
color: var(--text-primary);        /* #1a1918 */
background: var(--bg-card);        /* rgba(255,255,255,0.98) */

/* Dark theme [data-theme="dark"] */
/* Same variables, different values */
/* color: #f5f4f2 */
/* background: rgba(25,24,20,0.9) */
```

## DO's & DON'Ts

✅ **DO:**
```css
padding: var(--spacing-md);
color: var(--text-primary);
border-radius: var(--radius-lg);
transition: all var(--duration-normal) var(--ease-smooth);
box-shadow: var(--accent-glow-sm);
```

❌ **DON'T:**
```css
padding: 16px;              /* Use --spacing-md */
color: #1a1918;             /* Use --text-primary */
border-radius: 12px;        /* Use --radius-lg */
transition: all 0.3s ease;  /* Use --duration-normal --ease-smooth */
box-shadow: 0 4px 12px #00d9ffaa;  /* Use --accent-glow-sm */
```

## Common Questions

**Q: How do I change the accent color?**
A: Users pick via color picker in navbar. ThemeContext auto-updates `--accent-color` and all dependents.

**Q: What if I need a custom color?**
A: Use a theme-aware variable from `design-system.css` or add a new token there.

**Q: How do I support dark mode?**
A: Just use the variables. Dark theme colors are built-in.

**Q: Should I use responsive classes?**
A: No. Use media queries with variables:
```css
@media (min-width: 768px) {
  .card { padding: var(--spacing-lg); }
}
```

**Q: What's the animation easing for bounce?**
A: `--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)`

**Q: Can I override a variable in a component?**
A: Yes, for scoped changes:
```css
.special-card {
  --accent-color: #f59e0b;  /* Override for this element */
}
```

## File Locations

- **Design Tokens:** `src/design-system.css`
- **Full Docs:** `DESIGN_SYSTEM.md`
- **This Quick Ref:** `DESIGN_SYSTEM_QUICK_REF.md`

## Imported First

Design system is imported before all other styles in `src/main.tsx`:

```typescript
import './design-system.css'   // ← Design tokens
import './index.css'           // ← Typography defaults
import App from './App.tsx'    // ← Components
```

This ensures all variables are available everywhere.

## Testing Checklist

When creating new components:

- [ ] Uses `--accent-color` not hardcoded color
- [ ] Uses `--spacing-*` for padding/margin
- [ ] Uses `--font-size-*` for text
- [ ] Hover state uses `--accent-glow-*`
- [ ] Works in light AND dark theme
- [ ] Transition uses `--duration-*` and `--ease-*`
- [ ] Border radius uses `--radius-*`
- [ ] Mobile responsive (test at 480px, 768px, 1024px)

## Need Help?

1. Check `DESIGN_SYSTEM.md` for detailed documentation
2. Look at existing components for patterns
3. Search for similar variables if unsure
4. Test in both light and dark theme
5. Ask questions in PR reviews

---

**Last Updated:** December 7, 2025
**Design System Version:** 1.0
