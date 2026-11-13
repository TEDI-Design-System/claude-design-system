CollapseButton from @tedi-design-system/react. Use via `window.Tedi.CollapseButton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, States, Icon Only, Secondary Button, With Text Inverted, Icon Only Inverted.

## Props

```ts
import * as React from 'react';

/**
 * CollapseButton from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/buttons/collapse-button/collapse-button.stories.tsx).
 */
export interface CollapseButtonProps {
  /** Current open state. Bind alongside `onOpenChange` to keep in sync. */
  open: boolean;
  /** Called when the user toggles the button. Receives the next open state. Standard native `onClick` still fires too; if it calls `preventDefault` the toggle is suppressed. */
  onOpenChange?: (next: boolean) => void;
  /** Label shown when collapsed. Rendered literally — translate at the call site if needed. When omitted, falls back to the `LabelProvider`'s translated `'open'` label. */
  openText?: string;
  /** Label shown when expanded. Rendered literally — translate at the call site if needed. When omitted, falls back to the `LabelProvider`'s translated `'close'` label. */
  closeText?: string;
  /** Hide the label and render the chevron only. */
  hideText?: boolean;
  /** Chevron style. Only takes effect with `hideText` (icon-only mode). */
  arrowType?: CollapseButtonArrowType;
  /** Visual size. */
  size?: CollapseButtonSize;
  /** Light text and icon for placement on a dark / brand background. Ignored when `arrowType` is `secondary` (no inverted form in the design). */
  inverted?: boolean;
  /** Underline the text label. Set `false` in contexts where the chevron is the sole affordance (e.g. inside an accordion header). Has no effect in icon-only mode. */
  underline?: boolean;
  /** Accessible label. Required when `hideText` is `true`. */
  "aria-label"?: string;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type CollapseButtonArrowType = 'default' | 'secondary';
type CollapseButtonSize = 'default' | 'small';
```

## Examples

### Default

```tsx
export const Default: StoryObj<typeof CollapseButton> = {
  render: function Render(args) {
    const [, updateArgs] = useArgs<CollapseButtonProps>();
    return <CollapseButton {...args} onOpenChange={(open) => updateArgs({ open })} />;
  },
};
```

### States

```tsx
export const States: StoryObj<StatesArgs> = {
  render: StatesTemplate,
  parameters: PSEUDO_PARAMS,
};
```

### Icon Only

```tsx
export const IconOnly: StoryObj<StatesArgs> = {
  render: StatesTemplate,
  args: {
    hideText: true,
    'aria-label': 'Näita detaile',
  },
  parameters: PSEUDO_PARAMS,
};
```

### Secondary Button

```tsx
export const SecondaryButton: StoryObj<StatesArgs> = {
  render: StatesTemplate,
  args: {
    hideText: true,
    arrowType: 'secondary',
    'aria-label': 'Näita detaile',
    // The secondary style has no small variant in the design.
    hideSizes: true,
  },
  parameters: PSEUDO_PARAMS,
};
```

### With Text Inverted

```tsx
export const WithTextInverted: StoryObj<StatesArgs> = {
  render: StatesTemplate,
  args: {
    inverted: true,
    titleColor: 'white',
  },
  parameters: PSEUDO_PARAMS,
  globals: { backgrounds: { value: 'brand' } },
};
```

### Icon Only Inverted

```tsx
export const IconOnlyInverted: StoryObj<StatesArgs> = {
  render: StatesTemplate,
  args: {
    hideText: true,
    inverted: true,
    titleColor: 'white',
    'aria-label': 'Näita detaile',
  },
  parameters: PSEUDO_PARAMS,
  globals: { backgrounds: { value: 'brand' } },
};
```

Full story source: `src/tedi/components/buttons/collapse-button/collapse-button.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
