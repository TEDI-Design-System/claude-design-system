import * as React from 'react';

/**
 * Timeline from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/timeline/timeline.stories.tsx).
 */
export interface TimelineProps {
  /** `Timeline.Item` elements. */
  children: ReactNode;
  /** Index of the active (current) item. Items before it render as completed (past), items after it as upcoming (future). When omitted, all items are future. */
  activeIndex?: number;
  /** Visual variant. `card` wraps the timeline in card borders and padding. */
  variant?: TimelineVariant;
  /** Vertical padding of each item in the `card` variant, in rem (same scale as `Card`). Both the gaps between items and the card's top/bottom edges resolve to twice this value. Horizontal item padding is fixed at the card default. */
  cardPadding?: number;
  /** Additional class name. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TimelineVariant = 'default' | 'card';
