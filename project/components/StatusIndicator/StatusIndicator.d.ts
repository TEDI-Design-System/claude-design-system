import * as React from 'react';

/**
 * StatusIndicator from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/tags/status-indicator/status-indicator.stories.tsx).
 */
export interface StatusIndicatorProps {
  /** The status type, which determines the indicator color. */
  type?: StatusIndicatorType;
  /** The size of the indicator. */
  size?: StatusIndicatorSize;
  /** Whether the indicator has a white border ring. */
  hasBorder?: boolean;
  /** Controls positioning of the indicator. - `'default'` — inline, no absolute positioning - `'top-right'` — absolutely positioned at the top-right corner of the parent */
  position?: StatusIndicatorPosition;
  /** Additional class name(s) */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StatusIndicatorType = 'success' | 'danger' | 'warning' | 'inactive';
type StatusIndicatorSize = 'sm' | 'lg';
type StatusIndicatorPosition = 'default' | 'top-right';
