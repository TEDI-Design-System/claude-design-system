ScrollFade from @tedi-design-system/react. Use via `window.Tedi.ScrollFade` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Scrollbar, Fade Size, Fade Position, No Fade Without Scrollbar.

## Props

```ts
import * as React from 'react';

/**
 * ScrollFade from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/scroll-fade/scroll-fade.stories.tsx).
 */
export interface ScrollFadeProps {
  /** ScrollFade content */
  children: React.ReactNode;
  /** Additional class name. */
  className?: string;
  /** Scrollbar type */
  scrollBar?: 'default' | 'custom';
  /** Size of fade in percentages. */
  fadeSize?: 0 | 10 | 20;
  /** Fade position */
  fadePosition?: 'top' | 'bottom' | 'both';
  /** Called when element is scrolled to top */
  onScrollToTop?: () => void;
  /** Called when element is scrolled to bottom */
  onScrollToBottom?: () => void;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    scrollBar: 'custom',
    fadeSize: 20,
    fadePosition: 'both',
  },
};
```

### Scrollbar

```tsx
export const Scrollbar: Story = {
  render: ScrollbarTemplate,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
};
```

### Fade Size

```tsx
export const FadeSize: Story = {
  render: FadeSizeTemplate,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
};
```

### Fade Position

```tsx
export const FadePosition: Story = {
  render: FadePositionTemplate,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
};
```

### No Fade Without Scrollbar

```tsx
export const NoFadeWithoutScrollbar: Story = {
  render: NoFadeWithoutScrollbarTemplate,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
};
```

Full story source: `src/tedi/components/misc/scroll-fade/scroll-fade.stories.tsx`.

## Related

`Text`, `Col`, `Row`
