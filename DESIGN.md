# Design System: High Velocity Editorial

## Primary Theme
### LIGHT MODE IS THE PRIMARY EXPERIENCE
The portfolio MUST prioritize light mode as the default and primary visual experience.
Light mode should be the version that receives the most design attention.
The visual identity should be built around the Red Bull-inspired color palette:
- White (`#FFFFFF`)
- Deep blue (`#001A72` / `#0033A0` / `#00162B`)
- Bright red (`#DB0A40` / `#E30613` / `#CC0000`)
- Energetic yellow (`#FFCC00` / `#FFD700`)

Dark mode may exist as an alternative theme, but it must not be the primary design direction.
Do NOT design the dark mode first and simply invert the colors.
The light theme should feel:
- Energetic
- Premium
- Bold
- Clean
- Modern
- Technical
- Editorial

---

## Color System & Tokens

| Token | Value | Role |
| :--- | :--- | :--- |
| `surface` / `surface-base` | `#FFFFFF` | Dominant light mode background |
| `surface-light` | `#FAFCFF` | Secondary light section surface |
| `surface-container-low` | `#F7FAFC` | Subtle container fill |
| `surface-container` | `#F1F5FA` | Standard technical container fill |
| `surface-container-high` | `#E5ECF6` | Elevated / hover container fill |
| `structure-navy` / `primary` | `#001A72` | Primary brand structure & deep blue |
| `structure-deep` | `#001248` | Deep structural accents & cards on dark |
| `structure-dark` | `#000F2E` | Footer & deepest structural layer |
| `energy-red` | `#DB0A40` | Primary energetic crimson |
| `energy-red-bright` | `#E30613` | High-impact CTAs, live indicators & highlights |
| `highlight-yellow` | `#FFCC00` | Telemetry highlights, badges & borders |
| `highlight-gold` | `#FFD700` | Secondary energetic accent |
| `text-primary` | `#0A1128` | Primary body & editorial text |
| `text-subtle` | `#4B5565` | Muted metadata & secondary copy |
| `outline-subtle` | `rgba(0, 26, 114, 0.12)` | Precision technical borders (`1px`) |

---

## Color Hierarchy
The visual hierarchy follows:
`WHITE` → `DEEP BLUE` → `RED` → `YELLOW` → `NEUTRAL GRAYS`

- **WHITE = SPACE**: Whitespace, contrast, clean editorial layouts.
- **BLUE = STRUCTURE**: Navigation, large structural blocks, primary headings, buttons.
- **RED = ENERGY**: Important highlights, primary CTAs, active states, key telemetry numbers.
- **YELLOW = HIGHLIGHT**: Badges, decorative accents, interactive details.

---

## Typography

| Scale | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Barlow Condensed | `72px` (`44px` mobile) | `800–900` | `76px` | `-0.02em` |
| `display-lg` | Barlow Condensed | `56px` (`36px` mobile) | `800` | `60px` | `-0.01em` |
| `headline-lg` | Barlow Condensed | `40px` (`28px` mobile) | `700–900` | `44px` | `-0.01em` |
| `headline-md` | Barlow Condensed | `28px` | `700` | `32px` | `0em` |
| `headline-sm` | Barlow Condensed | `22px` | `700` | `26px` | `0em` |
| `title-md` | Inter | `18px` | `600` | `24px` | `0em` |
| `body-lg` | Inter | `18px` | `400` | `28px` | `0em` |
| `body-md` | Inter | `16px` | `400` | `24px` | `0em` |
| `body-sm` | Inter | `14px` | `400` | `20px` | `0em` |
| `label-lg` | Barlow Condensed / JetBrains Mono | `16px` | `700` | `20px` | `0.06em` |
| `label-md` | Barlow Condensed / JetBrains Mono | `13px` | `700` | `16px` | `0.08em` |
| `label-sm` | Barlow Condensed / JetBrains Mono | `11px` | `700` | `14px` | `0.10em` |

---

## Geometry & Surface Utilities
- **`.clip-corner`**: `clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)`
- **`.clip-badge`**: `clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)`
- **`.blueprint-grid`**: 28px × 28px technical grid (`rgba(0, 26, 114, 0.04)`)
- **`.blueprint-grid-dark`**: 28px × 28px dark technical grid (`rgba(255, 255, 255, 0.05)`)
- **`.tech-border`**: `1px solid rgba(0, 26, 114, 0.12)`

