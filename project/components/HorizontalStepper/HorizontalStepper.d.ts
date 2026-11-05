import * as React from 'react';

/**
 * HorizontalStepper from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.stories.tsx).
 */
export interface HorizontalStepperProps {
  /** `HorizontalStepper.Item` elements, one per step. */
  children: ReactNode;
  /** Accessible name for the navigation landmark. */
  "aria-label"?: string;
  /** Background style of the stepper track. */
  background?: HorizontalStepperBackground;
  /** Collapse labels so only the indicators plus the selected step's label are visible. `true` collapses at every width; a breakpoint (`'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`) collapses only below that breakpoint. */
  compact?: HorizontalStepperCompact;
  /** Additional class name on the root element. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type HorizontalStepperBackground = 'default' | 'transparent';
type HorizontalStepperCompact = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
