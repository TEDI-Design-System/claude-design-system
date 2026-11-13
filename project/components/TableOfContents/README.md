TableOfContents from @tedi-design-system/react. Use via `window.Tedi.TableOfContents` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `TableOfContents.Item`, `TableOfContents.Collapsible`.

Variants (see `preview.html`): Default, Item States, Transparent, With Slot, Numbered, With Icon, Headless, With Separator, Divided, Sticky In Layout, Collapsible, Collapsible Hide On Scroll.

## Props

```ts
import * as React from 'react';

/**
 * TableOfContents from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/navigation/table-of-contents/table-of-contents.stories.tsx).
 */
export interface TableOfContentsProps {
  /** `TableOfContents.Item` elements. An item's non-`Item` children are its link / label; nested `TableOfContents.Item` children become its sub-items. */
  children: ReactNode;
  /** Heading rendered above the list. Defaults to the localised "Table of contents" label; pass `null` to render it headless (no visible heading — the navigation keeps an accessible name via `aria-label`). */
  heading?: string | null;
  /** Configurable semantic heading level (`h1`–`h6`); the visual style stays H4 regardless. Set it to match the surrounding page's heading outline and avoid skipped heading levels (WCAG 1.3.1). Ignored when the list is headless. */
  headingLevel?: TableOfContentsHeadingLevel;
  /** Override the navigation landmark's accessible name. When empty, the `<nav>` falls back to the heading (via `aria-labelledby`), or the localised title when headless. Use it to disambiguate multiple tables of contents on the same page. */
  ariaLabel?: string;
  /** Id of the currently active item. The active item gets the left accent bar and active link colour. When `defaultOpen` is `false`, the branch leading to it is the only one kept expanded. */
  activeId?: string;
  /** Draws a divider between items so the list reads as a set of separated rows. The last item has no divider — the card border closes the list. */
  divided?: boolean;
  /** Whether every item's sub-items are expanded by default. Set `false` to make the list behave like an accordion: only the branch leading to `activeId` keeps its nested children visible. */
  defaultOpen?: boolean;
  /** Render the list as an ordered list with auto-generated hierarchical numbers (`1.`, `2.`, `2.1`, …) shown before each item. */
  numbered?: boolean;
  /** Additional class name on the root element. */
  className?: string;
  /** Visual variant: - `default` — rendered inside a bordered `Card`. - `transparent` — no card chrome (border / background); the list sits directly on the page, with a continuous grey left rail (the active item's segment turns blue). */
  variant?: 'default' | 'transparent';
  /** Stick the card to the viewport while scrolling. */
  sticky?: boolean;
  /** Keep the active item visible inside a scrollable table of contents. When the `activeId` changes, the active item's row is scrolled into view within the nearest scroll container (the sticky card, or a scrollable wrapper you provide) using "nearest" semantics — it only scrolls when the row is out of view, leaving ~8px of margin. Positions on the row itself, not its expanded children. Has no effect in non-scrollable layouts and respects `prefers-reduced-motion`. */
  scrollActiveIntoView?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TableOfContentsBreakpointProps>;
  md?: Partial<TableOfContentsBreakpointProps>;
  lg?: Partial<TableOfContentsBreakpointProps>;
  xl?: Partial<TableOfContentsBreakpointProps>;
  xxl?: Partial<TableOfContentsBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TableOfContentsHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TableOfContentsBreakpointProps = {
    /**
     * Visual variant:
     * - `default` — rendered inside a bordered `Card`.
     * - `transparent` — no card chrome (border / background); the list sits
     *   directly on the page, with a continuous grey left rail (the active item's
     *   segment turns blue).
     * @default default
     */
    variant?: 'default' | 'transparent';
    /**
     * Stick the card to the viewport while scrolling.
     * @default true
     */
    sticky?: boolean;
    /**
     * Keep the active item visible inside a scrollable table of contents. When the `activeId`
     * changes, the active item's row is scrolled into view within the nearest scroll container
     * (the sticky card, or a scrollable wrapper you provide) using "nearest" semantics — it only
     * scrolls when the row is out of view, leaving ~8px of margin. Positions on the row itself,
     * not its expanded children. Has no effect in non-scrollable layouts and respects
     * `prefers-reduced-motion`.
     * @default false
     */
    scrollActiveIntoView?: boolean;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    heading: 'Sisukord',
    activeId: 'section-3',
    variant: 'default',
    headingLevel: 'h3',
    sticky: false,
    numbered: false,
    divided: false,
    defaultOpen: true,
  },
  render: (args) => <TableOfContents {...args}>{sectionItems()}</TableOfContents>,
};
```

### Item States

```tsx
export const ItemStates: Story = {
  parameters: { fullWidth: true },
  render: () => {
    const rows = [
      { id: 'default', label: 'Default', linkProps: {} },
      // "Hover" forces the hover state via `isHovered`; "Selected" is the active item (via activeId).
      { id: 'hover', label: 'Hover', linkProps: { isHovered: true } },
      { id: 'selected', label: 'Selected', linkProps: {} },
    ];

    const stateItems = (options?: { icon?: boolean; separator?: boolean }, withFiller = false) => {
      const iconProps = options?.icon ? { iconLeft: 'mail', iconStandalone: true } : {};
      const items = rows.map((row) => (
        <TableOfContents.Item key={row.id} id={row.id} separator={options?.separator}>
          <Link href={`#${row.id}`} underline={false} {...iconProps} {...row.linkProps}>
            {row.label}
          </Link>
        </TableOfContents.Item>
      ));

      if (withFiller) {
        items.push(<TableOfContents.Item key="filler" id="filler" />);
      }

      return items;
    };

    const columns: {
      header: string;
      numbered?: boolean;
      divided?: boolean;
      options?: { icon?: boolean; separator?: boolean };
    }[] = [
      { header: 'Default' },
      { header: 'With number', numbered: true },
      { header: 'With icon', options: { icon: true } },
      { header: 'With separator', options: { separator: true } },
      { header: 'Divided', divided: true },
    ];

// …
```

### Transparent

```tsx
export const Transparent: Story = {
  render: () => (
    <TableOfContents heading="Sisukord" variant="transparent" sticky={false} activeId="section-3">
      {sectionItems()}
    </TableOfContents>
  ),
};

/**
 * Each `TableOfContents.Item` accepts a `slot` for trailing content shown at the
 * end of its row (right-aligned) — e.g. a result-count `Tag`. It stays out of the
 * link's accessible name.
 */
```

### With Slot

```tsx
export const WithSlot: Story = {
  render: () => (
    <TableOfContents heading="Sisukord" sticky={false} activeId="section-3">
      {sections.map((label, index) => (
        <TableOfContents.Item
          key={label}
          id={`section-${index + 1}`}
          slot={index === sections.length - 1 ? <Tag color="primary">43 tulemust</Tag> : undefined}
        >
          <Link href={`#section-${index + 1}`} underline={false}>
            {label}
          </Link>
          {index === 2 && [
            <TableOfContents.Item key="collection" id="section-3-1" slot={<Tag color="primary">12</Tag>}>
              <Link href="#section-3-1" underline={false}>
                Andmete kogumine
              </Link>
            </TableOfContents.Item>,
            <TableOfContents.Item key="analysis" id="section-3-2">
              <Link href="#section-3-2" underline={false}>
                Analüüs
              </Link>
            </TableOfContents.Item>,
          ]}
        </TableOfContents.Item>
      ))}
    </TableOfContents>
  ),
};
```

### Numbered

```tsx
export const Numbered: Story = {
  render: () => (
    <TableOfContents heading="Sisukord" sticky={false} numbered activeId="methods">
      <TableOfContents.Item id="intro">
        <Link href="#intro" underline={false}>
          Sissejuhatus
        </Link>
      </TableOfContents.Item>
      <TableOfContents.Item id="methods">
        <Link href="#methods" underline={false}>
          Meetodid
        </Link>
        <TableOfContents.Item id="methods-1">
          <Link href="#methods-1" underline={false}>
            Andmete kogumine
          </Link>
        </TableOfContents.Item>
        <TableOfContents.Item id="methods-2">
          <Link href="#methods-2" underline={false}>
            Analüüs
          </Link>
        </TableOfContents.Item>
      </TableOfContents.Item>
      <TableOfContents.Item id="results">
        <Link href="#results" underline={false}>
          Tulemused
        </Link>
      </TableOfContents.Item>
    </TableOfContents>
  ),
};
```

### With Icon

```tsx
export const WithIcon: Story = {
  render: () => (
    <TableOfContents heading="Sisukord" sticky={false} activeId="section-3">
      <TableOfContents.Item id="section-1">
        <Link href="#section-1" underline={false}>
          Sissejuhatus
        </Link>
      </TableOfContents.Item>
      <TableOfContents.Item id="section-2">
        <Link href="#section-2" underline={false}>
          Taust
        </Link>
      </TableOfContents.Item>
      <TableOfContents.Item id="section-3">
        <Link href="#section-3" underline={false}>
          Meetodid
        </Link>
        <TableOfContents.Item id="section-3-1">
          <Link href="#section-3-1" underline={false}>
            Andmete kogumine
          </Link>
        </TableOfContents.Item>
        <TableOfContents.Item id="section-3-2">
          <Link href="#section-3-2" underline={false}>
            Analüüs
          </Link>
        </TableOfContents.Item>
      </TableOfContents.Item>
      <TableOfContents.Item id="section-6">
        <Link href="#section-6" underline={false} iconLeft="description" iconStandalone>
          Kokkuvõte
        </Link>
      </TableOfContents.Item>
    </TableOfContents>
  ),
};
```

Full story source: `src/tedi/components/navigation/table-of-contents/table-of-contents.stories.tsx`.

## Related

`Heading`, `Text`, `Col`, `Row`, `HideAt`, `ShowAt`, `VerticalSpacing`, `Tag`, `Link`
