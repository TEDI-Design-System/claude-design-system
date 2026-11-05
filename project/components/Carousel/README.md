Carousel from @tedi-design-system/react. Use via `window.Tedi.Carousel` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Carousel.Header`, `Carousel.Content`, `Carousel.Footer`, `Carousel.Navigation`, `Carousel.Indicators`.

Variants (see `preview.html`): Default, Top Pagination Arrows Only, Separated Bottom Pagination Has Dots, Separated Bottom Pagination Has Numbers, Centered Bottom Pagination Has Dots, Centered Bottom Pagination Has Numbers, Combinations Top Navigation Bottom Dots, Centered Has Dots, Centered Has Numbers, Faded, Faded Both Sides, Peeking, Peeking Both Sides, Bounded Overlay Navigation, Examples.

## Props

```ts
import * as React from 'react';

/**
 * Carousel from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/carousel/carousel.stories.tsx).
 */
export interface CarouselProps {
  /** Carousel composition — `Carousel.Header`, `Carousel.Content` and `Carousel.Footer`. */
  children?: React.ReactNode;
  /** Additional class name applied to the carousel root. */
  className?: string;
  /** Accessible name for the carousel region. Set a distinct label per carousel when a page has several. Defaults to the localized `carousel` label. */
  ariaLabel?: string;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => (
    <Carousel>
      <Carousel.Header>
        <div>
          <Text element="h2" modifiers="h1">
            Pealkiri
          </Text>
        </div>
        <Carousel.Navigation />
      </Carousel.Header>
      <Carousel.Content slidesPerView={RESPONSIVE_SLIDES}>{slides(5)}</Carousel.Content>
      <Carousel.Footer style={{ justifyContent: 'center' }}>
        <Carousel.Indicators />
      </Carousel.Footer>
    </Carousel>
  ),
};
```

### Top Pagination Arrows Only

```tsx
export const TopPaginationArrowsOnly: Story = {
  name: 'Top pagination - arrows only',
  render: () => (
    <Carousel>
      <Carousel.Header>
        <Text element="h2" modifiers="h1">
          Pealkiri
        </Text>
        <Carousel.Navigation />
      </Carousel.Header>
      <Carousel.Content slidesPerView={RESPONSIVE_SLIDES}>{slides(5)}</Carousel.Content>
    </Carousel>
  ),
};
```

### Separated Bottom Pagination Has Dots

```tsx
export const SeparatedBottomPaginationHasDots: Story = {
  name: 'Separated bottom pagination - has dots',
  render: () => (
    <Carousel>
      <Carousel.Header>
        <Text element="h2" modifiers="h1">
          Pealkiri
        </Text>
      </Carousel.Header>
      <Carousel.Content slidesPerView={RESPONSIVE_SLIDES}>{slides(5)}</Carousel.Content>
      <Carousel.Footer>
        <HideAt md>
          <Carousel.Indicators variant="numbers" />
        </HideAt>
        <ShowAt md>
          <Carousel.Indicators />
        </ShowAt>
        <Carousel.Navigation />
      </Carousel.Footer>
    </Carousel>
  ),
};
```

### Separated Bottom Pagination Has Numbers

```tsx
export const SeparatedBottomPaginationHasNumbers: Story = {
  name: 'Separated bottom pagination - has numbers',
  render: () => (
    <Carousel>
      <Carousel.Header>
        <Text element="h2" modifiers="h1">
          Pealkiri
        </Text>
      </Carousel.Header>
      <Carousel.Content slidesPerView={RESPONSIVE_SLIDES}>{slides(10)}</Carousel.Content>
      <Carousel.Footer>
        <Carousel.Indicators variant="numbers" />
        <Carousel.Navigation />
      </Carousel.Footer>
    </Carousel>
  ),
};
```

### Centered Bottom Pagination Has Dots

```tsx
export const CenteredBottomPaginationHasDots: Story = {
  name: 'Centered bottom pagination - has dots',
  render: () => (
    <Carousel>
      <Carousel.Header>
        <Text element="h2" modifiers="h1">
          Pealkiri
        </Text>
      </Carousel.Header>
      <Carousel.Content slidesPerView={RESPONSIVE_SLIDES}>{slides(6)}</Carousel.Content>
      <Carousel.Footer style={{ justifyContent: 'center' }}>
        <HideAt md>
          <Carousel.Indicators variant="numbers" withArrows />
        </HideAt>
        <ShowAt md>
          <Carousel.Indicators withArrows />
        </ShowAt>
      </Carousel.Footer>
    </Carousel>
  ),
};
```

### Centered Bottom Pagination Has Numbers

```tsx
export const CenteredBottomPaginationHasNumbers: Story = {
  name: 'Centered bottom pagination - has numbers',
  render: () => (
    <Carousel>
      <Carousel.Header>
        <Text element="h2" modifiers="h1">
          Pealkiri
        </Text>
      </Carousel.Header>
      <Carousel.Content slidesPerView={RESPONSIVE_SLIDES}>{slides(6)}</Carousel.Content>
      <Carousel.Footer style={{ justifyContent: 'center' }}>
        <Carousel.Indicators variant="numbers" withArrows />
      </Carousel.Footer>
    </Carousel>
  ),
};
```

Full story source: `src/tedi/components/content/carousel/carousel.stories.tsx`.

## Related

`Icon`, `Text`, `FloatingButton`, `Card`, `HideAt`, `ShowAt`, `VerticalSpacing`, `StretchContent`, `Link`, `StatusBadge`
