Rating from @tedi-design-system/react. Use via `window.Tedi.Rating` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Stars, Numbers, Icons, States, Vertical Icons, Controlled, Read Only Scale, Custom Icons, Feedback Form Example.

## Props

```ts
import * as React from 'react';

/**
 * Rating from @tedi-design-system/react@21.0.0-rc.24 (stories: ./src/tedi/components/form/rating/rating.stories.tsx).
 */
export interface RatingProps {
  /** Accessible name for the group; also prefixes the `readOnly` summary. */
  label: string;
  /** Visual style. `star` / `number` fill cumulatively; `icon` highlights a single item. */
  type?: RatingType;
  /** Number of items (the max rating). */
  count?: number;
  /** Selected value (1-based; `0` = none). Use with `onChange` for controlled mode. In `readOnly`, the (possibly fractional) average. */
  value?: number;
  /** Initial value for uncontrolled mode. */
  defaultValue?: number;
  /** Called with the chosen value when the selection changes. */
  onChange?: (value: number) => void;
  /** Per-item labels (length = `count`); used as each item's accessible name and as captions. */
  itemLabels?: string[];
  /** Custom Material Symbol glyph(s): an array (one per item) for `type="icon"`, or a single string to swap the `type="star"` glyph. */
  icons?: string | string[];
  /** Disable interaction and mute the colours. */
  disabled?: boolean;
  /** Show a compact read-only summary (visual + `{value}/{count}` text; text only for `type="number"`) instead of the interactive scale. */
  readOnly?: boolean;
  /** Number of ratings shown in the `readOnly` summary (e.g. `271 hindajat`); omitted when unset. */
  ratingsCount?: number;
  /** Show the descriptive raters label next to `ratingsCount` (e.g. `271 hindajat`). Set `false` to show the number only (`271`). */
  showRatingsCountLabel?: boolean;
  /** `readOnly` layout: `summary` (single visual) or `scale` (full star scale with fractional fill). */
  readOnlyVariant?: 'summary' | 'scale';
  /** `name` for the radio inputs (form submission). Defaults to a generated id. */
  name?: string;
  /** Additional class name on the root element. */
  className?: string;
  /** Lay the scale out horizontally or stack it vertically (icon + caption per row; number scale stacked with the endpoint captions bracketing it). Use `vertical` on narrow layouts for `type="icon"` with long `itemLabels`, or for a number scale that would otherwise overflow. Ignored for `type="star"`, which is always horizontal. Breakpoint-aware: e.g. `orientation="vertical" md={{ orientation: 'horizontal' }}`. */
  orientation?: 'horizontal' | 'vertical';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<RatingBreakpointProps>;
  md?: Partial<RatingBreakpointProps>;
  lg?: Partial<RatingBreakpointProps>;
  xl?: Partial<RatingBreakpointProps>;
  xxl?: Partial<RatingBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type RatingType = 'star' | 'number' | 'icon';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface RatingBreakpointProps {
    /**
     * Lay the scale out horizontally or stack it vertically (icon + caption per row; number scale
     * stacked with the endpoint captions bracketing it). Use `vertical` on narrow layouts for
     * `type="icon"` with long `itemLabels`, or for a number scale that would otherwise overflow.
     * Ignored for `type="star"`, which is always horizontal.
     * Breakpoint-aware: e.g. `orientation="vertical" md={{ orientation: 'horizontal' }}`.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical';
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  // `defaultValue` is only read on mount; the key remounts so the control takes effect.
  render: (args) => <Rating key={args.defaultValue} {...args} />,
};
```

### Stars

```tsx
export const Stars: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ScaleShowcase type="star" max={5} itemLabels={STAR_LABELS} />,
};
```

### Numbers

```tsx
export const Numbers: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ScaleShowcase type="number" max={10} itemLabels={NUMBER_LABELS} />,
};
```

### Icons

```tsx
export const Icons: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ScaleShowcase type="icon" max={5} itemLabels={ICON_LABELS} />,
};
```

### States

```tsx
export const States: Story = {
  parameters: {
    controls: { disable: true },
    pseudo: { hover: '[id^="rating-hover"] label', focusVisible: '[id^="rating-focus"] input' },
  },
  render: () => {
    const types = ['star', 'number', 'icon'] as const;
    const rows: { label: string; state?: 'hover' | 'focus'; disabled?: boolean }[] = [
      { label: 'Default' },
      { label: 'Hover', state: 'hover' },
      { label: 'Disabled', disabled: true },
      { label: 'Focus', state: 'focus' },
    ];
    const cell = { padding: '0.5rem 1rem', textAlign: 'left' as const, verticalAlign: 'middle' as const };

    // One table per type, side by side from md up and stacked on mobile so nothing scrolls sideways.
    return (
      <Row gutterY={5}>
        {types.map((type) => (
          <Col key={type} xs={12} md={4}>
            <Heading element="h3" modifiers="h5">
              {type[0].toUpperCase() + type.slice(1)}
            </Heading>
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>
                    <span className="sr-only">State</span>
                  </th>
                  {['Default', 'Selected'].map((column) => (
                    <th key={column} scope="col" style={cell}>
                      <Text modifiers="bold">{column}</Text>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} id={row.state ? `rating-${row.state}-${type}` : undefined}>
                    <th scope="row" style={{ ...cell, paddingLeft: 0 }}>
// …
```

### Vertical Icons

```tsx
export const VerticalIcons: Story = {
  name: 'Vertical (icons)',
  parameters: { controls: { disable: true } },
  render: () => (
    <Rating
      type="icon"
      orientation="vertical"
      itemLabels={['Väga halb kogemus', 'Halb kogemus', 'Keskmine kogemus', 'Hea kogemus', 'Väga hea kogemus']}
      defaultValue={4}
      label="Teenuse hinnang"
    />
  ),
};
```

Full story source: `src/tedi/components/form/rating/rating.stories.tsx`.

## Related

`Heading`, `Text`, `Button`, `Card`, `Col`, `Row`, `VerticalSpacing`, `ChoiceGroup`, `Textarea`
