VerticalStepper from @tedi-design-system/react. Use via `window.Tedi.VerticalStepper` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `VerticalStepper.Item`, `VerticalStepper.SubItem`.

Variants (see `preview.html`): Default, With Descriptions, With Status Badges, With Button, With Links, Compact, States, Responsive, Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * VerticalStepper from @tedi-design-system/react@21.0.0 (stories: ./src/tedi/components/navigation/vertical-stepper/vertical-stepper.stories.tsx).
 */
export interface VerticalStepperProps {
  /** `VerticalStepper.Item` elements (and optional `Separator`s between them). Items are auto-numbered in source order. */
  children: React.ReactNode;
  /** Compact density — smaller indicators and tighter rows. Completed / error steps show their state icon inside the indicator instead of the number. */
  compact?: boolean;
  /** Accessible name for the `<nav>` landmark. */
  "aria-label"?: string;
  /** Additional class name applied to the `<ol>`. */
  className?: string;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => (
    <Frame>
      <VerticalStepper aria-label="Hindamise edenemine">
        <VerticalStepper.Item title="Sotsiaalne võrgustik" current href="#step-1" />
        <VerticalStepper.Item title="Sotsiaalsed suhted" state="completed" defaultOpen>
          <VerticalStepper.SubItem title="Sõbrad" state="completed" onClick={noop} />
          <VerticalStepper.SubItem title="Pere" onClick={noop} />
        </VerticalStepper.Item>
        <VerticalStepper.Item title="Vaimne tervis" state="completed" href="#step-3" />
        <VerticalStepper.Item title="Füüsiline tervis" state="completed" href="#step-4" />
        <VerticalStepper.Item title="Elukeskkond" state="completed" href="#step-5" />
        <VerticalStepper.Item title="Hõivatus" state="error" href="#step-6" />
        <VerticalStepper.Item title="Vaba aeg ja huvitegevused" state="completed" href="#step-7" />
        <VerticalStepper.Item title="Igapäevaelu toimingud" href="#step-8" />
      </VerticalStepper>
    </Frame>
  ),
};
```

### With Descriptions

```tsx
export const WithDescriptions: Story = {
  render: () => (
    <Frame>
      <VerticalStepper aria-label="Taotluse menetlus">
        <VerticalStepper.Item title="Kutse" state="completed" href="#k1" />
        <VerticalStepper.Item
          title="Tahteavaldus"
          description="Ülevaatamine võib võtta kuni 30 tööpäeva"
          state="completed"
          href="#k2"
        />
        <VerticalStepper.Item
          title="Geenianalüüs"
          description="Menetlemine võtab aega kuni 30 päeva"
          current
          href="#k3"
        />
        <VerticalStepper.Item title="Vastus" href="#k4" />
      </VerticalStepper>
    </Frame>
  ),
};
```

### With Status Badges

```tsx
export const WithStatusBadges: Story = {
  render: () => (
    <Frame>
      <VerticalStepper aria-label="Andmete kontroll">
        <VerticalStepper.Item
          title="Isikuandmed"
          state="completed"
          href="#i1"
          endSlot={
            <StatusBadge color="success" variant="bordered">
              Isik on tõestatud
            </StatusBadge>
          }
        />
        <VerticalStepper.Item title="Üldandmed" state="completed" href="#i2" />
        <VerticalStepper.Item title="Terviseandmed" state="completed" href="#i3" />
        <VerticalStepper.Item
          title="Vastus"
          current
          href="#i4"
          endSlot={
            <Text color="tertiary" modifiers="small">
              Täidab ametnik
            </Text>
          }
        />
      </VerticalStepper>
    </Frame>
  ),
};

/**
 * `titleId` puts an id on the step title, so an action in `endSlot` can reference it with `aria-describedby`.
 * Links also appear in a screen reader's links list, where descriptions are not read: give them the context in their text instead (see With Links).
 */
```

### With Button

```tsx
export const WithButton: Story = {
  render: () => (
    <Frame>
      <VerticalStepper aria-label="Andmete sisestus">
        <VerticalStepper.Item
          title="Isikuandmed"
          titleId="step-personal-data-title"
          state="completed"
          href="#b1"
          endSlot={
            <Button visualType="secondary" size="small" iconLeft="add" aria-describedby="step-personal-data-title">
              Lisa isik
            </Button>
          }
        />
        <VerticalStepper.Item title="Üldandmed" state="completed" href="#b2" />
        <VerticalStepper.Item title="Terviseandmed" state="completed" href="#b3" />
        <VerticalStepper.Item title="Ülevaade" current href="#b4" />
      </VerticalStepper>
    </Frame>
  ),
};
```

### With Links

```tsx
export const WithLinks: Story = {
  render: () => (
    <Frame>
      <VerticalStepper aria-label="Tervisevaldkonnad">
        <VerticalStepper.Item
          title="Vaimne tervis"
          state="completed"
          href="#l1"
          endSlot={
            <Link href="#read-1" iconRight="arrow_forward">
              Loe rohkem<span className="visually-hidden">: Vaimne tervis</span>
            </Link>
          }
        />
        <VerticalStepper.Item
          title="Füüsiline tervis"
          state="completed"
          href="#l2"
          endSlot={
            <Link href="#read-2" iconRight="arrow_forward">
              Loe rohkem<span className="visually-hidden">: Füüsiline tervis</span>
            </Link>
          }
        />
        <VerticalStepper.Item title="Üldandmed" state="completed" href="#l3" />
        <VerticalStepper.Item title="Ülevaade" current href="#l4" />
      </VerticalStepper>
    </Frame>
  ),
};
```

### Compact

```tsx
export const Compact: Story = {
  render: () => <CompactTemplate />,
};
```

Full story source: `src/tedi/components/navigation/vertical-stepper/vertical-stepper.stories.tsx`.

## Related

`Heading`, `Text`, `Button`, `Col`, `Row`, `HideAt`, `ShowAt`, `VerticalSpacing`, `Separator`, `StatusBadge`, `CardStepper`, `Link`
