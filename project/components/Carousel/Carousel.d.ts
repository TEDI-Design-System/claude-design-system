import * as React from 'react';

/**
 * Carousel from @tedi-design-system/react@21.0.0-rc.35 (stories: ./src/tedi/components/content/carousel/carousel.stories.tsx).
 */
export interface CarouselProps {
  /** Carousel composition — `Carousel.Header`, `Carousel.Content` and `Carousel.Footer`. */
  children?: React.ReactNode;
  /** Additional class name applied to the carousel root. */
  className?: string;
  /** Accessible name for the carousel. Without it or `ariaLabelledBy`, the name defaults to the `carousel.label` label. */
  ariaLabel?: string;
  /** Id of the element that names the carousel, typically its heading. */
  ariaLabelledBy?: string;
}
