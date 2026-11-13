Affix from @tedi-design-system/react. Use via `window.Tedi.Affix` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sticky Top0, Fixed Example.

## Props

```ts
import * as React from 'react';

/**
 * Affix from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/affix/affix.stories.tsx).
 */
export interface AffixProps {
  /** Affix children */
  children?: ReactNode;
  /** Additional class. */
  className?: string;
  /** Position of Affix. */
  position?: 'sticky' | 'fixed';
  /** Spacing from the top of the Container. */
  top?: AffixPosition;
  /** Spacing from the bottom of the Container. */
  bottom?: AffixPosition;
  /** Spacing from the left of the Container. */
  left?: AffixPosition;
  /** Spacing from the right of the Container. */
  right?: AffixPosition;
  /** Determine what element(s) the top/bottom values should be relative to */
  relative?: Array<'header'> | 'window';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type AffixPosition = 0 | 0.5 | 1 | 1.5 | 2 | 'unset';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    children: 'This text is Sticky in its container!',
  },
};
```

### Sticky Top0

```tsx
export const StickyTop0: Story = {
  render: Template,
  args: {
    children: 'This text is Sticky in its container!',
    top: 0,
  },
};
```

### Fixed Example

```tsx
export const FixedExample: Story = {
  render: Template,
  args: {
    children: 'This text is Fixed on bottom of page!',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: 'unset',
  },
};
```

Full story source: `src/tedi/components/misc/affix/affix.stories.tsx`.
