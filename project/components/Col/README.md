Col from @tedi-design-system/react. Use via `window.Tedi.Col` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default.

## Props

```ts
import * as React from 'react';

/**
 * Col from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/layout/grid/col.stories.tsx).
 */
export interface ColProps {
  /** Col children. */
  children?: React.ReactNode;
  /** Base element. */
  element?: ColElement;
  /** Additional class. */
  className?: string;
  /** ColSpec object to change Row behavior on xs devices (<576px). Or number of column width. */
  xs?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on sm devices (≥576px). Or number of column width. */
  sm?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on md devices (≥768px). Or number of column width. */
  md?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on lg devices (≥992px). Or number of column width. */
  lg?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on xl devices (≥1200px). Or number of column width. */
  xl?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on xxl devices (≥1400px). Or number of column width. */
  xxl?: ColSpec | ColSize;
  /** Onclick function handler */
  onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLLinkElement>) => void;
  /** Number of column width. Use `auto` to give columns their natural widths. */
  width?: ColSize;
  /** Move columns to the right 1-11 columns. https://getbootstrap.com/docs/5.1/layout/columns/#offsetting-columns */
  offset?: NumberAttr;
  /** Use for controlling the visual order of your Cols. https://getbootstrap.com/docs/5.1/layout/columns/#order-classes */
  order?: ColOrder;
  /** Use to vertically align columns individually. https://getbootstrap.com/docs/5.1/layout/columns/#alignment */
  align?: ColAlign;
  /** Use to toggle a flex item’s ability to grow to fill available space. https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink */
  grow?: 0 | 1;
  /** Use to toggle a flex item’s ability to shrink if necessary. https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink */
  shrink?: 0 | 1;
}
// Also accepts 260 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type ColElement = 'dt' | 'dd';
interface ColSpec {
    /**
     * Number of column width.
     * Use `auto` to give columns their natural widths.
     */
    width?: ColSize;
    /**
     * Move columns to the right 1-11 columns.
     * https://getbootstrap.com/docs/5.1/layout/columns/#offsetting-columns
     */
    offset?: NumberAttr;
    /**
     * Use for controlling the visual order of your Cols.
     * https://getbootstrap.com/docs/5.1/layout/columns/#order-classes
     */
    order?: ColOrder;
    /**
     * Use to vertically align columns individually.
     * https://getbootstrap.com/docs/5.1/layout/columns/#alignment
     */
    align?: ColAlign;
    /**
     * Use to toggle a flex item’s ability to grow to fill available space.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink
     */
    grow?: 0 | 1;
    /**
     * Use to toggle a flex item’s ability to shrink if necessary.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink
     */
    shrink?: 0 | 1;
}
type ColSize = 'auto' | NumberAttr;
type NumberAttr = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColOrder = ColOrderNumber | 'first' | 'last';
type ColAlign = 'start' | 'center' | 'end';
```

## Examples

### Default

```tsx
export const Default: StoryFn = () => (
  <VerticalSpacing size={2}>
    <VerticalSpacing size={0.5}>
      <Heading element="h4">Label/Value pairs</Heading>
      <Row>
        <Col>
          <dl>
            <Row>
              <Col element="dt" width={2}>
                <strong>Label</strong>
              </Col>
              <Col element="dd">Value</Col>
            </Row>
            <Row>
              <Col element="dt" width={2}>
                <strong>Label</strong>
              </Col>
              <Col element="dd">Value</Col>
            </Row>
          </dl>
        </Col>
      </Row>
    </VerticalSpacing>

    <VerticalSpacing size={0.5}>
      <Heading element="h4">Lists</Heading>
      <Row element="ul" direction="column">
        <Col>Item 1</Col>
        <Col>Item 2</Col>
      </Row>
    </VerticalSpacing>
  </VerticalSpacing>
);
```

Full story source: `src/tedi/components/layout/grid/col.stories.tsx`.

## Related

`Heading`, `VerticalSpacing`, `Row`
