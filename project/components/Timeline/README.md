Timeline from @tedi-design-system/react. Use via `window.Tedi.Timeline` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Timeline.Item`, `Timeline.Title`, `Timeline.Description`.

Variants (see `preview.html`): Default, Position, Title Only, With Description, Custom Text Color, With Info Tooltip, Without Title, With Action, With Date, With Date Description, Example, Timeline Card.

## Props

```ts
import * as React from 'react';

/**
 * Timeline from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/timeline/timeline.stories.tsx).
 */
export interface TimelineProps {
  /** `Timeline.Item` elements. */
  children: ReactNode;
  /** Index of the active (current) item. Items before it render as completed (past), items after it as upcoming (future). When omitted, all items are future. */
  activeIndex?: number;
  /** Visual variant. `card` wraps the timeline in card borders and padding. */
  variant?: TimelineVariant;
  /** Vertical padding of each item in the `card` variant, in rem (same scale as `Card`). Both the gaps between items and the card's top/bottom edges resolve to twice this value. Horizontal item padding is fixed at the card default. */
  cardPadding?: number;
  /** Additional class name. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TimelineVariant = 'default' | 'card';
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: { activeIndex: 1 },
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item timings={['1990', '14. detsember']}>
        <Timeline.Title>Taotluse esitamine</Timeline.Title>
        <Timeline.Description>Pärast taotluse esitamist võetakse see menetlusse.</Timeline.Description>
      </Timeline.Item>
      <Timeline.Item timings={['1990', '15. detsember']}>
        <Timeline.Title>Menetlemine</Timeline.Title>
        <Timeline.Description>Menetlemine võib võtta kuni 30 päeva.</Timeline.Description>
      </Timeline.Item>
      <Timeline.Item timings={['1991', '15. jaanuar']}>
        <Timeline.Title>Otsus</Timeline.Title>
        <Timeline.Description>Otsus tehakse teatavaks.</Timeline.Description>
      </Timeline.Item>
    </Timeline>
  ),
};

/**
 * The three line positions a single item can take, shown as isolated rows like the Figma spec:
 * **start** (line below), **middle** (line above and below) and **end** (line above). The label
 * sits to the left of the example on desktop and moves above it on mobile, the timings are
 * right-aligned against the marker, and the start row carries a "Näita rohkem" expander to show
 * the line filling taller content.
 */
```

### Position

```tsx
export const Position: Story = {
  render: () => (
    <VerticalSpacing size={1.5}>
      {positions.map(({ label, above, below }) => (
        <Row key={label} gutterY={1} className="align-items-center">
          <Col xs={12} md="auto">
            <div style={{ minWidth: '4rem' }}>
              <Text modifiers="bold">{label}</Text>
            </div>
          </Col>

          <Col xs={12} md="auto">
            <div style={{ display: 'flex', gap: 'var(--layout-grid-gutters-12)' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  textAlign: 'right',
                  minWidth: '6rem',
                  paddingTop: above ? `calc(${STUB_HEIGHT}rem - ${DOT_OFFSET})` : 0,
                }}
              >
                {renderTimings(['1990', '14. detsember'])}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: above ? 0 : DOT_OFFSET,
                }}
              >
                {above && <Separator axis="vertical" color="secondary" height={STUB_HEIGHT} />}
                <Separator variant="dot-only" color="secondary" dotSize="medium" dotStyle="outlined" />
                {below && (
                  <div style={{ display: 'flex', flex: 1, minHeight: `${STUB_HEIGHT}rem` }}>
                    <Separator axis="vertical" color="secondary" />
                  </div>
// …
```

### Title Only

```tsx
export const TitleOnly: Story = {
  render: () => <PositionShowcase renderContent={() => <Timeline.Title>Taotluse esitamine</Timeline.Title>} />,
};
```

### With Description

```tsx
export const WithDescription: Story = {
  render: () => (
    <PositionShowcase
      renderContent={() => (
        <>
          <Timeline.Title>Taotluse esitamine</Timeline.Title>
          <Timeline.Description>Menetlemine võib võtta kuni 30 p</Timeline.Description>
        </>
      )}
    />
  ),
};

/**
 * The title and description default to `secondary` / `tertiary` text colours. Pass a `color`
 * (any typography colour) to override them — e.g. to highlight the current step.
 */
```

### Custom Text Color

```tsx
export const CustomTextColor: Story = {
  args: { activeIndex: 0 },
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item timings={['2024', '16. detsember']}>
        <Timeline.Title color="primary">Taotluse esitamine</Timeline.Title>
        <Timeline.Description color="brand">Pärast taotluse esitamist võetakse see menetlusse.</Timeline.Description>
      </Timeline.Item>
      <Timeline.Item timings={['2025', '15. jaanuar']}>
        <Timeline.Title>Menetlemine</Timeline.Title>
        <Timeline.Description>Menetlemine võib võtta kuni 30 päeva.</Timeline.Description>
      </Timeline.Item>
    </Timeline>
  ),
};
```

### With Info Tooltip

```tsx
export const WithInfoTooltip: Story = {
  render: () => (
    <PositionShowcase
      renderContent={() => (
        <>
          <Timeline.Title>
            Taotluse esitamine
            <InfoTooltip isSmall ariaLabel="Taotluse esitamine info">
              Taotluse esitamise järel võetakse see menetlusse.
            </InfoTooltip>
          </Timeline.Title>
          <Timeline.Description>Menetlemine võib võtta kuni 30 p</Timeline.Description>
        </>
      )}
    />
  ),
};
```

Full story source: `src/tedi/components/misc/timeline/timeline.stories.tsx`.

## Related

`Text`, `Button`, `Collapse`, `Col`, `Row`, `VerticalSpacing`, `InfoTooltip`
