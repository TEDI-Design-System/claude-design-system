CardButton from @tedi-design-system/react. Use via `window.Tedi.CardButton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Card Rows, Card Shortcut, With Icon Card, States, As Link, Complex Card.

## Props

```ts
import * as React from 'react';

/**
 * CardButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/card-button/card-button.stories.tsx).
 */
export interface CardButtonProps<C extends React.ElementType = 'button'> {
  /** A single `<Card>` to render as the interactive surface. The host element provides the interaction semantics and applies the hover / active / focus / disabled states to the card and its blocks. Keep it to one card and avoid nested interactive elements. */
  children?: React.ReactNode;
  /** Additional class name on the host element. */
  className?: string;
  /** Render as custom component */
  as?: C;
  ref?: PolymorphicRef<C>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => (
    <CardButton>
      <ShortcutCard title="Töövõime" description="Näiteks töövõimetuslehed, töövõime hindamine" />
    </CardButton>
  ),
};
```

### Card Rows

```tsx
export const CardRows: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <CardButton>
        <BookingCard
          lead={
            <Text element="span" modifiers="bold">
              8:30
            </Text>
          }
          title="Kardioloog"
          description="Valdkond"
          book
        />
      </CardButton>
      <CardButton>
        <BookingCard
          lead={
            <Text element="span" modifiers="bold">
              8:30
            </Text>
          }
          title="Kardioloog"
          book
        />
      </CardButton>
      <CardButton>
        <BookingCard
          lead={<Icon name="monitor_heart" color="secondary" />}
          title="Kardioloog"
          description="Valdkond"
          book
        />
      </CardButton>
      <CardButton>
        <BookingCard title="Kardioloog" description="Valdkond" book />
      </CardButton>
      <CardButton>
        <IconCard icon="monitor_heart" title="Kardioloog" description="Valdkond" />
      </CardButton>
// …
```

### Card Shortcut

```tsx
export const CardShortcut: Story = {
  render: () => (
    <Row cols={1} md={{ cols: 2 }} gutter={3}>
      <Col>
        <CardButton>
          <ShortcutCard title="Töövõime" description="Näiteks töövõimetuslehed, töövõime hindamine" />
        </CardButton>
      </Col>
      <Col>
        <CardButton>
          <ShortcutCard
            title="Esindusõigus Terviseportaalis"
            description="Võimaldab jagada ligipääsu sinu terviseandmetele"
          />
        </CardButton>
      </Col>
      <Col>
        <CardButton>
          <ShortcutCard title="Mootorsõiduki juhiloa tõend" description="Kehtib kuni 28.05.2024" />
        </CardButton>
      </Col>
      <Col>
        <CardButton>
          <ShortcutCard title="Minu hammaste tervis" description="Ülevaade sinu vastuvõttudest" />
        </CardButton>
      </Col>
    </Row>
  ),
};
```

### With Icon Card

```tsx
export const WithIconCard: Story = {
  render: () => (
    <Row cols={1} lg={{ cols: 3 }} gutter={3}>
      <Col>
        <CardButton>
          <IconCard icon="euro_symbol" title="Isiku toetused" description="Toetused mis on isikule ette nähtud" />
        </CardButton>
      </Col>
      <Col>
        <CardButton>
          <IconCard icon="checklist" title="Isiku hindamised" description="Hindamised toetuste saamiseks" />
        </CardButton>
      </Col>
      <Col>
        <CardButton>
          <IconCard icon="contract" title="Isiku teenused" description="Teenused mis on võimaldatud peale hindamist" />
        </CardButton>
      </Col>
    </Row>
  ),
};
```

### States

```tsx
export const States: Story = {
  parameters: {
    pseudo: {
      hover: '[data-pseudo="Hover"]',
      active: '[data-pseudo="Active"]',
      focusVisible: '[data-pseudo="Focus"]',
    },
  },
  render: () => {
    const breakpoint = useBreakpoint();
    const isMobile = isBreakpointBelow(breakpoint, 'md');

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr 1fr',
          gap: isMobile ? '0.5rem' : '1rem',
          alignItems: 'center',
        }}
      >
        {STATE_ROWS.map((state) => (
          <Fragment key={state}>
            <Text modifiers="bold" color="primary">
              {state}
            </Text>
            <CardButton data-pseudo={state} disabled={state === 'Disabled'}>
              <BookingCard title="Kardioloog" description="Valdkond" book disabled={state === 'Disabled'} />
            </CardButton>
            <CardButton data-pseudo={state} disabled={state === 'Disabled'}>
              <IconCard icon="monitor_heart" title="Kardioloog" description="Valdkond" />
            </CardButton>
          </Fragment>
        ))}
      </div>
    );
  },
};

/**
// …
```

### As Link

```tsx
export const AsLink: Story = {
  render: () => (
    <CardButton as="a" href="#">
      <ShortcutCard title="Töövõime" description="Näiteks töövõimetuslehed, töövõime hindamine" />
    </CardButton>
  ),
};

/**
 * Any card composition works inside the wrapper — rows, icon cells, separators, badges and text
 * groups. Avoid nested interactive elements.
 */
```

Full story source: `src/tedi/components/buttons/card-button/card-button.stories.tsx`.

## Related

`Icon`, `Text`, `Card`, `TextGroup`, `Col`, `Row`, `VerticalSpacing`, `Separator`, `StretchContent`, `StatusBadge`
