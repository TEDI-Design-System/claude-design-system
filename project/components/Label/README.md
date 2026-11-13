Label from @tedi-design-system/react. Use via `window.Tedi.Label` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Required, Default Bold, Required Bold, Info Button Story, Default Small, Default Small Bold.

## Props

```ts
import * as React from 'react';

/**
 * Label from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/label/label.stories.tsx).
 */
export interface LabelProps {
  /** The element type to render. This can be any valid HTML element, allowing flexibility in how the label is used. Defaults to 'label'. */
  as?: ElementType;
  /** If true, displays a required symbol (*) after the label text, indicating that the associated input is mandatory. */
  required?: boolean;
  /** Tooltip content to display when hovering over the info button. Accepts rich content (e.g. bold text, links), not just a plain string. If provided, an info button with a tooltip will be rendered. */
  tooltip?: ReactNode;
  /** If true, applies a bold font weight to the label text. */
  isBold?: boolean;
  /** If true, applies a small font size to the label text. */
  isSmall?: boolean;
  /** Text modifiers that control how the label text is rendered, e.g. wrapping and line-breaking behavior (`'nowrap'`, `'break-word'`, `'break-all'`, `'break-spaces'`). Reuses the same modifiers as the `Text` component. Useful to prevent long labels from breaking across multiple lines and distorting form layouts. */
  modifiers?: LabelModifiers[] | LabelModifiers;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<LabelBreakpointProps>;
  md?: Partial<LabelBreakpointProps>;
  lg?: Partial<LabelBreakpointProps>;
  xl?: Partial<LabelBreakpointProps>;
  xxl?: Partial<LabelBreakpointProps>;
}
// Also accepts 265 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type LabelModifiers = Extract<TextModifiers, 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'italic' | 'uppercase' | 'lowercase' | 'capitalize'>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type LabelBreakpointProps = {
    /**
     * If true, applies a bold font weight to the label text.
     * @default false
     */
    isBold?: boolean;
    /**
     * If true, applies a small font size to the label text.
     * @default false
     */
    isSmall?: boolean;
    /**
     * Text modifiers that control how the label text is rendered, e.g. wrapping and
     * line-breaking behavior (`'nowrap'`, `'break-word'`, `'break-all'`, `'break-spaces'`).
     * Reuses the same modifiers as the `Text` component. Useful to prevent long labels
     * from breaking across multiple lines and distorting form layouts.
     */
    modifiers?: LabelModifiers[] | LabelModifiers;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,

  args: {
    children: 'Toimeaine',
  },
};
```

### Required

```tsx
export const Required: Story = {
  render: Template,
  name: 'Required field',

  args: {
    children: 'Toimeaine',
    required: true,
  },
};
```

### Default Bold

```tsx
export const DefaultBold: Story = {
  render: Template,
  name: 'Bold',

  args: {
    children: 'Toimeaine',
    isBold: true,
  },
};
```

### Required Bold

```tsx
export const RequiredBold: Story = {
  render: Template,
  name: 'Bold Required field',

  args: {
    children: 'Toimeaine',
    required: true,
    isBold: true,
  },
};
```

### Info Button Story

```tsx
export const InfoButtonStory: Story = {
  render: Template,

  args: {
    children: 'Toimeaine',
    required: true,
    tooltip: 'Lisainfo',
  },
};
```

### Default Small

```tsx
export const DefaultSmall: Story = {
  render: Template,

  args: {
    children: 'Toimeaine',
    isSmall: true,
  },
};
```

Full story source: `src/tedi/components/content/label/label.stories.tsx`.
