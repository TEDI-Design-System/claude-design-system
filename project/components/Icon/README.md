Icon from @tedi-design-system/react. Use via `window.Tedi.Icon` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, Sizes With Background, Colors, Backgrounds, Used Inside Text.

## Props

```ts
import * as React from 'react';

/**
 * Icon from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/base/icon/icon.stories.tsx).
 */
export interface IconProps {
  /** Name of material icon https://fonts.google.com/icons */
  name: string;
  /** Additional classes to style the icon or its wrapper. - If `background` is provided, the `className` will be applied to the wrapper element. - If `background` is not provided, the `className` will be applied directly to the icon element. */
  className?: string;
  /** Type of icon It is recommended to only use one type throughout your app, and to load only that type's font (`icons/<type>.css` with `index-without-icons.css`) instead of all three via `index.css`. */
  type?: IconType;
  /** Size of the icon */
  size?: IconSize;
  /** Render a filled variant of the icon */
  filled?: boolean;
  /** Which color Icon should be Use 'positive', 'important' or 'warning' with caution, usually they should not be in application UI */
  color?: IconColor;
  /** Icons label for screen-readers. If omitted then the icon is hidden for screen-readers. */
  label?: string;
  /** Add round background */
  background?: IconBackgroundColor;
  /** Type of display */
  display?: 'block';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type IconType = 'outlined' | 'sharp' | 'rounded';
type IconSize = 8 | 12 | 16 | 18 | 24 | 36 | 48;
type IconColor = 'primary' | 'secondary' | 'tertiary' | 'brand' | 'brand-dark' | 'success' | 'warning' | 'warning-dark' | 'danger' | 'white' | 'inherit';
type IconBackgroundColor = 'primary' | 'secondary' | 'brand-primary' | 'brand-secondary';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,

  args: {
    name: 'account_circle',
  },
};
```

### Sizes

```tsx
export const Sizes: Story = {
  name: 'Icon Size',
  render: TemplateColumn,

  args: {
    name: 'account_circle',
    property: 'size',
    color: 'primary',
    array: sizeArray,
  },
};
```

### Sizes With Background

```tsx
export const SizesWithBackground: Story = {
  name: 'Icon size inside background',
  render: TemplateColumnWithMultipleVariants,
  args: {
    items: [
      {
        name: 'info',
        property: 'size',
        color: 'brand',
        background: 'brand-secondary',
        size: 16,
      },
      {
        name: 'vaccines',
        property: 'size',
        color: 'brand',
        background: 'brand-secondary',
        size: 24,
      },
    ],
  },
};
```

### Colors

```tsx
export const Colors: Story = {
  render: TemplateRow,
  name: 'Icon colors',

  args: {
    name: 'account_circle',
    property: 'color',
    array: colorArray,
    size: 48,
  },
};
```

### Backgrounds

```tsx
export const Backgrounds: Story = {
  render: TemplateColumnWithBackgroundCircleVarians,
  name: 'Icon background colors',
};
```

### Used Inside Text

```tsx
export const UsedInsideText: Story = {
  render: (args: { name: IconProps['name'] }) => {
    return (
      <VerticalSpacing size={0.25}>
        <Heading element="h1">
          <Icon name={args.name} display="inline" />
          This is level 1 heading with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </Heading>
        <Heading element="h2">
          <Icon name={args.name} display="inline" />
          This is level 2 heading with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </Heading>
        <Heading element="h3">
          <Icon name={args.name} display="inline" />
          This is level 3 heading with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </Heading>
        <Heading element="h4">
          <Icon name={args.name} display="inline" />
          This is level 4 heading with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </Heading>
        <Heading element="h5">
          <Icon name={args.name} display="inline" />
          This is level 5 heading with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </Heading>
        <Heading element="h6">
          <Icon name={args.name} display="inline" />
          This is level 6 heading with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </Heading>
        <p>
          <Icon name={args.name} display="inline" />
          This is paragraph text with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </p>
        <small>
          <Icon name={args.name} display="inline" />
          This is small text with inline <Icon color="brand" name={args.name} display="inline" /> icon
        </small>
      </VerticalSpacing>
    );
  },
  args: {
// …
```

Full story source: `src/tedi/components/base/icon/icon.stories.tsx`.

## Related

`Col`, `Row`, `VerticalSpacing`, `Heading`
