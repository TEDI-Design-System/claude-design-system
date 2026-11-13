import * as React from 'react';

/**
 * VerticalStepper from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/navigation/vertical-stepper/vertical-stepper.stories.tsx).
 */
export interface VerticalStepperProps {
  /** `VerticalStepper.Item` elements (and optional `Separator`s between them). Items are auto-numbered in source order. */
  children: React.ReactNode;
  /** Compact density — smaller indicators and tighter rows. Completed / error steps show their state icon inside the indicator instead of the number. */
  compact?: boolean;
  /** Accessible name for the `<nav>` landmark. */
  "aria-label"?: string;
  /** Additional class name applied to the `<ol>`. */
  className?: string;
}
