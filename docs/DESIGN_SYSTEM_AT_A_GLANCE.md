# Design System - At A Glance

**TL;DR:** Your portfolio now has a unified design system ensuring consistent styling across all pages and themes!

---

## 📍 Where Is The Design System?

**`src/design-system.css`** - The heart of the system
- All design tokens (colors, typography, spacing, borders, motion)
- Global styles (resets, headings, body text)
- Component patterns (ready-to-use styling classes)
- Responsive rules and accessibility features
- 1,100+ lines organized into 27 clear sections

---

## 📚 Documentation (Pick What You Need)

### Quick Lookup (5 min)
**`DESIGN_SYSTEM_QUICK_REF.md`**
- Most used variables
- Common patterns
- DO's and DON'Ts
- Quick questions answered

### Full Documentation (30 min)
**`DESIGN_SYSTEM.md`**
- Complete token reference
- All patterns explained with examples
- Usage guidelines
- Migration checklist

### Architecture Deep Dive (20 min)
**`DESIGN_SYSTEM_STRUCTURE.md`**
- 4-layer architecture explained
- Token dependency tree
- How theming works
- Maintenance guide

### Implementation Summary
**`DESIGN_SYSTEM_IMPLEMENTATION.md`**
- What was created
- Benefits summary
- Next steps
- Quick links

---

## 🎨 Design Tokens Cheat Sheet

### Colors

```css
/* Accent - Dynamic (user selected) */
--accent-color         /* Primary color (cyan/gold/emerald/coral/violet) */
--accent-hover         /* Lighter shade for hover states */
--accent-subtle        /* Very light (8%) - light backgrounds */
--accent-muted         /* Light (15%) - borders, dividers */
--accent-soft          /* Medium (25%) - hover backgrounds */
--accent-glow-sm/md/lg /* Shadow effects with accent color */

/* Theme Colors - Automatically Light/Dark Aware */
--bg-primary          /* Page background */
--bg-card             /* Card background */
--text-primary        /* Main text */
--text-secondary      /* Secondary text */
--text-muted          /* Disabled/muted text */
--border-color        /* Borders and dividers */
```

### Typography

```css
--font-size-display    /* Largest display text (responsive) */
--font-size-h1 to h6   /* Headings h1-h6 (responsive) */
--font-size-body       /* Regular text (1rem) */
--font-size-body-lg    /* Large text (1.125rem) */
--font-size-caption    /* Small labels (0.8125rem) */

--font-weight-semibold /* Headings (600) */
--font-weight-medium   /* Secondary (500) */
--font-weight-regular  /* Body (400) */
```

### Spacing

```css
--spacing-xs      4px
--spacing-sm      8px
--spacing-md      16px (default)
--spacing-lg      24px
--spacing-xl      32px
--spacing-xxl     48px
```

### Borders & Effects

```css
--radius-sm       4px
--radius-md       8px
--radius-lg       12px (cards)
--radius-xl       16px
--radius-2xl      24px

--duration-instant  150ms (quick feedback)
--duration-normal   300ms (standard)
--duration-slow     400ms (slower animations)

--ease-smooth       Standard easing
--ease-bounce       Playful bouncy easing
```

---

## 🧩 Component Patterns (Pre-Made)

Ready-to-use CSS classes combining tokens:

| Pattern | Used For | Example |
|---------|----------|---------|
| `.card` / `.section` | Container elements | Experience cards, project cards |
| `.btn` / `.contact-btn` | Buttons and CTAs | Call-to-action buttons |
| `.badge` / `.tag` / `.duration` | Labels and tags | Skill tags, duration badges |
| `.experience-item` / `.list-item` | List items | Work experience, education |
| `.bento-card` | Premium card layout | Work experience grid |

---

## ✅ When Creating New Components

### ✅ DO: Use Tokens

```css
.my-component {
  background: var(--bg-card);
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all var(--duration-normal) var(--ease-smooth);
}

.my-component:hover {
  border-color: var(--accent-muted);
  box-shadow: var(--accent-glow-sm);
}
```

### ❌ DON'T: Hardcode Values

```css
.my-component {
  background: rgba(255, 255, 255, 0.98);  /* Use --bg-card */
  padding: 24px;                          /* Use --spacing-xl */
  border: 1px solid #00000014;            /* Use --border-color */
  border-radius: 12px;                    /* Use --radius-lg */
  transition: all 0.3s ease;              /* Use duration & ease tokens */
}
```

---

## 🌓 Theming (Automatic!)

### Light Theme (Default)
- Background: `#f8f7f6` (light)
- Text: `#1a1918` (dark)
- All light-theme appropriate colors

### Dark Theme
- Background: `#0d0c0a` (dark)
- Text: `#f5f4f2` (light)
- All dark-theme appropriate colors
- Applied when: `[data-theme="dark"]`

### Accent Palettes (5 Available)
- **Cyan** (default): `#00d9ff`
- **Gold**: `#f59e0b`
- **Emerald**: `#10b981`
- **Coral**: `#f97316`
- **Violet**: `#8b5cf6`

**👉 No component changes needed!** Just use tokens and they adapt automatically.

---

## 🎯 Workflow Example: Creating New Component

```css
/* Step 1: Choose a pattern */
.my-card {
  /* Will extend or create new pattern */
}

/* Step 2: Use tokens for all values */
.my-card {
  background: var(--bg-card);
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  color: var(--text-primary);
  transition: all var(--duration-normal) var(--ease-smooth);
}

/* Step 3: Add hover with tokens */
.my-card:hover {
  border-color: var(--accent-muted);
  box-shadow: var(--accent-glow-sm);
  transform: translateY(-2px);
}

/* Step 4: Test in all themes */
// ✓ Light theme
// ✓ Dark theme
// ✓ All 5 accent colors
// ✓ Mobile responsive
```

---

## 💡 Common Questions

**Q: How do I change the accent color?**
A: User picks via color picker in navbar. ThemeContext updates `--accent-color` and all dependents automatically recalculate.

**Q: How do I make something dark-theme aware?**
A: Just use tokens! They automatically adapt based on `[data-theme="dark"]`. No special handling needed.

**Q: I need a custom color not in the system. What do I do?**
A:
1. Check `DESIGN_SYSTEM.md` to see if it exists
2. If not, add it to `design-system.css` in `:root`
3. Document it
4. Use it in components

**Q: Do I need to update my component when theme changes?**
A: No! CSS variables handle it automatically.

**Q: Can I override a token for a specific component?**
A: Yes (but rarely needed):
```css
.special-card {
  --accent-color: #f59e0b;  /* Override just for this element */
}
```

---

## 📊 Build Status

✅ TypeScript: No errors
✅ Build: Successful (1.36s)
✅ Light Theme: Working
✅ Dark Theme: Working
✅ All 5 Accent Colors: Working
✅ Responsive Design: Working
✅ Accessibility: Built-in (prefers-reduced-motion, contrast, focus)

---

## 🚀 Next Steps

### Immediate
- ✅ Design system is ready to use immediately
- ✅ New components should follow the patterns
- ✅ Existing components work as-is

### Optional (No Rush)
- Gradually replace hardcoded values in existing CSS files
- Use tokens for future component updates
- Keep documentation updated as new patterns emerge

---

## 📖 File Reference

| File | Purpose |
|------|---------|
| `src/design-system.css` | All tokens, patterns, and global styles |
| `DESIGN_SYSTEM_QUICK_REF.md` | Quick lookup (best for fast answers) |
| `DESIGN_SYSTEM.md` | Complete documentation (best for learning) |
| `DESIGN_SYSTEM_STRUCTURE.md` | Architecture guide (best for understanding) |
| `DESIGN_SYSTEM_IMPLEMENTATION.md` | Implementation details (best for context) |

---

**✨ Your design system is ready to use!**

**For quick questions:** Check `DESIGN_SYSTEM_QUICK_REF.md`

**For detailed info:** Check `DESIGN_SYSTEM.md`

**For architecture:** Check `DESIGN_SYSTEM_STRUCTURE.md`
