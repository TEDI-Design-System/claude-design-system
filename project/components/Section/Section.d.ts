import * as React from 'react';

/**
 * Section from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/section/section.stories.tsx).
 */
export interface SectionProps {
  /** Section content */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Defines the HTML element to render (e.g., section, article, aside, etc.) */
  as?: 'section' | 'article' | 'aside' | 'div';
  /** ARIA role for accessibility */
  role?: string;
  /** Unique identifier for the section */
  id?: string;
}
