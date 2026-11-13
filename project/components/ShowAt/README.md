ShowAt from @tedi-design-system/react. Use via `window.Tedi.ShowAt` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Multiple Breakpoints, Breakpoint Overview.

## Props

```ts
import * as React from 'react';

/**
 * ShowAt from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/layout/show-at/show-at.stories.tsx).
 */
export interface ShowAtProps {
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
        The colored box below is wrapped in ShowAt md. It is only visible at the md breakpoint and above. Resize the
        viewport below md to see it disappear.
      </Description>
      <ShowAt md>
        <Box>This content is only visible at md and above.</Box>
      </ShowAt>
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
        The colored box below is wrapped in ShowAt sm lg. It is visible at sm and above, or at lg and above. It is
        hidden below sm (xs).
      </Description>
      <ShowAt sm lg>
        <Box>This content is visible at sm and above, or at lg and above.</Box>
      </ShowAt>
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

Full story source: `src/tedi/components/layout/show-at/show-at.stories.tsx`.

## Related

`Text`
