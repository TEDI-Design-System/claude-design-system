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
