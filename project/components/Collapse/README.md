Collapse from @tedi-design-system/react. Use via `window.Tedi.Collapse` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Icon Only, Secondary Arrow, Inverted, Without Underline, Full Row Toggle, Nested.

## Props

```ts
import * as React from 'react';

/**
 * Collapse from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/collapse/collapse.stories.tsx).
 */
export interface CollapseProps {
  /** Unique identifier for the collapse content. Used for ARIA attributes like `aria-controls`. */
  id: string;
  /** Content to be displayed inside the collapsible area. */
  children: React.ReactNode;
  /** Callback triggered when the collapse is toggled. Use this to update the `open` prop in controlled mode. */
  onToggle?: (open: boolean) => void;
  /** The title/header element for the collapsible section. Rendered inside the toggle button. */
  title?: JSX.Element;
  /** Text shown on the toggle button when the content is collapsed. Defaults to the result of `getLabel('open')`. */
  openText?: string;
  /** Text shown on the toggle button when the content is expanded. Defaults to the result of `getLabel('close')`. */
  closeText?: string;
  /** Descriptive label for screen readers (e.g. "Toggle Products submenu") If provided, overrides the default open/close text for the accessible name. */
  toggleLabel?: string;
  /** Use Collapse purely as a toggle trigger for content rendered elsewhere. When set, the toggle button's `aria-controls` points at the supplied id instead of Collapse's internal content panel, and the internal panel is **not rendered**. Useful when the disclosed region must live outside Collapse's DOM subtree (e.g. a table row whose details live in a sibling `<tr>`). The consumer is responsible for rendering the target element with the matching `id` and an appropriate `role` (typically `region`). When omitted (default), Collapse renders its own `children` inside a built-in `role="region"` panel. */
  controlsId?: string;
  /** Whether the disclosed content panel is exposed as a `region` landmark (`role="region"` + `aria-labelledby`). Turn this **off** for repeated or nested disclosures such as navigation sub-menus, where many labelled regions pollute the landmark map and collide (axe `landmark-unique`); the `aria-expanded` toggle already conveys the relationship. */
  contentAsRegion?: boolean;
  /** Whether the collapse should be initially open (uncontrolled mode) This is ignored when `open` and `onToggle` are provided */
  defaultOpen?: boolean;
  /** Controls the open/closed state of the collapse (controlled mode) Should be used together with `onToggle` */
  open?: boolean;
  /** Whether to visually hide the open/close text on the toggle button Useful for icon-only toggles */
  hideCollapseText?: boolean;
  /** Additional props to pass to the `Row` component used in the title area */
  titleRowProps?: RowProps;
  /** Custom class name for the root element */
  className?: string;
  /** Visual style of the toggle chevron, intended for icon-only toggles: `secondary` wraps the chevron in a bordered secondary button, `default` renders a plain arrow. */
  arrowType?: 'default' | 'secondary';
  /** Collapse text & icon size */
  size?: 'default' | 'small';
  /** Display underline below the title */
  underline?: boolean;
  /** Render collapse as icon-only toggle. Icon-only styles are applied ONLY when no title is provided. */
  iconOnly?: boolean;
  /** Inverted color palette — flips the link / icon colors to their inverted-surface equivalents (white text + icon), for use on top of dark backgrounds. Pairs with both the with-text and icon-only variants; the secondary-arrow style has no inverted form in the design. */
  inverted?: boolean;
  /** Make the whole header row (title included) toggle on click, not just the chevron button. The chevron button stays the keyboard / screen-reader control; this only adds a mouse click target across the row. Clicks on interactive elements inside the title (links, buttons) are ignored, so they keep working. */
  fullRowToggle?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CollapseBreakpointProps>;
  md?: Partial<CollapseBreakpointProps>;
  lg?: Partial<CollapseBreakpointProps>;
  xl?: Partial<CollapseBreakpointProps>;
  xxl?: Partial<CollapseBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface RowProps extends RowSpec, React.HTMLAttributes<HTMLElement> {
    /**
     * Row children. Row direct children should always be Col components
     */
    children?: React.ReactElement<ColProps> | React.ReactElement<ColProps>[] | React.ReactNode;
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Base element.
     * @default div
     */
    element?: RowElement;
    /**
     * RowSpec object to change Row behavior on xs devices (<576px).
     * Or number of columns that will fit next to each other.
     */
    xs?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on sm devices (≥576px).
     * Or number of columns that will fit next to each other.
     */
    sm?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on md devices (≥768px).
     * Or number of columns that will fit next to each other.
     */
    md?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on lg devices (≥992px).
     * Or number of columns that will fit next to each other.
     */
    lg?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xl devices (≥1200px).
     * Or number of columns that will fit next to each other.
     */
    xl?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xxl devices (≥1400px).
     * Or number of columns that will fit next to each other.
     */
    xxl?: RowSpec | Cols;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type CollapseBreakpointProps = {
    /**
     * Whether the collapse should be initially open (uncontrolled mode)
     * This is ignored when `open` and `onToggle` are provided
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Controls the open/closed state of the collapse (controlled mode)
     * Should be used together with `onToggle`
     */
    open?: boolean;
    /**
     * Whether to visually hide the open/close text on the toggle button
     * Useful for icon-only toggles
     * @default false
     */
    hideCollapseText?: boolean;
    /**
     * Additional props to pass to the `Row` component used in the title area
     */
    titleRowProps?: RowProps;
    /**
     * Custom class name for the root element
     */
    className?: string;
    /**
     * Visual style of the toggle chevron, intended for icon-only toggles:
     * `secondary` wraps the chevron in a bordered secondary button, `default` renders a plain arrow.
     * @default default
     */
    arrowType?: 'default' | 'secondary';
    /**
     * Collapse text & icon size
     * @default default
     */
    size?: 'default' | 'small';
    /**
     * Display underline below the title
     * @default true
     */
    underline?: boolean;
    /**
     * Render collapse as icon-only toggle.
     * Icon-only styles are applied ONLY when no title is provided.
     * @default false
     */
    iconOnly?: boolean;
    /**
     * Inverted color palette — flips the link / icon colors to their
     * inverted-surface equivalents (white text + icon), for use on top of dark
     * backgrounds. Pairs with both the with-text and icon-only variants; the
     * secondary-arrow style has no inverted form in the design.
     * @default false
     */
    inverted?: boolean;
    /**
     * Make the whole header row (title included) toggle on click, not just the chevron button.
     * The chevron button stays the keyboard / screen-reader control; this only adds a mouse click
     * target across the row. Clicks on interactive elements inside the title (links, buttons) are
     * ignored, so they keep working.
     * @default false
     */
    fullRowToggle?: boolean;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    id: 'collapse-default',
    openText: 'Näita rohkem',
    closeText: 'Näita vähem',
    title: (
      <Heading element="h5" color="secondary">
        Juhtumi üldandmed
      </Heading>
    ),
    children: (
      <VerticalSpacing>
        <Text color="secondary">Laste osalus</Text>
        <Text>Peretüli lapse osaluseta</Text>
      </VerticalSpacing>
    ),
  },
};
```

### Icon Only

```tsx
export const IconOnly: Story = {
  args: {
    id: 'collapse-icon-only',
    iconOnly: true,
    toggleLabel: 'Näita detaile',
    children: <Text>Sisu ilma pealkirjata.</Text>,
  },
};
```

### Secondary Arrow

```tsx
export const SecondaryArrow: Story = {
  args: {
    id: 'collapse-secondary',
    iconOnly: true,
    arrowType: 'secondary',
    toggleLabel: 'Näita detaile',
    children: <Text>Sisu.</Text>,
  },
};
```

### Inverted

```tsx
export const Inverted: Story = {
  globals: { backgrounds: { value: 'brand' } },
  args: {
    id: 'collapse-inverted',
    inverted: true,
    openText: 'Näita rohkem',
    closeText: 'Näita vähem',
    children: (
      <Text color="white" element="span">
        Sisu tumedal taustal.
      </Text>
    ),
  },
};
```

### Without Underline

```tsx
export const WithoutUnderline: Story = {
  args: {
    ...Default.args,
    id: 'collapse-no-underline',
    underline: false,
  },
};

/** Clicking anywhere on the header row toggles (the chevron stays the keyboard / SR control). */
```

### Full Row Toggle

```tsx
export const FullRowToggle: Story = {
  args: {
    ...Default.args,
    id: 'collapse-full-row',
    fullRowToggle: true,
  },
};
```

Full story source: `src/tedi/components/content/collapse/collapse.stories.tsx`.

## Related

`Heading`, `Text`, `VerticalSpacing`
