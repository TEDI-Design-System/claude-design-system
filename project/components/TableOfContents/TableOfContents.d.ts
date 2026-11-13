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
