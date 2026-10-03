---
name: Abdus Saboor — Person-First Portfolio
description: A light React portfolio that introduces Abdus, his software foundation, and his applied machine learning work.
colors:
  paper: "#FAFCF9"
  sage: "#EFF5EC"
  ink: "#202B23"
  muted: "#526255"
  green: "#166534"
  forest: "#14532D"
  tag: "#E3EFDE"
  line: "#D4E1CF"
  scrollbar: "#8CA585"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.7rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2rem, 3.1vw, 2.75rem)"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 750
    lineHeight: 1.45
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  navigation:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 650
    lineHeight: 1.75
  button:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 700
    lineHeight: 1.75
  utility:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1.75
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.73rem"
    fontWeight: 600
    lineHeight: 1.7
rounded:
  tag: "5px"
  menu: "6px"
  button: "8px"
  panel: "12px"
  portrait: "90px 90px 16px 16px"
spacing:
  page-gutter: "48px"
  section: "84px"
  panel: "29px"
  content: "24px"
  control-y: "12px"
  control-x: "20px"
  hero-gap: "80px"
components:
  navigation:
    typography: "{typography.navigation}"
    height: "88px"
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.green}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  tag:
    backgroundColor: "{colors.tag}"
    textColor: "{colors.forest}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  portrait-frame:
    width: "204px"
    height: "240px"
    rounded: "{rounded.portrait}"
  project-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
---

# Design System: Abdus Saboor — Person-First Portfolio

## Overview

**Creative North Star: "The Person-First Green Portfolio"**

This is a light, approachable portfolio that introduces Abdus before asking the reader to scan his work. Soft white and sage fields keep the page calm, while forest green marks actions, active destinations, status, and the restrained frame around the portrait. The visual voice is carried by Manrope at different weights and sizes, so the page stays personal and practical without changing type families.

The homepage uses explicit section names, a clean career timeline, and compact project panels. A sticky header, normal document scrolling, and short action paths keep contact easy to find. The supplied portrait and Jisr screenshot remain real portfolio assets with their provenance sidecars; the implementation does not introduce speculative visual assets or generated imagery.

**Key Characteristics:**

- Soft white and sage surfaces with forest-green action signals.
- Manrope Variable used consistently for greeting, headings, body copy, metadata, and controls.
- Lightly bordered project panels and a vertical experience timeline support quick scanning.
- One restrained portrait-frame pointer offset, inactive for touch and reduced motion.

## Colors

The palette is quiet and green-led: paper carries the page, sage separates broad sections, ink and muted sage establish hierarchy, and forest greens handle interaction.

### Primary

- **Forest Green** (`colors.green`): The main action, link, active-navigation, status, focus, and portrait-frame color.
- **Deep Forest** (`colors.forest`): The darker companion used for hover states, skip-link treatment, and tag text.

### Tertiary

- **Pale Green** (`colors.tag`): The compact technology and skill tag surface.

### Neutral

- **Soft White** (`colors.paper`): The default page, header, button, and project-panel surface.
- **Sage Field** (`colors.sage`): The experience, software-project, and contact section surface.
- **Ink** (`colors.ink`): Primary text and footer emphasis.
- **Muted Sage** (`colors.muted`): Supporting copy, dates, captions, and metadata.
- **Sage Rule** (`colors.line`): One-pixel panel borders, timeline rules, section rules, and education dividers.
- **Scrollbar Sage** (`colors.scrollbar`): The browser scrollbar thumb against the paper surface.
- **White** (`colors.white`): Text on the primary button and skip link.

**The Green Signal Rule.** Use green for a reader action, active destination, status, focus ring, or the portrait frame; use sage and paper for broad fields.

## Typography

**Display Font:** Manrope Variable (with sans-serif fallback)

**Body Font:** Manrope Variable (with sans-serif fallback)

**Label Font:** Manrope Variable (with sans-serif fallback)

**Character:** A single self-hosted sans family keeps the portfolio approachable and coherent. Weight, size, tracking, and line height create the hierarchy that an earlier multi-family editorial system supplied.

### Hierarchy

- **Display** (800, `clamp(2.7rem, 5vw, 4.5rem)`, 1.1): The large two-line greeting in the first viewport.
- **Headline** (750, `clamp(2rem, 3.1vw, 2.75rem)`, 1.2): Section headings such as Experience, Education, and Let’s connect.
- **Title** (750, `1.22rem`, 1.45): Organization, education, and project titles.
- **Lead** (400, `clamp(1.15rem, 1.7vw, 1.45rem)`, 1.6): The short career framing beneath the greeting.
- **Body** (400, `16px`, 1.75): Default copy and longer experience descriptions.
- **Navigation** (650, `0.82rem`, 1.75): Sticky header destinations on wide screens.
- **Button** (700, `0.88rem`, 1.75): Hero actions; reduces to `0.82rem` at 640px.
- **Utility** (700, `0.82rem`, 1.75): Project action links.
- **Project copy** (400, `0.94rem`, 1.8): Summaries; reduces to `0.9rem` at 640px.
- **Label** (600, `0.73rem`, 1.7): Technology tags and compact metadata.

**The Single Voice Rule.** Keep Manrope throughout the surface; distinguish roles with the observed weight, size, line-height, and tracking values.

## Layout

The page uses a centered frame of `min(1120px, calc(100% - 96px))`, giving 48px side gutters until the maximum width is reached. The sticky header has an 88px minimum height and a one-pixel bottom rule. The hero is a two-column grid with a flexible text column, a 230px portrait column, an 80px gap, and 90px/82px block padding. Section bands use 84px block padding.

Experience uses a 226px date column, a flexible content column, and a 42px gap. Research and software work use two equal project columns with a 22px gap; education also uses two columns, with a 48px gap. Contact uses a 1.1fr/1fr split with a 70px gap. Project panels keep content aligned with flex-column footers so statuses and links settle at the bottom.

At 1100px the frame gutter becomes 32px and major gaps compress. At 900px the header becomes 76px, the menu button replaces the inline navigation, the portrait reduces to 172px by 203px, sections use 64px block padding, and contact becomes one column. At 640px the frame gutter becomes 20px, the hero and project/education grids become one column, sections use 48px block padding, the portrait becomes an 88px by 104px inline companion to its location caption, and the footer wraps.

## Elevation & Depth

The system is flat and tonal. It defines no box shadows; hierarchy comes from paper/sage fields, one-pixel sage rules, the timeline line, and the lightly bordered project panels. Hover changes color or background on controls, while focus uses a visible green outline.

**The Layered Paper Rule.** Establish separation with paper, sage, borders, and alignment before introducing any shadow or decorative depth.

## Shapes

Controls use gently rounded rectangles: buttons are 8px, the mobile menu is 6px, tags are 5px, and project panels are 12px. The portrait has a distinctive clipped silhouette with `90px 90px 16px 16px` corners on desktop and `40px 40px 8px 8px` on mobile. Timeline markers and the location marker are circular. Borders remain one pixel in the sage rule color.

Focus-visible states use a 3px green outline with a 5px offset. The page keeps normal scrolling with `scroll-padding-top` for the sticky header, and project targets reserve the same 112px desktop / 96px mobile offset.

## Components

### Buttons

- **Shape:** Inline-flex controls with an 8px radius, 48px minimum height, and `12px 20px` padding.
- **Primary:** Forest green background with white text and a 180ms ease-out background transition; hover uses deep forest.
- **Secondary:** Paper background with a one-pixel sage border and forest-green text; hover fills with sage.
- **Focus:** A 3px green outline with a 5px offset, shared by all focusable controls.

### Chips

- **Style:** Technology and skill tags use pale green, deep-forest text, 5px corners, `4px 10px` padding, and compact 0.73rem Manrope.
- **State:** Tags are informational labels; there is no selected/unselected filter state.

### Cards / Containers

- **Corner Style:** Project panels use 12px corners; education entries use a top rule without an enclosing card.
- **Background:** Project panels sit on soft white, while broad experience/software/contact sections use sage.
- **Shadow Strategy:** No shadow at rest or on hover; tonal fields and borders provide depth.
- **Border:** One-pixel sage border around project panels and one-pixel top rules on education entries.
- **Internal Padding:** Project panels use 29px on wide screens, 24px at 900px, and 23px at 640px.

### Inputs / Fields

There are no form inputs in the shipped homepage. Contact is handled by ordinary email, phone, and social anchors.

### Navigation

The header is sticky, paper-backed, and ruled. The wordmark uses 1.2rem, 800-weight Manrope with a green period; desktop destinations use muted sage, 0.82rem, 650 weight, and a 26px gap. Hover and the current location use green with a two-pixel underline. Below 900px, a 44px minimum-height menu button opens a full-width paper navigation panel with a bottom rule; Escape, outside pointer input, and link activation close it.

### Portrait Frame

The supplied portrait is 204px by 240px on wide screens, with the clipped silhouette and a one-pixel green offset frame. On fine hover pointers, the frame follows the pointer by at most 5px per axis and returns on pointer leave. Touch pointers, coarse pointers, and reduced-motion preferences keep the frame static. The mobile portrait is 88px by 104px with the smaller clipped radius.

## Do's and Don'ts

### Do:

- **Do** use the paper/sage/forest palette and the exact Manrope roles recorded here.
- **Do** keep About, Experience, Research, Software, Education, and Contact plainly named and easy to reach.
- **Do** use compact, lightly bordered project panels with supported tags and factual status/contribution wording.
- **Do** preserve the 1100px, 900px, and 640px responsive translations, normal scrolling, visible focus, and reduced-motion behavior.
- **Do** retain the supplied portrait and Jisr raster assets with their provenance sidecars when changing imagery.

### Don't:

- **Don't** reintroduce the superseded color system, serif display typography, page-specific route architecture, speculative visual assets, or a different runtime and interaction model.
- **Don't** turn the project sequence into a shadow-heavy or highly ornamental card system.
- **Don't** make the portrait pointer offset active for touch or reduced-motion users.
- **Don't** add generated imagery, private PDFs, or unsupported project claims to the visual system.
