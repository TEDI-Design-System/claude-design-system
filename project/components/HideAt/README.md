HideAt from @tedi-design-system/react. Use via `window.Tedi.HideAt` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Multiple Breakpoints, Breakpoint Overview.

## Props

```ts
import * as React from 'react';

/**
 * HideAt from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/layout/hide-at/hide-at.stories.tsx).
 */
export interface HideAtProps {
  children: React.ReactNode;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Description>
        The colored box below is wrapped in HideAt md. It is hidden at the md breakpoint and above. Resize the viewport
        below md to see it appear.
      </Description>
      <HideAt md>
        <Box>This content is hidden at md and above.</Box>
      </HideAt>
    </div>
  ),
};
```

### Multiple Breakpoints

```tsx
export const MultipleBreakpoints: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Description>
        The colored box below is wrapped in HideAt sm lg. It is hidden at sm and above, and also at lg and above. It is
        only visible below sm (xs).
      </Description>
      <HideAt sm lg>
        <Box>This content is hidden at sm and above, and also at lg and above.</Box>
      </HideAt>
    </div>
  ),
};
```

### Breakpoint Overview

```tsx
export const BreakpointOverview: Story = {
  render: BreakpointOverviewTemplate,
};
```

Full story source: `src/tedi/components/layout/hide-at/hide-at.stories.tsx`.

## Related

`Text`
