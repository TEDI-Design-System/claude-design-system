ClosingButton from @tedi-design-system/react. Use via `window.Tedi.ClosingButton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Size, Icon Sizes, States, Color Brand, Color Inverted.

## Props

```ts
import * as React from 'react';

/**
 * ClosingButton from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/buttons/closing-button/closing-button.stories.tsx).
 */
export interface ClosingButtonProps {
  /** Additional classes to apply custom styles to the ClosingButton. */
  className?: string;
  /** Size of the ClosingButton */
  size?: ClosingButtonSize;
  /** Event handler for the button click event. Triggered when the user clicks on the close button. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  color?: ClosingButtonColor;
  iconSize?: ClosingButtonIconSize;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type ClosingButtonSize = 'default' | 'small';
type ClosingButtonColor = 'primary' | 'brand' | 'white';
type ClosingButtonIconSize = 18 | 24;
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    title: 'close',
  },
};
```

### Size

```tsx
export const Size: Story = {
  render: SizeTemplate,
};

/**
 * Hover state is shown on all buttons for size preview.
 */
```

### Icon Sizes

```tsx
export const IconSizes: Story = {
  render: IconSizeTemplate,
  parameters: {
    pseudo: {
      hover: '.hover',
    },
  },
};
```

### States

```tsx
export const States: Story = {
  render: StatesTemplate,
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
};
```

### Color Brand

```tsx
export const ColorBrand: Story = {
  render: StatesTemplate,
  args: {
    color: 'brand',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
};
```

### Color Inverted

```tsx
export const ColorInverted: Story = {
  render: StatesTemplate,
  args: {
    color: 'white',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
  globals: { backgrounds: { value: 'brand' } },
};
```

Full story source: `src/tedi/components/buttons/closing-button/closing-button.stories.tsx`.

## Related

`Text`, `Col`, `Row`
