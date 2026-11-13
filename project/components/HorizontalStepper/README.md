HorizontalStepper from @tedi-design-system/react. Use via `window.Tedi.HorizontalStepper` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `HorizontalStepper.Item`.

Variants (see `preview.html`): Default, Second Step, Third Step, With Errors, With Descriptions, Transparent Background, Compact, Click To Navigate, External Navigation, States, Compact States.

## Props

```ts
import * as React from 'react';

/**
 * HorizontalStepper from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.stories.tsx).
 */
export interface HorizontalStepperProps {
  /** `HorizontalStepper.Item` elements, one per step. */
  children: ReactNode;
  /** Accessible name for the navigation landmark. */
  "aria-label"?: string;
  /** Background style of the stepper track. */
  background?: HorizontalStepperBackground;
  /** Collapse labels so only the indicators plus the selected step's label are visible. `true` collapses at every width; a breakpoint (`'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`) collapses only below that breakpoint. */
  compact?: HorizontalStepperCompact;
  /** Additional class name on the root element. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type HorizontalStepperBackground = 'default' | 'transparent';
type HorizontalStepperCompact = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(HorizontalStepper.Item, {
      category: 'HorizontalStepper.Item',
      prefix: 'item',
      exclude: ['label', 'onSelect'],
    }),
  },
  args: {
    'aria-label': 'Form progress',
    background: 'default',
    compact: 'sm',
    item__selected: true,
  },
  render: (args: Record<string, unknown>) => (
    <HorizontalStepper {...getPrimaryComponentProps<HorizontalStepperProps>(args)}>
      <HorizontalStepper.Item {...getSubcomponentProps(args, 'item')} label="Kutse" />
      <HorizontalStepper.Item label="Tahteavaldus" />
      <HorizontalStepper.Item label="Geenianalüüs" />
      <HorizontalStepper.Item label="Vastus" />
    </HorizontalStepper>
  ),
};
```

### Second Step

```tsx
export const SecondStep: Story = {
  render: () => (
    <HorizontalStepper aria-label="Protsessi sammud" compact="lg">
      <HorizontalStepper.Item label="Kutse" completed />
      <HorizontalStepper.Item label="Tahteavaldus" selected />
      <HorizontalStepper.Item label="Geenianalüüs" />
      <HorizontalStepper.Item label="Vastus" />
    </HorizontalStepper>
  ),
};
```

### Third Step

```tsx
export const ThirdStep: Story = {
  render: () => (
    <HorizontalStepper aria-label="Protsessi sammud" compact="lg">
      <HorizontalStepper.Item label="Kutse" completed />
      <HorizontalStepper.Item label="Tahteavaldus" completed />
      <HorizontalStepper.Item label="Geenianalüüs" selected />
      <HorizontalStepper.Item label="Vastus" />
    </HorizontalStepper>
  ),
};

/**
 * `error` takes precedence over `completed` — the indicator shows a warning glyph
 * and the step switches to the danger colours. Pair it with `description` to
 * explain what went wrong.
 */
```

### With Errors

```tsx
export const WithErrors: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <HorizontalStepper aria-label="Vorm vigadega" compact="lg">
        <HorizontalStepper.Item label="Kutse" error />
        <HorizontalStepper.Item label="Tahteavaldus" selected />
        <HorizontalStepper.Item label="Geenianalüüs" />
        <HorizontalStepper.Item label="Vastus" />
      </HorizontalStepper>
      <HorizontalStepper aria-label="Vorm vea kirjeldusega" compact="lg">
        <HorizontalStepper.Item label="Kutse" completed />
        <HorizontalStepper.Item label="Tahteavaldus" error description="Sammus esinevad vead" />
        <HorizontalStepper.Item label="Geenianalüüs" selected />
        <HorizontalStepper.Item label="Vastus" />
      </HorizontalStepper>
    </VerticalSpacing>
  ),
};

/**
 * Add a `description` for a secondary line below each label.
 */
```

### With Descriptions

```tsx
export const WithDescriptions: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <HorizontalStepper aria-label="Sammud kirjeldustega – Kutse aktiivne" compact="lg">
        <HorizontalStepper.Item label="Kutse" selected />
        <HorizontalStepper.Item label="Tahteavaldus" />
        <HorizontalStepper.Item label="Geenianalüüs" description="Ametnik täidab" />
        <HorizontalStepper.Item label="Vastus" description="Ametnik täidab" />
      </HorizontalStepper>
      <HorizontalStepper aria-label="Sammud kirjeldustega – Tahteavaldus aktiivne" compact="lg">
        <HorizontalStepper.Item label="Kutse" completed />
        <HorizontalStepper.Item label="Tahteavaldus" selected />
        <HorizontalStepper.Item label="Geenianalüüs" description="Ametnik täidab" />
        <HorizontalStepper.Item label="Vastus" description="Ametnik täidab" />
      </HorizontalStepper>
      <HorizontalStepper aria-label="Sammud kirjeldustega – Geenianalüüs aktiivne" compact="lg">
        <HorizontalStepper.Item label="Kutse" completed />
        <HorizontalStepper.Item label="Tahteavaldus" completed />
        <HorizontalStepper.Item label="Geenianalüüs" selected description="Ametnik täidab" />
        <HorizontalStepper.Item label="Vastus" description="Ametnik täidab" />
      </HorizontalStepper>
      <HorizontalStepper aria-label="Sammud kirjeldustega – Vastus aktiivne" compact="lg">
        <HorizontalStepper.Item label="Kutse" completed />
        <HorizontalStepper.Item label="Tahteavaldus" completed />
        <HorizontalStepper.Item label="Geenianalüüs" completed description="Ametnik täidab" />
        <HorizontalStepper.Item label="Vastus" selected description="Ametnik täidab" />
      </HorizontalStepper>
    </VerticalSpacing>
  ),
};

/**
 * `background="transparent"` drops the track surface so the stepper blends into
 * a coloured or patterned page background.
 */
```

### Transparent Background

```tsx
export const TransparentBackground: Story = {
  render: () => (
    <HorizontalStepper aria-label="Protsessi sammud" background="transparent" compact="lg">
      <HorizontalStepper.Item label="Kutse" completed />
      <HorizontalStepper.Item label="Tahteavaldus" selected />
      <HorizontalStepper.Item label="Geenianalüüs" />
      <HorizontalStepper.Item label="Vastus" />
    </HorizontalStepper>
  ),
};

/**
 * Collapsed — only the indicators plus the selected step's label are shown. Use
 * `compact` (`true` for always-on, or a breakpoint like `compact="md"` to collapse
 * only below that width) to keep the stepper compact on narrow viewports.
 */
```

Full story source: `src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.stories.tsx`.

## Related

`Text`, `Button`, `VerticalSpacing`
