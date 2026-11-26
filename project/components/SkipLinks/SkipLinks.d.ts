import * as React from 'react';

/**
 * SkipLinks from @tedi-design-system/react@21.0.0-rc.35 (stories: ./src/tedi/components/layout/skip-links/skip-links.stories.tsx).
 */
export interface SkipLinksProps {
  /** Links to landmarks on the page. Each `href` should point to the `id` of an element that exists on the page. Defaults to a single link to `#main-content` labelled with the `skip-links.main-content` label. */
  links?: SkipLink[];
  /** Additional class name */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SkipLink = Omit<LinkProps<'a'>, 'as'>;
