import * as React from 'react';

/**
 * Affix from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/affix/affix.stories.tsx).
 */
export interface AffixProps {
  /** Affix children */
  children?: ReactNode;
  /** Additional class. */
  className?: string;
  /** Position of Affix. */
  position?: 'sticky' | 'fixed';
  /** Spacing from the top of the Container. */
  top?: AffixPosition;
  /** Spacing from the bottom of the Container. */
  bottom?: AffixPosition;
  /** Spacing from the left of the Container. */
  left?: AffixPosition;
  /** Spacing from the right of the Container. */
  right?: AffixPosition;
  /** Determine what element(s) the top/bottom values should be relative to */
  relative?: Array<'header'> | 'window';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type AffixPosition = 0 | 0.5 | 1 | 1.5 | 2 | 'unset';
