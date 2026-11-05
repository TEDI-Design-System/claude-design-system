Separator from @tedi-design-system/react. Use via `window.Tedi.Separator` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Horizontal Spacings, Horizontal Thickness, Vertical, Vertical Spacings, Vertical Thickness, Dotted Line Horizontal, Dotted Line Vertical, Sizes, Spacing Top Default, Spacing Top Small, Position, Dot Filled, Dot Outlined, Dotted Sizes, Inline Separator Usage, Vertical Dotted Card Example, Vertical Dotted Small Card Example.

## Props

```ts
import * as React from 'react';

/**
 * Separator from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/separator/separator.stories.tsx).
 */
export interface SeparatorProps {
  /** Must be set to 'horizontal' or left undefined (defaults to horizontal) Must be set to 'vertical' */
  axis?: 'horizontal';
  /** Vertical height is not used in horizontal mode Height of the vertical separator in rem units */
  height?: undefined;
  /** Display is forced to 'block' in horizontal mode CSS display value — usually 'block' or 'inline-block' */
  display?: 'block';
  /** Additional class names */
  className?: string;
  /** HTML element to render — most common are 'hr', 'div', 'span' */
  element?: 'hr' | 'div' | 'span';
  /** When true, the separator stretches to fill available space (100%) */
  isStretched?: boolean;
  /** Semantic color token */
  color?: 'primary' | 'secondary' | 'accent';
  /** Visual style — line with dots vs standalone centered dot(s) */
  variant?: SeparatorVariant;
  /** Line thickness in pixels (1 or 2) — affects outlined & solid lines */
  thickness?: 1 | 2;
  /** Spacing (margin) around the separator */
  spacing?: SeparatorSpacing;
  dotSize?: DotSize;
  dotStyle?: DotStyle;
  /** Position of the single dot */
  dotPosition?: DotPosition;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  md?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  lg?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  xl?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  xxl?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SeparatorVariant = 'dotted' | 'dot-only';
type SeparatorSpacing = number | {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
type DotSize = 'large' | 'medium' | 'small' | 'extra-small';
type DotStyle = 'filled' | 'outlined';
type DotPosition = 'start' | 'center' | 'end' | number;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface SeparatorHorizontalProps extends SeparatorSharedProps {
    /**
     * Must be set to 'horizontal' or left undefined (defaults to horizontal)
     */
    axis?: 'horizontal';
    /**
    Vertical height is not used in horizontal mode
    */
    height?: undefined;
    /**
     * Display is forced to 'block' in horizontal mode
     */
    display?: 'block';
}
type DottedSeparatorProps = {
    variant?: 'dotted';
    dotSize?: DotSize;
    dotStyle?: DotStyle;
    /**
     * Position of the single dot
     * @example
     * 'center' | 'start' | 'end' | 2.5  // 2.5rem from start
     */
    dotPosition?: DotPosition;
};
type DotOnlySeparatorProps = {
    variant: 'dot-only';
    dotSize: DotSize;
    dotStyle?: DotStyle;
    dotPosition?: never;
};
interface SeparatorVerticalProps extends SeparatorSharedProps {
    /**
     * Must be set to 'vertical'
     */
    axis: 'vertical';
    /**
     * Height of the vertical separator in rem units
     */
    height?: number;
    /**
     * CSS display value — usually 'block' or 'inline-block'
     */
    display?: 'block' | 'inline' | 'inline-block';
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: { spacing: 1 },
};
```

### Horizontal Spacings

```tsx
export const HorizontalSpacings: Story = {
  render: SpacingHorizontal,
  args: {
    axis: 'horizontal',
  },
};
```

### Horizontal Thickness

```tsx
export const HorizontalThickness: Story = {
  render: ColorsAndThickness,
};
```

### Vertical

```tsx
export const Vertical: Story = {
  render: Template,
  args: { axis: 'vertical', height: 3 },
};
```

### Vertical Spacings

```tsx
export const VerticalSpacings: Story = {
  render: SpacingVertical,
  args: {
    axis: 'vertical',
    height: 3,
    display: 'inline-block',
  },
};
```

### Vertical Thickness

```tsx
export const VerticalThickness: Story = {
  render: ColorsAndThickness,
  args: { axis: 'vertical', height: 3, display: 'inline' },
};
```

Full story source: `src/tedi/components/misc/separator/separator.stories.tsx`.

## Related

`Text`, `Card`, `Col`, `Row`, `VerticalSpacing`
