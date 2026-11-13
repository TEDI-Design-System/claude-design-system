import * as React from 'react';

/**
 * Row from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/layout/grid/row.stories.tsx).
 */
export interface RowProps {
  /** Row children. Row direct children should always be Col components */
  children?: React.ReactElement<ColProps> | React.ReactElement<ColProps>[] | React.ReactNode;
  /** Additional class. */
  className?: string;
  /** Base element. */
  element?: RowElement;
  /** RowSpec object to change Row behavior on xs devices (<576px). Or number of columns that will fit next to each other. */
  xs?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on sm devices (≥576px). Or number of columns that will fit next to each other. */
  sm?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on md devices (≥768px). Or number of columns that will fit next to each other. */
  md?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on lg devices (≥992px). Or number of columns that will fit next to each other. */
  lg?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on xl devices (≥1200px). Or number of columns that will fit next to each other. */
  xl?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on xxl devices (≥1400px). Or number of columns that will fit next to each other. */
  xxl?: RowSpec | Cols;
  /** The number of columns that will fit next to each other. Use `auto` to give columns their natural widths. */
  cols?: Cols;
  /** Use justify-content utilities to change the alignment of items on the main axis. https://getbootstrap.com/docs/5.1/utilities/flex/#justify-content */
  justifyContent?: JustifyContent;
  /** Use align-items utilities to change the alignment of items on the cross axis. https://getbootstrap.com/docs/5.1/utilities/flex/#align-items */
  alignItems?: AlignItems;
  /** Add gap between items. https://getbootstrap.com/docs/5.1/utilities/spacing/#gap */
  gap?: Spacer;
  /** Change gutter between items. https://getbootstrap.com/docs/5.0/layout/gutters/ */
  gutter?: Gutter;
  gutterX?: Gutter;
  gutterY?: Gutter;
  /** Set the direction of flex items in a flex container with direction utilities. https://getbootstrap.com/docs/5.1/utilities/flex/#direction */
  direction?: Direction;
  /** Change how flex items wrap in a flex container. https://getbootstrap.com/docs/5.1/utilities/flex/#wrap */
  wrap?: Wrap;
}
// Also accepts 261 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
interface ColProps extends ColSpec, React.HTMLAttributes<HTMLElement> {
    /**
     * Col children.
     */
    children?: React.ReactNode;
    /**
     * Base element.
     * @default div
     */
    element?: ColElement;
    /**
     * Additional class.
     */
    className?: string;
    /**
     * ColSpec object to change Row behavior on xs devices (<576px).
     * Or number of column width.
     */
    xs?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on sm devices (≥576px).
     * Or number of column width.
     */
    sm?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on md devices (≥768px).
     * Or number of column width.
     */
    md?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on lg devices (≥992px).
     * Or number of column width.
     */
    lg?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on xl devices (≥1200px).
     * Or number of column width.
     */
    xl?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on xxl devices (≥1400px).
     * Or number of column width.
     */
    xxl?: ColSpec | ColSize;
    /**
     * Onclick function handler
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLLinkElement>) => void;
}
type RowElement = 'div' | 'ul' | 'ol' | 'span' | 'dl';
interface RowSpec {
    /**
     * The number of columns that will fit next to each other.
     * Use `auto` to give columns their natural widths.
     */
    cols?: Cols;
    /**
     * Use justify-content utilities to change the alignment of items on the main axis.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#justify-content
     */
    justifyContent?: JustifyContent;
    /**
     * Use align-items utilities to change the alignment of items on the cross axis.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#align-items
     */
    alignItems?: AlignItems;
    /**
     * Add gap between items.
     * https://getbootstrap.com/docs/5.1/utilities/spacing/#gap
     */
    gap?: Spacer;
    /**
     * Change gutter between items.
     * https://getbootstrap.com/docs/5.0/layout/gutters/
     */
    gutter?: Gutter;
    gutterX?: Gutter;
    gutterY?: Gutter;
    /**
     * Set the direction of flex items in a flex container with direction utilities.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#direction
     */
    direction?: Direction;
    /**
     * Change how flex items wrap in a flex container.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#wrap
     */
    wrap?: Wrap;
}
type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type Spacer = 0 | 1 | 2 | 3 | 4 | 5;
type Gutter = 0 | 1 | 2 | 3 | 4 | 5;
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';
