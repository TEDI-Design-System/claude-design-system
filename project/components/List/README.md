List from @tedi-design-system/react. Use via `window.Tedi.List` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `List.Item`.

Variants (see `preview.html`): Default, Unordered List, Ordered List, Ordered List With Start, Reversed Ordered List, No Style List, Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * List from @tedi-design-system/react@21.0.0 (stories: ./src/tedi/components/content/list/list.stories.tsx).
 */
export interface ListProps {
  /** List children should be ListItem components */
  children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[] | React.ReactNode;
  /** The HTML element to use for rendering the list. Can either be 'ul' for an unordered list or 'ol' for an ordered list. */
  element?: ListElement;
  /** Adds a custom CSS class to the List element for additional styling or theming purposes */
  className?: string;
  /** This prop is used to set the color of the bullet points in the list. Uses same color values as TEDI Icon */
  color?: BulletColor;
  /** Props for controlling vertical spacing between list items. If provided, the List will be wrapped inside a VerticalSpacing component. */
  verticalSpacing?: Omit<VerticalSpacingProps, 'element' | 'children'>;
  /** Determines whether the list should have default styling (with bullets or numbers). */
  style?: 'styled' | 'none';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ListBreakpointProps>;
  md?: Partial<ListBreakpointProps>;
  lg?: Partial<ListBreakpointProps>;
  xl?: Partial<ListBreakpointProps>;
  xxl?: Partial<ListBreakpointProps>;
}
// Also accepts 262 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
interface ListItemProps extends BreakpointSupport<ListItemBreakpointProps>, Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style' | 'children'> {
    /**
     * List children should be ListItem components
     */
    children: React.ReactNode;
    /**
     * Adds a custom CSS class to the ListItem element for additional styling or theming purposes
     */
    className?: string;
}
type ListElement = 'ul' | 'ol';
type BulletColor = IconColor;
interface VerticalSpacingProps extends BreakpointSupport<VerticalSpacingBreakpointProps> {
    /**
     * Any content to be rendered within the spacing component
     */
    children: React.ReactNode | React.ReactNode[];
    /**
     * The HTML element to render, such as `div`, `section`, `article`, etc
     * @default div
     */
    element?: keyof JSX.IntrinsicElements;
    /**
     * Additional class name(s) to apply to the element
     */
    className?: string;
    /**
     * Additional inline styles, merged with the internal spacing custom property
     * (rather than replacing it).
     */
    style?: React.CSSProperties;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ListBreakpointProps = {
    /**
     * Props for controlling vertical spacing between list items. If provided,
     * the List will be wrapped inside a VerticalSpacing component.
     */
    verticalSpacing?: Omit<VerticalSpacingProps, 'element' | 'children'>;
    /**
     * Determines whether the list should have default styling (with bullets or numbers).
     * @default 'none'
     */
    style?: 'styled' | 'none';
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    style: 'styled',
    element: 'ul',
  },
};
```

### Unordered List

```tsx
export const UnorderedList: Story = {
  render: TemplateUnorderedList,
  args: {
    style: 'styled',
  },
};
```

### Ordered List

```tsx
export const OrderedList: Story = {
  render: TemplateOrderedList,
  args: {
    element: 'ol',
    style: 'styled',
  },
};
```

### Ordered List With Start

```tsx
export const OrderedListWithStart: Story = {
  name: 'Ordered list with start / value',
  render: TemplateOrderedListWithStart,
  args: {
    style: 'styled',
  },
};
```

### Reversed Ordered List

```tsx
export const ReversedOrderedList: Story = {
  name: 'Reversed ordered list',
  render: TemplateReversedOrderedList,
  args: {
    style: 'styled',
  },
};
```

### No Style List

```tsx
export const NoStyleList: Story = {
  render: TemplateNoStyleList,
  args: {
    style: 'none',
  },
};

/** Chromatic snapshot for List: add every new visual variant here too. */
```

Full story source: `src/tedi/components/content/list/list.stories.tsx`.

## Related

`Text`, `VerticalSpacing`
