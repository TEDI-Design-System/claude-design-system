import * as React from 'react';

/**
 * FeedbackText from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/feedback-text/feedback-text.stories.tsx).
 */
export interface FeedbackTextProps {
  /** Helper text */
  text: React.ReactNode | React.ReactNode[];
  /** ID to reference the helper from aria-describedby attributes. If omitted, then the id might be set through a parent component. */
  id?: string;
  /** Additional custom class. */
  className?: string;
  /** Type of form-helper. */
  type?: FeedbackTextType;
  /** Position of the helper. */
  position?: FeedbackTextPosition;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type FeedbackTextType = 'hint' | 'valid' | 'error';
type FeedbackTextPosition = 'left' | 'right';
