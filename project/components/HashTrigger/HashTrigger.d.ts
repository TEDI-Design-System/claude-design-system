import * as React from 'react';

/**
 * HashTrigger from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/hash-trigger/hash-trigger.stories.tsx).
 */
export interface HashTriggerProps {
  /** HashTrigger content. */
  children: ReactNode;
  /** Id, which is passed to first child element/component.<br /> Child component has to inject id to DOM itself.<br /> It's used to detect element on page where to scroll. */
  id: string;
  /** Callback called when hash matches. */
  onMatch?: (id: string) => void;
  /** Scroll to element on match. */
  scrollOnMatch?: boolean;
}
