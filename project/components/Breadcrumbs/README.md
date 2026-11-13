Breadcrumbs from @tedi-design-system/react. Use via `window.Tedi.Breadcrumbs` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Long, Short, Custom Aria Label, Condensed, Responsive Variant, Custom Separator.

## Props

```ts
import * as React from 'react';

/**
 * Breadcrumbs from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/navigation/breadcrumbs/breadcrumbs.stories.tsx).
 */
export interface BreadcrumbsProps {
  /** Crumbs in order from the root page to the current page. Each child becomes one crumb; chevron separators are inserted between them. Use a `Link` (or any anchor) for navigable crumbs and a plain element (e.g. `<span>`) for the current page — add `aria-current="page"` to it yourself. */
  children: React.ReactNode;
  /** Accessible label for the wrapping `<nav>` landmark. Falls back to the `breadcrumbs` entry from `LabelProvider`. */
  ariaLabel?: string;
  /** Accessible label for the ellipsis button that opens the collapsed-crumbs dropdown. Only used when `maxItems` causes a collapse. Falls back to the `breadcrumbs.show-more` entry from `LabelProvider`. */
  showMoreLabel?: string;
  /** Node rendered between crumbs. Pass a string (e.g. `'/'`, `'›'`) for text separators or any React node for custom markup. Hidden from assistive technology — screen readers announce only the crumbs themselves. */
  separator?: ReactNode;
  /** Additional class name applied to the `<nav>` element. */
  className?: string;
  /** - `'long'` — full trail of crumbs separated by chevrons. - `'short'` — only the second-to-last child rendered as a back-link with a left-pointing arrow. Useful on narrow viewports. Renders nothing when fewer than two crumbs are supplied. */
  variant?: 'long' | 'short';
  /** Maximum number of crumbs to render before collapsing the middle into an ellipsis button. Clicking the button opens a dropdown listing the hidden crumbs. Only applies in the `'long'` variant. When omitted, all crumbs are rendered. */
  maxItems?: number;
  /** Number of crumbs to keep visible at the start of the trail when collapsed. */
  itemsBeforeCollapse?: number;
  /** Number of crumbs to keep visible at the end of the trail when collapsed. The current page (last crumb) should normally stay visible — keep this ≥ 1. */
  itemsAfterCollapse?: number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<BreadcrumbsBreakpointProps>;
  md?: Partial<BreadcrumbsBreakpointProps>;
  lg?: Partial<BreadcrumbsBreakpointProps>;
  xl?: Partial<BreadcrumbsBreakpointProps>;
  xxl?: Partial<BreadcrumbsBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type BreadcrumbsBreakpointProps = {
    /**
     * - `'long'` — full trail of crumbs separated by chevrons.
     * - `'short'` — only the second-to-last child rendered as a back-link with
     *   a left-pointing arrow. Useful on narrow viewports. Renders nothing when
     *   fewer than two crumbs are supplied.
     * @default long
     */
    variant?: 'long' | 'short';
    /**
     * Maximum number of crumbs to render before collapsing the middle into an
     * ellipsis button. Clicking the button opens a dropdown listing the hidden
     * crumbs. Only applies in the `'long'` variant. When omitted, all crumbs are
     * rendered.
     */
    maxItems?: number;
    /**
     * Number of crumbs to keep visible at the start of the trail when collapsed.
     * @default 1
     */
    itemsBeforeCollapse?: number;
    /**
     * Number of crumbs to keep visible at the end of the trail when collapsed.
     * The current page (last crumb) should normally stay visible — keep this ≥ 1.
     * @default 1
     */
    itemsAfterCollapse?: number;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    children: (
      <>
        <Link href="#">Dashboard</Link>
        <Link href="#">Applications</Link>
        <span aria-current="page">Application nr 506</span>
      </>
    ),
  },
};
```

### Long

```tsx
export const Long: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <Breadcrumbs ariaLabel="Applications trail">
        <Link href="#">Dashboard</Link>
        <Link href="#">Applications</Link>
        <span aria-current="page">Application nr 506</span>
      </Breadcrumbs>
      <Breadcrumbs ariaLabel="Documents trail">
        <Link href="#">Dashboard</Link>
        <Link href="#">Documents</Link>
        <Link href="#">My documents</Link>
        <Link href="#">Application nr 506</Link>
        <span aria-current="page">Restrictions</span>
      </Breadcrumbs>
      <Breadcrumbs ariaLabel="Medications trail">
        <Link href="#">Medications</Link>
        <span aria-current="page">Ibuprofen</span>
      </Breadcrumbs>
    </VerticalSpacing>
  ),
};
```

### Short

```tsx
export const Short: Story = {
  render: Template,
  args: {
    variant: 'short',
    children: (
      <>
        <Link href="#">Dashboard</Link>
        <span aria-current="page">Current page</span>
      </>
    ),
  },
};
```

### Custom Aria Label

```tsx
export const CustomAriaLabel: Story = {
  render: Template,
  args: {
    ariaLabel: 'Site path',
    children: (
      <>
        <Link href="#">Dashboard</Link>
        <Link href="#">Documents</Link>
        <span aria-current="page">Restrictions</span>
      </>
    ),
  },
};

/**
 * When the trail is long, set `maxItems` to collapse the middle into an
 * ellipsis button. Clicking it opens a dropdown listing the hidden crumbs.
 * `itemsBeforeCollapse` / `itemsAfterCollapse` control how many crumbs stay
 * visible on each side.
 */
```

### Condensed

```tsx
export const Condensed: Story = {
  render: Template,
  args: {
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2,
    children: (
      <>
        <Link href="#">Dashboard</Link>
        <Link href="#">Patients</Link>
        <Link href="#">Anna Tamm</Link>
        <Link href="#">Visits</Link>
        <Link href="#">2024-05-12</Link>
        <span aria-current="page">Restrictions</span>
      </>
    ),
  },
};

/**
 * `variant` is breakpoint-aware. Common mobile pattern: short back-link below
 * `md`, full trail from `md` up — resize the viewport to see it switch.
 */
```

### Responsive Variant

```tsx
export const ResponsiveVariant: Story = {
  render: Template,
  args: {
    variant: 'short',
    md: { variant: 'long' },
    children: (
      <>
        <Link href="#">Dashboard</Link>
        <Link href="#">Documents</Link>
        <Link href="#">My documents</Link>
        <Link href="#">Application nr 506</Link>
        <span aria-current="page">Restrictions</span>
      </>
    ),
  },
};

/**
 * Pass any node as `separator` to replace the chevron — a string, a different
 * icon, or arbitrary markup. The separator is hidden from assistive technology.
 */
```

Full story source: `src/tedi/components/navigation/breadcrumbs/breadcrumbs.stories.tsx`.

## Related

`Icon`, `VerticalSpacing`, `Link`
