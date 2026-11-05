import * as React from 'react';

/**
 * Pagination from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/pagination/pagination.stories.tsx).
 */
export interface PaginationProps {
  /** Total number of pages. */
  pageCount: number;
  /** Controlled current page (1-based). Pair with `onPageChange`. */
  page?: number;
  /** Initial page for uncontrolled mode (1-based). */
  defaultPage?: number;
  /** Fires whenever the user navigates to a different page. */
  onPageChange?: (page: number) => void;
  /** Total number of items across all pages. Renders a "{count} results" label to the left of the nav when set. */
  totalItems?: number;
  /** Current page size. Shown in the page-size select when `pageSizeOptions` is provided. */
  pageSize?: number;
  /** Options for the page-size select. Omit to hide the select. Accepts plain numbers, or `{ value, label }` objects when the visible text should differ from the value — e.g. a "Show all" entry `{ value: totalItems, label: 'Show all' }`. Selecting an option emits its `value` via `onPageSizeChange`; the pager collapses once the consumer recomputes `pageCount` to 1. */
  pageSizeOptions?: (number | PaginationPageSizeOption)[];
  /** Fires when the user picks a different page size. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Override any of the default text labels / aria labels. */
  labels?: Partial<PaginationLabels>;
  /** Hide the "X results" label even when `totalItems` is set. Pass a breakpoint name (e.g. `"md"`) to hide only below that breakpoint. */
  hideResults?: PaginationVisibility;
  /** Hide the page-size dropdown even when `pageSizeOptions` is non-empty. Pass a breakpoint name to hide only below that breakpoint. */
  hidePageSize?: PaginationVisibility;
  /** Hide the pager (prev/next + page list). Pass a breakpoint name to hide only below that breakpoint. */
  hidePager?: PaginationVisibility;
  /** Additional class name on the root element. */
  className?: string;
  /** Number of pages always shown at the start and end of the range before ellipsis kicks in. */
  boundaryCount?: number;
  /** Number of sibling pages shown on either side of the current page. */
  siblingCount?: number;
  /** Background variant. `transparent` removes the surface fill — use it when pagination sits on a non-white container. Border behaviour is controlled separately via `borders`. */
  background?: PaginationBackground;
  /** Where the separator border is drawn around the pagination strip: - `'top'` (default) — separator above only (typical "table then pager" layout). - `'both'` — separator above and below (split layout where the pager is sandwiched between content rows, e.g. a fixed header table + a footer beneath the pager). - `'none'` — borderless, for embedded contexts where the outer container already provides framing. Ignored when `background='transparent'` — that variant is always borderless. */
  borders?: PaginationBorders;
  /** Keep the Previous / Next buttons visible even when they would be disabled (Previous on the first page, Next on the last). Default `false` drops the disabled edge button entirely — compact layout. Set `true` to keep both buttons rendered (disabled) at the edges so the pager width stays stable. */
  showPrevNextButtons?: boolean;
  /** Show the textual `previous` / `next` labels alongside the arrow icons on the edge nav buttons. The labels are sourced from `labels.previous` / `labels.next` (or the corresponding i18n keys). Default keeps the icon-only Figma variant. When set, the arrows render as small text links (label + icon, link colour, underline on hover) rather than circular icon buttons — `arrowVariant` is ignored in this mode. */
  showEdgeNavLabels?: boolean;
  /** Material icon name for the Previous arrow. Override to swap the default chevron (e.g. `'first_page'`, `'chevron_left'`). */
  previousIcon?: string;
  /** Material icon name for the Next arrow. */
  nextIcon?: string;
  /** Visual treatment of the prev/next arrow buttons: - `'default'` — brand-coloured icon on a transparent circle (light tint on hover); pair with `showEdgeNavLabels` for the small-link style. - `'primary'` — a primary small `Button` with the label text and a leading (previous) / trailing (next) arrow icon, for prominent navigation. The text label is always shown, so `showEdgeNavLabels` has no effect here. */
  arrowVariant?: 'default' | 'primary';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<PaginationBreakpointProps>;
  md?: Partial<PaginationBreakpointProps>;
  lg?: Partial<PaginationBreakpointProps>;
  xl?: Partial<PaginationBreakpointProps>;
  xxl?: Partial<PaginationBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface PaginationPageSizeOption {
    value: number;
    label: string;
}
interface PaginationLabels {
    /**
     * Accessible label for the nav wrapper.
     * @default 'Pagination'
     */
    ariaLabel: string;
    /**
     * Previous button label (icon-only, used as aria-label).
     * @default 'Previous page'
     */
    previous: string;
    /**
     * Next button label (icon-only, used as aria-label).
     * @default 'Next page'
     */
    next: string;
    /**
     * Function that builds the aria-label for a numeric page button.
     * @default (page) => `Go to page ${page}`
     */
    pageAriaLabel: (page: number) => string;
    /**
     * Function that builds the aria-label for the currently active page.
     * @default (page) => `Current page, page ${page}`
     */
    currentPageAriaLabel: (page: number) => string;
    /**
     * Rendered to the left of the pagination nav when `totalItems` is set.
     * Returns any React node, so consumers can mix copy with formatting markup
     * (e.g. a bold count or a status badge) — not just a plain string.
     * @default (count) => `${count} results`
     */
    results: (count: number) => ReactNode;
    /**
     * Prefix label for the page-size select.
     * @default 'Show per page'
     */
    pageSize: string;
    /**
     * Announcement for the polite aria-live region when the page changes.
     * Lets screen reader users know they moved without stealing focus.
     * @default (page, total) => `Page ${page} of ${total}`
     */
    pageStatus: (page: number, pageCount: number) => string;
}
type PaginationVisibility = boolean | Exclude<Breakpoint, 'xs'>;
type PaginationBackground = 'white' | 'transparent';
type PaginationBorders = 'top' | 'bottom' | 'both' | 'none';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type PaginationBreakpointProps = {
    /**
     * Number of pages always shown at the start and end of the range before
     * ellipsis kicks in.
     * @default 1
     */
    boundaryCount?: number;
    /**
     * Number of sibling pages shown on either side of the current page.
     * @default 1
     */
    siblingCount?: number;
    /**
     * Background variant. `transparent` removes the surface fill — use it when
     * pagination sits on a non-white container. Border behaviour is controlled
     * separately via `borders`.
     * @default white
     */
    background?: PaginationBackground;
    /**
     * Where the separator border is drawn around the pagination strip:
     * - `'top'` (default) — separator above only (typical "table then pager"
     *   layout).
     * - `'both'` — separator above and below (split layout where the pager is
     *   sandwiched between content rows, e.g. a fixed header table + a footer
     *   beneath the pager).
     * - `'none'` — borderless, for embedded contexts where the outer container
     *   already provides framing.
     *
     * Ignored when `background='transparent'` — that variant is always borderless.
     * @default top
     */
    borders?: PaginationBorders;
    /**
     * Keep the Previous / Next buttons visible even when they would be disabled
     * (Previous on the first page, Next on the last). Default `false` drops the
     * disabled edge button entirely — compact layout. Set `true` to keep both
     * buttons rendered (disabled) at the edges so the pager width stays stable.
     * @default false
     */
    showPrevNextButtons?: boolean;
    /**
     * Show the textual `previous` / `next` labels alongside the arrow icons on
     * the edge nav buttons. The labels are sourced from `labels.previous` /
     * `labels.next` (or the corresponding i18n keys). Default keeps the
     * icon-only Figma variant.
     *
     * When set, the arrows render as small text links (label + icon, link
     * colour, underline on hover) rather than circular icon buttons —
     * `arrowVariant` is ignored in this mode.
     * @default false
     */
    showEdgeNavLabels?: boolean;
    /**
     * Material icon name for the Previous arrow. Override to swap the default
     * chevron (e.g. `'first_page'`, `'chevron_left'`).
     * @default 'arrow_back'
     */
    previousIcon?: string;
    /**
     * Material icon name for the Next arrow.
     * @default 'arrow_forward'
     */
    nextIcon?: string;
    /**
     * Visual treatment of the prev/next arrow buttons:
     * - `'default'` — brand-coloured icon on a transparent circle (light tint on
     *   hover); pair with `showEdgeNavLabels` for the small-link style.
     * - `'primary'` — a primary small `Button` with the label text and a leading
     *   (previous) / trailing (next) arrow icon, for prominent navigation. The
     *   text label is always shown, so `showEdgeNavLabels` has no effect here.
     * @default default
     */
    arrowVariant?: 'default' | 'primary';
};
