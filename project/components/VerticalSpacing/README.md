VerticalSpacing from @tedi-design-system/react. Use via `window.Tedi.VerticalSpacing` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `VerticalSpacing.Item`.

Variants (see `preview.html`): Default, Sizes, As Section, With Custom Class Name, Nested Spacing, Mixed Content, Overwrite Item Spacing.

## Props

```ts
import * as React from 'react';

/**
 * VerticalSpacing from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/vertical-spacing/vertical-spacing.stories.tsx).
 */
export interface VerticalSpacingProps {
  /** Any content to be rendered within the spacing component */
  children: React.ReactNode | React.ReactNode[];
  /** The HTML element to render, such as `div`, `section`, `article`, etc */
  element?: keyof JSX.IntrinsicElements;
  /** Additional class name(s) to apply to the element */
  className?: string;
  /** Additional inline styles, merged with the internal spacing custom property (rather than replacing it). */
  style?: React.CSSProperties;
  /** The size of the vertical spacing, applied as `margin-bottom` The value corresponds to `em` units */
  size?: VerticalSpacingSize;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<VerticalSpacingBreakpointProps>;
  md?: Partial<VerticalSpacingBreakpointProps>;
  lg?: Partial<VerticalSpacingBreakpointProps>;
  xl?: Partial<VerticalSpacingBreakpointProps>;
  xxl?: Partial<VerticalSpacingBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type VerticalSpacingSize = 0 | 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 | 4 | 5;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type VerticalSpacingBreakpointProps = {
    /**
     * The size of the vertical spacing, applied as `margin-bottom`
     * The value corresponds to `em` units
     * @default 1
     */
    size?: VerticalSpacingSize;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    size: 1,
  },
};
```

### Sizes

```tsx
export const Sizes: Story = {
  render: TemplateWithSizes,
  args: {
    element: 'div',
  },
};
```

### As Section

```tsx
export const AsSection: Story = {
  render: Template,
  args: {
    element: 'section',
    size: 1,
  },
};
```

### With Custom Class Name

```tsx
export const WithCustomClassName: Story = {
  render: Template,
  args: {
    size: 1,
    className: 'example-list padding-14-16',
  },
};
```

### Nested Spacing

```tsx
export const NestedSpacing: Story = {
  render: NestedTemplate,
  args: {
    size: 2,
  },
};
```

### Mixed Content

```tsx
export const MixedContent: Story = {
  render: MixedContentTemplate,
  args: {
    size: 1.5,
  },
};
```

Full story source: `src/tedi/components/layout/vertical-spacing/vertical-spacing.stories.tsx`.

## Related

`Icon`, `Heading`, `Text`
