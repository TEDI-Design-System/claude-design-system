CardButton from @tedi-design-system/react. Use via `window.Tedi.CardButton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Card Rows, Card Shortcut, With Icon Card, States, As Link, Complex Card, Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * CardButton from @tedi-design-system/react@21.0.0-rc.35 (stories: ./src/tedi/components/buttons/card-button/card-button.stories.tsx).
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
  render: DefaultTemplate,
};
```

### Card Rows

```tsx
export const CardRows: Story = {
  render: CardRowsTemplate,
};
```

### Card Shortcut

```tsx
export const CardShortcut: Story = {
  render: CardShortcutTemplate,
};
```

### With Icon Card

```tsx
export const WithIconCard: Story = {
  render: WithIconCardTemplate,
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
  render: StatesTemplate,
};
```

### As Link

```tsx
export const AsLink: Story = {
  render: AsLinkTemplate,
};
```

Full story source: `src/tedi/components/buttons/card-button/card-button.stories.tsx`.

## Related

`Icon`, `Text`, `Card`, `TextGroup`, `Col`, `Row`, `VerticalSpacing`, `Separator`, `StretchContent`, `StatusBadge`
