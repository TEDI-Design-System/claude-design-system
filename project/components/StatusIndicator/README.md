StatusIndicator from @tedi-design-system/react. Use via `window.Tedi.StatusIndicator` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, All Variants, Examples.

## Props

```ts
import * as React from 'react';

/**
 * StatusIndicator from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/tags/status-indicator/status-indicator.stories.tsx).
 */
export interface StatusIndicatorProps {
  /** The status type, which determines the indicator color. */
  type?: StatusIndicatorType;
  /** The size of the indicator. */
  size?: StatusIndicatorSize;
  /** Whether the indicator has a white border ring. */
  hasBorder?: boolean;
  /** Controls positioning of the indicator. - `'default'` — inline, no absolute positioning - `'top-right'` — absolutely positioned at the top-right corner of the parent */
  position?: StatusIndicatorPosition;
  /** Additional class name(s) */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StatusIndicatorType = 'success' | 'danger' | 'warning' | 'inactive';
type StatusIndicatorSize = 'sm' | 'lg';
type StatusIndicatorPosition = 'default' | 'top-right';
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    type: 'success',
    size: 'sm',
    hasBorder: false,
  },
};
```

### All Variants

```tsx
export const AllVariants: Story = {
  render: () => (
    <div>
      {sizes.map((size) => (
        <Row key={size} className="padding-14-16">
          <Col width={2} className="flex align-items-center">
            <Text modifiers="bold">{size === 'sm' ? 'Small' : 'Large'}</Text>
          </Col>
          <Col className="flex align-items-center gap-3">
            {types.map((type) => (
              <StatusIndicator key={type} type={type} size={size} />
            ))}
          </Col>
        </Row>
      ))}
      {sizes.map((size) => (
        <Row key={`${size}-bordered`} className="padding-14-16">
          <Col width={2} className="flex align-items-center">
            <Text modifiers="bold">{size === 'sm' ? 'Small bordered' : 'Large bordered'}</Text>
          </Col>
          <Col className="flex align-items-center gap-3">
            {types.map((type) => (
              <StatusIndicator key={type} type={type} size={size} hasBorder />
            ))}
          </Col>
        </Row>
      ))}
    </div>
  ),
};
```

### Examples

```tsx
export const Examples: Story = {
  render: () => (
    <span style={{ position: 'relative' }}>
      Lugemata teated&nbsp;
      <StatusIndicator type="danger" position="top-right" />
    </span>
  ),
};
```

Full story source: `src/tedi/components/tags/status-indicator/status-indicator.stories.tsx`.

## Related

`Text`, `Col`, `Row`
