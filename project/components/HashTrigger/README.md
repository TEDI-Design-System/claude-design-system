HashTrigger from @tedi-design-system/react. Use via `window.Tedi.HashTrigger` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Tabs With Hash Trigger.

## Props

```ts
import * as React from 'react';

/**
 * HashTrigger from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/hash-trigger/hash-trigger.stories.tsx).
 */
export interface HashTriggerProps {
  /** HashTrigger content. */
  children: ReactNode;
  /** Id, which is passed to first child element/component.<br /> Child component has to inject id to DOM itself.<br /> It's used to detect element on page where to scroll. */
  id: string;
  /** Callback called when hash matches. */
  onMatch?: (id: string) => void;
  /** Scroll to element on match. */
  scrollOnMatch?: boolean;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,

  args: {
    id: 'test-1',
    scrollOnMatch: true,
  },
};
```

### Tabs With Hash Trigger

```tsx
export const TabsWithHashTrigger: Story = {
  render: TabsTemplate,

  args: {
    id: 'tab',
    scrollOnMatch: true,
  },
};
```

Full story source: `src/tedi/components/navigation/hash-trigger/hash-trigger.stories.tsx`.

## Related

`Tabs`, `Heading`, `Col`, `Row`, `VerticalSpacing`
