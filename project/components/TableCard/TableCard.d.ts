import * as React from 'react';

/**
 * TableCard from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/table-card/table-card.stories.tsx).
 */
export interface TableCardProps {
  /** Label / value pairs (one per column) rendered as the card body - a single `<dl>`. */
  rows: TableCardRow[];
  /** Header title. Required for `collapsible`. */
  title?: React.ReactNode;
  /** Secondary line under the title. */
  subtitle?: React.ReactNode;
  /** Content rendered at the end of the header — a `StatusBadge`, a link, etc. */
  endSlot?: React.ReactNode;
  /** Heading tag for `title` (for the document outline). The title stays body-sized unless `titleModifiers` is set. */
  titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size / weight of the title (`Text` modifiers), independent of `titleElement`. */
  titleModifiers?: TextModifiers;
  /** Make the header a toggle that shows / hides the body. Provide a `title` (or, failing that, `ariaLabel`) so the toggle has an accessible name. */
  collapsible?: boolean;
  /** Initial open state (uncontrolled). Ignored when `open` is set. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  open?: boolean;
  /** Called with the next open state when the header toggles. */
  onOpenChange?: (open: boolean) => void;
  /** Style of the collapse indicator (only applies when `collapsible`), mirroring `CollapseButton`'s `arrowType`: - `default` — a plain chevron. - `secondary` — a circular, outlined arrow. */
  arrowType?: 'default' | 'secondary';
  /** Footer content (e.g. `Button`s), divided from the body. */
  actions?: React.ReactNode;
  /** Emphasised summary / total row after the body, on a muted background. */
  summary?: { label: React.ReactNode; value: React.ReactNode; };
  /** Show a leading checkbox to select the row. */
  selectable?: boolean;
  /** Controlled selected state. Pair with `onSelectedChange`. */
  selected?: boolean;
  /** Initial selected state in uncontrolled mode. Ignored when `selected` is provided. */
  defaultSelected?: boolean;
  /** Called with the next selected state when the checkbox toggles. */
  onSelectedChange?: (selected: boolean) => void;
  /** Label text size — `small` uses the 14px label style, `default` the 16px body style. */
  labelSize?: 'small' | 'default';
  /** Accessible name for the selection checkbox. Defaults to the `table-card.select-row` label. */
  selectionLabel?: string;
  /** Accessible name for the card region. */
  ariaLabel?: string;
  /** Root element id (also wires the collapsible ARIA). Auto-generated when omitted. */
  id?: string;
  /** Extra full-width body content after `rows` (e.g. child row-groups). Collapses with the body. */
  children?: React.ReactNode;
  /** Row layout: `horizontal` (label beside value) or `vertical` (label above value). */
  layout?: 'horizontal' | 'vertical';
  /** Number of equal-width columns. Best with `layout="vertical"`. */
  columns?: number;
  /** Label column width (horizontal layout); a `number` is pixels. */
  labelWidth?: string | number;
  /** Label text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
  labelAlign?: TableCardAlign;
  /** Value text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
  valueAlign?: TableCardAlign;
  /** Vertical alignment of each label against its value (horizontal layout only). `'center'` keeps the label centred when a value is taller, e.g. a `StatusBadge`. */
  rowAlign?: 'start' | 'center';
  /** Padding of the card body (the rows section). Accepts the same values as `Card.Content`: a number in rems, `{ vertical, horizontal }`, or `{ top, right, bottom, left }`. */
  padding?: CardContentPadding;
  /** Vertical gap between rows in the body. A `number` is rems (matching `padding`); pass a string for any other CSS length. Defaults to the layout gutter in `vertical` layout and the list's compact spacing otherwise. */
  rowGap?: string | number;
  /** Class name for the root element. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TableCardBreakpointProps>;
  md?: Partial<TableCardBreakpointProps>;
  lg?: Partial<TableCardBreakpointProps>;
  xl?: Partial<TableCardBreakpointProps>;
  xxl?: Partial<TableCardBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface TableCardRow {
    /** Row label (usually the column header). Strings are wrapped in a `<Label>`; nodes render as-is. */
    label: React.ReactNode;
    /** Row value — text, a `StatusBadge`, a link, etc. */
    value: React.ReactNode;
    /**
     * Show the value in bold.
     * @default false
     */
    bold?: boolean;
    /** In a multi-column body, span this row across N columns. Ignored when `columns` is 1. */
    colSpan?: number;
}
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type TableCardAlign = 'left' | 'right';
type CardContentPadding = CardContentPaddingNumber | {
    vertical: CardContentPaddingNumber;
    horizontal: CardContentPaddingNumber;
} | {
    top: CardContentPaddingNumber;
    right: CardContentPaddingNumber;
    bottom: CardContentPaddingNumber;
    left: CardContentPaddingNumber;
};
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TableCardBreakpointProps = {
    /**
     * Row layout: `horizontal` (label beside value) or `vertical` (label above value).
     * @default horizontal
     */
    layout?: 'horizontal' | 'vertical';
    /**
     * Number of equal-width columns. Best with `layout="vertical"`.
     * @default 1
     */
    columns?: number;
    /**
     * Label column width (horizontal layout); a `number` is pixels.
     * @default 8.25rem horizontal, auto vertical
     */
    labelWidth?: string | number;
    /** Label text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
    labelAlign?: TableCardAlign;
    /** Value text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
    valueAlign?: TableCardAlign;
    /**
     * Vertical alignment of each label against its value (horizontal layout only).
     * `'center'` keeps the label centred when a value is taller, e.g. a `StatusBadge`.
     * @default start
     */
    rowAlign?: 'start' | 'center';
    /**
     * Padding of the card body (the rows section). Accepts the same values as `Card.Content`:
     * a number in rems, `{ vertical, horizontal }`, or `{ top, right, bottom, left }`.
     * @default 1
     */
    padding?: CardContentPadding;
    /**
     * Vertical gap between rows in the body. A `number` is rems (matching `padding`); pass a
     * string for any other CSS length.
     * Defaults to the layout gutter in `vertical` layout and the list's compact spacing otherwise.
     */
    rowGap?: string | number;
    /** Class name for the root element. */
    className?: string;
};
