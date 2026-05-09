---
name: The Editorial Gallery
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad8'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f2'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e1'
  on-surface: '#1b1c1b'
  on-surface-variant: '#424846'
  inverse-surface: '#303130'
  inverse-on-surface: '#f2f0ef'
  outline: '#727876'
  outline-variant: '#c2c8c5'
  surface-tint: '#4d635e'
  primary: '#051a17'
  on-primary: '#ffffff'
  primary-container: '#1a2f2b'
  on-primary-container: '#809792'
  inverse-primary: '#b4ccc5'
  secondary: '#585f6c'
  on-secondary: '#ffffff'
  secondary-container: '#dce2f3'
  on-secondary-container: '#5e6572'
  tertiary: '#25120b'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c261e'
  on-tertiary-container: '#ac8c80'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e8e1'
  primary-fixed-dim: '#b4ccc5'
  on-primary-fixed: '#091f1b'
  on-primary-fixed-variant: '#364b46'
  secondary-fixed: '#dce2f3'
  secondary-fixed-dim: '#c0c7d6'
  on-secondary-fixed: '#151c27'
  on-secondary-fixed-variant: '#404754'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#e3bfb3'
  on-tertiary-fixed: '#2a170f'
  on-tertiary-fixed-variant: '#5a4138'
  background: '#fbf9f8'
  on-background: '#1b1c1b'
  surface-variant: '#e3e2e1'
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Work Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 32px
  section-padding: 128px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is rooted in the "New Minimalist" movement, specifically tailored for the publishing industry. It evokes the emotional response of a high-end literary journal or a curated art gallery: quiet, authoritative, and intellectual. The aesthetic prioritizes content over container, using extreme clarity and intentional restraint to establish professional credibility.

The target audience consists of editors, publishers, and creative directors who value precision and legacy. The style leverages a heavy use of whitespace (negative space) as a structural element rather than a void, ensuring that every project in the portfolio is presented with the "breathing room" required for serious appraisal.

## Colors

The palette is anchored by a deep "Scholarly Green" (#1A2F2B), which replaces traditional black for typography to provide a softer, more sophisticated contrast. This primary color is used for headings and active UI states. 

The background uses a near-white (#FCFCFC) to reduce eye strain while maintaining a crisp, paper-like feel. Light grays serve as secondary accents for metadata and borders, ensuring that the visual hierarchy remains flat and unobtrusive. Use color sparingly; it should only appear to guide the eye toward interactive elements or to establish the hierarchy of information.

## Typography

The typographic system relies on the interplay between traditional and modern. **Newsreader** is used for headlines to convey editorial authority and literary heritage; use its italic variant for pull quotes or emphasis to mimic book design. 

**Work Sans** provides a grounded, neutral counterpart for body copy and UI labels. To maintain the gallery feel, utilize a generous line-height (1.6 - 1.7) for body text. Labels should be set in small-caps or uppercase with slight letter-spacing to distinguish them from narrative content without increasing visual weight.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model. Content is centered within a 1120px container to ensure readability on wide displays. Vertical rhythm is expansive; sections are separated by large 128px gaps to prevent the portfolio from feeling cluttered.

The spacing philosophy follows a "nested proximity" rule: elements related to a single portfolio item are tightly grouped (12px - 24px), while separate project blocks are distant. This creates a rhythm of focus and pause, much like walking through a physical gallery.

## Elevation & Depth

This design system avoids heavy shadows and high-contrast layering. Depth is communicated through **Tonal Layers** and **Ambient Shadows**. 

Surfaces should feel like paper resting on a light gray table. Use a single, highly diffused shadow (Blur: 40px, Opacity: 4%, Color: Scholarly Green) for cards. Interactive elements like "Category Filters" should not use elevation; instead, use low-contrast outlines or subtle fill changes to indicate state. This keeps the interface flat and scholarly, avoiding the "app-like" feel of consumer software.

## Shapes

The shape language is conservative and structural. A "Soft" roundedness (0.25rem) is applied to buttons and input fields to prevent the interface from feeling sharp or aggressive, but it stops short of being playful. Cards and large containers may use slightly larger radii (0.5rem) to soften the "gallery" frames. This subtle rounding maintains the professional tone while signaling a modern, digital-first platform.

## Components

### Buttons
Primary buttons are solid Scholarly Green with white Work Sans text. Secondary buttons are ghost-style with a fine 1px border. Transitions should be slow (300ms) to match the calm brand personality.

### Cards
Portfolio cards feature a large image ratio (3:2 or 4:3) with a minimal footer containing the title (Newsreader) and category (Work Sans Label). The card background should be the same as the page background, defined only by the ambient shadow and a very faint border.

### Category Filters
Filters should appear as a horizontal row of text links. The active state is indicated by a simple underline or a shift to the primary color, avoiding the use of "pills" or heavy buttons to keep the navigation refined.

### Inputs & Search
Fields should be understated with a bottom-border only or a very light gray fill. Focus states are indicated by the Scholarly Green primary color.

### Navigation
The header is sticky but minimal, using a transparent background that blurs slightly on scroll. Use high-quality typography for the logo/nameplate rather than a complex icon.